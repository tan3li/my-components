import {TDataState} from '../../../constants/datastate.js';
import {Key, RefAttributes, useCallback, useMemo} from 'react';
import {Size} from '../../../constants/size.js';
import {Select} from '../select/select.js';
import {SelectItem} from '../select/selectitem.js';
import {TextField} from '../textfield/textfield.js';
import codes from 'country-calling-code';

function getCountryCallingCodeItems(favoriteItems?: string[]): SelectItem[] {
    const items: SelectItem[] = [];

    for (const code of codes) {
        const {country, countryCodes, isoCode2} = code;

        for (const countryCode of countryCodes) {
            if (items.findIndex((item) => item.value === `${isoCode2}|+${countryCode}`) === -1) {
                items.push({
                    text: `${country} +${countryCode}`,
                    value: `${isoCode2}|+${countryCode}`
                });
            }
        }
    }

    if (!favoriteItems) {
        return items;
    }
    const favoriteItemsArr: SelectItem[] = [];

    for (const favoriteItem of favoriteItems) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemValue = item.value as string;

            if (itemValue.split('|')[0].startsWith(favoriteItem)) {
                favoriteItemsArr.push(item);
                items.splice(i, 1);
                break;
            }
        }
    }

    return favoriteItemsArr.concat(items);
}

export interface PhoneNumberFieldProps extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback: (args: {[key: string]: any; value: string}) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: {[key: string]: unknown};
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Array of favorite country codes in ISO CODE2 format.
     */
    favoriteCountryCodes?: string[];
    /**
     * Whether the field is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether the field is read only.
     */
    isReadOnly?: boolean;
    /**
     * Whether the field is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the phone number TextField.
     */
    label: string;
    /**
     * Placeholder text when there's no value.
     */
    placeholder?: string;
    /**
     * Label of the prefix Select.
     */
    prefixLabel: string;
    /**
     * Value of the phone number containing prefix (country calling code) and phone number.
     */
    value?: string;
}

export function PhoneNumberField({
    changeCallback,
    changeParams = {},
    dataState,
    favoriteCountryCodes,
    isDisabled,
    isReadOnly,
    isRequired,
    isSkeleton,
    label,
    prefixLabel,
    ref,
    value = ''
}: PhoneNumberFieldProps) {
    const items = useMemo(() => getCountryCallingCodeItems(favoriteCountryCodes), [favoriteCountryCodes]);
    const {prefix, text, phoneNumberValue, val} = useMemo(() => {
        let pref = '',
            selectText = '',
            selectValue = '',
            phoneNumberVal = value;

        for (const item of items) {
            const itemValue = item.value as string;
            const countryCallingCode = itemValue.split('|')[1];

            if (value.startsWith(countryCallingCode)) {
                selectValue = itemValue;
                pref = countryCallingCode;
                selectText = item.text;
                phoneNumberVal = value.slice(countryCallingCode.length);
                break;
            }
        }

        return {prefix: pref, text: selectText, phoneNumberValue: phoneNumberVal, val: selectValue};
    }, [items, value]);
    const onPrefixChange = useCallback(
        (changedValue: Key | null) => {
            changeCallback({
                ...changeParams,
                value: `${(changedValue as string).split('|')[1]}${phoneNumberValue}`
            });
        },
        [changeParams, phoneNumberValue]
    );
    const onPhoneNumberChange = useCallback(
        (args: {value: string}) => {
            changeCallback({
                ...args,
                value: prefix + args.value
            });
        },
        [prefix]
    );

    return (
        <div className="phone-number-field" ref={ref}>
            <Select
                dataState={dataState}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                isSkeleton={isSkeleton}
                items={items}
                label={prefixLabel}
                onSelectionChange={onPrefixChange}
                text={text}
                value={val}
            />
            <TextField
                changeCallback={onPhoneNumberChange}
                changeParams={changeParams}
                dataState={dataState}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                isRequired={isRequired}
                isSkeleton={isSkeleton}
                label={label}
                size={Size.md}
                type="tel"
                value={phoneNumberValue}
            />
        </div>
    );
}

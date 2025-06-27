import { TDataState } from '../../../constants/datastate.js';
import { RefAttributes } from 'react';
export interface PhoneNumberFieldProps extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback: (args: {
        [key: string]: any;
        value: string;
    }) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: {
        [key: string]: unknown;
    };
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
export declare function PhoneNumberField({ changeCallback, changeParams, dataState, favoriteCountryCodes, isDisabled, isReadOnly, isRequired, isSkeleton, label, prefixLabel, ref, value }: PhoneNumberFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=phonenumberfield.d.ts.map
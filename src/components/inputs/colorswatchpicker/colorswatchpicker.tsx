import {
    Color,
    ColorSwatchPicker as ReactAriaColorSwatchPicker,
    ColorSwatchPickerProps as ReactAriaColorSwatchPickerProps,
    parseColor
} from 'react-aria-components';
import {ColorSwatchPickerItem, ColorSwatchPickerItemProps} from './colorswatchpickeritem.js';
import {classNames} from '../../../utils/classnames.js';
import {RefAttributes, useEffect, useState} from 'react';
import {isString} from '../../../utils/stringhelper.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {SkeletonColorSwatchPicker} from '../../feedback/skeleton/skeletoncolorswatchpicker.js';

export interface IColorSwatchItem {
    color: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export interface ColorSwatchPickerProps
    extends Omit<ReactAriaColorSwatchPickerProps, 'defaultValue'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * List of color items.
     */
    items: IColorSwatchItem[];
    /**
     * Size of the items.
     */
    size: ColorSwatchPickerItemProps['size'];
}

export type {Color};

export function ColorSwatchPicker({className, isSkeleton, items, size, ...props}: ColorSwatchPickerProps) {
    const initialValue = props.value;
    const [value, setValue] = useState(isString(initialValue) ? parseColor(initialValue) : initialValue);

    const onChange = (newValue: Color) => {
        setValue(newValue);
        safeCall(props.onChange, newValue);
    };

    useEffect(() => {
        setValue(isString(initialValue) ? parseColor(initialValue) : initialValue);
    }, [initialValue]);

    if (isSkeleton) {
        return <SkeletonColorSwatchPicker itemCount={items.length} layout={props.layout} size={size} />;
    }

    return (
        <ReactAriaColorSwatchPicker
            {...props}
            className={classNames('color-swatch-picker', className)}
            onChange={onChange}
            value={value}>
            {items.map(({color, isDisabled, isInvalid}) => (
                <ColorSwatchPickerItem
                    color={color}
                    isDisabled={isDisabled}
                    isInvalid={isInvalid}
                    key={color}
                    size={size}
                />
            ))}
        </ReactAriaColorSwatchPicker>
    );
}

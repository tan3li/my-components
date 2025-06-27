import { Color, ColorSwatchPickerProps as ReactAriaColorSwatchPickerProps } from 'react-aria-components';
import { ColorSwatchPickerItemProps } from './colorswatchpickeritem.js';
import { RefAttributes } from 'react';
export interface IColorSwatchItem {
    color: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
}
export interface ColorSwatchPickerProps extends Omit<ReactAriaColorSwatchPickerProps, 'defaultValue'>, RefAttributes<HTMLDivElement> {
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
export type { Color };
export declare function ColorSwatchPicker({ className, isSkeleton, items, size, ...props }: ColorSwatchPickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=colorswatchpicker.d.ts.map
import { ColorSwatchPickerItemProps as ReactAriaColorSwatchPickerItemProps } from 'react-aria-components';
import { ColorSwatchProps } from './colorswatch.js';
import { RefAttributes } from 'react';
export interface ColorSwatchPickerItemProps extends ReactAriaColorSwatchPickerItemProps, RefAttributes<HTMLDivElement> {
    /**
     * Whether element is in error.
     */
    isInvalid?: boolean;
    /**
     * Size of the element.
     */
    size: ColorSwatchProps['size'];
}
export declare function ColorSwatchPickerItem({ className, isInvalid, size, ...props }: ColorSwatchPickerItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=colorswatchpickeritem.d.ts.map
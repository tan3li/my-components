import { ColorSwatchProps as ReactAriaColorSwatchProps } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
import { RefAttributes } from 'react';
export interface ColorSwatchProps extends ReactAriaColorSwatchProps, RefAttributes<HTMLDivElement> {
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
}
export declare function ColorSwatch({ className, size, ...props }: ColorSwatchProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=colorswatch.d.ts.map
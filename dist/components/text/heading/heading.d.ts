import { HeadingProps as ReactAriaHeadingProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { Alignment } from '../../../constants/alignment.js';
import { ElementType, RefAttributes } from 'react';
export interface HeadingProps extends ReactAriaHeadingProps, RefAttributes<any> {
    /**
     * Text align of the header.
     */
    alignment?: Alignment;
    /**
     * Element type of header.
     */
    elementType?: ElementType;
    /**
     * Size of the element.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
}
export declare const HEADING_SIZE_XXS_CSS_CLASS = "heading--xxs";
export declare const HEADING_SIZE_XS_CSS_CLASS = "heading--xs";
export declare const HEADING_SIZE_SM_CSS_CLASS = "heading--sm";
export declare const HEADING_SIZE_MD_CSS_CLASS = "heading--md";
export declare const HEADING_SIZE_LG_CSS_CLASS = "heading--lg";
export declare function Heading({ alignment, children, className, elementType: Element, size, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=heading.d.ts.map
import { ElementType, HTMLAttributes, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
export interface LabelProps extends HTMLAttributes<HTMLElement>, RefAttributes<any> {
    elementType?: ElementType;
    htmlFor?: string;
    size: Size.xs | Size.sm | Size.md | Size.lg;
}
export declare const LABEL_SIZE_XS_CSS_CLASS = "label--xs";
export declare const LABEL_SIZE_SM_CSS_CLASS = "label--sm";
export declare const LABEL_SIZE_MD_CSS_CLASS = "label--md";
export declare const LABEL_SIZE_LG_CSS_CLASS = "label--lg";
export declare function Label({ className, elementType, htmlFor, size, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=label.d.ts.map
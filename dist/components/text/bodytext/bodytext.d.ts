import { CSSProperties, ElementType, ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
import { Alignment } from '../../../constants/alignment.js';
export interface BodyTextProps extends RefAttributes<any> {
    alignment?: Alignment;
    children: ReactNode | string;
    className?: string;
    elementType?: ElementType;
    size: Size.xs | Size.sm | Size.md | Size.lg;
    style?: CSSProperties;
}
export declare function BodyText({ alignment, children, className, elementType, ref, size, style }: BodyTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=bodytext.d.ts.map
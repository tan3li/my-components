import { ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
export interface TextFieldUnitProps extends RefAttributes<HTMLSpanElement> {
    children: ReactNode;
    id?: string;
    size?: Size.md | Size.lg;
}
export declare function TextFieldUnit({ children, id, ref, size }: TextFieldUnitProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=textfieldunit.d.ts.map
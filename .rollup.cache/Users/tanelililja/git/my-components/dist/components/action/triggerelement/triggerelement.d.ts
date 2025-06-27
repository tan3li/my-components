import { AriaRole, CSSProperties, ReactNode, RefAttributes } from 'react';
import { AriaButtonOptions } from 'react-aria';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
type AllowedHTMLElementType = HTMLElementType.Span | HTMLElementType.Div | HTMLElementType.Button | HTMLElementType.A;
export interface TriggerElementRenderProps {
    isFocused: boolean;
    isFocusVisible: boolean;
}
export interface TriggerElementProps extends AriaButtonOptions<AllowedHTMLElementType>, RefAttributes<any> {
    children: ReactNode | ((renderProps: TriggerElementRenderProps) => ReactNode);
    className?: string;
    elementType?: AllowedHTMLElementType;
    role?: AriaRole;
    style?: CSSProperties;
}
export declare function TriggerElement({ children, className, elementType, ref: outerRef, role, style, ...props }: TriggerElementProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=triggerelement.d.ts.map
import { ReactNode } from 'react';
export declare const enum HelpTextVariant {
    Neutral = "neutral",
    Danger = "danger",
    Success = "success",
    Disabled = "disabled"
}
export interface HelpTextProps {
    children: ReactNode;
    className?: string;
    id?: string;
    showIcon?: boolean;
    variant?: HelpTextVariant;
}
export declare function HelpText({ children, className, id, showIcon, variant }: HelpTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=helptext.d.ts.map
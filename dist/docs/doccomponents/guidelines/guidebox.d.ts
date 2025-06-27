import './guidebox.scss';
import { ReactNode } from 'react';
export declare const enum GuideBoxVariant {
    Success = "success",
    Danger = "danger"
}
export interface GuideBoxProps {
    children: ReactNode;
    label: string;
    variant: GuideBoxVariant;
}
export declare function GuideBox({ children, label, variant }: GuideBoxProps): import("react/jsx-runtime").JSX.Element;
export interface GuideBoxVariantProps extends Omit<GuideBoxProps, 'label' | 'variant'> {
}
export declare function Dos(props: GuideBoxVariantProps): import("react/jsx-runtime").JSX.Element;
export declare function Donts(props: GuideBoxVariantProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=guidebox.d.ts.map
import './flexlayout.scss';
import { CSSProperties, ReactNode } from 'react';
export interface FlexLayoutProps {
    children: ReactNode;
    direction?: CSSProperties['flexDirection'];
    gap?: CSSProperties['gap'];
}
export declare function FlexLayout({ children, direction, gap }: FlexLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=flexlayout.d.ts.map
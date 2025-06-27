import { ReactNode, RefAttributes } from 'react';
export interface PageLayoutProps extends RefAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
export declare function PageLayout({ children, className, ref }: PageLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pagelayout.d.ts.map
import { ButtonProps } from 'react-aria-components';
import { ReactNode } from 'react';
interface PageButtonProps extends ButtonProps {
    children: ReactNode;
    isActive?: boolean;
}
export declare function PageButton({ children, className, isActive, ...props }: PageButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=pagebutton.d.ts.map
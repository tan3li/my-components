import { ButtonProps, LinkProps as ReactAriaLinkProps } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
import { CSSProperties, ReactNode, RefAttributes } from 'react';
export declare const enum LinkRole {
    Button = "button",
    Link = "link"
}
export interface LinkProps extends Omit<ReactAriaLinkProps, 'children' | 'className' | 'style'>, Omit<ButtonProps, 'children' | 'className' | 'style'>, RefAttributes<HTMLAnchorElement | HTMLButtonElement> {
    /**
     * Children for the element.
     */
    children?: ReactNode;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Whether link has been visited by the user.
     * Determined by browser history for href-links if not given.
     */
    isVisited?: boolean;
    /**
     * Link can act as a link or button. Default: link.
     */
    role?: LinkRole;
    /**
     * Size of the element.
     * If not provided, style of the surrounding text is used.
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
}
export declare function Link({ className, isVisited, ref, role, size, ...props }: LinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=link.d.ts.map
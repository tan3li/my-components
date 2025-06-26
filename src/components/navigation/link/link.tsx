import {
    Button as ReactAriaButton,
    ButtonProps,
    Link as ReactAriaLink,
    LinkProps as ReactAriaLinkProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {CSSProperties, ReactNode, Ref, RefAttributes} from 'react';

export const enum LinkRole {
    Button = 'button',
    // eslint-disable-next-line @typescript-eslint/no-shadow
    Link = 'link'
}

export interface LinkProps
    extends Omit<ReactAriaLinkProps, 'children' | 'className' | 'style'>,
        Omit<ButtonProps, 'children' | 'className' | 'style'>,
        RefAttributes<HTMLAnchorElement | HTMLButtonElement> {
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

export function Link({className, isVisited, ref, role = LinkRole.Link, size, ...props}: LinkProps) {
    const cssClassName = classNames('link', className, {[`link--${size}`]: size});

    if (role === LinkRole.Button) {
        return (
            <ReactAriaButton
                {...props}
                className={cssClassName}
                data-visited={isVisited}
                ref={ref as Ref<HTMLButtonElement>}
            />
        );
    }

    return (
        <ReactAriaLink
            {...props}
            className={cssClassName}
            data-visited={isVisited}
            ref={ref as Ref<HTMLAnchorElement>}
        />
    );
}

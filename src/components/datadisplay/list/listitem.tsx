import {classNames} from '../../../utils/classnames.js';
import {ReactNode, RefAttributes} from 'react';
import {Divider} from '../divider/index.js';
import {Size} from '../../../constants/index.js';

export const enum ListItemStyle {
    Card = 'card',
    Dash = 'dash',
    Plain = 'plain'
}

export interface ListItemProps extends RefAttributes<HTMLLIElement> {
    /**
     * Body content.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Footer content.
     */
    footer?: ReactNode;
    /**
     * Whether to separate body and footer with separator.
     */
    showFooterSeparator?: boolean;
    /**
     * Display style for the element.
     */
    style?: ListItemStyle;
}

export function ListItem({
    children,
    className,
    footer,
    ref,
    showFooterSeparator,
    style = ListItemStyle.Card
}: ListItemProps) {
    return (
        <li className={classNames(`list-item list-item--${style}`, className)} ref={ref}>
            {children}
            {footer && (
                <>
                    {showFooterSeparator && <Divider className="list-item__divider" size={Size.sm} />}
                    {footer}
                </>
            )}
        </li>
    );
}

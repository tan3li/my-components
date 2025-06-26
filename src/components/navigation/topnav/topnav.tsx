import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {LoadingIndicatorProgressBar} from '../../feedback/progressbar/loadingindicatorprogressbar.js';

export interface TopNavItem {
    ariaHidden?: boolean;
    id: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export interface TopNavProps extends RefAttributes<HTMLElement> {
    /**
     * Defines a string value that labels the nav element.
     */
    ['aria-label']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Content on the left side of the top navigation.
     */
    leftItems: TopNavItem[];
    /**
     * Content on the right side of the top navigation.
     */
    rightItems: TopNavItem[];
    /**
     * Whether to show loading indicator.
     */
    showLoadingIndicator?: boolean;
}

export function TopNav({
    'aria-label': ariaLabel,
    className,
    leftItems,
    rightItems,
    ref,
    showLoadingIndicator
}: TopNavProps) {
    const renderItems = (items: TopNavItem[]) =>
        items.map(({ariaHidden, children: itemChildren, className: itemClassName, id, style}) => (
            <li aria-hidden={ariaHidden} className={classNames('top-nav__item', itemClassName)} key={id} style={style}>
                {itemChildren}
            </li>
        ));

    return (
        <nav aria-label={ariaLabel} className={classNames('top-nav', className)} ref={ref}>
            <ul className="top-nav__left-list">{renderItems(leftItems)}</ul>
            <ul className="top-nav__right-list">{renderItems(rightItems)}</ul>
            {showLoadingIndicator && <LoadingIndicatorProgressBar />}
        </nav>
    );
}

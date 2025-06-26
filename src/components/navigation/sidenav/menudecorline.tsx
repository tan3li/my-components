import {classNames} from '../../../utils/classnames.js';

interface MenuDecorLineProps {
    /**
     * Whether the line is using inverted color set.
     */
    inverted?: boolean;
    /**
     * Whether the item is active.
     */
    isActive?: boolean;
    /**
     * Whether the item is a heading.
     */
    isHeading?: boolean;
    /**
     * Whether the line should be shown.
     */
    showLine?: boolean;
}

const headingIcon = (
    <svg fill="none" viewBox="0 0 18 16">
        <path
            d="M6.5 7C6.5 6.17157 7.17157 5.5 8 5.5H10C10.8284 5.5 11.5 6.17157 11.5 7V9C11.5 9.82843 10.8284 10.5 10 10.5H8C7.17157 10.5 6.5 9.82843 6.5 9V7Z"
            stroke="currentColor"
        />
    </svg>
);

export function MenuDecorLine({inverted, isActive, isHeading, showLine}: MenuDecorLineProps) {
    return (
        <div
            className={classNames('menu-decor-line', {
                'menu-decor-line--active': isActive,
                'menu-decor-line--heading': isHeading,
                'menu-decor-line--inverted': inverted,
                'menu-decor-line--visible': showLine
            })}>
            {isHeading && headingIcon}
        </div>
    );
}

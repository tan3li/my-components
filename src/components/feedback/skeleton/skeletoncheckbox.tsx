import {CSSProperties, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';

export interface SkeletonCheckboxProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether to show skeleton for help text.
     */
    hasHelpText?: boolean;
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md;
    /**
     * CSS style for the element.
     */
    style?: CSSProperties;
}

export function SkeletonCheckbox({
    'aria-hidden': ariaHidden,
    className,
    hasHelpText,
    ref,
    size,
    style
}: SkeletonCheckboxProps) {
    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-checkbox', className)}
            key={`${hasHelpText}`} // to sync animations when props change
            ref={ref}
            style={style}>
            <SkeletonText
                aria-hidden={false}
                size={size === Size.md ? Size.lg : Size.md}
                type={SkeletonTextType.Label}
            />
            {hasHelpText && (
                <SkeletonText aria-hidden={false} size={Size.sm} type={SkeletonTextType.Label} width="25%" />
            )}
        </div>
    );
}

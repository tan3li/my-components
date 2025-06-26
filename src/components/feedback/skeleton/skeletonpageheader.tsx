import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';
import {Skeleton, SkeletonShape} from './skeleton.js';

export interface SkeletonPageHeaderProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether has breadcrumbs.
     */
    hasBreadcrumbs?: boolean;
    /**
     * Whether has details.
     */
    hasDetails?: boolean;
    /**
     * Whether has icon.
     */
    hasIcon?: boolean;
    /**
     * Heading level.
     */
    level: number;
}

const LEVEL_1_ICON_SIZE = 32;
const LEVEL_2_ICON_SIZE = 24;

export function SkeletonPageHeader({
    'aria-hidden': ariaHidden,
    className,
    hasBreadcrumbs,
    hasDetails,
    hasIcon,
    level,
    ref
}: SkeletonPageHeaderProps) {
    const iconSize = level > 1 ? LEVEL_2_ICON_SIZE : LEVEL_1_ICON_SIZE;

    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-page-header', className)}
            key={`${hasBreadcrumbs}-${hasDetails}-${hasIcon}-${level}`} // to sync animations when props change
            ref={ref}>
            {hasBreadcrumbs && (
                <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} width="30%" />
            )}
            <div className="skeleton-page-header__title">
                {hasIcon && (
                    <Skeleton
                        aria-hidden={false}
                        height={iconSize}
                        shape={SkeletonShape.Rectangle}
                        style={{flexShrink: 0}}
                        width={iconSize}
                    />
                )}
                <SkeletonText
                    aria-hidden={false}
                    size={level > 1 ? Size.sm : Size.md}
                    type={SkeletonTextType.Heading}
                    width="35%"
                />
            </div>
            {hasDetails && (
                <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} width="30%" />
            )}
        </div>
    );
}

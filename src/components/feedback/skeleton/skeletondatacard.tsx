import {CSSProperties, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';
import {Skeleton, SkeletonShape} from './skeleton.js';
import {TitleProps} from '../../text/index.js';
import {DataCardStyle} from '../../datadisplay/index.js';

export interface SkeletonDataCardProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether has header icon. Affects only when hasHeaderText = true.
     */
    hasHeaderIcon?: boolean;
    /**
     * Whether has header text.
     */
    hasHeaderText?: boolean;
    /**
     * Whether has visualization.
     */
    hasVisualization?: boolean;
    /**
     * Minimum width for the card.
     */
    minWidth?: CSSProperties['minWidth'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * Display style of the element.
     */
    style: DataCardStyle;
}

const valueSize: Record<SkeletonDataCardProps['size'], TitleProps['size']> = {
    [Size.sm]: Size.xs,
    [Size.md]: Size.sm,
    [Size.lg]: Size.md
};

export function SkeletonDataCard({
    'aria-hidden': ariaHidden,
    className,
    hasHeaderIcon,
    hasHeaderText,
    hasVisualization,
    minWidth,
    size,
    style,
    ref
}: SkeletonDataCardProps) {
    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames(
                `skeleton-data-card skeleton-data-card--${style} skeleton-data-card--${size}`,
                className
            )}
            key={`${hasHeaderText}-${hasHeaderIcon}-${hasVisualization}`}
            ref={ref}
            style={{minWidth}}>
            {hasHeaderText && (
                <div className="skeleton-data-card__header">
                    {hasHeaderIcon && (
                        <Skeleton
                            aria-hidden={false}
                            height={16}
                            shape={SkeletonShape.Rectangle}
                            style={{flexShrink: 0}}
                            width={16}
                        />
                    )}
                    <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} width="60%" />
                </div>
            )}
            <div className="skeleton-data-card__body">
                <SkeletonText aria-hidden={false} size={valueSize[size]} type={SkeletonTextType.Title} />
                <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} width="50%" />
            </div>
            {hasVisualization && (
                <Skeleton aria-hidden={false} height={128} shape={SkeletonShape.Rectangle} width="100%" />
            )}
        </div>
    );
}

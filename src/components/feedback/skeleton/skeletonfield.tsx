import {CSSProperties, RefAttributes} from 'react';
import {Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Skeleton, SkeletonShape} from './skeleton.js';

export interface SkeletonFieldProps extends RefAttributes<HTMLDivElement> {
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
     * Whether to show skeleton for label text.
     */
    hasLabel?: boolean;
    /**
     * Custom height for the "input" rectangle element. Determined by size prop when not set.
     */
    inputRectHeight?: CSSProperties['height'];
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md | Size.lg;
    /**
     * CSS style for the element.
     */
    style?: CSSProperties;
}

const defaultInputRectHeightForSize = {
    [Size.xs]: 28,
    [Size.sm]: 32,
    [Size.md]: 40,
    [Size.lg]: 40
};

export function SkeletonField({
    'aria-hidden': ariaHidden,
    className,
    hasHelpText,
    hasLabel,
    inputRectHeight,
    ref,
    size,
    style
}: SkeletonFieldProps) {
    let labelSize = Size.md;

    if (size === Size.xs) {
        labelSize = Size.sm;
    } else if (size === Size.lg) {
        labelSize = Size.lg;
    }

    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-field', className)}
            key={`${hasLabel}-${hasHelpText}`} // to sync animations when props change
            ref={ref}
            style={style}>
            {hasLabel && (
                <SkeletonText aria-hidden={false} size={labelSize} type={SkeletonTextType.Label} width="50%" />
            )}
            <Skeleton
                aria-hidden={false}
                height={inputRectHeight ?? defaultInputRectHeightForSize[size]}
                shape={SkeletonShape.Rectangle}
            />
            {hasHelpText && (
                <SkeletonText aria-hidden={false} size={Size.sm} type={SkeletonTextType.Label} width="25%" />
            )}
        </div>
    );
}

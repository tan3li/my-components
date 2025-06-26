import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Skeleton, SkeletonShape} from './skeleton.js';
import {Size} from '../../../constants/index.js';

export interface SkeletonColorSwatchPickerProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of skeleton items to render.
     */
    itemCount: number;
    /**
     * Whether items are displayed in a grid or stack.
     */
    layout?: 'grid' | 'stack';
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
}

const rectWidthForSize = {
    [Size.xs]: 28,
    [Size.sm]: 32,
    [Size.md]: 40
};

export function SkeletonColorSwatchPicker({
    'aria-hidden': ariaHidden,
    className,
    itemCount,
    layout = 'grid',
    ref,
    size
}: SkeletonColorSwatchPickerProps) {
    const rectWidth = rectWidthForSize[size];

    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-color-swatch-picker', className)}
            data-layout={layout}
            ref={ref}>
            {Array.from({length: itemCount}, (_, i) => (
                <Skeleton
                    aria-hidden={false}
                    height={rectWidth}
                    key={i}
                    shape={SkeletonShape.Rectangle}
                    width={rectWidth}
                />
            ))}
        </div>
    );
}

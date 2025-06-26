import {CSSProperties, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export const enum SkeletonShape {
    Circle = 'circle',
    Rectangle = 'rectangle'
}

export interface SkeletonProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Height of the element.
     */
    height?: CSSProperties['height'];
    /**
     * Unique id for the element.
     */
    id?: string;
    /**
     * Shape of the element.
     */
    shape?: SkeletonShape;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Width of the element.
     */
    width?: CSSProperties['width'];
}

export function Skeleton({
    'aria-hidden': ariaHidden,
    className,
    height,
    shape = SkeletonShape.Rectangle,
    style,
    width,
    ...props
}: SkeletonProps) {
    return (
        <div
            {...props}
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames(`skeleton skeleton--${shape}`, className)}
            style={{...style, height, width}}
        />
    );
}

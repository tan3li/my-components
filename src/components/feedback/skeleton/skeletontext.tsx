import {Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Skeleton, SkeletonProps} from './skeleton.js';
import {RefAttributes} from 'react';

export const enum SkeletonTextType {
    Body = 'body',
    Heading = 'heading',
    Label = 'label',
    Title = 'title'
}

export interface SkeletonTextProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Size of text to mimic.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
    /**
     * Type of text to mimic.
     */
    type?: SkeletonTextType;
    /**
     * Width of the element.
     */
    width?: SkeletonProps['width'];
}

export function SkeletonText({
    'aria-hidden': ariaHidden,
    className,
    ref,
    size,
    type = SkeletonTextType.Body,
    width
}: SkeletonTextProps) {
    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames(`skeleton-text skeleton-text--${type}-${size}`, className)}
            ref={ref}
            style={{width}}>
            <Skeleton aria-hidden={false} />
        </div>
    );
}

export interface SkeletonTextMultilineProps extends SkeletonTextProps {
    /**
     * Number of lines.
     */
    lineCount?: number;
}

export function SkeletonTextMultiline({
    'aria-hidden': ariaHidden,
    className,
    lineCount = 2,
    ref,
    width,
    ...props
}: SkeletonTextMultilineProps) {
    if (lineCount <= 0) {
        return null;
    }
    if (lineCount < 2) {
        return <SkeletonText {...props} aria-hidden={ariaHidden} className={className} ref={ref} width={width} />;
    }

    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-text-multiline', className)}
            ref={ref}>
            {Array.from({length: lineCount}, (_, i) => (
                <SkeletonText aria-hidden={false} key={i} {...props} width={i === lineCount - 1 ? '60%' : width} />
            ))}
        </div>
    );
}

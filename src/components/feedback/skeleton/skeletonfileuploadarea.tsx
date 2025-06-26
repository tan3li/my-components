import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Skeleton, SkeletonShape} from './skeleton.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';

export interface SkeletonFileUploadAreaProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
}

export function SkeletonFileUploadArea({'aria-hidden': ariaHidden, className, ref}: SkeletonFileUploadAreaProps) {
    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-file-upload-area', className)}
            ref={ref}>
            <div className="skeleton-file-upload-area__inner">
                <Skeleton aria-hidden={false} height={48} shape={SkeletonShape.Circle} width={48} />
                <div className="skeleton-file-upload-area__texts">
                    <SkeletonText aria-hidden={false} size={Size.lg} type={SkeletonTextType.Label} />
                    <SkeletonText aria-hidden={false} size={Size.sm} type={SkeletonTextType.Body} width="50%" />
                </div>
            </div>
        </div>
    );
}

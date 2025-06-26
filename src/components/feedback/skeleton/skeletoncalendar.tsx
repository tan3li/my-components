import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';
import {Skeleton, SkeletonShape} from './skeleton.js';

export interface SkeletonCalendarProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
}

export function SkeletonCalendar({'aria-hidden': ariaHidden, className, ref}: SkeletonCalendarProps) {
    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-calendar', className)}
            ref={ref}>
            <div className="skeleton-calendar__header">
                <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} width="50%" />
            </div>
            <div className="skeleton-calendar__body">
                <SkeletonText aria-hidden={false} size={Size.sm} type={SkeletonTextType.Label} />
                {Array.from({length: 5}, (_x, i) => (
                    <div className="skeleton-calendar__grid-row" key={i}>
                        {Array.from({length: 7}, (_y, j) => (
                            <Skeleton
                                aria-hidden={false}
                                height={32}
                                key={j}
                                shape={SkeletonShape.Rectangle}
                                width={32}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

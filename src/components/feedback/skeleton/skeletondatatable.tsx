import {RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonText, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';
import {Skeleton, SkeletonShape} from './skeleton.js';

export interface SkeletonDataTableProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of columns to display. Default is 5.
     */
    columnCount?: number;
    /**
     * Whether to display first column cells as "checkbox" cells.
     */
    hasRowSelection?: boolean;
    /**
     * Number of rows to display. Default is 5.
     */
    rowCount?: number;
}

const DEFAULT_COLUMN_COUNT = 5;
const DEFAULT_ROW_COUNT = 5;

export function SkeletonDataTable({
    'aria-hidden': ariaHidden,
    className,
    columnCount = DEFAULT_COLUMN_COUNT,
    hasRowSelection,
    ref,
    rowCount = DEFAULT_ROW_COUNT
}: SkeletonDataTableProps) {
    const templateRows = `repeat(${rowCount}, auto)`;
    const templateCols = hasRowSelection ? `auto repeat(${columnCount - 1}, 1fr)` : `repeat(${columnCount}, 1fr)`;

    return (
        <div
            aria-hidden={ariaHidden === false ? undefined : true}
            className={classNames('skeleton-data-table', className)}
            key={`${rowCount}-${columnCount}-${hasRowSelection}`} // to sync animations when props change
            ref={ref}
            style={{gridTemplate: `${templateRows} / ${templateCols}`}}>
            {Array.from({length: columnCount}, (_, colIdx) => (
                <div className="skeleton-data-table__th" key={`th${colIdx}`}>
                    {colIdx === 0 && hasRowSelection ?
                        <Skeleton aria-hidden={false} height={16} shape={SkeletonShape.Rectangle} width={16} />
                    :   <SkeletonText aria-hidden={false} size={Size.sm} type={SkeletonTextType.Label} />}
                </div>
            ))}
            {Array.from({length: rowCount}, (_x, rowIdx) =>
                Array.from({length: columnCount}, (_y, colIdx) => (
                    <div className="skeleton-data-table__td" key={`td${rowIdx}-${colIdx}`}>
                        {colIdx === 0 && hasRowSelection ?
                            <Skeleton aria-hidden={false} height={16} shape={SkeletonShape.Rectangle} width={16} />
                        :   <SkeletonText aria-hidden={false} size={Size.md} type={SkeletonTextType.Label} />}
                    </div>
                ))
            )}
        </div>
    );
}

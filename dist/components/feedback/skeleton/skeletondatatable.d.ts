import { RefAttributes } from 'react';
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
export declare function SkeletonDataTable({ 'aria-hidden': ariaHidden, className, columnCount, hasRowSelection, ref, rowCount }: SkeletonDataTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=skeletondatatable.d.ts.map
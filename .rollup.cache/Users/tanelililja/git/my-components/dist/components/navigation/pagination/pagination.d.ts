import { RefAttributes } from 'react';
export interface PaginationItemsPerPageOptions {
    isVisible?: boolean;
    showLabel?: boolean;
}
export interface PaginationProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of pages. If not set, page count is calculated based on totalRowCount and pageSize.
     */
    count?: number;
    /**
     * Show pagination without the page items.
     */
    isMinimized?: boolean;
    /**
     * Options for items per page selection.
     */
    itemsPerPageOptions?: PaginationItemsPerPageOptions;
    /**
     * Callback called when selected page is changed.
     */
    onPageIndexChange?: (pageIndex: number) => void;
    /**
     * Callback called when page size is changed.
     */
    onPageSizeChange?: (pageSize: number) => void;
    /**
     * Index of the currently selected page. Indexing starts from 0.
     */
    pageIndex?: number;
    /**
     * Number of rows on a page. Used for calculating page count when count prop is not set.
     */
    pageSize?: number;
    /**
     * Selectable page sizes. If not given, defaults to 25, 50, 100, 200.
     */
    pageSizes?: number[];
    /**
     * Whether to show page items before row count info.
     */
    showPagesFirst?: boolean;
    /**
     * Total number of rows. Used for calculating page count when count prop is not set.
     */
    totalRowCount?: number;
}
export declare function Pagination({ className, count, isMinimized, itemsPerPageOptions: propsItemsPerPageOptions, onPageIndexChange, onPageSizeChange, pageIndex, pageSize, pageSizes, ref, showPagesFirst, totalRowCount }: PaginationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pagination.d.ts.map
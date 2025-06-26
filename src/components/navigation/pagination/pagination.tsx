import {RefAttributes, useEffect, useMemo, useState} from 'react';
import {ButtonStyle, ButtonVariant, IconButton, MenuItem} from '../../action/index.js';
import {iconNames} from '../../media/index.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {PageButton} from './pagebutton.js';
import {isString} from '../../../utils/stringhelper.js';
import {PageEllipsis} from './pageellipsis.js';
import {isNullOrUndefined, isNumber} from '../../../utils/objecthelper.js';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Select} from '../../inputs/index.js';
import {Key} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {useTranslatePager} from '../../../hooks/translations/usetranslatepager.js';

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

function range(start: number, end: number) {
    const length = end - start + 1;

    return Array.from({length}, (_, i) => start + i);
}

// Same logic as in MUI Pagination component.
function getPageItems(count: number, page: number) {
    const boundaryCount = 1; // number of pages to display adjacent to start and end page
    const siblingCount = 1; // number of pages to display either side of current page

    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

    const siblingsStart = Math.max(
        Math.min(
            // Natural start
            page - siblingCount,
            // Lower boundary when page is high
            count - boundaryCount - siblingCount * 2 - 1
        ),
        // Greater than startPages
        boundaryCount + 2
    );
    const siblingsEnd = Math.min(
        Math.max(
            // Natural end
            page + siblingCount,
            // Upper boundary when page is low
            boundaryCount + siblingCount * 2 + 2
        ),
        // Less than endPages
        endPages.length > 0 ? endPages[0] - 2 : count - 1
    );

    // example: [1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]
    return [
        ...startPages,

        // Start ellipsis
        // eslint-disable-next-line no-nested-ternary
        ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis']
        : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1]
        : []),

        // Sibling pages
        ...range(siblingsStart, siblingsEnd),

        // End ellipsis
        // eslint-disable-next-line no-nested-ternary
        ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis']
        : count - boundaryCount > boundaryCount ? [count - boundaryCount]
        : []),

        ...endPages
    ];
}

function getEllipsisItems(ellipsisIdx: number, pages: Array<number | string>) {
    const items: MenuItem[] = [];
    const firstHiddenPage = (pages[ellipsisIdx - 1] as number) + 1;
    const lastHiddenPage = (pages[ellipsisIdx + 1] as number) - 1;

    for (let i = firstHiddenPage; i <= lastHiddenPage; i++) {
        items.push({
            id: i,
            name: i.toString()
        });
    }

    return items;
}

function getPageCount(count?: number, totalRowCount?: number, rowsPerPage?: number) {
    if (!isNullOrUndefined(count)) {
        return count;
    }

    if (!isNullOrUndefined(totalRowCount) && !isNullOrUndefined(rowsPerPage)) {
        return Math.ceil(totalRowCount / rowsPerPage);
    }

    return 0;
}

function getItemRange(page: number, pageSize: number, totalRowCount: number) {
    return {
        start: totalRowCount === 0 ? 0 : (page - 1) * pageSize + 1,
        end: Math.min(totalRowCount, page * pageSize)
    };
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const DEFAULT_PAGE_SIZES = [25, 50, 100, 200];

const DEFAULT_ITEMS_PER_PAGE_OPTIONS = {
    isVisible: true,
    showLabel: true
};

function createPageSizeItems(pageSizes: number[]) {
    return pageSizes.map((size) => ({value: size, text: size.toString()}));
}

export function Pagination({
    className,
    count,
    isMinimized,
    itemsPerPageOptions: propsItemsPerPageOptions,
    onPageIndexChange,
    onPageSizeChange,
    pageIndex,
    pageSize,
    pageSizes,
    ref,
    showPagesFirst,
    totalRowCount
}: PaginationProps) {
    // pageIndex (from props): indexing starts from 0
    // page (in state): indexing starts from 1
    const itemsPerPageOptions = {...DEFAULT_ITEMS_PER_PAGE_OPTIONS, ...propsItemsPerPageOptions};
    const pageSizeItems = useMemo(() => createPageSizeItems(pageSizes ?? DEFAULT_PAGE_SIZES), [pageSizes]);
    const initialPage = isNullOrUndefined(pageIndex) ? 1 : pageIndex + 1;
    const initialRowsPerPage = pageSize ?? pageSizeItems[0].value;
    const [page, setPage] = useState<number>(initialPage);
    const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage);
    const pageCount = getPageCount(count, totalRowCount, rowsPerPage);
    const itemRange =
        !isNullOrUndefined(pageSize) && !isNullOrUndefined(totalRowCount) ?
            getItemRange(page, pageSize, totalRowCount)
        :   null;
    const translateCommon = useTranslateCommon();
    const translatePager = useTranslatePager();

    const onPageChange = (newPage: number) => {
        setPage(newPage);
        safeCall(onPageIndexChange, newPage - 1);
    };
    const onRowsPagePageChange = (val: Key | null) => {
        if (isNumber(val)) {
            setRowsPerPage(val);
            safeCall(onPageSizeChange, val);
        }
    };
    const nextPage = () => {
        if (page < pageCount) {
            onPageChange(page + 1);
        }
    };
    const prevPage = () => {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };

    useEffect(() => {
        setPage(initialPage);
    }, [initialPage]);
    useEffect(() => {
        setRowsPerPage(initialRowsPerPage);
    }, [initialRowsPerPage]);

    const itemsPerPageSelect =
        isNullOrUndefined(pageSize) || !itemsPerPageOptions.isVisible ?
            null
        :   <div className="pagination__items-per-page" key="items-per-page">
                {itemsPerPageOptions.showLabel && <Label size={Size.md}>{translateCommon('itemsPerPage')}</Label>}
                <Select
                    aria-label={translateCommon('itemsPerPage')}
                    className="pagination__select"
                    isPlain={isMinimized}
                    isSearchable={false}
                    items={pageSizeItems}
                    menuWidth="5rem"
                    onSelectionChange={onRowsPagePageChange}
                    size={isMinimized ? Size.xs : Size.md}
                    text={rowsPerPage.toString()}
                    value={rowsPerPage}
                />
            </div>;

    const itemRangeLabel =
        itemRange ?
            <Label className="pagination__item-range" key="item-rang" size={Size.md}>
                {translatePager('resultsOf', {start: itemRange.start, end: itemRange.end, total: totalRowCount})}
            </Label>
        :   null;

    const pageNavigation = (
        <div
            className={classNames('pagination__pages', {
                'pagination__pages--minimized': isMinimized
            })}
            key="pages">
            <IconButton
                aria-label={translateCommon('previousPage')}
                className="pagination__prev-btn"
                iconName={iconNames.ChevronLeft}
                isDisabled={page === 1}
                onPress={prevPage}
                style={ButtonStyle.Plain}
                variant={ButtonVariant.Neutral}
            />
            {isMinimized ? null : (
                getPageItems(pageCount, page).map((value, index, array) => {
                    if (isString(value) && value.includes('ellipsis')) {
                        return (
                            <PageEllipsis
                                items={getEllipsisItems(index, array)}
                                key={value}
                                onAction={(pageId) => onPageChange(pageId as number)}
                            />
                        );
                    }

                    return (
                        <PageButton isActive={page === value} key={value} onPress={() => onPageChange(value as number)}>
                            {value}
                        </PageButton>
                    );
                })
            )}
            <IconButton
                aria-label={translateCommon('nextPage')}
                className="pagination__next-btn"
                iconName={iconNames.ChevronRight}
                isDisabled={page === pageCount}
                onPress={nextPage}
                style={ButtonStyle.Plain}
                variant={ButtonVariant.Neutral}
            />
        </div>
    );

    return (
        <div
            className={classNames('pagination', className, {
                'pagination--minimized': isMinimized,
                'pagination--reversed': showPagesFirst
            })}
            ref={ref}>
            {(!!itemsPerPageSelect || !!itemRangeLabel) && (
                <div
                    className={classNames('pagination__row-count-info', {
                        'pagination__row-count-info--minimized': isMinimized
                    })}>
                    {itemsPerPageSelect}
                    {itemRangeLabel}
                </div>
            )}
            {pageNavigation}
        </div>
    );
}

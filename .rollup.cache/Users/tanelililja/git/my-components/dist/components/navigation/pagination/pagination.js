import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { ButtonStyle, ButtonVariant, IconButton } from '../../action/index.js';
import { iconNames } from '../../media/index.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { PageButton } from './pagebutton.js';
import { isString } from '../../../utils/stringhelper.js';
import { PageEllipsis } from './pageellipsis.js';
import { isNullOrUndefined, isNumber } from '../../../utils/objecthelper.js';
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Select } from '../../inputs/index.js';
import { classNames } from '../../../utils/classnames.js';
import { useTranslatePager } from '../../../hooks/translations/usetranslatepager.js';
function range(start, end) {
    var length = end - start + 1;
    return Array.from({ length: length }, function (_, i) { return start + i; });
}
// Same logic as in MUI Pagination component.
function getPageItems(count, page) {
    var boundaryCount = 1; // number of pages to display adjacent to start and end page
    var siblingCount = 1; // number of pages to display either side of current page
    var startPages = range(1, Math.min(boundaryCount, count));
    var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    var siblingsStart = Math.max(Math.min(
    // Natural start
    page - siblingCount, 
    // Lower boundary when page is high
    count - boundaryCount - siblingCount * 2 - 1), 
    // Greater than startPages
    boundaryCount + 2);
    var siblingsEnd = Math.min(Math.max(
    // Natural end
    page + siblingCount, 
    // Upper boundary when page is low
    boundaryCount + siblingCount * 2 + 2), 
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1);
    // example: [1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], startPages, true), (siblingsStart > boundaryCount + 2 ? ['start-ellipsis']
        : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1]
            : []), true), range(siblingsStart, siblingsEnd), true), (siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis']
        : count - boundaryCount > boundaryCount ? [count - boundaryCount]
            : []), true), endPages, true);
}
function getEllipsisItems(ellipsisIdx, pages) {
    var items = [];
    var firstHiddenPage = pages[ellipsisIdx - 1] + 1;
    var lastHiddenPage = pages[ellipsisIdx + 1] - 1;
    for (var i = firstHiddenPage; i <= lastHiddenPage; i++) {
        items.push({
            id: i,
            name: i.toString()
        });
    }
    return items;
}
function getPageCount(count, totalRowCount, rowsPerPage) {
    if (!isNullOrUndefined(count)) {
        return count;
    }
    if (!isNullOrUndefined(totalRowCount) && !isNullOrUndefined(rowsPerPage)) {
        return Math.ceil(totalRowCount / rowsPerPage);
    }
    return 0;
}
function getItemRange(page, pageSize, totalRowCount) {
    return {
        start: totalRowCount === 0 ? 0 : (page - 1) * pageSize + 1,
        end: Math.min(totalRowCount, page * pageSize)
    };
}
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
var DEFAULT_PAGE_SIZES = [25, 50, 100, 200];
var DEFAULT_ITEMS_PER_PAGE_OPTIONS = {
    isVisible: true,
    showLabel: true
};
function createPageSizeItems(pageSizes) {
    return pageSizes.map(function (size) { return ({ value: size, text: size.toString() }); });
}
export function Pagination(_a) {
    var className = _a.className, count = _a.count, isMinimized = _a.isMinimized, propsItemsPerPageOptions = _a.itemsPerPageOptions, onPageIndexChange = _a.onPageIndexChange, onPageSizeChange = _a.onPageSizeChange, pageIndex = _a.pageIndex, pageSize = _a.pageSize, pageSizes = _a.pageSizes, ref = _a.ref, showPagesFirst = _a.showPagesFirst, totalRowCount = _a.totalRowCount;
    // pageIndex (from props): indexing starts from 0
    // page (in state): indexing starts from 1
    var itemsPerPageOptions = __assign(__assign({}, DEFAULT_ITEMS_PER_PAGE_OPTIONS), propsItemsPerPageOptions);
    var pageSizeItems = useMemo(function () { return createPageSizeItems(pageSizes !== null && pageSizes !== void 0 ? pageSizes : DEFAULT_PAGE_SIZES); }, [pageSizes]);
    var initialPage = isNullOrUndefined(pageIndex) ? 1 : pageIndex + 1;
    var initialRowsPerPage = pageSize !== null && pageSize !== void 0 ? pageSize : pageSizeItems[0].value;
    var _b = useState(initialPage), page = _b[0], setPage = _b[1];
    var _c = useState(initialRowsPerPage), rowsPerPage = _c[0], setRowsPerPage = _c[1];
    var pageCount = getPageCount(count, totalRowCount, rowsPerPage);
    var itemRange = !isNullOrUndefined(pageSize) && !isNullOrUndefined(totalRowCount) ?
        getItemRange(page, pageSize, totalRowCount)
        : null;
    var translateCommon = useTranslateCommon();
    var translatePager = useTranslatePager();
    var onPageChange = function (newPage) {
        setPage(newPage);
        safeCall(onPageIndexChange, newPage - 1);
    };
    var onRowsPagePageChange = function (val) {
        if (isNumber(val)) {
            setRowsPerPage(val);
            safeCall(onPageSizeChange, val);
        }
    };
    var nextPage = function () {
        if (page < pageCount) {
            onPageChange(page + 1);
        }
    };
    var prevPage = function () {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };
    useEffect(function () {
        setPage(initialPage);
    }, [initialPage]);
    useEffect(function () {
        setRowsPerPage(initialRowsPerPage);
    }, [initialRowsPerPage]);
    var itemsPerPageSelect = isNullOrUndefined(pageSize) || !itemsPerPageOptions.isVisible ?
        null
        : _jsxs("div", __assign({ className: "pagination__items-per-page" }, { children: [itemsPerPageOptions.showLabel && _jsx(Label, __assign({ size: Size.md }, { children: translateCommon('itemsPerPage') })), _jsx(Select, { "aria-label": translateCommon('itemsPerPage'), className: "pagination__select", isPlain: isMinimized, isSearchable: false, items: pageSizeItems, menuWidth: "5rem", onSelectionChange: onRowsPagePageChange, size: isMinimized ? Size.xs : Size.md, text: rowsPerPage.toString(), value: rowsPerPage })] }), "items-per-page");
    var itemRangeLabel = itemRange ?
        _jsx(Label, __assign({ className: "pagination__item-range", size: Size.md }, { children: translatePager('resultsOf', { start: itemRange.start, end: itemRange.end, total: totalRowCount }) }), "item-rang")
        : null;
    var pageNavigation = (_jsxs("div", __assign({ className: classNames('pagination__pages', {
            'pagination__pages--minimized': isMinimized
        }) }, { children: [_jsx(IconButton, { "aria-label": translateCommon('previousPage'), className: "pagination__prev-btn", iconName: iconNames.ChevronLeft, isDisabled: page === 1, onPress: prevPage, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), isMinimized ? null : (getPageItems(pageCount, page).map(function (value, index, array) {
                if (isString(value) && value.includes('ellipsis')) {
                    return (_jsx(PageEllipsis, { items: getEllipsisItems(index, array), onAction: function (pageId) { return onPageChange(pageId); } }, value));
                }
                return (_jsx(PageButton, __assign({ isActive: page === value, onPress: function () { return onPageChange(value); } }, { children: value }), value));
            })), _jsx(IconButton, { "aria-label": translateCommon('nextPage'), className: "pagination__next-btn", iconName: iconNames.ChevronRight, isDisabled: page === pageCount, onPress: nextPage, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })] }), "pages"));
    return (_jsxs("div", __assign({ className: classNames('pagination', className, {
            'pagination--minimized': isMinimized,
            'pagination--reversed': showPagesFirst
        }), ref: ref }, { children: [(!!itemsPerPageSelect || !!itemRangeLabel) && (_jsxs("div", __assign({ className: classNames('pagination__row-count-info', {
                    'pagination__row-count-info--minimized': isMinimized
                }) }, { children: [itemsPerPageSelect, itemRangeLabel] }))), pageNavigation] })));
}
//# sourceMappingURL=pagination.js.map
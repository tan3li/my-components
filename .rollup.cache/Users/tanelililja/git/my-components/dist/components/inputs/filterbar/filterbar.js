import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Button, ButtonStyle, ButtonVariant, IconButton } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { useResizeObserver } from '@react-aria/utils';
export var FilterBarStyle;
(function (FilterBarStyle) {
    FilterBarStyle["Card"] = "card";
    FilterBarStyle["Plain"] = "plain";
})(FilterBarStyle || (FilterBarStyle = {}));
export function FilterBar(_a) {
    var activeFiltersCount = _a.activeFiltersCount, className = _a.className, children = _a.children, nonVisibleActiveFiltersCount = _a.nonVisibleActiveFiltersCount, onClearAll = _a.onClearAll, onPressFilters = _a.onPressFilters, ref = _a.ref, _b = _a.style, style = _b === void 0 ? FilterBarStyle.Card : _b;
    var translateCommon = useTranslateCommon();
    var filterAreaRef = useRef(null);
    var _c = useState(false), isScrollable = _c[0], setIsScrollable = _c[1];
    var _d = useState({ scrollLeft: 0, scrollWidth: 0, offsetWidth: 0 }), scrollParams = _d[0], setScrollParams = _d[1];
    var actionSize = style === FilterBarStyle.Card ? Size.md : Size.sm;
    var scrollFilterArea = function (direction) {
        var filterAreaEl = filterAreaRef.current;
        if (filterAreaEl) {
            var scrollableWidth = scrollParams.scrollWidth - scrollParams.offsetWidth;
            var newScrollLeft = Math.min(filterAreaEl.scrollLeft + direction * scrollParams.offsetWidth, scrollableWidth);
            filterAreaEl.scrollLeft = newScrollLeft;
            setScrollParams(__assign(__assign({}, scrollParams), { scrollLeft: newScrollLeft }));
        }
    };
    var onResize = useCallback(function () {
        var filterAreaEl = filterAreaRef.current;
        if (filterAreaEl) {
            var currScrollWidth = filterAreaEl.scrollWidth;
            var currScrollLeft = filterAreaEl.scrollLeft;
            var currOffsetWidth = filterAreaEl.offsetWidth;
            setIsScrollable(currOffsetWidth < currScrollWidth);
            setScrollParams({ scrollWidth: currScrollWidth, scrollLeft: currScrollLeft, offsetWidth: currOffsetWidth });
        }
    }, [filterAreaRef]);
    useResizeObserver({ ref: filterAreaRef, onResize: onResize });
    return (_jsxs("div", __assign({ className: classNames("filter-bar filter-bar--".concat(style), className), ref: ref }, { children: [_jsxs("div", __assign({ className: "filter-bar__filters-wrapper" }, { children: [isScrollable && scrollParams.scrollLeft > 0 && (_jsx(IconButton, { "aria-label": translateCommon('scrollLeft'), className: "filter-bar__scroll-btn filter-bar__scroll-btn--left", iconName: iconNames.ChevronLeft, onPress: function () {
                            scrollFilterArea(-1);
                        }, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral })), _jsx("div", __assign({ className: "filter-bar__filters", ref: filterAreaRef }, { children: children })), isScrollable && scrollParams.scrollLeft < scrollParams.scrollWidth - scrollParams.offsetWidth && (_jsx(IconButton, { "aria-label": translateCommon('scrollRight'), className: "filter-bar__scroll-btn filter-bar__scroll-btn--right", iconName: iconNames.ChevronRight, onPress: function () {
                            scrollFilterArea(1);
                        }, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }))] })), _jsxs("div", __assign({ className: "filter-bar__actions" }, { children: [_jsxs(Button, __assign({ className: "filters-button", onPress: onPressFilters, size: actionSize, startIconName: iconNames.Tune, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: [!!nonVisibleActiveFiltersCount && (_jsx(Icon, { ariaLabel: translateCommon('additionalFilters', { count: nonVisibleActiveFiltersCount }), className: "filters-button__icon", name: iconNames.StatusLightFilled, size: IconSize.SM })), _jsxs("strong", { children: [translateCommon('filters'), !!activeFiltersCount && " (".concat(activeFiltersCount, ")")] })] })), _jsx(Button, __assign({ isDisabled: !activeFiltersCount, onPress: onClearAll, size: actionSize, style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('clearAll') }))] }))] })));
}
//# sourceMappingURL=filterbar.js.map
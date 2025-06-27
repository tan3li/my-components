import { __assign } from "tslib";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FilterBar, FilterBarStyle } from './filterbar.js';
import { useEffect, useRef, useState } from 'react';
import { Select } from '../select/index.js';
import { Size } from '../../../constants/index.js';
import { isEmptyArray } from '../../../utils/objecthelper.js';
import { SearchField } from '../searchfield/index.js';
import { FilterButton, FilterSelect } from '../filterselect/index.js';
import { FilterMultiSelect } from '../filtermultiselect/index.js';
import { MultiSelect } from '../multiselect/index.js';
import { useFilter } from 'react-aria';
import { Drawer } from '../../feedback/index.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { Calendar } from '../calendar/index.js';
import { useCultureDay } from '../../../hooks/usecultureday.js';
import { DatePicker } from '../datepicker/index.js';
import { Popover } from '../../action/popover/index.js';
import { EmptyState } from '../../datadisplay/index.js';
function FilterDatePicker(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, isSelectable = _a.isSelectable, label = _a.label, size = _a.size, value = _a.value;
    var triggerRef = useRef(null);
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var cultureDay = useCultureDay();
    var onChange = function (date) {
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: date ? date.toString() : null }));
        setIsOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(FilterButton, __assign({ clearButtonProps: { onPress: function () { return onChange(null); } }, isActive: !!value, isFocusable: isSelectable, isOpen: isOpen, label: label, onOpenChange: setIsOpen, showClearButton: true, size: size, toggleButtonProps: {
                    ref: triggerRef
                } }, { children: [label, value && ": ".concat(cultureDay(value).format('l'))] })), _jsx(Popover, __assign({ "aria-label": label, className: "filter-select__popover", isOpen: isOpen, onOpenChange: setIsOpen, placement: "bottom start", shouldFlip: true, triggerRef: triggerRef }, { children: _jsx(Calendar, { autoFocus: true, onChange: onChange, value: value }) }))] }));
}
function Filters(_a) {
    var filters = _a.filters, hideAdditional = _a.hideAdditional, isSelectable = _a.isSelectable, onFilterValueChange = _a.onFilterValueChange, showOnlyActive = _a.showOnlyActive, size = _a.size;
    return (_jsx(_Fragment, { children: filters.map(function (filter) {
            var id = filter.id, type = filter.type, label = filter.label, items = filter.items, value = filter.value, isAdditional = filter.isAdditional;
            if ((showOnlyActive && isEmptyArray(value)) || (hideAdditional && isAdditional)) {
                return null;
            }
            switch (type) {
                case 'single-select': {
                    var selectedValue = value;
                    return (_jsx(FilterSelect, { changeCallback: onFilterValueChange, changeParams: { id: id }, isSelectable: isSelectable, items: items, label: label, size: size, text: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.text, value: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.value }, id));
                }
                case 'multi-select': {
                    var selectedValue = value;
                    return (_jsx(FilterMultiSelect, { changeCallback: onFilterValueChange, changeParams: { id: id }, isSelectable: isSelectable, items: items, label: label, selectedItems: selectedValue, size: size }, id));
                }
                case 'date': {
                    var selectedValue = value;
                    return (_jsx(FilterDatePicker, { changeCallback: onFilterValueChange, changeParams: { id: id }, isSelectable: isSelectable, label: filter.label, size: size, value: selectedValue }, id));
                }
                default:
                    return null;
            }
        }) }));
}
function FilterFields(_a) {
    var filters = _a.filters, onFilterValueChange = _a.onFilterValueChange;
    return (_jsx(_Fragment, { children: filters.map(function (filter) {
            var id = filter.id, type = filter.type, label = filter.label, items = filter.items, value = filter.value;
            switch (type) {
                case 'single-select': {
                    var selectedValue = value;
                    return (_jsx(Select, { changeCallback: onFilterValueChange, changeParams: { id: id }, helpText: "Help text content", items: items, label: label, placeholder: "Select a value", size: Size.md, text: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.text, value: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.value }, id));
                }
                case 'multi-select': {
                    var selectedValue = value;
                    return (_jsx(MultiSelect, { changeCallback: onFilterValueChange, changeParams: { id: id }, helpText: "Help text content", items: items, label: label, placeholder: "Select a value", selectedItems: selectedValue, size: Size.md }, id));
                }
                case 'date': {
                    var selectedValue = value;
                    return (_jsx(DatePicker, { changeCallback: onFilterValueChange, changeParams: { id: id }, helpText: "Help text content", label: label, size: Size.md, value: selectedValue }, id));
                }
                default:
                    return null;
            }
        }) }));
}
function FilterDrawer(_a) {
    var filters = _a.filters, isOpen = _a.isOpen, onApply = _a.onApply, onOpenChange = _a.onOpenChange, title = _a.title;
    var _b = useState([]), editableFilters = _b[0], setEditableFilters = _b[1];
    var _c = useState(''), searchText = _c[0], setSearchText = _c[1];
    var filterSearchFilter = useFilter({ sensitivity: 'base' });
    var visibleEditableFilters = editableFilters.filter(function (f) { return filterSearchFilter.contains(f.label, searchText); });
    var onFilterValueChange = function (_a) {
        var id = _a.id, text = _a.text, value = _a.value;
        setEditableFilters(editableFilters.map(function (f) {
            if (f.id === id) {
                var val = value;
                if (f.type === 'single-select') {
                    val = value ? { text: text, value: value } : value;
                }
                return __assign(__assign({}, f), { value: val });
            }
            return f;
        }));
    };
    var onClearAll = function () {
        setEditableFilters(editableFilters.map(function (filter) { return (__assign(__assign({}, filter), { value: undefined })); }));
    };
    var onSearch = function (text) {
        setSearchText(text);
    };
    useEffect(function () {
        if (isOpen) {
            setEditableFilters(filters.slice());
        }
    }, [isOpen]);
    return (_jsx(Drawer, __assign({ destructiveAction: {
            label: 'Clear all',
            onPress: function () {
                onClearAll();
            }
        }, isOpen: isOpen, onOpenChange: onOpenChange, primaryAction: {
            label: 'Apply',
            onPress: function (closeCallback) {
                safeCall(onApply, editableFilters.slice());
                closeCallback();
            }
        }, title: title }, { children: _jsxs("div", __assign({ style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' } }, { children: [_jsx(SearchField, { "aria-label": "Search a filter", onChange: onSearch, placeholder: "Search a filter", size: Size.sm }), _jsx("div", __assign({ style: { display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs) var(--space-sm)' } }, { children: _jsx(Filters, { filters: editableFilters, isSelectable: false, onFilterValueChange: onFilterValueChange, showOnlyActive: true, size: Size.xs }) })), visibleEditableFilters.length > 0 ?
                    _jsx(FilterFields, { filters: visibleEditableFilters, onFilterValueChange: onFilterValueChange })
                    : _jsx(EmptyState, { bodyText: "Try a different search term or clear your current search to see all filters.", title: "No filters found" })] })) })));
}
export function FilterBarExample(args) {
    var _a = useState([
        {
            id: 'pm',
            type: 'multi-select',
            label: 'Project manager',
            items: [
                { value: 'pm1', text: 'John Doe' },
                { value: 'pm2', text: 'Jane Doe' },
                { value: 'pm3', text: 'Kevin Young' }
            ]
        },
        {
            id: 'status',
            type: 'single-select',
            label: 'Status',
            items: [
                { value: 'true', text: 'Active' },
                { value: 'false', text: 'Inactive' }
            ]
        },
        {
            id: 'bu',
            type: 'multi-select',
            label: 'Business unit',
            items: [
                { value: 'bu1', text: 'Finance' },
                { value: 'bu2', text: 'Marketing' },
                { value: 'bu3', text: 'R&D' }
            ]
        },
        {
            id: 'kw',
            isAdditional: true,
            type: 'multi-select',
            label: 'Keywords',
            items: [
                { value: 'kw1', text: 'Foo' },
                { value: 'kw2', text: 'Bar' },
                { value: 'kw3', text: 'Test' }
            ]
        },
        {
            id: 'dl',
            type: 'date',
            label: 'Deadline'
        }
    ]), filters = _a[0], setFilters = _a[1];
    var _b = useState(false), isFilterPanelOpen = _b[0], setIsFilterPanelOpen = _b[1];
    var filterSize = args.style === FilterBarStyle.Card ? Size.sm : Size.xs;
    var activeFiltersCount = filters.reduce(function (sum, filter) { return sum + (isEmptyArray(filter.value) ? 0 : 1); }, 0);
    var nonVisibleActiveFiltersCount = filters.reduce(function (sum, filter) { return sum + (filter.isAdditional && !isEmptyArray(filter.value) ? 1 : 0); }, 0);
    var onFilterValueChange = function (_a) {
        var id = _a.id, text = _a.text, value = _a.value;
        setFilters(filters.map(function (f) {
            if (f.id === id) {
                var val = value;
                if (f.type === 'single-select') {
                    val = value ? { text: text, value: value } : value;
                }
                return __assign(__assign({}, f), { value: val });
            }
            return f;
        }));
    };
    var onClearAll = function () {
        setFilters(filters.map(function (filter) { return (__assign(__assign({}, filter), { value: undefined })); }));
    };
    var onPressFilters = function () {
        setIsFilterPanelOpen(true);
    };
    return (_jsxs(FilterBar, __assign({}, args, { activeFiltersCount: activeFiltersCount, nonVisibleActiveFiltersCount: nonVisibleActiveFiltersCount, onClearAll: onClearAll, onPressFilters: onPressFilters }, { children: [_jsx(SearchField, { "aria-label": "Search", placeholder: "Search", size: filterSize }), _jsx(Filters, { filters: filters, hideAdditional: true, onFilterValueChange: onFilterValueChange, size: filterSize }), _jsx(FilterDrawer, { filters: filters, isOpen: isFilterPanelOpen, onApply: function (newFilters) {
                    setFilters(newFilters);
                }, onOpenChange: setIsFilterPanelOpen, title: activeFiltersCount ? "Filters (".concat(activeFiltersCount, ")") : 'Filters' })] })));
}
//# sourceMappingURL=filterbarexample.js.map
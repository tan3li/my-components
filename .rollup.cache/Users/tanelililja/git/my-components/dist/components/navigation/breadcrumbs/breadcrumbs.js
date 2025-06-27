import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, Breadcrumbs as ReactAriaBreadcrumbs, Link } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Menu } from '../../action/index.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { useResizeObserver } from '@react-aria/utils';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
var MAX_VISIBLE_ELEMENTS_COUNT = 5;
var MORE_ELEMENT_ID = 'more';
var HIDDEN_ELEMENT_CSS_CLASS = 'breadcrumb--hidden';
var TRUNCATED_ELEMENT_CSS_CLASS = 'breadcrumb--truncated';
function adaptElements(wrapperElement, itemsWithMore) {
    var _a, _b, _c;
    var allElements = wrapperElement.children;
    var allElementsLen = allElements.length;
    var hiddenItems = [];
    // Static elements which should be always visible.
    var firstElement, moreElement, currentElement;
    // Reveal all elements and find static elements.
    for (var i = 0; i < allElementsLen; i++) {
        var el = allElements[i];
        el.classList.remove(HIDDEN_ELEMENT_CSS_CLASS, TRUNCATED_ELEMENT_CSS_CLASS);
        if (i === 0) {
            firstElement = el;
        }
        if (el.dataset.id === MORE_ELEMENT_ID) {
            moreElement = el;
        }
        if (el.dataset.current) {
            currentElement = el;
        }
    }
    var wrapperWidth = wrapperElement.offsetWidth;
    var stopWidth = ((_a = firstElement === null || firstElement === void 0 ? void 0 : firstElement.offsetWidth) !== null && _a !== void 0 ? _a : 0) + ((_b = moreElement === null || moreElement === void 0 ? void 0 : moreElement.offsetWidth) !== null && _b !== void 0 ? _b : 0) + ((_c = currentElement === null || currentElement === void 0 ? void 0 : currentElement.offsetWidth) !== null && _c !== void 0 ? _c : 0), hasVisibleNonStaticElements = false;
    // Hide elements which don't fit the wrapper or exceed max visible elements count.
    for (var i = 0; i < allElementsLen; i++) {
        var el = allElements[i];
        // Skip static elements
        if (el === moreElement || el === firstElement || el === currentElement) {
            continue;
        }
        var elementWidth = el.offsetWidth;
        var isWithinMaxVisibleCount = allElementsLen - 1 >= MAX_VISIBLE_ELEMENTS_COUNT ? i < MAX_VISIBLE_ELEMENTS_COUNT - 2 : true;
        if (isWithinMaxVisibleCount && wrapperWidth >= stopWidth + elementWidth) {
            stopWidth += elementWidth;
            hasVisibleNonStaticElements = true;
        }
        else {
            el.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
            hiddenItems.push(itemsWithMore[i]);
        }
    }
    if (hiddenItems.length === 0) {
        // No hidden items --> hide more-element.
        moreElement === null || moreElement === void 0 ? void 0 : moreElement.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
    }
    if (!hasVisibleNonStaticElements) {
        // No visible non-static elements --> allow current element to truncate with ellipsis.
        currentElement === null || currentElement === void 0 ? void 0 : currentElement.classList.add(TRUNCATED_ELEMENT_CSS_CLASS);
    }
    return {
        hiddenItems: hiddenItems,
        currentElement: currentElement
    };
}
export function Breadcrumbs(_a) {
    var className = _a.className, items = _a.items, ref = _a.ref, props = __rest(_a, ["className", "items", "ref"]);
    var wrapperRef = useRef(null);
    var itemsWithMore = useMemo(function () {
        var arr = items.slice();
        arr.splice(items.length - 1, 0, { id: MORE_ELEMENT_ID, label: '...' });
        return arr;
    }, [items]);
    var _b = useState([]), hiddenItems = _b[0], setHiddenItems = _b[1];
    var _c = useState(false), currentHasTooltip = _c[0], setCurrentHasTooltip = _c[1];
    useImperativeHandle(ref, function () { return wrapperRef.current; }, []);
    var onAction = function (key) {
        if (key !== MORE_ELEMENT_ID) {
            safeCall(props.onAction, key);
        }
    };
    var onResize = useCallback(function () {
        var wrapperElement = wrapperRef.current;
        if (wrapperElement) {
            var _a = adaptElements(wrapperElement, itemsWithMore), hiddenItemsArr = _a.hiddenItems, currentElement = _a.currentElement;
            setHiddenItems(hiddenItemsArr);
            if (currentElement) {
                var linkElement = currentElement.firstChild;
                setCurrentHasTooltip(linkElement.offsetWidth < linkElement.scrollWidth);
            }
        }
    }, [wrapperRef, itemsWithMore]);
    useResizeObserver({ ref: wrapperRef, onResize: onResize });
    return (_jsx(ReactAriaBreadcrumbs, __assign({}, props, { className: classNames('breadcrumbs', className), onAction: onAction, ref: wrapperRef }, { children: itemsWithMore.map(function (_a, i) {
            var id = _a.id, label = _a.label, isDisabled = _a.isDisabled;
            var hasTooltip = i === itemsWithMore.length - 1 && currentHasTooltip;
            var link = (_jsx(Link, __assign({ className: "breadcrumb-link ".concat(LABEL_SIZE_MD_CSS_CLASS), 
                // Link with tooltip should be focusable so cannot disable.
                isDisabled: hasTooltip ? false : isDisabled }, { children: label })));
            if (hasTooltip) {
                link = (_jsxs(TooltipTrigger, { children: [link, _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: label }))] }));
            }
            if (id === MORE_ELEMENT_ID) {
                link = (_jsx(Menu, __assign({ items: hiddenItems.map(function (item) { return ({ id: item.id, name: item.label }); }), onAction: onAction }, { children: link })));
            }
            return (_jsx(Breadcrumb, __assign({ className: "breadcrumb", "data-id": id, id: id }, { children: link }), id));
        }) })));
}
//# sourceMappingURL=breadcrumbs.js.map
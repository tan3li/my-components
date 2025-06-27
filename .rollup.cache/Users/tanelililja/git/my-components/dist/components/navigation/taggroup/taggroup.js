import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, cloneElement, useCallback, useEffect, useId, useRef, useState } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { useResizeObserver } from '@react-aria/utils';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { TagStyle } from '../tag/index.js';
import { Size } from '../../../constants/index.js';
var HIDDEN_TAG_CSS_CLASS = 'tag--hidden';
var DEFAULT_MAX_VISIBLE_ROWS = 4;
function revealChildren(element) {
    var children = Array.from(element.children);
    children.forEach(function (child) {
        child.classList.remove(HIDDEN_TAG_CSS_CLASS);
    });
}
function adaptChildren(_a) {
    var element = _a.element, isExpanded = _a.isExpanded, maxVisibleRows = _a.maxVisibleRows;
    var children = element.children;
    var len = children.length;
    if (len === 0) {
        return 0;
    }
    revealChildren(element);
    var currentOffsetTop = children[0].offsetTop, currentRow = 1, hiddenCount = 0;
    for (var i = 0; i < len; i++) {
        var child = children[i];
        var offsetTop = currentRow > maxVisibleRows ? currentOffsetTop : child.offsetTop;
        if (offsetTop > currentOffsetTop) {
            currentOffsetTop = offsetTop;
            currentRow++;
        }
        if (currentRow > maxVisibleRows) {
            if (!isExpanded) {
                child.classList.add(HIDDEN_TAG_CSS_CLASS);
            }
            hiddenCount++;
        }
    }
    return hiddenCount;
}
export function TagGroup(_a) {
    var propsChildren = _a.children, className = _a.className, _b = _a.maxVisibleRows, maxVisibleRows = _b === void 0 ? DEFAULT_MAX_VISIBLE_ROWS : _b, ref = _a.ref, _c = _a.size, size = _c === void 0 ? Size.md : _c, _d = _a.style, style = _d === void 0 ? TagStyle.Outline : _d;
    var children = Children.toArray(propsChildren);
    var content = children.map(function (child) {
        return cloneElement(child, {
            role: 'listitem',
            size: size,
            style: style
        });
    });
    var tagListRef = useRef(null);
    var _e = useState(0), hiddenCount = _e[0], setHiddenCount = _e[1];
    var _f = useState(false), isExpanded = _f[0], setIsExpanded = _f[1];
    var translateCommon = useTranslateCommon();
    var tagListId = useId();
    var onResize = useCallback(function () {
        var tagList = tagListRef.current;
        if (tagList) {
            var newHiddenCount = adaptChildren({
                element: tagList,
                isExpanded: isExpanded,
                maxVisibleRows: maxVisibleRows
            });
            setHiddenCount(newHiddenCount);
            if (newHiddenCount === 0) {
                setIsExpanded(false);
            }
        }
    }, [tagListRef, maxVisibleRows, isExpanded, children.length]);
    useResizeObserver({ ref: tagListRef, onResize: onResize });
    useEffect(function () {
        document.fonts.ready.then(onResize);
    }, []);
    return (_jsxs("div", __assign({ className: classNames("tag-group tag-group--".concat(size), className), ref: ref }, { children: [_jsx("div", __assign({ className: "tag-group__tags", id: tagListId, ref: tagListRef, role: "list" }, { children: content })), hiddenCount > 0 && (_jsx(Button, __assign({ "aria-controls": tagListId, "aria-expanded": isExpanded, onPress: function () { return setIsExpanded(!isExpanded); }, size: size === Size.xs ? Size.sm : size, style: style === TagStyle.Outline ? ButtonStyle.Fill : ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: isExpanded ? translateCommon('showLess') : "".concat(translateCommon('show'), " +").concat(hiddenCount) })))] })));
}
//# sourceMappingURL=taggroup.js.map
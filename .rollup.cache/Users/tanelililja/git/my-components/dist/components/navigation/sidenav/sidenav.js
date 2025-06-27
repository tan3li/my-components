import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { useEffect, useId, useMemo, useState } from 'react';
import { IconButton } from '../../action/iconbutton/iconbutton.js';
import { iconNames } from '../../media/icon/icons.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { ButtonStyle } from '../../action/button/button.js';
import { ButtonVariant } from '../../action/constants/buttonvariant.js';
import { Size } from '../../../constants/size.js';
import { NavItem, NavItemType } from './navitem.js';
import { isFunction, safeCall } from '../../../utils/functionhelper.js';
import { TooltipTrigger } from '../../feedback/tooltip/tooltiptrigger.js';
import { Tooltip, TooltipType } from '../../feedback/tooltip/tooltip.js';
import { Alignment } from '../../../constants/alignment.js';
import { Divider } from '../../datadisplay/divider/divider.js';
import { Position } from '../../../constants/position.js';
import { getInvertedIconName } from '../../../utils/getinvertediconname';
import { NavItemBadge } from './navitembadge.js';
export var SideNavMode;
(function (SideNavMode) {
    SideNavMode["Default"] = "default";
    SideNavMode["Inverted"] = "inverted";
})(SideNavMode || (SideNavMode = {}));
function containsExpandableItems(items) {
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var subItems = item.items, isHeading = item.isHeading;
        if (subItems && (!isHeading || (isHeading && containsExpandableItems(subItems)))) {
            return true;
        }
    }
    return false;
}
export function SideNav(_a) {
    var _b = _a.canShrink, canShrink = _b === void 0 ? true : _b, propsExpandedKeys = _a.expandedKeys, header = _a.header, _c = _a.isExpanded, isExpanded = _c === void 0 ? true : _c, items = _a.items, _d = _a.mode, mode = _d === void 0 ? SideNavMode.Default : _d, onExpandedKeysChange = _a.onExpandedKeysChange, ref = _a.ref, toggleCallback = _a.toggleCallback, props = __rest(_a, ["canShrink", "expandedKeys", "header", "isExpanded", "items", "mode", "onExpandedKeysChange", "ref", "toggleCallback"]);
    var domIdPrefix = useId();
    var _e = useState(canShrink ? isExpanded : true), isSideNavExpanded = _e[0], setIsSideNavExpanded = _e[1];
    var translateCommon = useTranslateCommon();
    var _f = useState(propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : new Set()), expandedKeys = _f[0], setExpandedKeys = _f[1];
    var toggleItems = function () {
        setIsSideNavExpanded(!isSideNavExpanded);
        safeCall(toggleCallback, !isSideNavExpanded);
    };
    var getDomId = function (id) { return "".concat(domIdPrefix).concat(id); };
    var hasExpandableItems = useMemo(function () { return containsExpandableItems(items); }, [items]);
    var isItemOrChildrenActive = function (sideNavItem) {
        if (sideNavItem.isActive) {
            return true;
        }
        var sideNavItemChildren = sideNavItem.items;
        if (sideNavItemChildren) {
            for (var i = 0, len = sideNavItemChildren.length; i < len; i++) {
                if (isItemOrChildrenActive(sideNavItemChildren[i])) {
                    return true;
                }
            }
        }
        return false;
    };
    var renderItem = function (item, level) {
        var onPress = item.onPress, id = item.id, isHeading = item.isHeading, badge = item.badge, label = item.label, icon = item.icon;
        var hasChildren = !!item.items;
        var showExpanderPlaceholder = hasExpandableItems && !hasChildren && !!badge;
        var isItemExpanded = expandedKeys.has(id);
        var type;
        if (isHeading) {
            type = NavItemType.GroupHeading;
        }
        else if (level === 0) {
            type = NavItemType.Main;
        }
        else {
            type = NavItemType.Indented;
        }
        if (!isSideNavExpanded && (isHeading || level > 0)) {
            return null;
        }
        // Showing the upper level item as active if any of its children is active. Currently, cannot open sub levels
        // when displaying only IconButtons.
        var isActive = isItemOrChildrenActive(item);
        if (isSideNavExpanded) {
            return (_jsx(NavItem, { domId: isHeading ? getDomId(id) : undefined, inverted: mode === SideNavMode.Inverted, isActive: isActive, isExpanded: isItemExpanded, item: item, level: level, showExpanderPlaceholder: showExpanderPlaceholder, type: type }));
        }
        return (_jsxs(TooltipTrigger, { children: [_jsxs("div", __assign({ className: "side-nav__icon-button-wrapper" }, { children: [_jsx(IconButton, { "aria-current": isActive ? 'page' : undefined, "aria-label": label, className: "side-nav__icon-button", iconName: getInvertedIconName(icon, isActive), inverted: mode === SideNavMode.Inverted, onPress: function () { return onPress === null || onPress === void 0 ? void 0 : onPress(id); }, size: Size.sm, style: isActive ? ButtonStyle.Fill : ButtonStyle.Plain, variant: isActive ? ButtonVariant.Accent : ButtonVariant.Neutral }), badge && _jsx(NavItemBadge, __assign({}, badge))] })), _jsx(Tooltip, __assign({ position: Position.Right, type: TooltipType.Plain }, { children: label }))] }));
    };
    var expandCallback = function (id) {
        var newExpandedKeys = new Set(expandedKeys);
        if (expandedKeys.has(id)) {
            newExpandedKeys.delete(id);
        }
        else {
            newExpandedKeys.add(id);
        }
        setExpandedKeys(newExpandedKeys);
        onExpandedKeysChange === null || onExpandedKeysChange === void 0 ? void 0 : onExpandedKeysChange(newExpandedKeys);
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        for (var i = 0, len = itemArr.length; i < len; i++) {
            var item = itemArr[i];
            var subItems = item.items;
            var itemToRender = __assign(__assign({}, item), { onPress: isSideNavExpanded && subItems ? expandCallback : item.onPress });
            if (subItems) {
                if (item.isHeading) {
                    itemNodes.push(_jsxs("li", __assign({ className: "side-nav__nav-list-item" }, { children: [renderItem(item, level), _jsx("ul", __assign({ "aria-labelledby": getDomId(item.id), className: "side-nav__nav-list side-nav__nav-section" }, { children: renderItems(subItems, level) }))] }), item.id));
                }
                else {
                    itemNodes.push(_jsxs("li", __assign({ className: "side-nav__nav-list-item" }, { children: [renderItem(itemToRender, level), expandedKeys.has(item.id) && (_jsx("ul", __assign({ className: "side-nav__nav-list side-nav__sub-nav-list" }, { children: renderItems(subItems, level + 1) })))] }), item.id));
                }
            }
            else {
                itemNodes.push(_jsx("li", __assign({ className: "side-nav__nav-list-item" }, { children: renderItem(item, level) }), item.id));
            }
        }
        return itemNodes;
    };
    useEffect(function () {
        setExpandedKeys(propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : new Set());
    }, [propsExpandedKeys]);
    useEffect(function () {
        setIsSideNavExpanded(canShrink ? isExpanded : true);
    }, [isExpanded]);
    return (_jsxs("div", __assign({ className: classNames("side-nav side-nav--mode-".concat(mode), { 'side-nav--expanded': isSideNavExpanded }), ref: ref }, { children: [(canShrink || header) && (_jsxs("div", __assign({ className: "side-nav__header" }, { children: [isFunction(header) ? header(isSideNavExpanded) : header, canShrink && (_jsx(IconButton, { "aria-expanded": isSideNavExpanded, "aria-label": translateCommon(isSideNavExpanded ? 'collapse' : 'expand'), className: "side-nav__toggle", iconName: iconNames.Menu, inverted: mode === SideNavMode.Inverted, onPress: toggleItems, size: isSideNavExpanded ? Size.md : Size.sm, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), _jsx(Divider, { alignment: Alignment.center, className: "side-nav__divider", size: Size.sm })] }))), _jsx("nav", __assign({ "aria-label": props['aria-label'], className: "side-nav__content" }, { children: _jsx("ul", __assign({ className: "side-nav__nav-list" }, { children: renderItems(items, 0) })) }))] })));
}
//# sourceMappingURL=sidenav.js.map
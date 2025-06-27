import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { Menu as ReactAriaMenu, MenuSection, MenuTrigger, Popover, SubmenuTrigger } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { MenuOption } from './menuoption.js';
import { Fragment, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { MenuLinkButton } from './menulinkbutton.js';
import { Divider } from '../../datadisplay/divider/divider.js';
import { Size } from '../../../constants/size.js';
import { Label } from '../../text/label/label.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { iconNames } from '../../media/icon/icons.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { MenuGroupHeader } from './menugroupheader.js';
export var SubmenuBehavior;
(function (SubmenuBehavior) {
    SubmenuBehavior["Separate"] = "separate";
    SubmenuBehavior["InPlace"] = "in-place";
})(SubmenuBehavior || (SubmenuBehavior = {}));
export var SelectionMode;
(function (SelectionMode) {
    SelectionMode["Single"] = "single";
    SelectionMode["Multiple"] = "multiple";
})(SelectionMode || (SelectionMode = {}));
function findItem(items, key) {
    if (!items || isNullOrUndefined(key)) {
        return undefined;
    }
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        if (item.id === key) {
            return item;
        }
        if (item.children) {
            var childItem = findItem(item.children, key);
            if (childItem) {
                return childItem;
            }
        }
    }
    return undefined;
}
export function Menu(_a) {
    var _b;
    var className = _a.className, children = _a.children, footerItems = _a.footerItems, header = _a.header, minWidth = _a.minWidth, propsOnOpenChange = _a.onOpenChange, placement = _a.placement, ref = _a.ref, props = __rest(_a, ["className", "children", "footerItems", "header", "minWidth", "onOpenChange", "placement", "ref"]);
    var selectedKeysFromProps = props.selectedKeys;
    var _c = useState(new Set(selectedKeysFromProps)), selectedKeys = _c[0], setSelectedKeys = _c[1];
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var skipCloseRef = useRef(false);
    var menuRef = useRef(null);
    var _e = useState(null), activeSubMenuItem = _e[0], setActiveSubMenuItem = _e[1];
    var itemsToRender = activeSubMenuItem ? __spreadArray([__assign(__assign({}, activeSubMenuItem), { children: undefined })], activeSubMenuItem.children, true) : props.items;
    useImperativeHandle(ref, function () { return menuRef.current; }, []);
    var onAction = function (key) {
        var _a;
        var item = findItem(props.items, key);
        if (!item) {
            return;
        }
        if ((_a = item.props) === null || _a === void 0 ? void 0 : _a.isReadOnly) {
            skipCloseRef.current = true;
            return;
        }
        if (item.isSubmenuTrigger) {
            skipCloseRef.current = item.selectionMode !== SelectionMode.Multiple || activeSubMenuItem === null;
            setActiveSubMenuItem(activeSubMenuItem ? null : item);
        }
        else {
            safeCall(props.onAction, key);
        }
    };
    var onOpenChange = function (isMenuOpen) {
        if (!isMenuOpen && skipCloseRef.current) {
            skipCloseRef.current = false;
            return;
        }
        setIsOpen(isMenuOpen);
        propsOnOpenChange === null || propsOnOpenChange === void 0 ? void 0 : propsOnOpenChange(isMenuOpen);
        if (!isMenuOpen) {
            setActiveSubMenuItem(null);
        }
    };
    var onSelectionChange = function (keys) {
        if (activeSubMenuItem && keys instanceof Set && keys.has(activeSubMenuItem.id)) {
            return;
        }
        setSelectedKeys(keys);
        safeCall(props.onSelectionChange, keys);
    };
    useEffect(function () {
        setSelectedKeys(new Set(selectedKeysFromProps));
    }, [selectedKeysFromProps]);
    var renderItem = function (item) {
        var _a, _b, _c, _d, _e, _f;
        var id = item.id, itemProps = item.props, name = item.name, itemChildren = item.children, hasSeparator = item.hasSeparator, isSubmenuTrigger = item.isSubmenuTrigger, _g = item.submenuBehavior, submenuBehavior = _g === void 0 ? SubmenuBehavior.Separate : _g, selectionMode = item.selectionMode;
        if (itemChildren) {
            if (isSubmenuTrigger) {
                if (submenuBehavior === SubmenuBehavior.InPlace) {
                    return (_jsxs(Fragment, { children: [_createElement(MenuOption, __assign({}, itemProps, { id: id, key: id, label: (_a = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _a !== void 0 ? _a : name, rightIconName: iconNames.ArrowRightFilled, textValue: (_b = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _b !== void 0 ? _b : name })), hasSeparator && _jsx(Divider, { size: Size.sm })] }, id));
                }
                return (_jsxs(Fragment, { children: [_jsxs(SubmenuTrigger, { children: [_createElement(MenuOption, __assign({}, itemProps, { key: id, label: (_c = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _c !== void 0 ? _c : name, textValue: (_d = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _d !== void 0 ? _d : name })), _jsx(Popover, __assign({ className: "menu-popover" }, { children: _jsx("div", __assign({ className: "menu-popover__content" }, { children: _jsx(ReactAriaMenu, __assign({ className: classNames('menu', className), onAction: onAction, onSelectionChange: onSelectionChange, selectedKeys: selectedKeys, selectionMode: selectionMode }, { children: itemChildren.map(renderItem) })) })) }))] }), hasSeparator && _jsx(Divider, { size: Size.sm })] }, id));
            }
            return (_jsxs(Fragment, { children: [_jsxs(MenuSection, __assign({ className: "menu-section" }, { children: [_jsx(MenuGroupHeader, { children: name }), itemChildren.map(renderItem)] })), hasSeparator && _jsx(Divider, { size: Size.sm })] }, id));
        }
        return (_jsxs(Fragment, { children: [_createElement(MenuOption, __assign({}, itemProps, { className: classNames(itemProps === null || itemProps === void 0 ? void 0 : itemProps.className, { 'menu-item--back': isSubmenuTrigger }), id: id, key: id, label: (_e = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _e !== void 0 ? _e : name, leftIconName: isSubmenuTrigger ? iconNames.ArrowLeftFilled : itemProps === null || itemProps === void 0 ? void 0 : itemProps.leftIconName, textValue: (_f = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _f !== void 0 ? _f : name })), hasSeparator && _jsx(Divider, { size: Size.sm })] }, id));
    };
    return (_jsxs(MenuTrigger, __assign({ isOpen: isOpen, onOpenChange: onOpenChange }, { children: [children, _jsx(Popover, __assign({ className: "menu-popover", placement: placement }, { children: _jsxs("div", __assign({ className: "menu-popover__content" }, { children: [header && (_jsx("div", __assign({ className: "menu-header" }, { children: _jsx(Label, __assign({ size: Size.md }, { children: _jsx("strong", { children: header }) })) }))), _jsx(ReactAriaMenu, __assign({}, props, { className: classNames('menu', className), onAction: onAction, onSelectionChange: onSelectionChange, ref: menuRef, selectedKeys: selectedKeys, selectionMode: (_b = activeSubMenuItem === null || activeSubMenuItem === void 0 ? void 0 : activeSubMenuItem.selectionMode) !== null && _b !== void 0 ? _b : props.selectionMode, style: { minWidth: minWidth ? "".concat(minWidth, "px") : undefined } }, { children: itemsToRender.map(renderItem) })), footerItems && footerItems.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Divider, { size: Size.sm }), _jsx("div", __assign({ className: "menu-footer", onBlur: function () {
                                        if (menuRef.current) {
                                            menuRef.current.tabIndex = -1;
                                        }
                                    }, onFocus: function () {
                                        if (menuRef.current) {
                                            menuRef.current.tabIndex = 0;
                                        }
                                    } }, { children: footerItems.map(function (footerItem) { return (_jsx(MenuLinkButton, __assign({ onPress: footerItem.onPress, role: footerItem.role }, { children: footerItem.name }), footerItem.id)); }) }))] }))] })) }))] })));
}
//# sourceMappingURL=menu.js.map
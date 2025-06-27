import { __assign } from "tslib";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { MenuDecorLine } from './menudecorline.js';
import { MenuGroupHeader } from '../../action/menu/menugroupheader.js';
import { ActionItemContent } from '../../action/actionitem/actionitem.js';
import { iconNames } from '../../media/icon/icons.js';
import { TriggerElement } from '../../action/triggerelement/triggerelement.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
import { getInvertedIconName } from '../../../utils/getinvertediconname';
import { AriaRole } from '../../../constants/index.js';
import { NavItemBadge } from './navitembadge.js';
export var NavItemType;
(function (NavItemType) {
    NavItemType["Main"] = "main";
    NavItemType["Indented"] = "indented";
    NavItemType["GroupHeading"] = "group-heading";
})(NavItemType || (NavItemType = {}));
export function NavItem(_a) {
    var domId = _a.domId, inverted = _a.inverted, isActive = _a.isActive, isExpanded = _a.isExpanded, item = _a.item, _b = _a.level, level = _b === void 0 ? 0 : _b, showExpanderPlaceholder = _a.showExpanderPlaceholder, _c = _a.type, type = _c === void 0 ? NavItemType.Main : _c;
    var items = item.items, id = item.id, label = item.label, icon = item.icon, onPress = item.onPress, showLine = item.showLine, useDecorLine = item.useDecorLine, badge = item.badge;
    var hasChildren = !!items;
    var role = hasChildren ? AriaRole.button : AriaRole.link;
    var isHeading = type === NavItemType.GroupHeading;
    if (isHeading) {
        return (_jsxs("div", __assign({ "aria-current": isActive ? 'page' : undefined, className: classNames("nav-item nav-item--type-".concat(type)), id: domId }, { children: [useDecorLine && (_jsx(MenuDecorLine, { inverted: inverted, isActive: isActive, isHeading: isHeading, showLine: showLine })), _jsx(MenuGroupHeader, __assign({ className: classNames('nav-item__menu-group-header', {
                        'nav-item__menu-group-header--inverted': inverted
                    }) }, { children: label }))] })));
    }
    var suffix = [];
    var expanderIcon;
    if (hasChildren) {
        expanderIcon = isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight;
    }
    if (badge) {
        suffix.push(_createElement(NavItemBadge, __assign({}, badge, { key: "badge" })));
    }
    if (!expanderIcon && showExpanderPlaceholder) {
        suffix.push(_jsx("div", { className: "nav-item__expander-placeholder" }, "exp-ph"));
    }
    return (_jsxs(TriggerElement, __assign({ "aria-current": isActive ? 'page' : undefined, "aria-expanded": hasChildren ? isExpanded : undefined, className: classNames("nav-item nav-item--type-".concat(type), {
            'nav-item--inverted': inverted,
            'nav-item--active': isActive && !hasChildren,
            'nav-item--with-decor-line': useDecorLine
        }), elementType: HTMLElementType.A, id: domId, onPress: function () { return onPress === null || onPress === void 0 ? void 0 : onPress(id); }, role: role }, { children: [useDecorLine && (_jsx(MenuDecorLine, { inverted: inverted, isActive: isActive, isHeading: isHeading, showLine: showLine })), _jsx("div", __assign({ className: classNames("nav-item__action-item nav-item--indentation-level-".concat(level), {
                    'nav-item__action-item--indented': type === NavItemType.Indented,
                    'nav-item__action-item--inverted': inverted
                }) }, { children: _jsx(ActionItemContent, { label: label, leftIconName: hasChildren ? icon : getInvertedIconName(icon, isActive), rightIconName: expanderIcon, suffix: suffix }) }))] })));
}
//# sourceMappingURL=navitem.js.map
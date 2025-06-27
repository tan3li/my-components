import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tab as ReactAriaTab, TabList as ReactAriaTabList, TabPanel as ReactAriaTabPanel, Tabs as ReactAriaTabs } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { Label } from '../../text/label/label.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { Badge, BadgeStyle, BadgeVariant } from '../../feedback/badge/badge.js';
import { Orientation } from '../../../constants/orientation.js';
import { Alignment } from '../../../constants/alignment.js';
import { Divider } from '../../datadisplay/divider/divider.js';
export var TabsType;
(function (TabsType) {
    TabsType["Card"] = "card";
    TabsType["Underline"] = "underline";
})(TabsType || (TabsType = {}));
export function Tabs(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.center : _b, _c = _a.orientation, orientation = _c === void 0 ? Orientation.horizontal : _c, panelItems = _a.panelItems, tabItems = _a.tabItems, _d = _a.type, type = _d === void 0 ? TabsType.Underline : _d, props = __rest(_a, ["alignment", "orientation", "panelItems", "tabItems", "type"]);
    var disabledKeys = tabItems.filter(function (item) { return item.isDisabled; }).map(function (item) { return item.id; });
    var effectiveOrientation = type === TabsType.Underline ? orientation : Orientation.horizontal;
    return (_jsxs(ReactAriaTabs, __assign({}, props, { className: "tabs", disabledKeys: disabledKeys, orientation: effectiveOrientation }, { children: [_jsx(ReactAriaTabList, __assign({ className: "tab-list tab-list--".concat(alignment) }, { children: tabItems.map(function (item) { return (_jsx(ReactAriaTab, __assign({ className: "tab tab--".concat(type, " tab--").concat(alignment), "data-orientation": effectiveOrientation, id: item.id }, { children: function (_a) {
                        var isSelected = _a.isSelected;
                        return (_jsxs("div", __assign({ className: "tab__container tab__container--".concat(type, " tab__container--").concat(alignment), "data-orientation": effectiveOrientation, "data-selected": isSelected || undefined }, { children: [item.iconName && _jsx(Icon, { name: item.iconName, size: IconSize.MD }), _jsx(Label, __assign({ size: Size.md }, { children: item.name })), item.badgeText && (_jsx(Badge, __assign({ isDisabled: !!props.isDisabled || item.isDisabled, style: BadgeStyle.Outline, variant: BadgeVariant.Neutral }, { children: item.badgeText })))] })));
                    } }), "tab".concat(item.id))); }) })), _jsx(Divider, { alignment: Alignment.center, className: "tab__divider tab__divider--".concat(type), orientation: effectiveOrientation, size: type === TabsType.Underline ? Size.md : Size.sm }), panelItems.map(function (item) { return (_jsx(ReactAriaTabPanel, __assign({ className: "panel panel--".concat(type), id: item.id }, { children: item.content }), "panel".concat(item.id))); })] })));
}
//# sourceMappingURL=tabs.js.map
var _a;
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDisclosureState } from 'react-stately';
import { useRef } from 'react';
import { mergeProps, useButton, useDisclosure, useFocusRing } from 'react-aria';
import { Divider } from '../divider/index.js';
import { Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { Label } from '../../text/index.js';
import { useAutoHeightAnimation } from '../../../hooks/useautoheightanimation.js';
export var KanbanCardFooterAlertLevel;
(function (KanbanCardFooterAlertLevel) {
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Success"] = 1] = "Success";
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Warning"] = 2] = "Warning";
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Danger"] = 3] = "Danger";
})(KanbanCardFooterAlertLevel || (KanbanCardFooterAlertLevel = {}));
var ALERT_ICON_CSS_CLASS = 'kanban-card__alert-icon';
var alertLevelIconProps = (_a = {},
    _a[KanbanCardFooterAlertLevel.Success] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--success"),
        name: iconNames.ErrorFilled
    },
    _a[KanbanCardFooterAlertLevel.Warning] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--warning"),
        name: iconNames.WarningFilled
    },
    _a[KanbanCardFooterAlertLevel.Danger] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--danger"),
        name: iconNames.EmergencyHomeFilled
    },
    _a);
export function KanbanCardFooter(_a) {
    var alertLevel = _a.alertLevel, children = _a.children, title = _a.title, props = __rest(_a, ["alertLevel", "children", "title"]);
    var state = useDisclosureState(props);
    var panelRef = useRef(null);
    var triggerRef = useRef(null);
    var _b = useDisclosure(props, state, panelRef), triggerProps = _b.buttonProps, panelProps = _b.panelProps;
    var buttonProps = useButton(triggerProps, triggerRef).buttonProps;
    var _c = useFocusRing(), isFocusVisible = _c.isFocusVisible, focusProps = _c.focusProps;
    var isExpanded = state.isExpanded;
    var _d = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _d.isLoaded, panelProps2 = _d.props;
    return (_jsxs("div", __assign({ className: "kanban-card__footer" }, { children: [_jsx(Divider, { size: Size.sm }), _jsxs("div", __assign({ className: "kanban-card__disclosure" }, { children: [_jsxs("button", __assign({}, mergeProps(buttonProps, focusProps), { className: "kanban-card__disclosure-btn", "data-focus-visible": isFocusVisible || undefined, ref: triggerRef }, { children: [_jsx("div", __assign({ className: "kanban-card__disclosure-icon" }, { children: _jsx(Icon, { name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.SM }) })), _jsx(Label, __assign({ className: "kanban-card__disclosure-title", size: Size.md }, { children: title })), alertLevel && _jsx(Icon, __assign({}, alertLevelIconProps[alertLevel], { size: IconSize.MD }))] })), _jsx("div", __assign({}, mergeProps(panelProps, panelProps2), { className: "kanban-card__disclosure-panel", ref: panelRef }, { children: (isExpanded || isLoaded) && (_jsx("div", __assign({ className: "kanban-card__disclosure-panel-content" }, { children: children }))) }))] }))] })));
}
//# sourceMappingURL=kanbancardfooter.js.map
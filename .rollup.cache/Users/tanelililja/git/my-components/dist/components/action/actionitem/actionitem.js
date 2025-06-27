import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon, IconSize } from '../../media/icon/icon.js';
import { Text } from 'react-aria-components';
import { Label, LABEL_SIZE_MD_CSS_CLASS, LABEL_SIZE_SM_CSS_CLASS } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { classNames } from '../../../utils/classnames.js';
export var ACTION_ITEM_CSS_CLASS = 'action-item';
export function ActionItemContent(_a) {
    var actionLabel = _a.actionLabel, description = _a.description, label = _a.label, leftIconName = _a.leftIconName, prefix = _a.prefix, rightIconName = _a.rightIconName, suffix = _a.suffix;
    return (_jsxs(_Fragment, { children: [prefix, leftIconName && _jsx(Icon, { className: "action-item__left-icon", name: leftIconName, size: IconSize.MD }), _jsxs("div", __assign({ className: "action-item__body" }, { children: [_jsx(Text, __assign({ className: classNames('action-item__label', LABEL_SIZE_MD_CSS_CLASS), slot: "label" }, { children: label })), description && (_jsx(Text, __assign({ className: classNames('action-item__description', LABEL_SIZE_SM_CSS_CLASS), slot: "description" }, { children: description })))] })), (!!rightIconName || !!actionLabel || !!suffix) && (_jsxs("div", __assign({ className: "action-item__suffix" }, { children: [suffix, actionLabel && (_jsx(Label, __assign({ className: "action-item__action-label", size: Size.md }, { children: actionLabel }))), rightIconName && (_jsx(Icon, { className: "action-item__right-icon", name: rightIconName, size: IconSize.MD }))] })))] }));
}
//# sourceMappingURL=actionitem.js.map
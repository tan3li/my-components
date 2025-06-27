import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useDisclosureGroupState } from 'react-stately';
import { CollapsibleItem, CollapsibleItemStyle } from './collapsibleitem.js';
import { classNames } from '../../../utils/classnames.js';
import { Alignment } from '../../../constants/index.js';
import { useMemo } from 'react';
export function Collapsible(_a) {
    var _b = _a.allowsMultipleExpanded, allowsMultipleExpanded = _b === void 0 ? true : _b, _c = _a.arrowPlacement, arrowPlacement = _c === void 0 ? Alignment.start : _c, className = _a.className, disabledKeys = _a.disabledKeys, items = _a.items, ref = _a.ref, _d = _a.style, style = _d === void 0 ? CollapsibleItemStyle.Plain : _d, props = __rest(_a, ["allowsMultipleExpanded", "arrowPlacement", "className", "disabledKeys", "items", "ref", "style"]);
    var groupState = useDisclosureGroupState(__assign({ allowsMultipleExpanded: allowsMultipleExpanded }, props));
    var disabledKeysSet = useMemo(function () { return (disabledKeys ? new Set(disabledKeys) : new Set()); }, [disabledKeys]);
    return (_jsx("div", __assign({ className: classNames("collapsible collapsible--".concat(style, "-items"), className), ref: ref }, { children: items.map(function (item) {
            var _a;
            return (_jsx(CollapsibleItem, { arrowPlacement: arrowPlacement, groupState: groupState, isDisabled: (_a = props.isDisabled) !== null && _a !== void 0 ? _a : disabledKeysSet.has(item.id), item: item, style: style }, item.id));
        }) })));
}
//# sourceMappingURL=collapsible.js.map
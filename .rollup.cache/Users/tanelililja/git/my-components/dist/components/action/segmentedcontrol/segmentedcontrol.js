import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { classNames } from '../../../utils/classnames';
import { SegmentedControlItem } from './segmentedcontrolitem';
import { safeCall } from '../../../utils/functionhelper';
export function SegmentedControl(_a) {
    var className = _a.className, items = _a.items, onSelectionChange = _a.onSelectionChange, ref = _a.ref, props = __rest(_a, ["className", "items", "onSelectionChange", "ref"]);
    var initialSelectedKey = props.selectedKey;
    var _b = useState(initialSelectedKey !== null && initialSelectedKey !== void 0 ? initialSelectedKey : (items.length > 0 ? items[0].id : null)), selectedKey = _b[0], setSelectedKey = _b[1];
    var onChange = function (id) {
        setSelectedKey(id);
        safeCall(onSelectionChange, id);
    };
    useEffect(function () {
        setSelectedKey(initialSelectedKey !== null && initialSelectedKey !== void 0 ? initialSelectedKey : (items.length > 0 ? items[0].id : null));
    }, [initialSelectedKey]);
    return (_jsx("div", __assign({ className: classNames('segmented-control', className), ref: ref, role: "group" }, { children: items.map(function (_a) {
            var id = _a.id, label = _a.label, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, startIconName = _a.startIconName;
            var isSelected = selectedKey === id;
            return (_jsx(SegmentedControlItem, { "aria-label": ariaLabel, "aria-pressed": isSelected, "data-selected": isSelected || undefined, isDisabled: isDisabled, label: label, onPress: function () { return onChange(id); }, startIconName: startIconName }, id));
        }) })));
}
//# sourceMappingURL=segmentedcontrol.js.map
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from 'react-aria-components';
import { Label } from '../../text';
import { Size } from '../../../constants';
import { Icon } from '../../media';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback';
export function SegmentedControlItem(_a) {
    var label = _a.label, startIconName = _a.startIconName, props = __rest(_a, ["label", "startIconName"]);
    var buttonElement = (_jsxs(Button, __assign({}, props, { className: "segmented-control-item" }, { children: [startIconName && _jsx(Icon, { className: "segmented-control-item__icon", name: startIconName }), label && (_jsx(Label, __assign({ className: "segmented-control-item__label", size: Size.md }, { children: label })))] })));
    if (label) {
        return buttonElement;
    }
    return (_jsxs(TooltipTrigger, { children: [buttonElement, _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: props['aria-label'] }))] }));
}
//# sourceMappingURL=segmentedcontrolitem.js.map
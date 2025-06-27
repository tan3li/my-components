import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Icon, IconSize } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
export function StepIndicator(_a) {
    var isActive = _a.isActive, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, text = _a.text;
    return (_jsx("div", __assign({ className: classNames('step-indicator', {
            'step-indicator--completed': isCompleted,
            'step-indicator--active': isActive,
            'step-indicator--disabled': isDisabled
        }) }, { children: isCompleted ?
            _jsx(Icon, { name: iconNames.CheckFilled, size: IconSize.SM })
            : _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: text }) })) })));
}
//# sourceMappingURL=stepindicator.js.map
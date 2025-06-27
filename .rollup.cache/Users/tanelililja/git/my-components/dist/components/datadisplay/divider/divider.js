import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Size } from '../../../constants/size.js';
import { classNames } from '../../../utils/classnames.js';
import { Label } from '../../text/label/label.js';
import { AriaRole } from '../../../constants/ariarole.js';
import { Orientation } from '../../../constants/orientation.js';
import { Separator } from 'react-aria-components';
import { Alignment } from '../../../constants/alignment.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
export function Divider(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.center : _b, className = _a.className, _c = _a.orientation, orientation = _c === void 0 ? Orientation.horizontal : _c, ref = _a.ref, size = _a.size, style = _a.style, text = _a.text;
    var cssClassName = classNames("divider divider--".concat(size, " divider--").concat(orientation, " divider--align-").concat(alignment), className);
    if (!text) {
        return (_jsx(Separator, { className: cssClassName, elementType: HTMLElementType.Div, orientation: orientation, style: style }));
    }
    return (_jsx("div", __assign({ "aria-orientation": orientation, className: cssClassName, ref: ref, role: AriaRole.separator, style: style }, { children: _jsx(Label, __assign({ className: "divider__label", size: Size.sm }, { children: text })) })));
}
//# sourceMappingURL=divider.js.map
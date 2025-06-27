import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
export function CalendarHeaderCell(_a) {
    var ariaLabel = _a["aria-label"], children = _a.children;
    return (_jsx("th", __assign({ "aria-label": ariaLabel, className: "calendar-grid__header-cell" }, { children: children && (_jsx("div", __assign({ className: "calendar-grid__header-cell-content" }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: children }) })) }))) })));
}
//# sourceMappingURL=calendarheadercell.js.map
import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
export function CalendarWeekNumberCell(_a) {
    var children = _a.children;
    return (_jsx("td", __assign({ className: "calendar-grid__week-nr-cell" }, { children: _jsx("div", __assign({ className: "calendar-grid__week-nr-cell-content" }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: children }) })) })) })));
}
//# sourceMappingURL=calendarweeknumbercell.js.map
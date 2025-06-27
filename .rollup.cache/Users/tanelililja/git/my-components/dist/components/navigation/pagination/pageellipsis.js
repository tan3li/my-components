import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Menu } from '../../action/index.js';
import { Button } from 'react-aria-components';
export function PageEllipsis(_a) {
    var items = _a.items, onAction = _a.onAction;
    return (_jsx(Menu, __assign({ items: items, onAction: onAction }, { children: _jsx(Button, __assign({ className: "page-button" }, { children: _jsx(Label, __assign({ className: "page-button__label", size: Size.sm }, { children: "..." })) })) })));
}
//# sourceMappingURL=pageellipsis.js.map
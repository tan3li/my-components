import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
export function PageButton(_a) {
    var children = _a.children, className = _a.className, isActive = _a.isActive, props = __rest(_a, ["children", "className", "isActive"]);
    return (_jsx(Button, __assign({}, props, { className: classNames('page-button', className), "data-active": !!isActive || undefined }, { children: _jsx(Label, __assign({ className: "page-button__label", size: Size.md }, { children: _jsx("strong", { children: children }) })) })));
}
//# sourceMappingURL=pagebutton.js.map
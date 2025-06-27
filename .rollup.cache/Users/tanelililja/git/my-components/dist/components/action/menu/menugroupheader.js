import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from 'react-aria-components';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { classNames } from '../../../utils/classnames.js';
export function MenuGroupHeader(_a) {
    var children = _a.children, className = _a.className;
    return (_jsx(Header, __assign({ className: classNames('menu-group-header', className) }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: children }) })) })));
}
//# sourceMappingURL=menugroupheader.js.map
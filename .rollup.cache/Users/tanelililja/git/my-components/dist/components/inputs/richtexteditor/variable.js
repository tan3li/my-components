import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NodeViewWrapper } from '@tiptap/react';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { HTMLElementType, Size } from '../../../constants/index.js';
import { Label } from '../../text/index.js';
export function Variable(props) {
    return (_jsxs(NodeViewWrapper, __assign({ as: HTMLElementType.Span, className: "text-editor-variable" }, { children: [_jsx(Icon, { name: iconNames.Variables, size: IconSize.SM }), _jsx(Label, __assign({ size: Size.sm }, { children: _jsx("strong", { children: props.node.attrs['data-label'] }) }))] })));
}
//# sourceMappingURL=variable.js.map
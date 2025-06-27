import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useImperativeHandle, useRef } from 'react';
import { mergeProps, useButton, useFocusRing } from 'react-aria';
import { classNames } from '../../../utils/classnames.js';
import { HTMLElementType } from '../../../constants/htmlelementtype.js';
import { isFunction } from '../../../utils/functionhelper.js';
export function TriggerElement(_a) {
    var children = _a.children, className = _a.className, elementType = _a.elementType, outerRef = _a.ref, role = _a.role, style = _a.style, props = __rest(_a, ["children", "className", "elementType", "ref", "role", "style"]);
    var ElementType = elementType !== null && elementType !== void 0 ? elementType : HTMLElementType.Span;
    var ref = useRef(null);
    var _b = useFocusRing(props), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var buttonProps = useButton(__assign({ elementType: ElementType }, props), ref).buttonProps;
    var renderProps = {
        isFocused: isFocused,
        isFocusVisible: isFocusVisible
    };
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (_jsx(ElementType, __assign({}, mergeProps(buttonProps, focusProps), { className: classNames('trigger-element', className), ref: ref, role: role !== null && role !== void 0 ? role : buttonProps.role, style: __assign(__assign({}, buttonProps.style), style) }, { children: isFunction(children) ? children(renderProps) : children })));
}
//# sourceMappingURL=triggerelement.js.map
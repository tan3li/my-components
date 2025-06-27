import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDisclosureState } from 'react-stately';
import { useRef } from 'react';
import { mergeProps, useButton, useDisclosure, useFocusRing } from 'react-aria';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { useAutoHeightAnimation } from '../../../hooks/useautoheightanimation.js';
import { BodyText, Label } from '../../text/index.js';
import { HTMLElementType, Size } from '../../../constants/index.js';
export function Callout(_a) {
    var children = _a.children, className = _a.className, iconName = _a.iconName, ref = _a.ref, title = _a.title, props = __rest(_a, ["children", "className", "iconName", "ref", "title"]);
    var state = useDisclosureState(props);
    var panelRef = useRef(null);
    var triggerRef = useRef(null);
    var _b = useDisclosure(props, state, panelRef), triggerProps = _b.buttonProps, panelProps = _b.panelProps;
    var buttonProps = useButton(triggerProps, triggerRef).buttonProps;
    var _c = useFocusRing(), isFocusVisible = _c.isFocusVisible, focusProps = _c.focusProps;
    var isExpanded = state.isExpanded;
    var _d = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _d.isLoaded, animationProps = _d.props;
    return (_jsxs("div", __assign({ className: classNames('callout', className), ref: ref }, { children: [_jsxs("button", __assign({}, mergeProps(buttonProps, focusProps), { className: "callout__header", "data-focus-visible": isFocusVisible || undefined, ref: triggerRef }, { children: [_jsxs("div", __assign({ className: "callout__header-left" }, { children: [_jsx(Icon, { ariaHidden: true, className: "callout__icon", name: iconName, size: IconSize.MD }), _jsx(Label, __assign({ className: "callout__title", size: Size.md }, { children: _jsx("strong", { children: title }) }))] })), _jsx(Icon, { ariaHidden: true, className: "callout__expander-icon", name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.MD })] })), _jsx("div", __assign({}, mergeProps(panelProps, animationProps), { className: "callout__panel", ref: panelRef }, { children: (isExpanded || isLoaded) && (_jsx("div", __assign({ className: "callout__panel-content" }, { children: _jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: children })) }))) }))] })));
}
//# sourceMappingURL=callout.js.map
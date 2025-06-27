import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { ClearButton } from '../../action/index.js';
import { Button } from 'react-aria-components';
import { KeyboardEventKey, Size } from '../../../constants/index.js';
import { HelpText, HelpTextVariant, Label } from '../../text/index.js';
import { Icon, iconNames } from '../../media/index.js';
import { useFieldHelpText } from '../../../hooks/usefieldhelptext.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function FilterButton(_a) {
    var children = _a.children, className = _a.className, clearButtonProps = _a.clearButtonProps, helpText = _a.helpText, isActive = _a.isActive, isDisabled = _a.isDisabled, _b = _a.isFocusable, isFocusable = _b === void 0 ? true : _b, isOpen = _a.isOpen, isSkeleton = _a.isSkeleton, label = _a.label, labelProps = _a.labelProps, onOpenChange = _a.onOpenChange, ref = _a.ref, showClearButton = _a.showClearButton, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, startIconName = _a.startIconName, toggleButtonProps = _a.toggleButtonProps;
    var isClearable = showClearButton && isActive;
    var _d = useFieldHelpText({ helpText: helpText }), fieldProps = _d.fieldProps, helpTextProps = _d.helpTextProps;
    if (isSkeleton) {
        return _jsx(SkeletonField, { className: "skeleton-filter-button", hasHelpText: !!helpText, size: size });
    }
    return (_jsxs("div", __assign({ className: classNames("filter-button filter-button--".concat(size), className), "data-clearable": !!isClearable || undefined, ref: ref }, { children: [_jsx(Label, __assign({}, labelProps, { className: "visually-hidden", size: Size.lg }, { children: label })), _jsxs("div", __assign({ className: classNames('filter-toggle-button-wrapper', className) }, { children: [_jsx(Button, __assign({}, fieldProps, toggleButtonProps, { className: "filter-toggle-button filter-toggle-button--".concat(size), "data-active": !!isActive || undefined, "data-focusable": !!isFocusable || undefined, excludeFromTabOrder: !isFocusable, isDisabled: isDisabled, onKeyDown: function (e) {
                            var _a;
                            var eventKey = e.key;
                            if (eventKey === KeyboardEventKey.ArrowDown) {
                                e.preventDefault();
                                onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
                            }
                            else if (eventKey === KeyboardEventKey.Escape) {
                                onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
                            }
                            (_a = toggleButtonProps === null || toggleButtonProps === void 0 ? void 0 : toggleButtonProps.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(toggleButtonProps, e);
                        }, onPress: function (e) {
                            var _a;
                            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!isOpen);
                            (_a = toggleButtonProps === null || toggleButtonProps === void 0 ? void 0 : toggleButtonProps.onPress) === null || _a === void 0 ? void 0 : _a.call(toggleButtonProps, e);
                        }, preventFocusOnPress: !isFocusable }, { children: _jsxs("span", __assign({ className: "filter-toggle-button__content" }, { children: [startIconName && (_jsx(Icon, { ariaHidden: true, className: "filter-toggle-button__start-icon", name: startIconName })), _jsx(Label, __assign({ className: "filter-toggle-button__label", size: size === Size.xs ? Size.md : Size.lg }, { children: children })), isFocusable && (_jsx(Icon, { className: classNames("filter-toggle-button__expand-icon filter-toggle-button__expand-icon--".concat(size), {
                                        'filter-toggle-button__expand-icon--disabled': isDisabled
                                    }), name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }))] })) })), isClearable && (_jsx(ClearButton, __assign({ className: "filter-clear-button filter-clear-button--".concat(size), isDisabled: isDisabled }, clearButtonProps)))] })), helpText && (_jsx(HelpText, __assign({}, helpTextProps, { showIcon: showHelpTextIcon, variant: isDisabled ? HelpTextVariant.Disabled : HelpTextVariant.Neutral }, { children: helpText })))] })));
}
//# sourceMappingURL=filterbutton.js.map
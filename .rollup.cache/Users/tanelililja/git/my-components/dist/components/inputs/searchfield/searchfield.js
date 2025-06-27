import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, SearchField as ReactAriaSearchField } from 'react-aria-components';
import { classNames } from '../../../utils/classnames.js';
import { iconNames } from '../../media/icon/icons.js';
import { Icon } from '../../media/icon/icon.js';
import { useFocusRing, useHover } from 'react-aria';
import { Size } from '../../../constants/size.js';
import { ClearButton } from '../../action/clearbutton/clearbutton.js';
import { HelpText } from '../../text/helptext/helptext.js';
import { LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
export function SearchField(_a) {
    var className = _a.className, helpText = _a.helpText, isSkeleton = _a.isSkeleton, placeholder = _a.placeholder, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b, props = __rest(_a, ["className", "helpText", "isSkeleton", "placeholder", "showHelpTextIcon", "size"]);
    var _c = useFocusRing({ within: true, isTextInput: false }), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible;
    var _d = useHover(props), hoverProps = _d.hoverProps, isHovered = _d.isHovered;
    if (isSkeleton) {
        return _jsx(SkeletonField, { className: "skeleton-search-field", hasHelpText: !!helpText, size: size });
    }
    return (_jsxs(ReactAriaSearchField, __assign({}, props, { className: classNames("search-field search-field--".concat(size), className) }, { children: [_jsxs("div", __assign({}, hoverProps, focusProps, { className: "search-field__content", "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined }, { children: [_jsx(Icon, { className: "search-field__search-icon", name: iconNames.MagnifyingGlass }), _jsx(Input, { className: classNames('search-field__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), placeholder: placeholder }), _jsx(ClearButton, { className: "search-field__clear-button" })] })), helpText && _jsx(HelpText, __assign({ showIcon: showHelpTextIcon }, { children: helpText }))] })));
}
//# sourceMappingURL=searchfield.js.map
import { jsx as _jsx } from "react/jsx-runtime";
import { Icon, IconSize } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
export function NavItemBadge(_a) {
    var ariaLabel = _a.ariaLabel, iconName = _a.iconName, isVisible = _a.isVisible;
    return (_jsx(Icon, { ariaLabel: ariaLabel, className: classNames('nav-item__badge', { 'nav-item__badge--visible': isVisible }), name: iconName, size: IconSize.XS }));
}
//# sourceMappingURL=navitembadge.js.map
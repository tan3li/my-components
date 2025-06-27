import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { Heading } from '../../text/index.js';
import { Breadcrumbs } from '../../navigation/index.js';
import { classNames } from '../../../utils/classnames.js';
import { SkeletonPageHeader } from '../../feedback/skeleton/skeletonpageheader.js';
export function PageHeader(_a) {
    var badge = _a.badge, buttons = _a.buttons, breadcrumbItems = _a.breadcrumbItems, className = _a.className, details = _a.details, iconName = _a.iconName, isSkeleton = _a.isSkeleton, level = _a.level, onBackPress = _a.onBackPress, ref = _a.ref, showBackButton = _a.showBackButton, style = _a.style, title = _a.title;
    var translateCommon = useTranslateCommon();
    var hasBreadcrumbs = breadcrumbItems && breadcrumbItems.length > 0;
    var hasDetails = details && details.length > 0;
    if (isSkeleton) {
        return (_jsx(SkeletonPageHeader, { hasBreadcrumbs: hasBreadcrumbs, hasDetails: hasDetails, hasIcon: !!iconName, level: level }));
    }
    return (_jsxs("div", __assign({ className: classNames('page-header', className), ref: ref, style: style }, { children: [showBackButton && (_jsx(Button, __assign({ onPress: onBackPress, size: Size.sm, startIconName: iconNames.ArrowBack, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('back') }))), _jsxs("div", __assign({ className: "page-header__content" }, { children: [hasBreadcrumbs && _jsx(Breadcrumbs, { className: "page-header__breadcrumbs", items: breadcrumbItems }), _jsxs("div", __assign({ className: "page-header__head" }, { children: [_jsxs("div", __assign({ className: "page-header__title" }, { children: [iconName && (_jsx(Icon, { className: "page-header__icon", name: iconName, size: level > 1 ? IconSize.LG : IconSize.XL })), _jsx(Heading, __assign({ className: "page-header__title-text", level: 1, size: level > 1 ? Size.sm : Size.md }, { children: title })), badge] })), buttons && buttons.length > 0 && _jsx("div", __assign({ className: "page-header__button-group" }, { children: buttons }))] })), hasDetails && _jsx("div", __assign({ className: "page-header__details" }, { children: details }))] }))] })));
}
//# sourceMappingURL=pageheader.js.map
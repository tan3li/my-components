import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { Menu } from '../../action/index.js';
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Button } from 'react-aria-components';
export var AvatarGroupLayout;
(function (AvatarGroupLayout) {
    AvatarGroupLayout["Grid"] = "grid";
    AvatarGroupLayout["Stack"] = "stack";
})(AvatarGroupLayout || (AvatarGroupLayout = {}));
var STACK_MAX_VISIBLE_COUNT = 5;
var GRID_MAX_VISIBLE_COUNT = 10;
export function AvatarGroup(_a) {
    var propsChildren = _a.children, className = _a.className, _b = _a.layout, layout = _b === void 0 ? AvatarGroupLayout.Stack : _b, maxVisibleCount = _a.maxVisibleCount, ref = _a.ref, size = _a.size;
    var children = Children.toArray(propsChildren);
    var childCount = children.length;
    var hasStackLayout = layout === AvatarGroupLayout.Stack;
    var maxCount = hasStackLayout ? STACK_MAX_VISIBLE_COUNT : (maxVisibleCount !== null && maxVisibleCount !== void 0 ? maxVisibleCount : GRID_MAX_VISIBLE_COUNT);
    var content = children.slice(0, maxCount).map(function (child, i) {
        return cloneElement(child, {
            // always ignore label and description
            description: undefined,
            isInteractive: true,
            label: undefined,
            size: size,
            style: hasStackLayout ? { zIndex: maxCount - i } : undefined
        });
    });
    if (childCount > maxCount) {
        var menuItems = children.slice(maxCount, childCount).map(function (child, i) {
            var avatarElement = child;
            var item = {
                id: i,
                name: avatarElement.props.alt,
                props: {
                    onAction: avatarElement.props.onPress,
                    prefix: cloneElement(avatarElement, {
                        // always ignore label and description
                        description: undefined,
                        isInteractive: false,
                        label: undefined,
                        onPress: undefined,
                        size: Size.xs
                    })
                }
            };
            return item;
        });
        content.push(_jsx(Menu, __assign({ items: menuItems }, { children: _jsx(Button, __assign({ className: "avatar-group__more-button avatar-group__more-button--".concat(size), style: hasStackLayout ? { zIndex: 0 } : undefined }, { children: _jsx(Label, __assign({ size: size === Size.lg ? Size.sm : Size.xs }, { children: "+".concat(childCount - maxCount) })) })) }), "more"));
    }
    return (_jsx("div", __assign({ className: classNames("avatar-group avatar-group--".concat(layout, " avatar-group--").concat(size), className), ref: ref }, { children: content })));
}
//# sourceMappingURL=avatargroup.js.map
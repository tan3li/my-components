import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement } from 'react';
import { classNames } from '../../../utils/classnames.js';
import { ListItem, ListItemStyle } from './listitem.js';
import { coreTokens } from '@tan3li/d-tokens';
import { isFunction } from '../../../utils/functionhelper.js';
export function List(_a) {
    var children = _a.children, className = _a.className, data = _a.data, idAccessor = _a.idAccessor, ref = _a.ref, showItemFooterSeparator = _a.showItemFooterSeparator, spacing = _a.spacing, _b = _a.style, style = _b === void 0 ? ListItemStyle.Card : _b;
    var defaultSpacing = style === ListItemStyle.Plain ? 0 : coreTokens.dimension.spaceSm.value;
    var commonListItemProps = {
        showFooterSeparator: showItemFooterSeparator,
        style: style
    };
    var listItems;
    if (isFunction(children)) {
        if (!data) {
            throw new Error('Must provide data prop for dynamic children.');
        }
        if (!idAccessor) {
            throw new Error('Must provide idAccessor prop for dynamic children.');
        }
        listItems = data.map(function (item) {
            var element = children(item);
            var key = isFunction(idAccessor) ? idAccessor(item) : item[idAccessor];
            if (isValidElement(element) && element.type === ListItem) {
                return cloneElement(element, __assign({ key: key }, commonListItemProps));
            }
            return (_jsx(ListItem, __assign({}, commonListItemProps, { children: element }), key));
        });
    }
    else {
        var childrenArr = Children.toArray(children);
        listItems = childrenArr.map(function (child) {
            return cloneElement(child, __assign({}, commonListItemProps));
        });
    }
    return (_jsx("ul", __assign({ className: classNames('list', className), ref: ref, style: { gap: spacing !== null && spacing !== void 0 ? spacing : defaultSpacing } }, { children: listItems })));
}
//# sourceMappingURL=list.js.map
import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from '../select/select.js';
import { expandToSelected } from './expandtoselected.js';
import { useTreeSelect } from './usetreeselect.js';
import { SelectOptionContent } from '../select/selectoptioncontent.js';
export function TreeSelect(_a) {
    var _b;
    var defaultExpandedKeys = _a.defaultExpandedKeys, onExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, propsRenderItemContent = _a.renderItemContent, props = __rest(_a, ["defaultExpandedKeys", "onExpandedChange", "onLoadChildren", "renderItemContent"]);
    var propsItems = props.items;
    var propsExpandedKeys = props.expandedKeys;
    var _c = useTreeSelect({
        defaultExpandedKeys: (_b = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _b !== void 0 ? _b : expandToSelected(propsItems, new Set(), props.value),
        expandedKeys: propsExpandedKeys,
        items: propsItems,
        onExpandedChange: onExpandedChange,
        onInputChange: props.onInputChange,
        onKeyDown: props.onKeyDown,
        onLoadChildren: onLoadChildren
    }), items = _c.items, onKeyDown = _c.onKeyDown, onInputChange = _c.onInputChange, expandedKeys = _c.expandedKeys, loadingKeys = _c.loadingKeys, onToggleItem = _c.onToggleItem;
    // eslint-disable-next-line sonarjs/function-return-type
    var renderItemContent = function (optionContentProps) {
        var item = optionContentProps.item;
        var value = item.value;
        var treeOptionContentProps = __assign(__assign({}, optionContentProps), { isExpanded: expandedKeys.has(value), isLoading: loadingKeys.has(value), onToggleItem: onToggleItem });
        if (propsRenderItemContent) {
            return propsRenderItemContent(treeOptionContentProps);
        }
        return _jsx(SelectOptionContent, __assign({}, treeOptionContentProps));
    };
    return (_jsx(Select, __assign({}, props, { expandedKeys: expandedKeys, items: items, onInputChange: onInputChange, onKeyDown: onKeyDown, renderItemContent: renderItemContent })));
}
//# sourceMappingURL=treeselect.js.map
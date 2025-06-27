import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { MultiSelect } from '../multiselect/multiselect.js';
import { useTreeSelect } from '../treeselect/usetreeselect.js';
import { SelectOptionContent } from '../select/selectoptioncontent.js';
export function TreeMultiSelect(_a) {
    var defaultExpandedKeys = _a.defaultExpandedKeys, onExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, propsRenderItemContent = _a.renderItemContent, props = __rest(_a, ["defaultExpandedKeys", "onExpandedChange", "onLoadChildren", "renderItemContent"]);
    var _b = useTreeSelect({
        defaultExpandedKeys: defaultExpandedKeys,
        expandedKeys: props.expandedKeys,
        items: props.items,
        onExpandedChange: onExpandedChange,
        onInputChange: props.onInputChange,
        onKeyDown: props.onKeyDown,
        onLoadChildren: onLoadChildren
    }), items = _b.items, onKeyDown = _b.onKeyDown, onInputChange = _b.onInputChange, expandedKeys = _b.expandedKeys, loadingKeys = _b.loadingKeys, onToggleItem = _b.onToggleItem;
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
    return (_jsx(MultiSelect, __assign({}, props, { expandedKeys: expandedKeys, items: items, onInputChange: onInputChange, onKeyDown: onKeyDown, renderItemContent: renderItemContent })));
}
//# sourceMappingURL=treemultiselect.js.map
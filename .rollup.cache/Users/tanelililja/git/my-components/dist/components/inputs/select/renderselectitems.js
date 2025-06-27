import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Icon, iconNames } from '../../media/index.js';
import { SelectOption } from './selectoption.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { SpecialSelectItemKey } from './specialselectitemkey.js';
import { Divider } from '../../datadisplay/index.js';
import { SelectOptionContent } from './selectoptioncontent.js';
export function renderSelectItems(_a) {
    var createText = _a.createText, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, itemClassName = _a.itemClassName, items = _a.items, renderItemContent = _a.renderItemContent, selectedItem = _a.selectedItem, size = _a.size;
    var itemIndex = 0;
    var renderItem = function (item, level) {
        var itemValue = item.value;
        var isSelected = itemValue === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value);
        return (_jsx(SelectOption, { disabledKeys: disabledKeys, getItemProps: getItemProps, highlightSource: highlightSource, isFocused: highlightedIndex === itemIndex, isSelected: isSelected, item: item, itemClassName: itemClassName, itemIndex: itemIndex, level: level, renderItemContent: renderItemContent, size: size }, itemValue));
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        var _loop_1 = function (i, len) {
            var item = itemArr[i];
            var itemValue = item.value;
            var itemText = item.text;
            var subItems = item.items;
            var children = item.children, hasSeparator = item.hasSeparator;
            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }
                itemNodes.push(_jsxs("section", { children: [_jsx("header", __assign({ className: "select-header" }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: itemText })) })), renderItems(subItems, level)] }, itemValue));
            }
            else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if ((expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(itemValue)) !== false) {
                    itemNodes.push.apply(itemNodes, renderItems(children, level + 1));
                }
            }
            else if (itemValue === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(_jsx(SelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === itemIndex, item: item, itemIndex: itemIndex, level: level, renderItemContent: function (optionContentProps) { return (_jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: _jsx(Icon, { className: "select-option__start-icon", name: iconNames.AddCircleFilled }), label: _jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: isFunction(createText) ? createText(itemText) : createText })) }))); }, size: size }, itemValue));
                itemIndex++;
            }
            else {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
            }
            if (hasSeparator) {
                itemNodes.push(_jsx(Divider, { size: Size.sm }, "".concat(itemValue, "--separator")));
            }
        };
        for (var i = 0, len = itemArr.length; i < len; i++) {
            _loop_1(i, len);
        }
        return itemNodes;
    };
    return renderItems(items, 0);
}
//# sourceMappingURL=renderselectitems.js.map
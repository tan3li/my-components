import { __assign } from "tslib";
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { SelectOption } from '../select/selectoption.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { MultiSelectHeader } from './multiselectheader.js';
import { SpecialSelectItemKey } from '../select/index.js';
import { Divider } from '../../datadisplay/index.js';
import { isAllItemsSelected } from './isallitemsselected.js';
import { SelectOptionContent } from '../select/selectoptioncontent.js';
export function renderMultiSelectItems(_a) {
    var createText = _a.createText, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, itemClassName = _a.itemClassName, items = _a.items, renderItemContent = _a.renderItemContent, selectedItemsMap = _a.selectedItemsMap, size = _a.size;
    var itemIndex = 0;
    var renderItem = function (item, level) {
        var itemValue = item.value;
        var isSelected = selectedItemsMap.has(itemValue);
        return (_jsx(SelectOption, { disabledKeys: disabledKeys, getItemProps: getItemProps, highlightSource: highlightSource, isFocused: highlightedIndex === itemIndex, isSelected: isSelected, item: item, itemClassName: itemClassName, itemIndex: itemIndex, level: level, renderItemContent: renderItemContent, size: size }, itemValue));
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        var _loop_1 = function (i, len) {
            var item = itemArr[i];
            var value = item.value, text = item.text, children = item.children, hasSeparator = item.hasSeparator;
            var subItems = item.items;
            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }
                var isSelected = isAllItemsSelected(subItems, selectedItemsMap);
                itemNodes.push(_createElement(MultiSelectHeader, __assign({}, getItemProps({ item: item, index: itemIndex }), { isDisabled: disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(value), isFocused: highlightedIndex === itemIndex, isSelected: isSelected, key: value }),
                    _jsx(Label, __assign({ size: Size.sm }, { children: text })),
                    isSelected && (_jsx(Icon, { "aria-hidden": true, className: "multiselect-header__check", name: iconNames.InputCheck, size: IconSize.MD }))));
                itemIndex++;
                itemNodes.push.apply(itemNodes, renderItems(subItems, level));
            }
            else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if ((expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(value)) !== false) {
                    itemNodes.push.apply(itemNodes, renderItems(children, level + 1));
                }
            }
            else if (value === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(_jsx(SelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === itemIndex, item: item, itemIndex: itemIndex, level: level, renderItemContent: function (optionContentProps) { return (_jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: _jsx(Icon, { className: "select-option__start-icon", name: iconNames.AddCircleFilled }), label: _jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: isFunction(createText) ? createText(text) : createText })) }))); }, size: size }, value));
                itemIndex++;
            }
            else {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
            }
            if (hasSeparator) {
                itemNodes.push(_jsx(Divider, { size: Size.sm }, "".concat(value, "--separator")));
            }
        };
        for (var i = 0, len = itemArr.length; i < len; i++) {
            _loop_1(i, len);
        }
        return itemNodes;
    };
    return renderItems(items, 0);
}
//# sourceMappingURL=rendermultiselectitems.js.map
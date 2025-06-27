import { __rest } from "tslib";
import { useCallback, useEffect, useState } from 'react';
import { useFilter } from 'react-aria';
import { KeyboardEventKey } from '../../../constants/keyboardeventkey.js';
import { InputChangeTriggerAction } from '../select/selectprops.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { filterItems } from '../select/filteritems.js';
import { expandAll } from './expandall.js';
export function useTreeSelect(_a) {
    var _b;
    var defaultExpandedKeys = _a.defaultExpandedKeys, propsExpandedKeys = _a.expandedKeys, items = _a.items, propsOnExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, options = __rest(_a, ["defaultExpandedKeys", "expandedKeys", "items", "onExpandedChange", "onLoadChildren"]);
    var _c = useState((_b = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _b !== void 0 ? _b : new Set()), expandedKeys = _c[0], setExpandedKeys = _c[1];
    var _d = useState(new Set()), loadingKeys = _d[0], setLoadingKeys = _d[1];
    var _e = useState(null), filteredItems = _e[0], setFilteredItems = _e[1];
    var currentItems = filteredItems !== null && filteredItems !== void 0 ? filteredItems : items;
    var localFilter = useFilter({ sensitivity: 'base' });
    var onExpandedChange = function (newExpandedKeys) {
        setExpandedKeys(newExpandedKeys);
        safeCall(propsOnExpandedChange, newExpandedKeys);
    };
    var onToggleItem = useCallback(function (item) {
        var _a;
        var value = item.value;
        var newExpandedKeys = new Set(expandedKeys);
        if (newExpandedKeys.has(value)) {
            newExpandedKeys.delete(value);
        }
        else {
            newExpandedKeys.add(value);
        }
        onExpandedChange(newExpandedKeys);
        if (onLoadChildren && !loadingKeys.has(value) && ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            setLoadingKeys(new Set(loadingKeys).add(value));
            onLoadChildren(item).finally(function () {
                setLoadingKeys(function (prevLoadingKeys) {
                    var newLoadingKeys = new Set(prevLoadingKeys);
                    newLoadingKeys.delete(value);
                    return newLoadingKeys;
                });
            });
        }
    }, [loadingKeys, expandedKeys, items]);
    var onKeyDown = useCallback(function (e, highlightedItem) {
        var continueFlow = safeCall(options.onKeyDown, e, highlightedItem);
        if (continueFlow === false) {
            return false;
        }
        switch (e.key) {
            case KeyboardEventKey.ArrowLeft:
                if (highlightedItem) {
                    e.preventDefault();
                }
                if ((highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.children) && expandedKeys.has(highlightedItem.value)) {
                    onToggleItem(highlightedItem);
                }
                return false;
            case KeyboardEventKey.ArrowRight:
                if (highlightedItem) {
                    e.preventDefault();
                }
                if ((highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.children) && !expandedKeys.has(highlightedItem.value)) {
                    onToggleItem(highlightedItem);
                }
                return false;
            default:
                return true;
        }
    }, [expandedKeys, onToggleItem]);
    var onInputChange = useCallback(function (inputValue, inputChangeTrigger) {
        safeCall(options.onInputChange, inputValue, inputChangeTrigger);
        if (!options.onInputChange) {
            var newFilteredItems = inputValue ? filterItems(items, inputValue, localFilter) : null;
            setFilteredItems(newFilteredItems);
            if (inputChangeTrigger === InputChangeTriggerAction.Input) {
                onExpandedChange(newFilteredItems ? expandAll(newFilteredItems, new Set()) : new Set());
            }
        }
    }, [items]);
    useEffect(function () {
        var _a;
        setExpandedKeys((_a = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _a !== void 0 ? _a : new Set());
    }, [propsExpandedKeys]);
    return {
        items: currentItems,
        onInputChange: onInputChange,
        onToggleItem: onToggleItem,
        onKeyDown: onKeyDown,
        expandedKeys: expandedKeys,
        loadingKeys: loadingKeys
    };
}
//# sourceMappingURL=usetreeselect.js.map
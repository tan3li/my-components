import {KeyboardEvent, useCallback, useEffect, useState} from 'react';
import {useFilter} from 'react-aria';
import {KeyboardEventKey} from '../../../constants/keyboardeventkey.js';
import {InputChangeTriggerAction} from '../select/selectprops.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {filterItems} from '../select/filteritems.js';
import {expandAll} from './expandall.js';
import {SelectItemBase} from '../select/index.js';

interface UseTreeSelectOptions<TItem extends SelectItemBase<TItem>> {
    defaultExpandedKeys?: Set<TItem['value']>;
    expandedKeys?: Set<TItem['value']>;
    items: TItem[];
    onExpandedChange?: (expandedKeys: Set<TItem['value']>) => void;
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    onLoadChildren?: (item: TItem) => Promise<void>;
}

export function useTreeSelect<TItem extends SelectItemBase<TItem>>({
    defaultExpandedKeys,
    expandedKeys: propsExpandedKeys,
    items,
    onExpandedChange: propsOnExpandedChange,
    onLoadChildren,
    ...options
}: UseTreeSelectOptions<TItem>) {
    const [expandedKeys, setExpandedKeys] = useState<Set<TItem['value']>>(
        propsExpandedKeys ?? defaultExpandedKeys ?? new Set()
    );
    const [loadingKeys, setLoadingKeys] = useState<Set<TItem['value']>>(new Set());
    const [filteredItems, setFilteredItems] = useState<TItem[] | null>(null);
    const currentItems = filteredItems ?? items;
    const localFilter = useFilter({sensitivity: 'base'});

    const onExpandedChange = (newExpandedKeys: Set<TItem['value']>) => {
        setExpandedKeys(newExpandedKeys);
        safeCall(propsOnExpandedChange, newExpandedKeys);
    };

    const onToggleItem = useCallback(
        (item: TItem) => {
            const {value} = item;
            const newExpandedKeys = new Set(expandedKeys);

            if (newExpandedKeys.has(value)) {
                newExpandedKeys.delete(value);
            } else {
                newExpandedKeys.add(value);
            }

            onExpandedChange(newExpandedKeys);

            if (onLoadChildren && !loadingKeys.has(value) && item.children?.length === 0) {
                setLoadingKeys(new Set(loadingKeys).add(value));

                onLoadChildren(item).finally(() => {
                    setLoadingKeys((prevLoadingKeys) => {
                        const newLoadingKeys = new Set(prevLoadingKeys);

                        newLoadingKeys.delete(value);

                        return newLoadingKeys;
                    });
                });
            }
        },
        [loadingKeys, expandedKeys, items]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent, highlightedItem?: TItem) => {
            const continueFlow = safeCall(options.onKeyDown, e, highlightedItem);

            if (continueFlow === false) {
                return false;
            }

            switch (e.key) {
                case KeyboardEventKey.ArrowLeft:
                    if (highlightedItem) {
                        e.preventDefault();
                    }
                    if (highlightedItem?.children && expandedKeys.has(highlightedItem.value)) {
                        onToggleItem(highlightedItem);
                    }

                    return false;
                case KeyboardEventKey.ArrowRight:
                    if (highlightedItem) {
                        e.preventDefault();
                    }
                    if (highlightedItem?.children && !expandedKeys.has(highlightedItem.value)) {
                        onToggleItem(highlightedItem);
                    }

                    return false;
                default:
                    return true;
            }
        },
        [expandedKeys, onToggleItem]
    );

    const onInputChange = useCallback(
        (inputValue: string, inputChangeTrigger: InputChangeTriggerAction) => {
            safeCall(options.onInputChange, inputValue, inputChangeTrigger);

            if (!options.onInputChange) {
                const newFilteredItems = inputValue ? filterItems(items, inputValue, localFilter) : null;

                setFilteredItems(newFilteredItems);

                if (inputChangeTrigger === InputChangeTriggerAction.Input) {
                    onExpandedChange(newFilteredItems ? expandAll(newFilteredItems, new Set()) : new Set());
                }
            }
        },
        [items]
    );

    useEffect(() => {
        setExpandedKeys(propsExpandedKeys ?? defaultExpandedKeys ?? new Set());
    }, [propsExpandedKeys]);

    return {
        items: currentItems,
        onInputChange,
        onToggleItem,
        onKeyDown,
        expandedKeys,
        loadingKeys
    };
}

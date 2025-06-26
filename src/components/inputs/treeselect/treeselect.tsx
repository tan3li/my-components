import {Select} from '../select/select.js';
import {SelectProps} from '../select/selectprops.js';
import {expandToSelected} from './expandtoselected.js';
import {useTreeSelect} from './usetreeselect.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from '../select/index.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {SelectOptionContent} from '../select/selectoptioncontent.js';

export interface TreeSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends SelectProps<P, TItem> {
    /**
     * Set of item keys to expand by default.
     */
    defaultExpandedKeys?: Set<TItem['value']>;
    /**
     * Handler that is called when item is expanded/collapsed.
     */
    onExpandedChange?: (expandedKeys: Set<TItem['value']>) => void;
    /**
     * Handler that is called when item is expanded, and it has empty children.
     */
    onLoadChildren?: (item: TItem) => Promise<void>;
}

export function TreeSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    defaultExpandedKeys,
    onExpandedChange,
    onLoadChildren,
    renderItemContent: propsRenderItemContent,
    ...props
}: TreeSelectProps<P, TItem>) {
    const propsItems = props.items;
    const propsExpandedKeys = props.expandedKeys;
    const {items, onKeyDown, onInputChange, expandedKeys, loadingKeys, onToggleItem} = useTreeSelect({
        defaultExpandedKeys:
            propsExpandedKeys ?? defaultExpandedKeys ?? expandToSelected(propsItems, new Set(), props.value),
        expandedKeys: propsExpandedKeys,
        items: propsItems,
        onExpandedChange,
        onInputChange: props.onInputChange,
        onKeyDown: props.onKeyDown,
        onLoadChildren
    });

    // eslint-disable-next-line sonarjs/function-return-type
    const renderItemContent = (optionContentProps: SelectOptionContentProps<TItem>) => {
        const item = optionContentProps.item;
        const {value} = item;
        const treeOptionContentProps: SelectOptionContentProps<TItem> = {
            ...optionContentProps,
            isExpanded: expandedKeys.has(value),
            isLoading: loadingKeys.has(value),
            onToggleItem
        };

        if (propsRenderItemContent) {
            return propsRenderItemContent(treeOptionContentProps);
        }

        return <SelectOptionContent {...treeOptionContentProps} />;
    };

    return (
        <Select
            {...props}
            expandedKeys={expandedKeys}
            items={items}
            onInputChange={onInputChange}
            onKeyDown={onKeyDown}
            renderItemContent={renderItemContent}
        />
    );
}

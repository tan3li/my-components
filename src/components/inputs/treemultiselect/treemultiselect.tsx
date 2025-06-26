import {MultiSelect, MultiSelectProps} from '../multiselect/multiselect.js';
import {useTreeSelect} from '../treeselect/usetreeselect.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from '../select/index.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {SelectOptionContent} from '../select/selectoptioncontent.js';

export interface TreeMultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends MultiSelectProps<P, TItem> {
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

export function TreeMultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    defaultExpandedKeys,
    onExpandedChange,
    onLoadChildren,
    renderItemContent: propsRenderItemContent,
    ...props
}: TreeMultiSelectProps<P, TItem>) {
    const {items, onKeyDown, onInputChange, expandedKeys, loadingKeys, onToggleItem} = useTreeSelect({
        defaultExpandedKeys,
        expandedKeys: props.expandedKeys,
        items: props.items,
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
        <MultiSelect
            {...props}
            expandedKeys={expandedKeys}
            items={items}
            onInputChange={onInputChange}
            onKeyDown={onKeyDown}
            renderItemContent={renderItemContent}
        />
    );
}

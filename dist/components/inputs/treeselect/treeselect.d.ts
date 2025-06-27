import { SelectProps } from '../select/selectprops.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectItemBase } from '../select/index.js';
export interface TreeSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
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
export declare function TreeSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ defaultExpandedKeys, onExpandedChange, onLoadChildren, renderItemContent: propsRenderItemContent, ...props }: TreeSelectProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=treeselect.d.ts.map
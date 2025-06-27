/// <reference types="react" />
import { UseComboboxHighlightedIndexChange, UseSelectHighlightedIndexChange } from 'downshift';
import { SelectItemBase } from './selectitem.js';
import { InteractionSource } from '../../../constants/interactionsource.js';
export declare function useSelectItemHighlight<TItem extends SelectItemBase<TItem>>(): {
    onHighlightedIndexChange: (changes: UseComboboxHighlightedIndexChange<TItem> | UseSelectHighlightedIndexChange<TItem>) => void;
    highlightedIndex: number;
    highlightSource: InteractionSource;
    setHighlightSource: import("react").Dispatch<import("react").SetStateAction<InteractionSource>>;
    setHighlightedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
//# sourceMappingURL=useselectitemhighlight.d.ts.map
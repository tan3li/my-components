/// <reference types="react" />
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectItemBase } from './selectitem.js';
import { SelectProps } from './selectprops.js';
export declare function useSelectCommon<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ allowCreate, changeCallback, changeParams, dataState, expandedKeys, helpText, items, isInvalid, isLoading, onFocusChange, text, value, ...props }: SelectProps<P, TItem>): {
    focusProps: DOMAttributes;
    isFocused: any;
    isFocusVisible: any;
    hoverProps: any;
    isHovered: any;
    hasError: boolean;
    isReadOnly: boolean;
    setIsOpen: (value: boolean, ...args: any[]) => void;
    isOpen: boolean;
    selectedItem: TItem | null;
    inputValue: string;
    setInputValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    setFilteredItems: import("react").Dispatch<import("react").SetStateAction<TItem[] | null>>;
    popoverRef: import("react").RefObject<HTMLDivElement>;
    listBoxRef: import("react").RefObject<HTMLDivElement>;
    triggerContentRef: import("react").RefObject<HTMLDivElement>;
    localFilter: any;
    updateMenuWidth: () => void;
    onSelectionChange: (newSelectedItem: TItem | null) => void;
    flatItems: TItem[];
    menuWidth: import("csstype").Property.Width<string | number>;
    itemsToRender: TItem[];
    fieldProps: {
        'aria-describedby': any;
    };
    helpTextProps: {
        id: any;
    };
    onHighlightedIndexChange: (changes: any) => void;
    highlightedIndex: number;
    highlightSource: import("../../../constants/interactionsource.js").InteractionSource;
};
//# sourceMappingURL=useselectcommon.d.ts.map
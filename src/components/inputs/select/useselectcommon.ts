import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from './selectitem.js';
import {SelectChangeItem, SelectProps} from './selectprops.js';
import {mergeProps, useFilter, useFocusRing, useHover} from 'react-aria';
import {useDataState} from '../../../hooks/usedatastate.js';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {hasItemWithText} from './hasitemwithtext.js';
import {SpecialSelectItemKey} from './specialselectitemkey.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {createFlatSelectItemList} from './createflatselectitemlist.js';
import {useResizeObserver} from '@react-aria/utils';
import {useFieldHelpText} from '../../../hooks/usefieldhelptext.js';
import {useScrollToSelectedOption} from './usescrolltoselectedoption.js';
import {isEmptyString} from '../../../utils/objecthelper.js';
import {DOMAttributes} from '@react-types/shared';
import {useNonModalPopoverInModalFix} from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import {useSelectItemHighlight} from './useselectitemhighlight.js';
import {useControlledState} from '../../../hooks/usecontrolledstate.js';

export function useSelectCommon<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    allowCreate,
    changeCallback,
    changeParams,
    dataState,
    expandedKeys,
    helpText,
    items,
    isInvalid,
    isLoading,
    onFocusChange,
    text,
    value,
    ...props
}: SelectProps<P, TItem>) {
    const triggerContentRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const listBoxRef = useRef<HTMLDivElement>(null);
    const {focusProps: baseFocusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const focusProps: DOMAttributes = mergeProps(baseFocusProps, {
        onBlur: () => onFocusChange?.(false),
        onFocus: () => onFocusChange?.(true)
    });
    const {hoverProps, isHovered} = useHover(props);
    const {hasError, isReadOnly} = useDataState(dataState, isInvalid, props.isReadOnly);
    const {fieldProps, helpTextProps} = useFieldHelpText({
        dataState,
        helpText,
        isInvalid
    });
    const [isOpen, setIsOpen] = useControlledState(false, props.isOpen, props.onOpenChange);
    const {onHighlightedIndexChange, highlightedIndex, highlightSource} = useSelectItemHighlight();
    const [dynamicMenuWidth, setDynamicMenuWidth] = useState(0);
    const [selectedItem, setSelectedItem] = useState<TItem | null>(
        value && text ? ({value, text} as unknown as TItem) : null
    );
    const [inputValue, setInputValue] = useState(text ?? '');
    const [filteredItems, setFilteredItems] = useState<TItem[] | null>(null);
    const localFilter = useFilter({sensitivity: 'base'});
    const itemsToRender = useMemo(() => {
        const baseItems = (filteredItems ?? items).slice();

        if (allowCreate && inputValue && isOpen && !hasItemWithText(items, inputValue)) {
            baseItems.push({value: SpecialSelectItemKey.CREATABLE, text: inputValue} as TItem);
        }

        return baseItems;
    }, [filteredItems, items, allowCreate, inputValue, isOpen]);

    const updateMenuWidth = () => {
        const content = triggerContentRef.current;

        if (content) {
            const {width} = content.getBoundingClientRect();

            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };

    const onSelectionChange = (newSelectedItem: TItem | null) => {
        safeCall(props.onSelectionChange, newSelectedItem ? newSelectedItem.value : null);
        setSelectedItem(newSelectedItem);

        if (newSelectedItem) {
            safeCall(changeCallback, {...changeParams, ...newSelectedItem} as P & SelectChangeItem<TItem>);
        } else {
            safeCall(changeCallback, {...changeParams, value: null} as P & SelectChangeItem<TItem>);
        }
    };

    const flatItems = useMemo(
        () => createFlatSelectItemList(itemsToRender, false, expandedKeys),
        [itemsToRender, expandedKeys]
    );

    const onResize = useCallback(() => {
        updateMenuWidth();
    }, [triggerContentRef]);

    useResizeObserver({ref: triggerContentRef, onResize});

    useScrollToSelectedOption({isLoading, isOpen, menuRef: listBoxRef});

    useNonModalPopoverInModalFix(isOpen, triggerContentRef, popoverRef);

    useEffect(() => {
        if (selectedItem?.value !== (value ?? undefined) || selectedItem?.text !== text) {
            setSelectedItem(value && text ? ({value, text} as unknown as TItem) : null);
        }
        setInputValue(text ?? '');
    }, [value, text]);

    let menuWidth = props.menuWidth;

    if (isEmptyString(menuWidth)) {
        menuWidth = `${dynamicMenuWidth}px`;
    }

    return {
        focusProps,
        isFocused,
        isFocusVisible,
        hoverProps,
        isHovered,
        hasError,
        isReadOnly,
        setIsOpen,
        isOpen,
        selectedItem,
        inputValue,
        setInputValue,
        setFilteredItems,
        popoverRef,
        listBoxRef,
        triggerContentRef,
        localFilter,
        updateMenuWidth,
        onSelectionChange,
        flatItems,
        menuWidth,
        itemsToRender,
        fieldProps,
        helpTextProps,
        onHighlightedIndexChange,
        highlightedIndex,
        highlightSource
    };
}

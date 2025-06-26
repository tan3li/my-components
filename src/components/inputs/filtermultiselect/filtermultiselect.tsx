import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {InputChangeTriggerAction, SelectItemBase} from '../select/index.js';
import {CSSProperties, ReactNode, RefAttributes, useEffect, useRef, useState} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {useFilter} from 'react-aria';
import {createFlatSelectItemList} from '../select/createflatselectitemlist.js';
import {useCombobox} from 'downshift';
import {safeCall} from '../../../utils/functionhelper.js';
import {FilterButton} from '../filterselect/filterbutton.js';
import {Dialog, Popover} from 'react-aria-components';
import {SearchField} from '../searchfield/index.js';
import {SelectOptionsEmptyState} from '../select/selectoptionsemptystate.js';
import {LoadingItem} from '../select/loadingitem.js';
import {BottomLoader} from '../select/bottomloader.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {useSelectedItemsMap} from '../multiselect/useselecteditemsmap.js';
import {renderMultiSelectItems} from '../multiselect/rendermultiselectitems.js';
import {filterItems} from '../select/filteritems.js';
import {updateSelectedItems} from '../multiselect/updateselecteditems.js';
import {isItemsChanged} from '../multiselect/isitemschanged.js';
import {Button, ButtonProps, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {IconName} from '../../media/index.js';
import {scrollBottom} from '../../../utils/scrollbottom.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {InteractionSource} from '../../../constants/interactionsource.js';
import {useSelectItemHighlight} from '../select/useselectitemhighlight.js';
import {useSelectOptionCountAnnouncement} from '../select/useselectoptioncountannouncement.js';

type FilterMultiSelectSize = Size.md | Size.sm | Size.xs;

export interface FilterMultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & {value: TItem[]}) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared. True by default.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether menu can be opened for selection.
     */
    isSelectable?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label for the element.
     */
    label: string;
    /**
     * Width for the menu.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called when menu open status changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Placeholder to show in search field.
     */
    searchPlaceholder?: string;
    /**
     * List of selected items.
     */
    selectedItems?: TItem[];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: FilterMultiSelectSize;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
}

const footerButtonSize: Record<FilterMultiSelectSize, ButtonProps['size']> = {
    [Size.xs]: Size.sm,
    [Size.sm]: Size.md,
    [Size.md]: Size.lg
};

const defaultMenuWidth: Record<FilterMultiSelectSize, number> = {
    [Size.xs]: 250,
    [Size.sm]: 250,
    [Size.md]: 300
};

export function FilterMultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    changeCallback,
    changeParams,
    className,
    disabledKeys,
    expandedKeys,
    helpText,
    isClearable = true,
    isDisabled,
    isLoading,
    isSelectable = true,
    isSkeleton,
    itemClassName,
    items,
    label,
    menuWidth,
    onBottomLoaderVisible,
    onInputChange: propsOnInputChange,
    onOpenChange: propsOnOpenChange,
    ref,
    renderItemContent,
    searchPlaceholder,
    selectedItems: propsSelectedItems,
    showHelpTextIcon,
    size = Size.md,
    startIconName
}: FilterMultiSelectProps<P, TItem>) {
    const translateCommon = useTranslateCommon();
    const localFilter = useFilter({sensitivity: 'base'});
    const triggerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {highlightedIndex, onHighlightedIndexChange, highlightSource, setHighlightSource} = useSelectItemHighlight();
    const [tempSelectedItems, setTempSelectedItems] = useState<TItem[] | null>(null);
    const [selectedItems, setSelectedItems] = useState<TItem[]>(propsSelectedItems ? [...propsSelectedItems] : []);
    const [filteredItems, setFilteredItems] = useState<TItem[] | null>(null);
    const itemsToRender = (filteredItems ?? items).slice();
    const flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);

    const onSearchFocusChange = (isFocused: boolean) => {
        setIsSearchFocused(isFocused);
        setHighlightSource(InteractionSource.Mouse);
    };

    const onInputChange = (val: string) => {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);

        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };

    const triggerChange = (newSelectedItems: TItem[]) => {
        if (isItemsChanged(newSelectedItems, propsSelectedItems)) {
            safeCall(changeCallback, {...changeParams, value: newSelectedItems.slice()} as P & {value: TItem[]});
        }
    };

    const clearSelectedItems = () => {
        const newSelectedItems = [];

        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
    };

    const {getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps, openMenu, closeMenu} =
        useCombobox({
            highlightedIndex,
            selectedItem: null,
            inputValue,
            isOpen,
            items: flatItems,
            itemToString: (item) => (item ? item.text : ''),
            isItemDisabled: (item) => (item ? !!disabledKeys?.includes(item.value) : false),
            onHighlightedIndexChange,
            onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
                if (newSelectedItem && tempSelectedItems) {
                    updateSelectedItems(tempSelectedItems, newSelectedItem);
                    setTempSelectedItems([...tempSelectedItems]);
                }
            },
            onIsOpenChange: ({isOpen: newIsOpen}) => {
                if (!isSelectable) {
                    return;
                }

                if (newIsOpen) {
                    // Clear filtering on open
                    safeCall(propsOnInputChange, '', InputChangeTriggerAction.Focus);
                    setInputValue('');
                    setFilteredItems(null);
                    setTempSelectedItems([...selectedItems]);
                } else {
                    setTempSelectedItems(null);
                }

                setIsOpen(newIsOpen);
                propsOnOpenChange?.(newIsOpen);
            },
            stateReducer: (state, actionAndChanges) => {
                const {changes, type} = actionAndChanges;

                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        return {
                            ...changes,
                            isOpen: true, // keep the menu open after selection
                            highlightedIndex: state.highlightedIndex // ...with same option highlighted
                        };
                    case useCombobox.stateChangeTypes.InputBlur:
                        // Keep the current state on input blur (out-click, Tab etc.)
                        return {
                            ...changes,
                            selectedItem: state.selectedItem,
                            inputValue: state.inputValue,
                            highlightedIndex: state.highlightedIndex,
                            isOpen: true
                        };
                    default:
                        return changes;
                }
            },
            onStateChange: (changes) => {
                const {type} = changes;

                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                    case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                        if (changes.highlightedIndex === flatItems.length - 1) {
                            // scroll at the bottom when last item is highlighted to make sure loader is visible
                            scrollBottom(menuRef.current);
                        }
                        break;
                    default:
                        break;
                }
            }
        });

    const clearTempSelectedItems = () => {
        setTempSelectedItems([]);
    };

    const confirmTempSelectedItems = () => {
        if (tempSelectedItems) {
            setSelectedItems([...tempSelectedItems]);
            triggerChange(tempSelectedItems);
            closeMenu();
        }
    };

    useEffect(() => {
        setSelectedItems(propsSelectedItems ? [...propsSelectedItems] : []);
    }, [propsSelectedItems]);

    useSelectOptionCountAnnouncement({isOpen, itemCount: itemsToRender.length});

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {onClick, onPress, ...toggleButtonProps} = getToggleButtonProps();
    const inputProps = getInputProps({}, {suppressRefError: true});
    const menuProps = getMenuProps({ref: menuRef}, {suppressRefError: true});
    const labelProps = getLabelProps();
    const selectedCount = selectedItems.length;
    const tempSelectedCount = tempSelectedItems?.length;
    const selectedItemsMap = useSelectedItemsMap(tempSelectedItems ?? []);
    const selectedCountForButton = isNullOrUndefined(tempSelectedCount) ? selectedCount : tempSelectedCount;
    let selectedItemsText = selectedCountForButton > 0 ? ` (${selectedCountForButton})` : '';

    if (selectedCountForButton === 1) {
        selectedItemsText = `: ${(tempSelectedItems ?? selectedItems)[0].text}`;
    }

    return (
        <>
            <FilterButton
                className={classNames('filter-multiselect', className)}
                clearButtonProps={{onPress: clearSelectedItems}}
                helpText={helpText}
                isActive={selectedCount > 0}
                isDisabled={isDisabled}
                isFocusable={isSelectable}
                isOpen={isOpen}
                isSkeleton={isSkeleton}
                label={label}
                labelProps={{...labelProps, htmlFor: [labelProps.htmlFor, toggleButtonProps.id].join(' ')}}
                onOpenChange={(newIsOpen) => (newIsOpen ? openMenu() : closeMenu())}
                ref={ref}
                showClearButton={isClearable}
                showHelpTextIcon={showHelpTextIcon}
                size={size}
                startIconName={startIconName}
                toggleButtonProps={{
                    ...toggleButtonProps,
                    ref: triggerRef
                }}>
                <>
                    {label}
                    {selectedItemsText}
                </>
            </FilterButton>
            <Popover
                className="filter-select__popover"
                isOpen={isOpen}
                maxHeight={375}
                onOpenChange={closeMenu}
                placement="bottom start"
                shouldFlip={true}
                style={{width: menuWidth ?? defaultMenuWidth[size]}}
                triggerRef={triggerRef}>
                <Dialog aria-label={label} className="filter-select__dialog">
                    <div className="filter-select__menu">
                        <div className="filter-select__menu-header">
                            <SearchField
                                {...inputProps}
                                aria-label={translateCommon('search')}
                                autoFocus={true}
                                onChange={onInputChange}
                                onFocusChange={onSearchFocusChange}
                                placeholder={searchPlaceholder ?? translateCommon('search')}
                                size={size}
                            />
                        </div>
                        <div {...menuProps} className="filter-select__menu-body" tabIndex={-1}>
                            {itemsToRender.length === 0 && !isLoading && (
                                <SelectOptionsEmptyState key="empty" size={size} />
                            )}
                            {renderMultiSelectItems({
                                createText: '',
                                disabledKeys,
                                expandedKeys,
                                getItemProps,
                                highlightedIndex,
                                highlightSource: isSearchFocused ? highlightSource : undefined,
                                itemClassName,
                                items: itemsToRender,
                                renderItemContent,
                                selectedItemsMap,
                                size
                            })}
                            {isLoading && <LoadingItem key="loading" size={size} />}
                            {onBottomLoaderVisible && <BottomLoader key="loader" onVisible={onBottomLoaderVisible} />}
                        </div>
                        <div className="filter-select__menu-footer">
                            {isClearable && (
                                <Button
                                    onPress={clearTempSelectedItems}
                                    size={footerButtonSize[size]}
                                    style={ButtonStyle.Plain}
                                    variant={ButtonVariant.Danger}>
                                    {translateCommon('reset')}
                                </Button>
                            )}
                            <div className="filter-select__menu-footer-btn-group">
                                <Button
                                    isDisabled={!isClearable && tempSelectedCount === 0}
                                    onPress={confirmTempSelectedItems}
                                    size={footerButtonSize[size]}
                                    style={ButtonStyle.Fill}
                                    variant={ButtonVariant.Accent}>
                                    {translateCommon('apply')}
                                    {tempSelectedCount ? ` (${tempSelectedCount})` : ''}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Popover>
        </>
    );
}

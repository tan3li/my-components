import {FilterButton} from './filterbutton.js';
import {CSSProperties, ReactNode, RefAttributes, useEffect, useRef, useState} from 'react';
import {Size} from '../../../constants/index.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {InputChangeTriggerAction, SelectChangeItem, SelectItemBase} from '../select/index.js';
import {useCombobox} from 'downshift';
import {Dialog, Popover} from 'react-aria-components';
import {SearchField} from '../searchfield/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {renderSelectItems} from '../select/renderselectitems.js';
import {createFlatSelectItemList} from '../select/createflatselectitemlist.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {filterItems} from '../select/filteritems.js';
import {useFilter} from 'react-aria';
import {SelectOptionsEmptyState} from '../select/selectoptionsemptystate.js';
import {LoadingItem} from '../select/loadingitem.js';
import {BottomLoader} from '../select/bottomloader.js';
import {useScrollToSelectedOption} from '../select/usescrolltoselectedoption.js';
import {classNames} from '../../../utils/classnames.js';
import {IconName} from '../../media/index.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {useSelectItemHighlight} from '../select/useselectitemhighlight.js';
import {useSelectOptionCountAnnouncement} from '../select/useselectoptioncountannouncement.js';

export interface FilterSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & SelectChangeItem<TItem>) => void;
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
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Placeholder to show in search field.
     */
    searchPlaceholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
    /**
     * Text to show when popover is closed and isSearchable.
     */
    text?: string;
    /**
     * Selected value/key.
     */
    value?: TItem['value'] | null;
}

export function FilterSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
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
    ref,
    renderItemContent,
    searchPlaceholder,
    showHelpTextIcon,
    size = Size.md,
    startIconName,
    text,
    value
}: FilterSelectProps<P, TItem>) {
    const translateCommon = useTranslateCommon();
    const localFilter = useFilter({sensitivity: 'base'});
    const triggerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<TItem | null>(
        value && text ? ({value, text} as unknown as TItem) : null
    );
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {highlightedIndex, onHighlightedIndexChange, highlightSource} = useSelectItemHighlight();
    const [filteredItems, setFilteredItems] = useState<TItem[] | null>(null);
    const itemsToRender = (filteredItems ?? items).slice();
    const flatItems = createFlatSelectItemList(itemsToRender, false, expandedKeys);

    const onInputChange = (val: string) => {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);

        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };

    const onSelectionChange = (newSelectedItem: TItem | null) => {
        setSelectedItem(newSelectedItem);

        if (newSelectedItem) {
            safeCall(changeCallback, {...changeParams, ...newSelectedItem} as P & SelectChangeItem<TItem>);
        } else {
            safeCall(changeCallback, {...changeParams, value: null} as P & SelectChangeItem<TItem>);
        }
    };

    useScrollToSelectedOption({isLoading, isOpen, menuRef});

    useEffect(() => {
        if (selectedItem?.value !== (value ?? undefined) || selectedItem?.text !== text) {
            setSelectedItem(value && text ? ({value, text} as unknown as TItem) : null);
        }
    }, [value, text]);

    useSelectOptionCountAnnouncement({isOpen, itemCount: itemsToRender.length});

    const {
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        openMenu,
        closeMenu,
        selectItem
    } = useCombobox({
        highlightedIndex,
        selectedItem,
        inputValue,
        isOpen,
        items: flatItems,
        itemToString: (item) => (item ? item.text : ''),
        isItemDisabled: (item) => (item ? !!disabledKeys?.includes(item.value) : false),
        onHighlightedIndexChange,
        onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
            onSelectionChange(newSelectedItem ?? null);
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
            }

            setIsOpen(newIsOpen);
        },
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges;

            // eslint-disable-next-line sonarjs/no-small-switch
            switch (type) {
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
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {onClick, onPress, ...toggleButtonProps} = getToggleButtonProps();
    const inputProps = getInputProps({}, {suppressRefError: true});
    const menuProps = getMenuProps({ref: menuRef}, {suppressRefError: true});
    const labelProps = getLabelProps();

    return (
        <>
            <FilterButton
                className={classNames('filter-select', className)}
                clearButtonProps={{onPress: () => selectItem(null)}}
                helpText={helpText}
                isActive={!!selectedItem}
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
                    {selectedItem && `: ${selectedItem.text}`}
                </>
            </FilterButton>
            <Popover
                className="filter-select__popover"
                isOpen={isOpen}
                maxHeight={375}
                onOpenChange={closeMenu}
                placement="bottom start"
                shouldFlip={true}
                style={{width: menuWidth ?? '250px'}}
                triggerRef={triggerRef}>
                <Dialog aria-label={label} className="filter-select__dialog">
                    <div className="filter-select__menu">
                        <div className="filter-select__menu-header">
                            <SearchField
                                {...inputProps}
                                aria-label={translateCommon('search')}
                                autoFocus={true}
                                onChange={onInputChange}
                                placeholder={searchPlaceholder ?? translateCommon('search')}
                                size={size}
                            />
                        </div>
                        <div {...menuProps} className="filter-select__menu-body">
                            {itemsToRender.length === 0 && !isLoading && (
                                <SelectOptionsEmptyState key="empty" size={size} />
                            )}
                            {renderSelectItems({
                                createText: '',
                                disabledKeys,
                                expandedKeys,
                                getItemProps,
                                highlightedIndex,
                                highlightSource,
                                itemClassName,
                                items: itemsToRender,
                                renderItemContent,
                                selectedItem,
                                size
                            })}
                            {isLoading && <LoadingItem key="loading" size={size} />}
                            {onBottomLoaderVisible && <BottomLoader key="loader" onVisible={onBottomLoaderVisible} />}
                        </div>
                    </div>
                </Dialog>
            </Popover>
        </>
    );
}

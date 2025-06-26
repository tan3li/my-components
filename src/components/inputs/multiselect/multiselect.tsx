import {filterItems} from '../select/filteritems.js';
import {SelectItemBase} from '../select/selectitem.js';
import {classNames} from '../../../utils/classnames.js';
import {
    ChangeEvent,
    CSSProperties,
    KeyboardEvent,
    ReactNode,
    RefAttributes,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import {useCombobox, useMultipleSelection} from 'downshift';
import {LabelContext, Popover, Provider, TextContext} from 'react-aria-components';
import {Field} from '../common/field/field.js';
import {TDataState} from '../../../constants/datastate.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {Label, LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS} from '../../text/label/label.js';
import {iconNames} from '../../media/icon/icons.js';
import {Icon} from '../../media/icon/icon.js';
import {Size} from '../../../constants/size.js';
import {chain, useFilter, useFocusRing, useHover} from 'react-aria';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {useResizeObserver} from '@react-aria/utils';
import {emptyFn, isFunction, safeCall} from '../../../utils/functionhelper.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {MultiSelectChip, SelectedItemStyle} from './multiselectchip.js';
import {TooltipContent} from '../../text/fieldlabel/fieldlabel.js';
import {ClearButton} from '../../action/clearbutton/clearbutton.js';
import {scrollBottom} from '../../../utils/scrollbottom.js';
import {LoadingItem} from '../select/loadingitem.js';
import {SelectOptionsEmptyState} from '../select/selectoptionsemptystate.js';
import {scrollRight} from '../../../utils/scrollright.js';
import {createFlatSelectItemList} from '../select/createflatselectitemlist.js';
import {InputChangeTriggerAction} from '../select/selectprops.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {hasItemWithText} from '../select/hasitemwithtext.js';
import {SpecialSelectItemKey} from '../select/index.js';
import {BottomLoader} from '../select/bottomloader.js';
import {useFieldHelpText} from '../../../hooks/usefieldhelptext.js';
import {Tag, TagStyle} from '../../navigation/index.js';
import {renderMultiSelectItems} from './rendermultiselectitems.js';
import {useSelectedItemsMap} from './useselecteditemsmap.js';
import {isItemsChanged} from './isitemschanged.js';
import {updateSelectedItems} from './updateselecteditems.js';
import {useNonModalPopoverInModalFix} from '../../../hooks/usenonmodalpopoverinmodalfix.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {useSelectItemHighlight} from '../select/useselectitemhighlight.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';
import {useSelectOptionCountAnnouncement} from '../select/useselectoptioncountannouncement.js';

interface CreateOptions<T> {
    /**
     * Handler to get text node for creatable item.
     * Default text will be used if not provided.
     */
    getTextNode?: (text: string) => ReactNode;
    /**
     * Whether creatable item is visible when search text is not found from existing items or selectedItems.
     */
    isAllowed: boolean | ((text: string) => boolean);
    /**
     * Handler to call when creatable item is selected.
     */
    onCreate?: (item: T) => void;
}

export interface MultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if actual label is not provided.
     */
    ['aria-label']?: string;
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
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Options for item creation.
     */
    createOptions?: CreateOptions<TItem>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether required indicator is visible.
     */
    isRequired?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
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
    label?: ReactNode;
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
     * Handler that is called on keyboard event in menu toggler.
     */
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    /**
     * Handler that is called when menu open status changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placeholder for input field when there are no selected items and element does not have focus.
     */
    placeholder?: string;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Selected items can be display with tag or text style. If not given, text style is the default.
     */
    selectedItemStyle?: SelectedItemStyle;
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
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}

const HIDDEN_CHIP_CSS_CLASS = 'multiselect__chip--hidden';

// eslint-disable-next-line complexity,max-statements
export function MultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    changeCallback,
    changeParams,
    className,
    createOptions,
    dataState,
    disabledKeys,
    expandedKeys,
    helpText,
    isLoading,
    isRequired,
    isSkeleton,
    itemClassName,
    items,
    label,
    menuWidth,
    onBottomLoaderVisible,
    onOpenChange,
    ref,
    renderItemContent,
    selectedItemStyle = SelectedItemStyle.text,
    showHelpTextIcon,
    size = Size.md,
    tooltipContent,
    ...props
}: MultiSelectProps<P, TItem>) {
    const {focusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const {hoverProps, isHovered} = useHover(props);
    const {isDisabled} = props;
    const selectedItemsFromProps = props.selectedItems;
    const {highlightedIndex, onHighlightedIndexChange, highlightSource} = useSelectItemHighlight();
    const [dynamicMenuWidth, setDynamicMenuWidth] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [selectedItems, setSelectedItems] = useState<TItem[]>(
        selectedItemsFromProps ? [...selectedItemsFromProps] : []
    );
    const [hiddenSelectedItemsCount, setHiddenSelectedItemsCount] = useState(0);
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, false, props.isReadOnly);
    const {fieldProps, helpTextProps} = useFieldHelpText({dataState, helpText});
    const prevSelectedCountRef = useRef(selectedItems.length);
    const listBoxRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const chipsRef = useRef<HTMLDivElement>(null);
    const otherSelectCountRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const localFilter = useFilter({sensitivity: 'base'});
    const translateCommon = useTranslateCommon();
    const [filteredItems, setFilteredItems] = useState<TItem[] | null>(null);
    const itemsToRender = (filteredItems ?? items).slice();

    if (
        inputValue &&
        createOptions &&
        (isFunction(createOptions.isAllowed) ? createOptions.isAllowed(inputValue) : createOptions.isAllowed) &&
        !hasItemWithText(selectedItems, inputValue) &&
        !hasItemWithText(items, inputValue)
    ) {
        itemsToRender.push({value: SpecialSelectItemKey.CREATABLE, text: inputValue} as TItem);
    }

    const flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);

    // Create map of selected items for quick lookup
    const selectedItemsMap = useSelectedItemsMap(selectedItems);

    const triggerChange = (newSelectedItems: TItem[]) => {
        if (isItemsChanged(newSelectedItems, selectedItemsFromProps)) {
            safeCall(changeCallback, {...changeParams, value: newSelectedItems.slice()} as P & {value: TItem[]});
        }
    };
    const clearSelectedItems = () => {
        const newSelectedItems = [];

        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
        inputRef.current?.focus();
    };
    const onInputChange = (val: string, inputChangeTrigger: InputChangeTriggerAction) => {
        setInputValue(val);

        if (props.onInputChange) {
            props.onInputChange(val, inputChangeTrigger);
        } else {
            // use local filtering
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };

    const adjustHiddenSelectedItems = () => {
        const chipsElement = chipsRef.current;
        const otherSelectCountElement = otherSelectCountRef.current;

        if (!chipsElement) {
            return;
        }

        const chipElements = Array.from(chipsElement.children) as HTMLSpanElement[];

        chipElements.forEach((chip) => {
            chip.classList.remove(HIDDEN_CHIP_CSS_CLASS);
        });

        if (otherSelectCountElement) {
            otherSelectCountElement.textContent = '';
        }

        let hideCount = 0;

        if (!isFocused || isReadOnly) {
            for (let i = chipElements.length - 1; i >= 0; i--) {
                const {scrollWidth, offsetWidth} = chipsElement;
                const chip = chipElements[i];

                if (scrollWidth > offsetWidth) {
                    chip.classList.add(HIDDEN_CHIP_CSS_CLASS);
                    hideCount++;
                    if (otherSelectCountElement) {
                        otherSelectCountElement.textContent = `+${hideCount}`;
                    }
                } else {
                    break;
                }
            }
        }

        setHiddenSelectedItemsCount(hideCount);
    };

    const updateMenuWidth = () => {
        const box = boxRef.current;

        if (box) {
            const {width} = box.getBoundingClientRect();

            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };

    const {getSelectedItemProps, getDropdownProps, removeSelectedItem} = useMultipleSelection<TItem>({
        selectedItems,
        onStateChange: (changes) => {
            const newSelectedItems = changes.selectedItems ?? [];
            const {activeIndex, type} = changes;

            switch (type) {
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                    setSelectedItems(newSelectedItems);

                    if (type === useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem) {
                        triggerChange(newSelectedItems);
                    }
                    break;
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationPrevious:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationNext:
                    if (!isNullOrUndefined(activeIndex) && activeIndex >= 0) {
                        chipsRef.current?.children[activeIndex]?.scrollIntoView({block: 'nearest', inline: 'nearest'});
                    }
                    break;
                default:
                    break;
            }
        }
    });
    const {isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps} = useCombobox<TItem>(
        {
            highlightedIndex,
            items: flatItems,
            itemToString: (item) => (item ? item.text : ''),
            isItemDisabled: (item) => (item ? !!disabledKeys?.includes(item.value) : false),
            selectedItem: null,
            inputValue,
            onHighlightedIndexChange,
            stateReducer: (state, actionAndChanges) => {
                const {changes, type} = actionAndChanges;

                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        if (changes.selectedItem?.isReadOnly) {
                            return {
                                ...changes,
                                isOpen: true,
                                selectedItem: state.selectedItem,
                                inputValue: state.inputValue,
                                highlightedIndex: state.highlightedIndex
                            };
                        }

                        return {
                            ...changes,
                            isOpen: true, // keep the menu open after selection
                            highlightedIndex: state.highlightedIndex // ...with same option highlighted
                        };
                    default:
                        return changes;
                }
            },
            onStateChange: (changes) => {
                const newSelectedItem = changes.selectedItem;
                const newInputValue = changes.inputValue ?? '';
                const changeType = changes.type;

                switch (changeType) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        if (newSelectedItem) {
                            updateSelectedItems(selectedItems, newSelectedItem);
                            setSelectedItems([...selectedItems]);

                            if (newSelectedItem.value === SpecialSelectItemKey.CREATABLE) {
                                onInputChange('', InputChangeTriggerAction.Input);
                                safeCall(createOptions?.onCreate, newSelectedItem);
                            }
                        }
                        break;
                    case useCombobox.stateChangeTypes.InputChange:
                        onInputChange(newInputValue, InputChangeTriggerAction.Input);
                        break;
                    case useCombobox.stateChangeTypes.InputKeyDownEscape:
                    case useCombobox.stateChangeTypes.InputBlur:
                        scrollRight(chipsRef.current);
                        break;
                    case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                    case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                        if (changes.highlightedIndex === flatItems.length - 1) {
                            // scroll at the bottom when last item is highlighted to make sure loader is visible
                            scrollBottom(listBoxRef.current);
                        }
                        break;
                    default:
                        break;
                }
            },
            onIsOpenChange: (changes) => {
                const isMenuOpen = changes.isOpen;

                safeCall(onOpenChange, isMenuOpen);

                if (isMenuOpen) {
                    onInputChange('', InputChangeTriggerAction.Focus);
                    updateMenuWidth();
                } else {
                    setFilteredItems(null);
                }
            }
        }
    );

    const selectedItemNodes: ReactNode[] = [];
    const selectedItemsLen = selectedItems.length;

    for (let i = 0; i < selectedItemsLen; i++) {
        const item = selectedItems[i];
        let content: ReactNode;

        if (selectedItemStyle === SelectedItemStyle.tag) {
            content = (
                <Tag
                    isDisabled={isReadOnly || isDisabled}
                    onRemove={() => {
                        removeSelectedItem(item);
                    }}
                    removeButtonProps={{
                        excludeFromTabOrder: true,
                        onPressStart: (e) => {
                            e.continuePropagation();
                        }
                    }}
                    size={size === Size.md ? Size.sm : size}
                    style={TagStyle.Fill}>
                    {item.text}
                </Tag>
            );
        } else {
            content = <Label size={size === Size.xs ? Size.md : Size.lg}>{item.text}</Label>;
        }

        const chipProps = getSelectedItemProps({selectedItem: item, index: i});

        if (isDisabled || isReadOnly) {
            chipProps.onClick = emptyFn;
            chipProps.onKeyDown = emptyFn;
        }

        selectedItemNodes.push(
            <MultiSelectChip {...chipProps} displayStyle={selectedItemStyle} key={item.value}>
                {content}
            </MultiSelectChip>
        );
    }

    const onResize = useCallback(() => {
        adjustHiddenSelectedItems();
    }, [isFocused, isReadOnly, isOpen, isSkeleton]);

    useResizeObserver({ref: boxRef, onResize});

    useNonModalPopoverInModalFix(isOpen, boxRef, popoverRef);

    useEffect(() => {
        if (!isFocused) {
            adjustHiddenSelectedItems();
        }

        const selectedCount = selectedItems.length;

        if (selectedCount > prevSelectedCountRef.current) {
            scrollRight(chipsRef.current);
        }
        prevSelectedCountRef.current = selectedCount;
    }, [selectedItems]);

    useEffect(() => {
        adjustHiddenSelectedItems();

        if (isFocused) {
            scrollRight(chipsRef.current);
        } else {
            setInputValue('');
            triggerChange(selectedItems);
        }
    }, [isFocused]);

    useEffect(() => {
        setSelectedItems(selectedItemsFromProps ? [...selectedItemsFromProps] : []);
    }, [selectedItemsFromProps]);

    useSelectOptionCountAnnouncement({isOpen, itemCount: itemsToRender.length});

    const labelProps = getLabelProps();
    const inputProps = getInputProps(
        {
            ...getDropdownProps({preventKeyAction: false, ref: inputRef}, {suppressRefError: true}),
            disabled: isReadOnly || isDisabled,
            // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, InputChangeTriggerAction.Input);
            }
        },
        {suppressRefError: true}
    );
    const toggleButtonProps = getToggleButtonProps({disabled: isReadOnly || isDisabled});
    const listBoxProps = getMenuProps({ref: listBoxRef}, {suppressRefError: true});
    let placeholder: string | undefined;

    if (selectedItemsLen === 0) {
        if (isFocused && !isReadOnly) {
            placeholder = translateCommon('search');
        } else {
            placeholder = props.placeholder;
        }
    }

    const onKeyDown = (e: KeyboardEvent) => {
        const continueFlow = safeCall(
            props.onKeyDown,
            e,
            highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined
        );

        if (continueFlow !== false && inputProps.onKeyDown) {
            inputProps.onKeyDown(e);
        }
    };

    // eslint-disable-next-line sonarjs/function-return-type
    const renderCreateText = (itemText: string) => {
        const getTextNode = createOptions?.getTextNode;

        return getTextNode ?
                getTextNode(itemText)
            :   <>
                    {`${translateCommon('create')} `}&quot;<strong>{itemText}</strong>&quot;
                </>;
    };

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpText;

        return (
            <SkeletonField
                className="skeleton-multiselect"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                size={size}
            />
        );
    }

    return (
        <Provider
            values={[
                [LabelContext, {...labelProps}],
                [TextContext, {slots: {description: helpTextProps}}]
            ]}>
            <div className={classNames('multiselect', className)} ref={ref}>
                <Field
                    dataState={dataState}
                    helpText={helpText}
                    isDisabled={isDisabled}
                    isInvalid={hasError}
                    isRequired={isRequired}
                    label={label}
                    showHelpTextIcon={showHelpTextIcon}
                    size={size === Size.xs ? Size.sm : Size.md}
                    tooltipContent={tooltipContent}>
                    <div
                        {...hoverProps}
                        className={`multiselect__box multiselect__box--${size}`}
                        data-disabled={!!isDisabled || undefined}
                        data-focus-visible={isFocusVisible || undefined}
                        data-focused={isFocused || undefined}
                        data-hovered={isHovered || undefined}
                        data-invalid={hasError || undefined}
                        data-readonly={isReadOnly || undefined}
                        ref={boxRef}>
                        <div className="multiselect__box-start">
                            {isFocused && !isReadOnly && (
                                <Icon className="multiselect__search-icon" name={iconNames.MagnifyingGlass} />
                            )}
                            {selectedItemsLen > 0 && (
                                <div {...(isFocused && focusProps)} className="multiselect__chips" ref={chipsRef}>
                                    {selectedItemNodes}
                                </div>
                            )}
                            {(!isFocused || isReadOnly) && (
                                <Label
                                    className="multiselect__other-selected-count"
                                    ref={otherSelectCountRef}
                                    size={size === Size.xs ? Size.md : Size.lg}>
                                    {hiddenSelectedItemsCount > 0 && `+${hiddenSelectedItemsCount}`}
                                </Label>
                            )}
                            <input
                                {...focusProps}
                                {...inputProps}
                                {...fieldProps}
                                aria-label={props['aria-label']}
                                className={classNames(
                                    'multiselect__input',
                                    size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS
                                )}
                                disabled={isDisabled}
                                onBlur={chain(focusProps.onBlur, inputProps.onBlur)}
                                onKeyDown={onKeyDown}
                                placeholder={placeholder}
                                readOnly={isReadOnly}
                                size={2}
                            />
                        </div>
                        <div className="multiselect__action-buttons">
                            {!isOpen && !isDisabled && !isReadOnly && selectedItemsLen > 0 && (
                                <ClearButton
                                    {...(focusProps as any)}
                                    className="multiselect__clear-button"
                                    onPress={clearSelectedItems}
                                />
                            )}
                            <button
                                {...toggleButtonProps}
                                aria-label={translateCommon('toggleMenu')}
                                className="multiselect__button">
                                <Icon
                                    className="multiselect__button-icon"
                                    name={isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled}
                                />
                            </button>
                        </div>
                    </div>
                </Field>
                <Popover
                    className="multiselect__popover"
                    isNonModal={true}
                    isOpen={isOpen}
                    maxHeight={280}
                    placement="bottom left"
                    ref={popoverRef}
                    shouldFlip={true}
                    style={{width: menuWidth ?? dynamicMenuWidth}}
                    triggerRef={boxRef}>
                    <div {...listBoxProps} className="multiselect__listbox">
                        {(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                            !isLoading && <SelectOptionsEmptyState key="empty" size={size} />}
                        {renderMultiSelectItems({
                            createText: renderCreateText,
                            disabledKeys,
                            expandedKeys,
                            getItemProps,
                            highlightedIndex,
                            highlightSource,
                            itemClassName,
                            items: itemsToRender,
                            renderItemContent,
                            selectedItemsMap,
                            size
                        })}
                        {isLoading && <LoadingItem key="loading" size={size} />}
                        {onBottomLoaderVisible && <BottomLoader key="loader" onVisible={onBottomLoaderVisible} />}
                    </div>
                </Popover>
            </div>
        </Provider>
    );
}

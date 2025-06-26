import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from './selectitem.js';
import {InputChangeTriggerAction, SelectProps} from './selectprops.js';
import {useSelectCommon} from './useselectcommon.js';
import {useCombobox} from 'downshift';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {filterItems} from './filteritems.js';
import {scrollBottom} from '../../../utils/scrollbottom.js';
import {classNames} from '../../../utils/classnames.js';
import {Icon, iconNames} from '../../media/index.js';
import {Size} from '../../../constants/index.js';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {chain} from 'react-aria';
import {ClearButton} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {ChangeEvent, KeyboardEvent, useRef} from 'react';
import {SelectField} from './selectfield.js';
import {useSelectOptionCountAnnouncement} from './useselectoptioncountannouncement.js';

export function ComboBox<P extends AnyObject, TItem extends SelectItemBase<TItem>>(props: SelectProps<P, TItem>) {
    const translateCommon = useTranslateCommon();
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        disabledKeys,
        isClearable,
        isDisabled,
        isPlain,
        items,
        preserveInputValue,
        renderStartContent,
        showSearchIcon = true,
        startIconName,
        size = Size.md,
        text
    } = props;
    const {
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
        triggerContentRef,
        listBoxRef,
        localFilter,
        updateMenuWidth,
        onSelectionChange,
        flatItems,
        itemsToRender,
        menuWidth,
        fieldProps,
        helpTextProps,
        popoverRef,
        onHighlightedIndexChange,
        highlightedIndex,
        highlightSource
    } = useSelectCommon(props);

    useSelectOptionCountAnnouncement({isOpen, itemCount: itemsToRender.length});

    const {getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps, selectItem} = useCombobox({
        highlightedIndex,
        isOpen,
        items: flatItems,
        itemToString: (item) => (item ? item.text : ''),
        isItemDisabled: (item) => (item ? !!disabledKeys?.includes(item.value) : false),
        selectedItem,
        inputValue,
        onHighlightedIndexChange,
        onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
            onSelectionChange(newSelectedItem ?? null);
        },
        onInputValueChange: ({inputValue: newInputValue}) => {
            setInputValue(newInputValue ?? '');
        },
        onIsOpenChange: ({isOpen: newIsOpen, type, selectedItem: currSelectedItem}) => {
            if (isReadOnly || newIsOpen === isOpen || (type === useCombobox.stateChangeTypes.InputClick && isOpen)) {
                return;
            }

            if (newIsOpen) {
                // Clear external filtering on open.
                safeCall(props.onInputChange, '', InputChangeTriggerAction.Focus);
                updateMenuWidth();
            } else {
                setFilteredItems(null);

                if (!preserveInputValue) {
                    if (currSelectedItem) {
                        setInputValue(currSelectedItem.text ?? text ?? '');
                    } else {
                        setInputValue('');
                    }
                }
            }

            setIsOpen(newIsOpen ?? false);
        },
        onStateChange: (changes) => {
            const type = changes.type;

            if (
                (type === useCombobox.stateChangeTypes.InputKeyDownArrowUp ||
                    type === useCombobox.stateChangeTypes.InputKeyDownArrowDown) &&
                changes.highlightedIndex === flatItems.length - 1
            ) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges;

            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEscape:
                    if (isClearable) {
                        return changes;
                    }

                    return {
                        ...changes,
                        selectedItem: state.selectedItem,
                        inputValue: state.inputValue
                    };
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if (changes.selectedItem?.action) {
                        changes.selectedItem.action.callback();

                        return {
                            ...changes,
                            selectedItem: state.selectedItem,
                            inputValue: state.inputValue
                        };
                    }
                    if (changes.selectedItem?.isReadOnly) {
                        return {
                            ...changes,
                            isOpen: true,
                            selectedItem: state.selectedItem,
                            inputValue: state.inputValue,
                            highlightedIndex: state.highlightedIndex
                        };
                    }

                    return changes;
                default:
                    return changes;
            }
        }
    });

    const onKeyDown = (e: KeyboardEvent) => {
        safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.target.value;

        setInputValue(newInputValue);

        safeCall(props.onInputChange, newInputValue, InputChangeTriggerAction.Input);

        if (!newInputValue && isClearable) {
            onSelectionChange(null);
        }

        if (!props.onInputChange) {
            setFilteredItems(newInputValue ? filterItems(items, newInputValue, localFilter) : null);
        }
    };

    const showClearButton =
        !!isClearable &&
        !isOpen &&
        !isDisabled &&
        !isReadOnly &&
        (!!selectedItem || (!!preserveInputValue && !!inputValue));
    const inputProps = getInputProps(
        {
            disabled: isDisabled,
            // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
            onChange: onInputChange,
            ref: inputRef
        },
        {suppressRefError: true}
    );
    const toggleButtonProps = getToggleButtonProps({disabled: isDisabled});

    return (
        <SelectField
            {...props}
            getItemProps={getItemProps}
            getLabelProps={getLabelProps}
            getMenuProps={getMenuProps}
            hasError={hasError}
            helpTextProps={helpTextProps}
            highlightSource={highlightSource}
            highlightedIndex={highlightedIndex}
            isOpen={isOpen}
            itemsToRender={itemsToRender}
            listBoxRef={listBoxRef}
            menuWidth={menuWidth}
            popoverRef={popoverRef}
            selectedItem={selectedItem}
            triggerContentRef={triggerContentRef}>
            <div
                {...hoverProps}
                {...focusProps}
                className={classNames(`select__content select__content--${size}`, {
                    'select__content--plain': isPlain
                })}
                data-disabled={!!isDisabled || undefined}
                data-focus-visible={isFocusVisible || undefined}
                data-focused={isFocused || undefined}
                data-hovered={isHovered || undefined}
                data-invalid={!!hasError || undefined}
                data-readonly={!!isReadOnly || undefined}
                ref={triggerContentRef}>
                {isOpen && showSearchIcon && <Icon className="select__search-icon" name={iconNames.MagnifyingGlass} />}
                {!isOpen && startIconName && <Icon className="select__start-icon" name={startIconName} />}
                {!isOpen && isFunction(renderStartContent) && renderStartContent(selectedItem)}
                <input
                    {...inputProps}
                    {...fieldProps}
                    aria-label={props['aria-label']}
                    className={classNames(
                        'select__input',
                        size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS
                    )}
                    onKeyDown={chain(onKeyDown, inputProps.onKeyDown)}
                    placeholder={isOpen ? translateCommon('search') : props.placeholder}
                    readOnly={isReadOnly}
                    size={1}
                />
                <div className="select__action-buttons">
                    {showClearButton && (
                        <ClearButton
                            className="select__clear-button"
                            onPress={() => {
                                selectItem(null);
                                inputRef.current?.focus();
                            }}
                        />
                    )}
                    <button
                        {...toggleButtonProps}
                        aria-label={translateCommon('toggleMenu')}
                        className="select__expander">
                        <Icon
                            className="select__expand-icon"
                            name={isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled}
                        />
                    </button>
                </div>
            </div>
        </SelectField>
    );
}

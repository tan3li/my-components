import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from './selectitem.js';
import {SelectProps} from './selectprops.js';
import {useSelectCommon} from './useselectcommon.js';
import {useSelect} from 'downshift';
import {scrollBottom} from '../../../utils/scrollbottom.js';
import {classNames} from '../../../utils/classnames.js';
import {chain} from 'react-aria';
import {Icon, iconNames} from '../../media/index.js';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {Size} from '../../../constants/index.js';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {ClearButton} from '../../action/index.js';
import {SelectField} from './selectfield.js';
import {KeyboardEvent, useState} from 'react';

export function SelectBox<P extends AnyObject, TItem extends SelectItemBase<TItem>>(props: SelectProps<P, TItem>) {
    const {disabledKeys, isClearable, isDisabled, isPlain, renderStartContent, startIconName, size = Size.md} = props;
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
        triggerContentRef,
        listBoxRef,
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
    const [isClearFocused, setIsClearFocused] = useState(false);

    const {getToggleButtonProps, getLabelProps, getMenuProps, getItemProps, selectItem} = useSelect({
        highlightedIndex,
        isOpen,
        items: flatItems,
        itemToString: (item) => (item ? item.text : ''),
        isItemDisabled: (item) => (item ? !!disabledKeys?.includes(item.value) : false),
        selectedItem,
        onHighlightedIndexChange,
        onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
            onSelectionChange(newSelectedItem ?? null);
        },
        onIsOpenChange: ({isOpen: newIsOpen}) => {
            if (isReadOnly || newIsOpen === isOpen || isClearFocused) {
                return;
            }

            if (newIsOpen) {
                updateMenuWidth();
            }

            setIsOpen(newIsOpen ?? false);
        },
        onStateChange: (changes) => {
            if (
                changes.type === useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown &&
                changes.highlightedIndex === flatItems.length - 1
            ) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges;

            switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ItemClick:
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

    const showClearButton = isClearable && !isOpen && !isDisabled && !isReadOnly && selectedItem;
    const toggleButtonProps = getToggleButtonProps(
        {disabled: isDisabled, ref: triggerContentRef},
        {suppressRefError: true}
    );

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
            {/* Interaction related a11y props are included in toggleButtonProps */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                {...hoverProps}
                {...focusProps}
                {...toggleButtonProps}
                {...fieldProps}
                aria-label={props['aria-label']}
                className={classNames(`select__content select__content--${size} select__button`, {
                    'select__content--plain': isPlain
                })}
                data-disabled={!!isDisabled || undefined}
                data-focus-visible={isFocusVisible || undefined}
                data-focused={(isFocused && !isDisabled) || undefined}
                data-hovered={isHovered || undefined}
                data-invalid={!!hasError || undefined}
                data-readonly={!!isReadOnly || undefined}
                onBlur={chain(focusProps.onBlur, toggleButtonProps.onBlur)}
                onKeyDown={chain(onKeyDown, toggleButtonProps.onKeyDown)}>
                {startIconName && <Icon className="select__start-icon" name={startIconName} />}
                {isFunction(renderStartContent) && renderStartContent(selectedItem)}
                <span
                    className={classNames(
                        'select__value',
                        size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS
                    )}
                    data-placeholder={!selectedItem || undefined}>
                    {selectedItem ? selectedItem.text : props.placeholder}
                </span>
                <div className="select__action-buttons">
                    {showClearButton && (
                        <ClearButton
                            className="select__clear-button"
                            onFocusChange={setIsClearFocused}
                            onPress={() => {
                                selectItem(null);
                                triggerContentRef.current?.focus();
                            }}
                        />
                    )}
                    <div className="select__expander">
                        <Icon
                            className="select__expand-icon"
                            name={isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled}
                        />
                    </div>
                </div>
            </div>
        </SelectField>
    );
}

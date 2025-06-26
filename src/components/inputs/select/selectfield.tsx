import {LabelContext, Popover, Provider, TextContext, TextProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Field} from '../common/field/field.js';
import {Size} from '../../../constants/index.js';
import {SelectOptionsEmptyState, SelectOptionsEmptyStateProps} from './selectoptionsemptystate.js';
import {LoadingItem} from './loadingitem.js';
import {ReactNode, RefObject} from 'react';
import {SelectItemBase} from './selectitem.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectProps} from './selectprops.js';
import {UseComboboxReturnValue, UseSelectReturnValue} from 'downshift';
import {BottomLoader} from './bottomloader.js';
import {renderSelectItems} from './renderselectitems.js';
import {SpecialSelectItemKey} from './specialselectitemkey.js';
import {InteractionSource} from '../../../constants/interactionsource.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {isFunction} from '../../../utils/functionhelper.js';

interface SelectFieldProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
    children: ReactNode;
    getItemProps:
        | UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps']
        | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    getLabelProps:
        | UseComboboxReturnValue<SelectItemBase<TItem>>['getLabelProps']
        | UseSelectReturnValue<SelectItemBase<TItem>>['getLabelProps'];
    getMenuProps:
        | UseComboboxReturnValue<SelectItemBase<TItem>>['getMenuProps']
        | UseSelectReturnValue<SelectItemBase<TItem>>['getMenuProps'];
    hasError: boolean;
    helpTextProps: TextProps;
    highlightedIndex: number;
    highlightSource: InteractionSource;
    isOpen: boolean;
    itemsToRender: TItem[];
    listBoxRef: RefObject<HTMLDivElement | null>;
    popoverRef: RefObject<HTMLDivElement | null>;
    selectedItem: TItem | null;
    triggerContentRef: RefObject<HTMLDivElement | null>;
}

export function SelectField<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    children: fieldContent,
    className,
    dataState,
    disabledKeys,
    expandedKeys,
    getItemProps,
    getLabelProps,
    getMenuProps,
    hasError,
    helpText,
    helpTextProps,
    highlightedIndex,
    highlightSource,
    isDisabled,
    isOpen,
    isLoading,
    isReadOnly,
    isRequired,
    isSkeleton,
    itemClassName,
    itemsToRender,
    label,
    listBoxRef,
    menuWidth,
    onBottomLoaderVisible,
    popoverRef,
    ref,
    renderItemContent,
    renderItemsEmptyState: propsRenderItemsEmptyState,
    tooltipContent,
    triggerContentRef,
    selectedItem,
    showHelpTextIcon,
    size = Size.md
}: SelectFieldProps<P, TItem>) {
    const translateCommon = useTranslateCommon();
    const renderCreateText = (itemText: string) => (
        <>
            {`${translateCommon('create')} `}&quot;<strong>{itemText}</strong>&quot;
        </>
    );
    const {errorMessage} = useDataState(dataState, hasError, isReadOnly);
    const menuProps = getMenuProps({ref: listBoxRef}, {suppressRefError: true});

    // eslint-disable-next-line sonarjs/function-return-type
    const renderItemsEmptyState = () => {
        const emptyStateProps: SelectOptionsEmptyStateProps = {
            size
        };

        if (isFunction(propsRenderItemsEmptyState)) {
            return propsRenderItemsEmptyState(emptyStateProps);
        }

        return <SelectOptionsEmptyState key="empty" {...emptyStateProps} />;
    };

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpText;

        return (
            <SkeletonField className="skeleton-select" hasHelpText={hasAnyHelpText} hasLabel={!!label} size={size} />
        );
    }

    return (
        <Provider
            values={[
                [LabelContext, {...getLabelProps()}],
                [TextContext, {slots: {description: helpTextProps}}]
            ]}>
            <div className={classNames('select', className)} ref={ref}>
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
                    {fieldContent}
                </Field>
                <Popover
                    className="select__popover"
                    isNonModal={true}
                    isOpen={isOpen}
                    maxHeight={280}
                    placement="bottom left"
                    ref={popoverRef}
                    shouldFlip={true}
                    style={menuWidth ? {width: menuWidth} : undefined}
                    triggerRef={triggerContentRef}>
                    <div {...menuProps} className="select__listbox">
                        {(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                            !isLoading &&
                            renderItemsEmptyState()}
                        {isOpen &&
                            renderSelectItems({
                                createText: renderCreateText,
                                disabledKeys,
                                expandedKeys,
                                getItemProps,
                                highlightSource,
                                highlightedIndex,
                                itemClassName,
                                items: itemsToRender,
                                renderItemContent,
                                selectedItem,
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

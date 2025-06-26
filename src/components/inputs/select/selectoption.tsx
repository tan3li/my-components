import {classNames} from '../../../utils/classnames.js';
import {HTMLAttributes, memo, ReactNode, RefAttributes, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {Orientation, Position, Size} from '../../../constants/index.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {useFocusable} from 'react-aria';
import {SelectItemBase} from './selectitem.js';
import {InteractionSource} from '../../../constants/interactionsource.js';
import {SelectOptionContentProps} from './selectoptioncontentprops.js';
import {SelectOptionContent} from './selectoptioncontent.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {UseComboboxReturnValue, UseSelectReturnValue} from 'downshift';
import {useIsTextTruncated} from '../../../hooks/useistexttruncated.js';

interface SelectOptionInnerProps extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    children: ReactNode;
    isDisabled?: boolean;
    isFocused?: boolean;
    isKeyboardFocused?: boolean;
    isReadOnly?: boolean;
    isSelected?: boolean;
    size?: Size.xs | Size.sm | Size.md;
}

function SelectOptionInner({
    children,
    className,
    isDisabled,
    isFocused,
    isKeyboardFocused,
    isReadOnly,
    isSelected,
    ref: outerRef,
    size = Size.md,
    ...props
}: SelectOptionInnerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {focusableProps} = useFocusable(props, ref);

    useImperativeHandle(outerRef, () => ref.current!, []);

    return (
        <div
            {...focusableProps}
            {...props}
            aria-disabled={isReadOnly ? true : props['aria-disabled']}
            className={classNames(`select-option select-option--${size}`, className)}
            data-disabled={!!isDisabled || undefined}
            data-focused={!!isFocused || undefined}
            data-keyboard-focused={!!isKeyboardFocused || undefined}
            data-readonly={!!isReadOnly || undefined}
            data-selected={!!isSelected || undefined}
            ref={ref}
            tabIndex={undefined}>
            {children}
        </div>
    );
}

export interface SelectOptionProps<TItem extends SelectItemBase<TItem>> {
    disabledKeys?: Array<TItem['value']>;
    getItemProps:
        | UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps']
        | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    highlightSource?: InteractionSource;
    isFocused?: boolean;
    isSelected?: boolean;
    item: TItem;
    itemClassName?: string | ((item: TItem) => string);
    itemIndex: number;
    level: number;
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    size: Size.md | Size.sm | Size.xs;
    useDataValue?: boolean;
}

function SelectOption<TItem extends SelectItemBase<TItem>>({
    disabledKeys,
    getItemProps,
    highlightSource,
    isFocused,
    isSelected,
    item,
    itemClassName,
    itemIndex,
    level,
    renderItemContent,
    size,
    useDataValue
}: SelectOptionProps<TItem>) {
    const ref = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const isLabelTruncated = useIsTextTruncated({overflowDirection: Orientation.vertical, ref: labelRef});
    const isDescriptionTruncated = useIsTextTruncated({overflowDirection: Orientation.vertical, ref: descriptionRef});
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const tooltipContent: ReactNode[] = [];
    const itemValue = item.value;
    const isItemReadOnly = item.isReadOnly;
    const isItemDisabled = !!disabledKeys?.includes(itemValue);
    const isItemKeyboardFocused = isFocused && highlightSource === InteractionSource.Keyboard;
    const optionContentProps: SelectOptionContentProps<TItem> = {
        isDisabled: isItemDisabled,
        isReadOnly: isItemReadOnly,
        item,
        labelRef,
        descriptionRef,
        level,
        size
    };

    if (item.tooltip) {
        tooltipContent.push(<div key="item-tt">{item.tooltip.content}</div>);
    }
    if (isLabelTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(<br key="br1" />);
        }
        tooltipContent.push(<div key="text">{labelRef.current?.textContent}</div>);
    }
    if (isDescriptionTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(<br key="br2" />);
        }
        tooltipContent.push(<div key="desc">{descriptionRef.current?.textContent}</div>);
    }

    let content: ReactNode;

    if (renderItemContent) {
        content = renderItemContent(optionContentProps);
    } else {
        content = <SelectOptionContent {...optionContentProps} />;
    }

    const hasTooltipContent = tooltipContent.length > 0;

    useEffect(() => {
        setIsTooltipOpen(hasTooltipContent ? !!isItemKeyboardFocused : false);
    }, [isItemKeyboardFocused]);

    return (
        <TooltipTrigger isDisabled={!hasTooltipContent} isOpen={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
            <SelectOptionInner
                {...getItemProps({item, index: itemIndex, ref})}
                className={classNames(isFunction(itemClassName) ? itemClassName(item) : itemClassName, {
                    'select-option--action': !!item.action
                })}
                data-value={useDataValue ? itemValue : undefined}
                isDisabled={isItemDisabled}
                isFocused={isFocused}
                isKeyboardFocused={isItemKeyboardFocused}
                isReadOnly={isItemReadOnly}
                isSelected={isSelected}
                size={size}>
                {content}
            </SelectOptionInner>
            <Tooltip position={Position.Right} triggerRef={ref} type={TooltipType.Plain}>
                {tooltipContent}
            </Tooltip>
        </TooltipTrigger>
    );
}

const MemoizedSelectOption = memo(SelectOption) as typeof SelectOption;

export {MemoizedSelectOption as SelectOption};

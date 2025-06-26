import {ReactNode} from 'react';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {SelectOption} from '../select/selectoption.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {MultiSelectHeader} from './multiselectheader.js';
import {SelectItemBase, SpecialSelectItemKey} from '../select/index.js';
import {Divider} from '../../datadisplay/index.js';
import {UseComboboxReturnValue, UseSelectReturnValue} from 'downshift';
import {isAllItemsSelected} from './isallitemsselected.js';
import {SelectOptionContentProps} from '../select/selectoptioncontentprops.js';
import {SelectOptionContent} from '../select/selectoptioncontent.js';
import {InteractionSource} from '../../../constants/interactionsource.js';

export function renderMultiSelectItems<TItem extends SelectItemBase<TItem>>({
    createText,
    disabledKeys,
    expandedKeys,
    getItemProps,
    highlightedIndex,
    highlightSource,
    itemClassName,
    items,
    renderItemContent,
    selectedItemsMap,
    size
}: {
    createText: string | ((text: string) => ReactNode);
    disabledKeys?: Array<TItem['value']>;
    expandedKeys?: Set<TItem['value']>;
    getItemProps:
        | UseComboboxReturnValue<SelectItemBase<TItem>>['getItemProps']
        | UseSelectReturnValue<SelectItemBase<TItem>>['getItemProps'];
    highlightedIndex: number;
    highlightSource?: InteractionSource;
    itemClassName?: string | ((item: TItem) => string);
    items: TItem[];
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    selectedItemsMap: Map<TItem['value'], TItem>;
    size: Size.md | Size.sm | Size.xs;
}) {
    let itemIndex = 0;

    const renderItem = (item: TItem, level: number) => {
        const itemValue = item.value;
        const isSelected = selectedItemsMap.has(itemValue);

        return (
            <SelectOption
                disabledKeys={disabledKeys}
                getItemProps={getItemProps}
                highlightSource={highlightSource}
                isFocused={highlightedIndex === itemIndex}
                isSelected={isSelected}
                item={item}
                itemClassName={itemClassName}
                itemIndex={itemIndex}
                key={itemValue}
                level={level}
                renderItemContent={renderItemContent}
                size={size}
            />
        );
    };

    const renderItems = (itemArr: TItem[], level: number) => {
        const itemNodes: ReactNode[] = [];

        for (let i = 0, len = itemArr.length; i < len; i++) {
            const item = itemArr[i];
            const {value, text, children, hasSeparator} = item;
            const subItems = item.items;

            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }

                const isSelected = isAllItemsSelected(subItems, selectedItemsMap);

                itemNodes.push(
                    <MultiSelectHeader
                        {...getItemProps({item, index: itemIndex})}
                        isDisabled={disabledKeys?.includes(value)}
                        isFocused={highlightedIndex === itemIndex}
                        isSelected={isSelected}
                        key={value}>
                        <Label size={Size.sm}>{text}</Label>
                        {isSelected && (
                            <Icon
                                aria-hidden={true}
                                className="multiselect-header__check"
                                name={iconNames.InputCheck}
                                size={IconSize.MD}
                            />
                        )}
                    </MultiSelectHeader>
                );
                itemIndex++;
                itemNodes.push(...renderItems(subItems, level));
            } else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if (expandedKeys?.has(value) !== false) {
                    itemNodes.push(...renderItems(children, level + 1));
                }
            } else if (value === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(
                    <SelectOption
                        getItemProps={getItemProps}
                        isFocused={highlightedIndex === itemIndex}
                        item={item}
                        itemIndex={itemIndex}
                        key={value}
                        level={level}
                        renderItemContent={(optionContentProps) => (
                            <SelectOptionContent
                                {...optionContentProps}
                                bodyPrefix={
                                    <Icon className="select-option__start-icon" name={iconNames.AddCircleFilled} />
                                }
                                label={
                                    <Label size={size === Size.xs ? Size.md : Size.lg}>
                                        {isFunction(createText) ? createText(text) : createText}
                                    </Label>
                                }
                            />
                        )}
                        size={size}
                    />
                );
                itemIndex++;
            } else {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
            }

            if (hasSeparator) {
                itemNodes.push(<Divider key={`${value}--separator`} size={Size.sm} />);
            }
        }

        return itemNodes;
    };

    return renderItems(items, 0);
}

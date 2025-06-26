import {ReactNode} from 'react';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Icon, iconNames} from '../../media/index.js';
import {SelectOption} from './selectoption.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {SpecialSelectItemKey} from './specialselectitemkey.js';
import {Divider} from '../../datadisplay/index.js';
import {SelectItemBase} from './selectitem.js';
import {UseComboboxReturnValue, UseSelectReturnValue} from 'downshift';
import {SelectOptionContent} from './selectoptioncontent.js';
import {SelectOptionContentProps} from './selectoptioncontentprops.js';
import {InteractionSource} from '../../../constants/interactionsource.js';

export function renderSelectItems<TItem extends SelectItemBase<TItem>>({
    createText,
    disabledKeys,
    expandedKeys,
    getItemProps,
    highlightedIndex,
    highlightSource,
    itemClassName,
    items,
    renderItemContent,
    selectedItem,
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
    selectedItem?: TItem | null;
    size: Size.md | Size.sm | Size.xs;
}) {
    let itemIndex = 0;

    const renderItem = (item: TItem, level: number) => {
        const itemValue = item.value;
        const isSelected = itemValue === selectedItem?.value;

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
            const itemValue = item.value;
            const itemText = item.text;
            const subItems = item.items;
            const {children, hasSeparator} = item;

            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }
                itemNodes.push(
                    <section key={itemValue}>
                        <header className="select-header">
                            <Label size={Size.sm}>{itemText}</Label>
                        </header>
                        {renderItems(subItems, level)}
                    </section>
                );
            } else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if (expandedKeys?.has(itemValue) !== false) {
                    itemNodes.push(...renderItems(children, level + 1));
                }
            } else if (itemValue === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(
                    <SelectOption
                        getItemProps={getItemProps}
                        isFocused={highlightedIndex === itemIndex}
                        item={item}
                        itemIndex={itemIndex}
                        key={itemValue}
                        level={level}
                        renderItemContent={(optionContentProps) => (
                            <SelectOptionContent
                                {...optionContentProps}
                                bodyPrefix={
                                    <Icon className="select-option__start-icon" name={iconNames.AddCircleFilled} />
                                }
                                label={
                                    <Label size={size === Size.xs ? Size.md : Size.lg}>
                                        {isFunction(createText) ? createText(itemText) : createText}
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
                itemNodes.push(<Divider key={`${itemValue}--separator`} size={Size.sm} />);
            }
        }

        return itemNodes;
    };

    return renderItems(items, 0);
}

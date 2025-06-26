import {KanbanCardData, KanbanColumnData, KanbanColumnDragData, KanbanElementType} from './types.js';
import {CSSProperties, ReactNode, RefAttributes, useId, useRef, useState} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {mergeRefs} from '@react-aria/utils';
import {DragHandle} from '../draghandle/draghandle.js';
import {Button, ButtonStyle, ButtonVariant, IconButton, Menu, MenuItem, TriggerElement} from '../../action/index.js';
import {iconNames} from '../../media/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Label} from '../../text/index.js';
import {Orientation, Position, Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {useIsTextTruncated} from '../../../hooks/useistexttruncated.js';
import {KanbanColumnBody} from './kanbancolumnbody.js';
import {isNumber} from '../../../utils/objecthelper.js';
import {Key, Selection} from 'react-aria-components';

export interface KanbanCardRenderProps<TCardData extends KanbanCardData> {
    columnId: string;
    data: TCardData;
    isOverlay?: boolean;
}

export interface KanbanColumnProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem>
    extends RefAttributes<HTMLDivElement> {
    addCardOptions?: {
        label: string;
        onAdd?: ({columnId}: {columnId: string}) => void;
    };
    data: KanbanColumnData<TCardData, TMenuItem>;
    isDraggable?: boolean;
    isCollapsed: boolean;
    isOverlay?: boolean;
    onCollapsedChange?: (args: {id: string; isCollapsed: boolean}) => void;
    onMenuAction?: ({actionKey, columnId}: {actionKey: Key; columnId: string}) => void;
    onMenuSelectionChange?: ({columnId, selectedKeys}: {columnId: string; selectedKeys: Selection}) => void;
    onShowMoreCards?: (column: KanbanColumnData<TCardData, TMenuItem>) => Promise<void>;
    renderCard: (props: KanbanCardRenderProps<TCardData>) => ReactNode;
    width?: string | number;
}

export function KanbanColumn<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({
    addCardOptions,
    data,
    isDraggable,
    isCollapsed,
    isOverlay,
    onCollapsedChange,
    onMenuAction,
    onMenuSelectionChange,
    onShowMoreCards,
    ref,
    renderCard,
    width
}: KanbanColumnProps<TCardData, TMenuItem>) {
    const [isLoadingMoreCards, setIsLoadingMoreCards] = useState(false);
    const {cards, description, hasMoreCards, id, menuProps, title, total} = data;
    const {active, attributes, isDragging, listeners, setNodeRef, transition, transform} = useSortable({
        id,
        data: {
            column: data,
            type: KanbanElementType.Column
        } satisfies KanbanColumnDragData<TCardData, TMenuItem>
    });
    const translateCommon = useTranslateCommon();
    const titleRef = useRef<HTMLSpanElement>(null);
    const isTruncated = useIsTextTruncated({
        ref: titleRef,
        overflowDirection: isCollapsed ? Orientation.vertical : Orientation.horizontal
    });
    const titleId = useId();

    const style: CSSProperties = {
        flex: !isCollapsed && !!width ? `0 0 ${width}${isNumber(width) ? 'px' : ''}` : undefined,
        transform: CSS.Translate.toString(transform),
        transition
    };

    const onShowMore = () => {
        setIsLoadingMoreCards(true);
        onShowMoreCards?.(data)?.finally(() => {
            setIsLoadingMoreCards(false);
        });
    };

    return (
        <div
            aria-labelledby={titleId}
            className={classNames('kanban-column', {
                'kanban-column--overlay': isOverlay,
                'kanban-column--dragging': isDragging,
                'kanban-column--collapsed': isCollapsed
            })}
            ref={mergeRefs<HTMLDivElement>(setNodeRef, ref)}
            role="region"
            style={style}>
            <div className="kanban-column__header">
                <div className="kanban-column__header-start">
                    {isDraggable && <DragHandle {...attributes} {...listeners} />}
                    <div className="kanban-column__title-wrapper">
                        <IconButton
                            aria-expanded={!isCollapsed}
                            aria-label={translateCommon(isCollapsed ? 'expand' : 'collapse')}
                            iconName={isCollapsed ? iconNames.ChevronRight : iconNames.ExpandMore}
                            onPress={() => onCollapsedChange?.({id, isCollapsed: !isCollapsed})}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}
                        />
                        <div className="kanban-column__title-texts" id={titleId}>
                            <TooltipTrigger isDisabled={!isTruncated}>
                                <TriggerElement
                                    className="kanban-column__title-trigger"
                                    excludeFromTabOrder={!isTruncated}>
                                    <Label className="kanban-column__title" ref={titleRef} size={Size.md}>
                                        <strong>{title}</strong>
                                    </Label>
                                </TriggerElement>
                                <Tooltip position={isCollapsed ? Position.Right : undefined} type={TooltipType.Plain}>
                                    {title}
                                </Tooltip>
                            </TooltipTrigger>
                            {!isCollapsed && description && (
                                <Label className="kanban-column__description" size={Size.sm}>
                                    {description}
                                </Label>
                            )}
                        </div>
                    </div>
                </div>
                <div className="kanban-column__header-end">
                    {!isCollapsed && (
                        <TooltipTrigger>
                            <TriggerElement className="kanban-colum__total">
                                <Label size={Size.sm}>{total?.value ?? cards.length}</Label>
                            </TriggerElement>
                            <Tooltip type={TooltipType.Plain}>
                                {total?.tooltipContent ??
                                    translateCommon('itemsInList', {count: total?.value ?? cards.length})}
                            </Tooltip>
                        </TooltipTrigger>
                    )}
                    {menuProps && (
                        <Menu
                            {...menuProps}
                            onAction={(actionKey) => onMenuAction?.({actionKey, columnId: id})}
                            onSelectionChange={(selectedKeys) => onMenuSelectionChange?.({columnId: id, selectedKeys})}
                            placement="bottom right">
                            <TooltipTrigger>
                                <IconButton
                                    aria-label={translateCommon('moreActions')}
                                    iconName={iconNames.MoreVert}
                                    size={Size.sm}
                                    style={ButtonStyle.Plain}
                                    variant={ButtonVariant.Neutral}
                                />
                                <Tooltip type={TooltipType.Plain}>{translateCommon('moreActions')}</Tooltip>
                            </TooltipTrigger>
                        </Menu>
                    )}
                </div>
            </div>
            {!isCollapsed && (
                <KanbanColumnBody column={data} isDisabled={active?.data.current?.type === KanbanElementType.Column}>
                    {cards.map((card) => renderCard({columnId: id, data: card}))}
                    {hasMoreCards && (
                        <Button
                            className="kanban-column__show-more-button"
                            isLoading={isLoadingMoreCards}
                            isPending={isLoadingMoreCards}
                            onPress={onShowMore}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}>
                            {translateCommon('showMore')}
                        </Button>
                    )}
                </KanbanColumnBody>
            )}
            {!isCollapsed && (
                <div className="kanban-column__footer">
                    {addCardOptions && (
                        <Button
                            onPress={() => addCardOptions?.onAdd?.({columnId: id})}
                            startIconName={iconNames.Add}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}>
                            {addCardOptions.label}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

import {CSSProperties, ReactNode, RefAttributes, useEffect, useMemo, useRef, useState} from 'react';
import {
    closestCorners,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MeasuringStrategy,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {horizontalListSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import {
    KanbanCardData,
    KanbanCardDragData,
    KanbanColumnData,
    KanbanColumnDragData,
    KanbanColumnHeightMode,
    KanbanElementType
} from './types.js';
import {KanbanColumn, KanbanColumnProps} from './kanbancolumn.js';
import {createPortal} from 'react-dom';
import {classNames} from '../../../utils/classnames.js';
import {Button, ButtonStyle, ButtonVariant, IconButton, MenuItem} from '../../action/index.js';
import {iconNames} from '../../media/index.js';
import {kanbanKeyboardCoordinateGetter} from './kanbankeyboardcoordinategetter.js';
import {useTranslateKanbanDragAndDrop} from '../../../hooks/translations/usetranslatekanbandraganddrop.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {horizontalSortableListCollisionDetection} from './horizontalsortablelistcollisiondetection.js';

export interface KanbanProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem>
    extends RefAttributes<HTMLDivElement> {
    /**
     * Display "Add card" button in the footer of each column with given label and press callback.
     */
    addCardOptions?: KanbanColumnProps<TCardData, TMenuItem>['addCardOptions'];
    /**
     * Display "Add column" button after the columns with given label and press callback.
     * If showIconOnly = true, will be displayed as icon button with given label as aria label.
     */
    addColumnOptions?: {
        label: string;
        onAdd?: () => void;
        showIconOnly?: boolean;
    };
    /**
     * Aria label for the element.
     */
    ['aria-label']?: string;
    /**
     * Accessor to get the name for card. Required for drag and drop a11y announcements.
     * Can be either property name or method which returns the property name for given item.
     */
    cardNameAccessor: string | ((card: TCardData) => string);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifiers of collapsed columns.
     */
    collapsedColumnKeys?: Set<string>;
    /**
     * Determines how column height behaves.
     * Full (default) = columns take full height of the board.
     * Auto = columns take height of their content.
     */
    columnHeightMode?: KanbanColumnHeightMode;
    /**
     * Fixed width for columns. Should be between column min-width (240px) and max-width (550px).
     * If not given, columns fill the available space within their min and max width.
     */
    columnWidth?: string | number;
    /**
     * Data for the kanban.
     */
    data: Array<KanbanColumnData<TCardData, TMenuItem>>;
    /**
     * Whether columns can be drag and dropped.
     */
    enableColumnReordering?: boolean;
    /**
     * Height of the kanban board.
     */
    height?: CSSProperties['height'];
    /**
     * Handler that is called when on card drag end.
     */
    onCardDragEnd?: (params: {
        cardId: string;
        oldColumnId: string;
        oldColumnIndex: number;
        newColumnId: string;
        newColumnIndex: number;
    }) => void;
    /**
     * Handler that is called when on column collapsed state changes.
     */
    onColumnCollapsedChange?: (collapsedKeys: Set<string>) => void;
    /**
     * Handler that is called when on column drag end.
     */
    onColumnDragEnd?: (params: {columnId: string; oldIndex: number; newIndex: number}) => void;
    /**
     * Handler that is called when column menu action is pressed.
     */
    onColumnMenuAction?: KanbanColumnProps<TCardData, TMenuItem>['onMenuAction'];
    /**
     * Handler that is called when column menu selection changed.
     */
    onColumnMenuSelectionChange?: KanbanColumnProps<TCardData, TMenuItem>['onMenuSelectionChange'];
    /**
     * Handler that is called when show more button for column is pressed.
     */
    onShowMoreCards?: KanbanColumnProps<TCardData, TMenuItem>['onShowMoreCards'];
    /**
     * Renderer for content after columns.
     */
    renderAfterColumns: (props: {isDraggingColumn?: boolean}) => ReactNode;
    /**
     * Renderer for card.
     */
    renderCard: KanbanColumnProps<TCardData, TMenuItem>['renderCard'];
}

export function Kanban<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({
    addCardOptions,
    addColumnOptions,
    'aria-label': ariaLabel,
    cardNameAccessor,
    className,
    collapsedColumnKeys: propsCollapsedColumnKeys,
    columnHeightMode = KanbanColumnHeightMode.Full,
    columnWidth,
    data,
    enableColumnReordering,
    height,
    onCardDragEnd,
    onColumnDragEnd,
    onColumnCollapsedChange: propsOnColumnCollapsedChange,
    onColumnMenuAction,
    onColumnMenuSelectionChange,
    onShowMoreCards,
    ref,
    renderAfterColumns,
    renderCard
}: KanbanProps<TCardData, TMenuItem>) {
    const [collapsedColumnKeys, setCollapsedColumnKeys] = useState<Set<string>>(propsCollapsedColumnKeys ?? new Set());
    const columnIds = useMemo(() => data.map((col) => col.id), [data]);
    const [activeColumnDragData, setActiveColumnDragData] = useState<KanbanColumnDragData<TCardData, TMenuItem> | null>(
        null
    );
    const [activeCardDragData, setActiveCardDragData] = useState<KanbanCardDragData<TCardData> | null>(null);
    const translateKanbanDragAndDrop = useTranslateKanbanDragAndDrop();
    const isFirstAnnouncementRef = useRef(true);

    const sensors = useSensors(
        useSensor(MouseSensor, {}),
        useSensor(TouchSensor, {}),
        useSensor(KeyboardSensor, {
            coordinateGetter: kanbanKeyboardCoordinateGetter
        })
    );

    const onDragStart = (event: DragStartEvent) => {
        const eventData = event.active.data.current;

        if (eventData?.type === KanbanElementType.Column) {
            setActiveColumnDragData(eventData as KanbanColumnDragData<TCardData, TMenuItem>);
        }
        if (eventData?.type === KanbanElementType.Card) {
            setActiveCardDragData(eventData as KanbanCardDragData<TCardData>);
        }
    };

    const onDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        const activeId = active.id as string;
        const overId = over?.id as string;

        if (activeColumnDragData) {
            setActiveColumnDragData(null);

            if (activeId && overId) {
                onColumnDragEnd?.({
                    columnId: activeId,
                    oldIndex: columnIds.indexOf(activeId),
                    newIndex: columnIds.indexOf(overId)
                });
            }
        }
        if (activeCardDragData) {
            const columnId = activeCardDragData.columnId;
            const {columnId: overColId, type: overElementType} = over?.data.current ?? {};

            setActiveCardDragData(null);

            if (overElementType === KanbanElementType.ColumnBody && activeId && overColId) {
                onCardDragEnd?.({
                    cardId: activeId,
                    oldColumnId: columnId,
                    oldColumnIndex: columnIds.indexOf(columnId),
                    newColumnId: overColId,
                    newColumnIndex: columnIds.indexOf(overColId)
                });
            }
        }

        isFirstAnnouncementRef.current = true;
    };

    const onDragCancel = () => {
        setActiveCardDragData(null);
        setActiveColumnDragData(null);
        isFirstAnnouncementRef.current = true;
    };

    const onColumnCollapsedChange = ({id, isCollapsed}: {id: string; isCollapsed: boolean}) => {
        const newCollapsedKeys = new Set(collapsedColumnKeys);

        if (isCollapsed) {
            newCollapsedKeys.add(id);
        } else {
            newCollapsedKeys.delete(id);
        }

        setCollapsedColumnKeys(newCollapsedKeys);
        propsOnColumnCollapsedChange?.(newCollapsedKeys);
    };

    useEffect(() => {
        if (propsCollapsedColumnKeys !== undefined) {
            setCollapsedColumnKeys(propsCollapsedColumnKeys);
        }
    }, [propsCollapsedColumnKeys]);

    return (
        <DndContext
            accessibility={{
                screenReaderInstructions: {
                    draggable: translateKanbanDragAndDrop('instructions')
                },
                announcements: {
                    onDragStart({active}) {
                        const type = active.data.current?.type;

                        if (type === KanbanElementType.Column) {
                            const column = active.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onColumnDragStart', {
                                title: column.title
                            });
                        }

                        if (type === KanbanElementType.Card) {
                            const card = active.data.current?.card as TCardData;

                            return translateKanbanDragAndDrop('onCardDragStart', {
                                title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                            });
                        }
                    },
                    onDragOver({active, over}) {
                        // Workaround for dnd-kit skipping the start announcement: https://github.com/clauderic/dnd-kit/issues/424
                        if (isFirstAnnouncementRef.current) {
                            isFirstAnnouncementRef.current = false;

                            return;
                        }

                        const type = active.data.current?.type;

                        if (over && type === KanbanElementType.Column) {
                            const activeColumn = active.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;
                            const overColumn = over.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onColumnDragOver', {
                                activeTitle: activeColumn.title,
                                overTitle: overColumn.title
                            });
                        }

                        if (over && over.data.current?.type === KanbanElementType.ColumnBody) {
                            const activeCard = active.data.current?.card as TCardData;
                            const overColumnBody = over.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onCardDragOver', {
                                activeTitle:
                                    activeCard[
                                        isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor
                                    ],
                                overTitle: overColumnBody.title
                            });
                        }
                    },
                    onDragEnd({active, over}) {
                        const type = active.data.current?.type;

                        if (over && type === KanbanElementType.Column) {
                            const activeColumn = active.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;
                            const overColumn = over.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onColumnDragEndOver', {
                                activeTitle: activeColumn.title,
                                overTitle: overColumn.title
                            });
                        }

                        if (over && over.data.current?.type === KanbanElementType.ColumnBody) {
                            const activeCard = active.data.current?.card as TCardData;
                            const overColumnBody = over.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onCardDragEndOver', {
                                activeTitle:
                                    activeCard[
                                        isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor
                                    ],
                                overTitle: overColumnBody.title
                            });
                        }
                    },
                    onDragCancel({active}) {
                        const type = active.data.current?.type;

                        if (type === KanbanElementType.Column) {
                            const column = active.data.current?.column as KanbanColumnData<TCardData, TMenuItem>;

                            return translateKanbanDragAndDrop('onColumnDragCancel', {
                                title: column.title
                            });
                        }

                        if (type === KanbanElementType.Card) {
                            const card = active.data.current?.card as TCardData;

                            return translateKanbanDragAndDrop('onCardDragCancel', {
                                title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                            });
                        }
                    }
                }
            }}
            collisionDetection={activeColumnDragData ? horizontalSortableListCollisionDetection : closestCorners}
            measuring={{
                droppable: {
                    strategy: MeasuringStrategy.Always
                }
            }}
            onDragCancel={onDragCancel}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            sensors={sensors}>
            <div
                aria-label={ariaLabel}
                className={classNames('kanban', className)}
                ref={ref}
                role="region"
                style={{
                    alignItems: columnHeightMode === KanbanColumnHeightMode.Auto ? 'flex-start' : undefined,
                    height
                }}>
                <SortableContext items={columnIds} strategy={horizontalListSortingStrategy}>
                    {data.map((col) => (
                        <KanbanColumn
                            addCardOptions={addCardOptions}
                            data={col}
                            isCollapsed={collapsedColumnKeys.has(col.id)}
                            isDraggable={enableColumnReordering}
                            key={col.id}
                            onCollapsedChange={onColumnCollapsedChange}
                            onMenuAction={onColumnMenuAction}
                            onMenuSelectionChange={onColumnMenuSelectionChange}
                            onShowMoreCards={onShowMoreCards}
                            renderCard={renderCard}
                            width={columnWidth}
                        />
                    ))}
                </SortableContext>
                {renderAfterColumns?.({isDraggingColumn: !!activeColumnDragData})}
                {addColumnOptions && (
                    // Button will handle the press events and focus.
                    // eslint-disable-next-line
                    <li className="kanban__new-column" onClick={addColumnOptions.onAdd}>
                        {addColumnOptions.showIconOnly ?
                            <IconButton
                                aria-label={addColumnOptions.label}
                                iconName={iconNames.Add}
                                onPress={addColumnOptions.onAdd}
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}
                            />
                        :   <Button
                                onPress={addColumnOptions.onAdd}
                                startIconName={iconNames.Add}
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}>
                                {addColumnOptions.label}
                            </Button>
                        }
                    </li>
                )}
            </div>
            {createPortal(
                <DragOverlay>
                    {activeColumnDragData && (
                        <KanbanColumn
                            addCardOptions={addCardOptions}
                            data={activeColumnDragData.column}
                            isCollapsed={collapsedColumnKeys?.has(activeColumnDragData.column.id)}
                            isDraggable={true}
                            isOverlay={true}
                            renderCard={renderCard}
                        />
                    )}
                    {activeCardDragData &&
                        renderCard({
                            columnId: activeCardDragData.columnId,
                            data: activeCardDragData.card,
                            isOverlay: true
                        })}
                </DragOverlay>,
                document.body
            )}
        </DndContext>
    );
}

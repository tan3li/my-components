import {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {DialogTrigger, Popover} from '../../action/popover/index.js';
import {Header} from 'react-aria-components';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {restrictToParentElement, restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {safeCall} from '../../../utils/functionhelper.js';
import {ColumnConfiguratorItem, ColumnItem} from './columnitem.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {isUndefined} from '../../../utils/objecthelper.js';
import {useTranslateRowDragAndDrop} from '../../../hooks/translations/usetranslaterowdraganddrop.js';
import {useTranslateColumnDragAndDrop} from '../../../hooks/translations/usetranslatecolumndraganddrop.js';
import {Drawer, DrawerProps} from '../../feedback/index.js';
import {SearchField} from '../../inputs/index.js';
import {debounce} from '../../../utils/debounce.js';
import {useFilter} from 'react-aria';
import {EmptyState} from '../emptystate/index.js';
import {announce} from '@react-aria/live-announcer';

export const enum ColumnConfiguratorVariant {
    Basic = 'basic',
    Extended = 'extended'
}

export interface ColumnConfiguratorProps {
    /**
     * Actions setup for the extended variant.
     */
    actions?: Pick<DrawerProps, 'primaryAction' | 'secondaryAction' | 'destructiveAction'>;
    /**
     * Pressable trigger element.
     */
    children: ReactNode;
    /**
     * List of columns.
     */
    columns: ColumnConfiguratorItem[];
    /**
     * Array of column ids which define the current order.
     */
    columnOrder?: string[];
    /**
     * Column visibility by id.
     */
    columnVisibility?: Record<string, boolean>;
    /**
     * Column order change callback.
     */
    onColumnOrderChange?: (columnOrder: string[]) => void;
    /**
     * Column visibility change callback.
     */
    onColumnVisibilityChange?: (columnVisibility: Record<string, boolean>) => void;
    /**
     * Configurator variant.
     * Basic (default): column items are rendered inside Popover.
     * Extended: column items are rendered inside Drawer with additional functionality.
     */
    variant?: ColumnConfiguratorVariant;
}

function isColumnSelected(id: string, columnVisibility: Record<string, boolean>) {
    const visibility = columnVisibility[id];

    return isUndefined(visibility) ? true : visibility;
}

const SEARCH_DELAY = 300;

export function ColumnConfigurator({
    actions,
    columns,
    columnOrder: propsColumnOrder,
    columnVisibility: propsColumnVisibility,
    children,
    onColumnOrderChange,
    onColumnVisibilityChange,
    variant = ColumnConfiguratorVariant.Basic
}: ColumnConfiguratorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [columnOrder, setColumnOrder] = useState<string[]>(() => propsColumnOrder ?? columns.map((col) => col.id));
    const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(propsColumnVisibility ?? {});
    const columnsById: Record<string, ColumnConfiguratorItem> = useMemo(
        () =>
            columns.reduce((map, col) => {
                map[col.id] = col;

                return map;
            }, {}),
        [columns]
    );
    const selectedCount = useMemo(
        () => columnOrder.reduce((count, id) => count + (isColumnSelected(id, columnVisibility) ? 1 : 0), 0),
        [columnVisibility, columnOrder]
    );
    const hiddenCount = useMemo(() => columns.reduce((count, col) => count + (col.isHidden ? 1 : 0), 0), [columns]);
    const [searchText, setSearchText] = useState('');
    const filter = useFilter({sensitivity: 'base'});
    const translateCommon = useTranslateCommon();
    const translateRowDragAndDrop = useTranslateRowDragAndDrop();
    const translateColumnDragAndDrop = useTranslateColumnDragAndDrop();

    const onDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        const activeId = active?.id as string;
        const overId = over?.id as string;

        if (activeId && overId && activeId !== overId) {
            const oldIndex = columnOrder.indexOf(activeId);
            const newIndex = columnOrder.indexOf(overId);
            const newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex);

            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        }
    };

    const onSearch = useCallback(debounce(setSearchText, SEARCH_DELAY), []);

    const sensors = useSensors(
        useSensor(MouseSensor, {}),
        useSensor(TouchSensor, {}),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const filteredColumnOrder = useMemo(
        () =>
            columnOrder.filter((id) => {
                const item = columnsById[id];

                return !item.isHidden && (!searchText || filter.contains(item.name, searchText));
            }),
        [columnOrder, filter, searchText]
    );
    const filteredColumnCount = filteredColumnOrder.length;

    const renderItems = () => {
        const columnItems = filteredColumnOrder.map((id) => {
            const item = columnsById[id];

            return (
                <ColumnItem
                    isDraggable={!searchText}
                    isSelected={isColumnSelected(id, columnVisibility)}
                    item={item}
                    key={id}
                    onSelectedChange={(isSelected) => {
                        const newColumnVisibility = {
                            ...columnVisibility,
                            [id]: isSelected
                        };

                        setColumnVisibility(newColumnVisibility);
                        safeCall(onColumnVisibilityChange, newColumnVisibility);
                    }}
                />
            );
        });

        if (columnItems.length === 0) {
            return (
                <EmptyState
                    bodyText={translateCommon('noColumnsFoundInfo')}
                    title={translateCommon('noColumnsFound')}
                />
            );
        }

        return (
            <DndContext
                accessibility={{
                    announcements: {
                        onDragStart({active}) {
                            return translateColumnDragAndDrop('onDragStart', {
                                title: columnsById[active.id].name
                            });
                        },
                        onDragOver({active, over}) {
                            if (over) {
                                return translateColumnDragAndDrop('onDragOver', {
                                    activeTitle: columnsById[active.id].name,
                                    overTitle: columnsById[over.id].name
                                });
                            }

                            return translateColumnDragAndDrop('onDragOverEnd', {
                                title: columnsById[active.id].name
                            });
                        },
                        onDragEnd({active, over}) {
                            if (over) {
                                return translateColumnDragAndDrop('onDragEndOver', {
                                    activeTitle: columnsById[active.id].name,
                                    overTitle: columnsById[over.id].name
                                });
                            }

                            return translateColumnDragAndDrop('onDragEnd', {
                                title: columnsById[active.id].name
                            });
                        },
                        onDragCancel({active}) {
                            return translateColumnDragAndDrop('onDragCancel', {
                                title: columnsById[active.id].name
                            });
                        }
                    },
                    screenReaderInstructions: {
                        draggable: translateRowDragAndDrop('instructions')
                    }
                }}
                collisionDetection={closestCenter}
                modifiers={[restrictToParentElement, restrictToVerticalAxis]}
                onDragEnd={onDragEnd}
                sensors={sensors}>
                <SortableContext items={columnOrder} strategy={verticalListSortingStrategy}>
                    {columnItems}
                </SortableContext>
            </DndContext>
        );
    };

    useEffect(() => {
        setColumnOrder(propsColumnOrder ?? columns.map((col) => col.id));
    }, [propsColumnOrder]);

    useEffect(() => {
        setColumnVisibility(propsColumnVisibility ?? {});
    }, [propsColumnVisibility]);

    useEffect(() => {
        if (isOpen) {
            announce(translateCommon('columnsAvailable', {count: filteredColumnCount}));
        }
    }, [isOpen, filteredColumnCount]);

    const visibilityStatusText = `${translateCommon('showColumns')} (${selectedCount - hiddenCount}/${columnOrder.length - hiddenCount})`;
    let overlay: ReactNode;

    if (variant === ColumnConfiguratorVariant.Extended) {
        overlay = (
            <Drawer
                {...actions}
                className="column-configurator-drawer"
                headerDetails={<Label size={Size.md}>{visibilityStatusText}</Label>}
                title={translateCommon('customizeColumns')}>
                <SearchField
                    aria-label={translateCommon('searchColumnTitle')}
                    autoFocus={true}
                    onChange={onSearch}
                    placeholder={translateCommon('searchColumnTitle')}
                    size={Size.sm}
                />
                <div className="column-configurator-drawer__items">{renderItems()}</div>
            </Drawer>
        );
    } else {
        overlay = (
            <Popover className="column-configurator-popover" maxHeight={280} padding={0} placement="bottom left">
                <div className="column-configurator-dialog-content">
                    <Header className="column-configurator-dialog__header">
                        <Label size={Size.md}>
                            <strong>{visibilityStatusText}</strong>
                        </Label>
                    </Header>
                    <div className="column-configurator-dialog__body">{renderItems()}</div>
                </div>
            </Popover>
        );
    }

    return (
        <DialogTrigger onOpenChange={setIsOpen}>
            {children}
            {overlay}
        </DialogTrigger>
    );
}

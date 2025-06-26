import {useDroppable} from '@dnd-kit/core';
import {KanbanCardData, KanbanColumnData, KanbanElementType} from './types.js';
import {MenuItem} from '../../action/index.js';

export function useKanbanDroppableColumnBody<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({
    column,
    isDisabled
}: {
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}) {
    const id = column.id;
    const {active, isOver, setNodeRef} = useDroppable({
        id: `${id}-body`,
        disabled: isDisabled,
        data: {
            column,
            columnId: id,
            type: KanbanElementType.ColumnBody
        }
    });
    const activeData = active?.data.current;
    const isDroppableOver =
        isOver && !!activeData && activeData.type === KanbanElementType.Card && activeData.columnId !== id;

    return {
        isDroppableOver,
        bodyProps: {
            ref: setNodeRef
        }
    };
}

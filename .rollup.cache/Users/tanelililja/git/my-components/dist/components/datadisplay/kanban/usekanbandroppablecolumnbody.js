import { useDroppable } from '@dnd-kit/core';
import { KanbanElementType } from './types.js';
export function useKanbanDroppableColumnBody(_a) {
    var column = _a.column, isDisabled = _a.isDisabled;
    var id = column.id;
    var _b = useDroppable({
        id: "".concat(id, "-body"),
        disabled: isDisabled,
        data: {
            column: column,
            columnId: id,
            type: KanbanElementType.ColumnBody
        }
    }), active = _b.active, isOver = _b.isOver, setNodeRef = _b.setNodeRef;
    var activeData = active === null || active === void 0 ? void 0 : active.data.current;
    var isDroppableOver = isOver && !!activeData && activeData.type === KanbanElementType.Card && activeData.columnId !== id;
    return {
        isDroppableOver: isDroppableOver,
        bodyProps: {
            ref: setNodeRef
        }
    };
}
//# sourceMappingURL=usekanbandroppablecolumnbody.js.map
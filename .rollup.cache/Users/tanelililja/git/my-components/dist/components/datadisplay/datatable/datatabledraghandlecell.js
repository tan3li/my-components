import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useSortable } from '@dnd-kit/sortable';
import { DragHandle } from '../draghandle/draghandle.js';
export function DataTableDragHandleCell(_a) {
    var ref = _a.ref, row = _a.row;
    var _b = useSortable({
        id: row.id
    }), attributes = _b.attributes, listeners = _b.listeners;
    return _jsx(DragHandle, __assign({}, attributes, listeners, { ref: ref }));
}
//# sourceMappingURL=datatabledraghandlecell.js.map
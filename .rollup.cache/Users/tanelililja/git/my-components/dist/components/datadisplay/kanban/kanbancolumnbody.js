import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { mergeRefs } from '@react-aria/utils';
import { useKanbanDroppableColumnBody } from './usekanbandroppablecolumnbody.js';
export function KanbanColumnBody(_a) {
    var children = _a.children, column = _a.column, isDisabled = _a.isDisabled, ref = _a.ref;
    var _b = useKanbanDroppableColumnBody({ column: column, isDisabled: isDisabled }), isDroppableOver = _b.isDroppableOver, bodyProps = _b.bodyProps;
    return (_jsx("div", __assign({ className: classNames('kanban-column__body', {
            'kanban-column__body--droppable-over': isDroppableOver
        }), ref: mergeRefs(bodyProps.ref, ref), role: "list" }, { children: children })));
}
//# sourceMappingURL=kanbancolumnbody.js.map
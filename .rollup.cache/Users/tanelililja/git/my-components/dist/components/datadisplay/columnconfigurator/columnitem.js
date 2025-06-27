import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSortable } from '@dnd-kit/sortable';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { CSS } from '@dnd-kit/utilities';
import { Label } from '../../text/index.js';
import { Size } from '../../../constants/index.js';
import { Checkbox } from '../../inputs/index.js';
import { DragHandle } from '../draghandle/draghandle.js';
export function ColumnItem(_a) {
    var isDraggable = _a.isDraggable, isSelected = _a.isSelected, item = _a.item, onSelectedChange = _a.onSelectedChange;
    var id = item.id, name = item.name, isSelectable = item.isSelectable;
    var _b = useSortable({
        id: id,
        disabled: !isDraggable
    }), transform = _b.transform, transition = _b.transition, setNodeRef = _b.setNodeRef, isDragging = _b.isDragging, attributes = _b.attributes, listeners = _b.listeners;
    var translateCommon = useTranslateCommon();
    var style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        zIndex: isDragging ? 1 : 0,
        position: 'relative'
    };
    return (_jsxs("div", __assign({ className: "column-item", ref: setNodeRef, style: style }, { children: [_jsx(DragHandle, __assign({}, attributes, listeners, { disabled: !isDraggable })), _jsx(Checkbox, { "aria-label": translateCommon('show'), isDisabled: isSelectable === false, isSelected: isSelected, onChange: onSelectedChange }), _jsx(Label, __assign({ className: "column-item__label", size: Size.sm }, { children: _jsx("strong", { children: name }) }))] })));
}
//# sourceMappingURL=columnitem.js.map
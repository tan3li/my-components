import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KanbanElementType } from './types.js';
import { useId, useRef, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { mergeRefs } from '@react-aria/utils';
import { DragHandle } from '../draghandle/draghandle.js';
import { Button, ButtonStyle, ButtonVariant, IconButton, Menu, TriggerElement } from '../../action/index.js';
import { iconNames } from '../../media/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Label } from '../../text/index.js';
import { Orientation, Position, Size } from '../../../constants/index.js';
import { classNames } from '../../../utils/classnames.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { useIsTextTruncated } from '../../../hooks/useistexttruncated.js';
import { KanbanColumnBody } from './kanbancolumnbody.js';
import { isNumber } from '../../../utils/objecthelper.js';
export function KanbanColumn(_a) {
    var _b, _c, _d, _e;
    var addCardOptions = _a.addCardOptions, data = _a.data, isDraggable = _a.isDraggable, isCollapsed = _a.isCollapsed, isOverlay = _a.isOverlay, onCollapsedChange = _a.onCollapsedChange, onMenuAction = _a.onMenuAction, onMenuSelectionChange = _a.onMenuSelectionChange, onShowMoreCards = _a.onShowMoreCards, ref = _a.ref, renderCard = _a.renderCard, width = _a.width;
    var _f = useState(false), isLoadingMoreCards = _f[0], setIsLoadingMoreCards = _f[1];
    var cards = data.cards, description = data.description, hasMoreCards = data.hasMoreCards, id = data.id, menuProps = data.menuProps, title = data.title, total = data.total;
    var _g = useSortable({
        id: id,
        data: {
            column: data,
            type: KanbanElementType.Column
        }
    }), active = _g.active, attributes = _g.attributes, isDragging = _g.isDragging, listeners = _g.listeners, setNodeRef = _g.setNodeRef, transition = _g.transition, transform = _g.transform;
    var translateCommon = useTranslateCommon();
    var titleRef = useRef(null);
    var isTruncated = useIsTextTruncated({
        ref: titleRef,
        overflowDirection: isCollapsed ? Orientation.vertical : Orientation.horizontal
    });
    var titleId = useId();
    var style = {
        flex: !isCollapsed && !!width ? "0 0 ".concat(width).concat(isNumber(width) ? 'px' : '') : undefined,
        transform: CSS.Translate.toString(transform),
        transition: transition
    };
    var onShowMore = function () {
        var _a;
        setIsLoadingMoreCards(true);
        (_a = onShowMoreCards === null || onShowMoreCards === void 0 ? void 0 : onShowMoreCards(data)) === null || _a === void 0 ? void 0 : _a.finally(function () {
            setIsLoadingMoreCards(false);
        });
    };
    return (_jsxs("div", __assign({ "aria-labelledby": titleId, className: classNames('kanban-column', {
            'kanban-column--overlay': isOverlay,
            'kanban-column--dragging': isDragging,
            'kanban-column--collapsed': isCollapsed
        }), ref: mergeRefs(setNodeRef, ref), role: "region", style: style }, { children: [_jsxs("div", __assign({ className: "kanban-column__header" }, { children: [_jsxs("div", __assign({ className: "kanban-column__header-start" }, { children: [isDraggable && _jsx(DragHandle, __assign({}, attributes, listeners)), _jsxs("div", __assign({ className: "kanban-column__title-wrapper" }, { children: [_jsx(IconButton, { "aria-expanded": !isCollapsed, "aria-label": translateCommon(isCollapsed ? 'expand' : 'collapse'), iconName: isCollapsed ? iconNames.ChevronRight : iconNames.ExpandMore, onPress: function () { return onCollapsedChange === null || onCollapsedChange === void 0 ? void 0 : onCollapsedChange({ id: id, isCollapsed: !isCollapsed }); }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), _jsxs("div", __assign({ className: "kanban-column__title-texts", id: titleId }, { children: [_jsxs(TooltipTrigger, __assign({ isDisabled: !isTruncated }, { children: [_jsx(TriggerElement, __assign({ className: "kanban-column__title-trigger", excludeFromTabOrder: !isTruncated }, { children: _jsx(Label, __assign({ className: "kanban-column__title", ref: titleRef, size: Size.md }, { children: _jsx("strong", { children: title }) })) })), _jsx(Tooltip, __assign({ position: isCollapsed ? Position.Right : undefined, type: TooltipType.Plain }, { children: title }))] })), !isCollapsed && description && (_jsx(Label, __assign({ className: "kanban-column__description", size: Size.sm }, { children: description })))] }))] }))] })), _jsxs("div", __assign({ className: "kanban-column__header-end" }, { children: [!isCollapsed && (_jsxs(TooltipTrigger, { children: [_jsx(TriggerElement, __assign({ className: "kanban-colum__total" }, { children: _jsx(Label, __assign({ size: Size.sm }, { children: (_b = total === null || total === void 0 ? void 0 : total.value) !== null && _b !== void 0 ? _b : cards.length })) })), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: (_c = total === null || total === void 0 ? void 0 : total.tooltipContent) !== null && _c !== void 0 ? _c : translateCommon('itemsInList', { count: (_d = total === null || total === void 0 ? void 0 : total.value) !== null && _d !== void 0 ? _d : cards.length }) }))] })), menuProps && (_jsx(Menu, __assign({}, menuProps, { onAction: function (actionKey) { return onMenuAction === null || onMenuAction === void 0 ? void 0 : onMenuAction({ actionKey: actionKey, columnId: id }); }, onSelectionChange: function (selectedKeys) { return onMenuSelectionChange === null || onMenuSelectionChange === void 0 ? void 0 : onMenuSelectionChange({ columnId: id, selectedKeys: selectedKeys }); }, placement: "bottom right" }, { children: _jsxs(TooltipTrigger, { children: [_jsx(IconButton, { "aria-label": translateCommon('moreActions'), iconName: iconNames.MoreVert, size: Size.sm, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: translateCommon('moreActions') }))] }) })))] }))] })), !isCollapsed && (_jsxs(KanbanColumnBody, __assign({ column: data, isDisabled: ((_e = active === null || active === void 0 ? void 0 : active.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.Column }, { children: [cards.map(function (card) { return renderCard({ columnId: id, data: card }); }), hasMoreCards && (_jsx(Button, __assign({ className: "kanban-column__show-more-button", isLoading: isLoadingMoreCards, isPending: isLoadingMoreCards, onPress: onShowMore, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('showMore') })))] }))), !isCollapsed && (_jsx("div", __assign({ className: "kanban-column__footer" }, { children: addCardOptions && (_jsx(Button, __assign({ onPress: function () { var _a; return (_a = addCardOptions === null || addCardOptions === void 0 ? void 0 : addCardOptions.onAdd) === null || _a === void 0 ? void 0 : _a.call(addCardOptions, { columnId: id }); }, startIconName: iconNames.Add, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: addCardOptions.label }))) })))] })));
}
//# sourceMappingURL=kanbancolumn.js.map
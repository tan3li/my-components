import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { KanbanElementType } from '../kanban/types.js';
import { mergeRefs } from '@react-aria/utils';
import { DragHandle } from '../draghandle/draghandle.js';
import { ButtonStyle, ButtonVariant, IconButton, Menu } from '../../action/index.js';
import { iconNames } from '../../media/index.js';
import { Size } from '../../../constants/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { classNames } from '../../../utils/classnames.js';
import { Label, Title } from '../../text/index.js';
import { KanbanCardFooter } from './kanbancardfooter.js';
export var KANBAN_CARD_HOVER_BUTTON_CSS_CLASS = 'kanban-card__hover-button';
export function KanbanCard(_a) {
    var bodyContent = _a.bodyContent, className = _a.className, columnId = _a.columnId, data = _a.data, detailsContent = _a.detailsContent, footerProps = _a.footerProps, headerContent = _a.headerContent, _b = _a.idAccessor, idAccessor = _b === void 0 ? 'id' : _b, isOverlay = _a.isOverlay, menuProps = _a.menuProps, ref = _a.ref, subTitle = _a.subTitle, title = _a.title;
    var _c = useDraggable({
        id: data[idAccessor],
        data: {
            card: data,
            columnId: columnId,
            type: KanbanElementType.Card
        }
    }), isDragging = _c.isDragging, setNodeRef = _c.setNodeRef, listeners = _c.listeners, attributes = _c.attributes;
    var translateCommon = useTranslateCommon();
    var titleId = useId();
    return (_jsxs("div", __assign({ className: classNames('kanban-card', className, {
            'kanban-card--overlay': isOverlay,
            'kanban-card--dragging': isDragging
        }), ref: mergeRefs(setNodeRef, ref), role: "listitem" }, { children: [_jsxs("div", __assign({ className: "kanban-card__header" }, { children: [_jsx(DragHandle, __assign({}, attributes, listeners, { "aria-labelledby": titleId })), (!!menuProps || !!headerContent) && (_jsxs("div", __assign({ className: "kanban-card__header-right" }, { children: [headerContent, menuProps && (_jsx(Menu, __assign({}, menuProps, { placement: "bottom right" }, { children: _jsx(IconButton, { "aria-label": translateCommon('moreActions'), iconName: iconNames.MoreVert, isDisabled: menuProps.isDisabled, size: Size.sm, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }) })))] })))] })), _jsxs("div", __assign({ className: "kanban-card__body" }, { children: [_jsxs("div", __assign({ className: "kanban-card__title-wrapper", id: titleId }, { children: [_jsx(Title, __assign({ size: Size.xxs }, { children: _jsx("strong", { children: title }) })), subTitle && _jsx(Label, __assign({ size: Size.md }, { children: subTitle }))] })), bodyContent] })), detailsContent && _jsx("div", __assign({ className: "kanban-card__details" }, { children: detailsContent })), footerProps && _jsx(KanbanCardFooter, __assign({}, footerProps))] })));
}
//# sourceMappingURL=kanbancard.js.map
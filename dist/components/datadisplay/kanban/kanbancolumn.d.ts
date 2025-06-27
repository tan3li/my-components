import { KanbanCardData, KanbanColumnData } from './types.js';
import { ReactNode, RefAttributes } from 'react';
import { MenuItem } from '../../action/index.js';
import { Key, Selection } from 'react-aria-components';
export interface KanbanCardRenderProps<TCardData extends KanbanCardData> {
    columnId: string;
    data: TCardData;
    isOverlay?: boolean;
}
export interface KanbanColumnProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    addCardOptions?: {
        label: string;
        onAdd?: ({ columnId }: {
            columnId: string;
        }) => void;
    };
    data: KanbanColumnData<TCardData, TMenuItem>;
    isDraggable?: boolean;
    isCollapsed: boolean;
    isOverlay?: boolean;
    onCollapsedChange?: (args: {
        id: string;
        isCollapsed: boolean;
    }) => void;
    onMenuAction?: ({ actionKey, columnId }: {
        actionKey: Key;
        columnId: string;
    }) => void;
    onMenuSelectionChange?: ({ columnId, selectedKeys }: {
        columnId: string;
        selectedKeys: Selection;
    }) => void;
    onShowMoreCards?: (column: KanbanColumnData<TCardData, TMenuItem>) => Promise<void>;
    renderCard: (props: KanbanCardRenderProps<TCardData>) => ReactNode;
    width?: string | number;
}
export declare function KanbanColumn<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ addCardOptions, data, isDraggable, isCollapsed, isOverlay, onCollapsedChange, onMenuAction, onMenuSelectionChange, onShowMoreCards, ref, renderCard, width }: KanbanColumnProps<TCardData, TMenuItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=kanbancolumn.d.ts.map
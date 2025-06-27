import { MenuItem, MenuProps } from '../../action/index.js';
import { ReactNode } from 'react';
export interface KanbanCardData {
}
export interface KanbanColumnData<TCardData extends KanbanCardData, TMenuItem extends MenuItem> {
    /**
     * Array of kanban cards.
     */
    cards: TCardData[];
    /**
     * Column description.
     */
    description?: string;
    /**
     * Whether there are more cards to show which are not currently included in cards array.
     */
    hasMoreCards?: boolean;
    /**
     * Unique identifier.
     */
    id: string;
    /**
     * Props for header actions menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children' | 'onAction' | 'onSelectionChange'>;
    /**
     * Column title.
     */
    title: string;
    /**
     * Column total options.
     */
    total?: {
        tooltipContent?: ReactNode;
        value: string | number;
    };
}
export declare const enum KanbanElementType {
    Card = "card",
    Column = "column",
    ColumnBody = "column-body"
}
export declare const enum KanbanColumnHeightMode {
    Auto = "auto",
    Full = "full"
}
export interface KanbanColumnDragData<TCardData extends KanbanCardData, TMenuItem extends MenuItem> {
    column: KanbanColumnData<TCardData, TMenuItem>;
    type: KanbanElementType.Column;
}
export interface KanbanCardDragData<TCardData extends KanbanCardData> {
    card: TCardData;
    columnId: string;
    type: KanbanElementType.Card;
}
//# sourceMappingURL=types.d.ts.map
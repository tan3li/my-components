import { CSSProperties, ReactNode, RefAttributes } from 'react';
import { KanbanCardData, KanbanColumnData, KanbanColumnHeightMode } from './types.js';
import { KanbanColumnProps } from './kanbancolumn.js';
import { MenuItem } from '../../action/index.js';
export interface KanbanProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    /**
     * Display "Add card" button in the footer of each column with given label and press callback.
     */
    addCardOptions?: KanbanColumnProps<TCardData, TMenuItem>['addCardOptions'];
    /**
     * Display "Add column" button after the columns with given label and press callback.
     * If showIconOnly = true, will be displayed as icon button with given label as aria label.
     */
    addColumnOptions?: {
        label: string;
        onAdd?: () => void;
        showIconOnly?: boolean;
    };
    /**
     * Aria label for the element.
     */
    ['aria-label']?: string;
    /**
     * Accessor to get the name for card. Required for drag and drop a11y announcements.
     * Can be either property name or method which returns the property name for given item.
     */
    cardNameAccessor: string | ((card: TCardData) => string);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifiers of collapsed columns.
     */
    collapsedColumnKeys?: Set<string>;
    /**
     * Determines how column height behaves.
     * Full (default) = columns take full height of the board.
     * Auto = columns take height of their content.
     */
    columnHeightMode?: KanbanColumnHeightMode;
    /**
     * Fixed width for columns. Should be between column min-width (240px) and max-width (550px).
     * If not given, columns fill the available space within their min and max width.
     */
    columnWidth?: string | number;
    /**
     * Data for the kanban.
     */
    data: Array<KanbanColumnData<TCardData, TMenuItem>>;
    /**
     * Whether columns can be drag and dropped.
     */
    enableColumnReordering?: boolean;
    /**
     * Height of the kanban board.
     */
    height?: CSSProperties['height'];
    /**
     * Handler that is called when on card drag end.
     */
    onCardDragEnd?: (params: {
        cardId: string;
        oldColumnId: string;
        oldColumnIndex: number;
        newColumnId: string;
        newColumnIndex: number;
    }) => void;
    /**
     * Handler that is called when on column collapsed state changes.
     */
    onColumnCollapsedChange?: (collapsedKeys: Set<string>) => void;
    /**
     * Handler that is called when on column drag end.
     */
    onColumnDragEnd?: (params: {
        columnId: string;
        oldIndex: number;
        newIndex: number;
    }) => void;
    /**
     * Handler that is called when column menu action is pressed.
     */
    onColumnMenuAction?: KanbanColumnProps<TCardData, TMenuItem>['onMenuAction'];
    /**
     * Handler that is called when column menu selection changed.
     */
    onColumnMenuSelectionChange?: KanbanColumnProps<TCardData, TMenuItem>['onMenuSelectionChange'];
    /**
     * Handler that is called when show more button for column is pressed.
     */
    onShowMoreCards?: KanbanColumnProps<TCardData, TMenuItem>['onShowMoreCards'];
    /**
     * Renderer for content after columns.
     */
    renderAfterColumns: (props: {
        isDraggingColumn?: boolean;
    }) => ReactNode;
    /**
     * Renderer for card.
     */
    renderCard: KanbanColumnProps<TCardData, TMenuItem>['renderCard'];
}
export declare function Kanban<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ addCardOptions, addColumnOptions, 'aria-label': ariaLabel, cardNameAccessor, className, collapsedColumnKeys: propsCollapsedColumnKeys, columnHeightMode, columnWidth, data, enableColumnReordering, height, onCardDragEnd, onColumnDragEnd, onColumnCollapsedChange: propsOnColumnCollapsedChange, onColumnMenuAction, onColumnMenuSelectionChange, onShowMoreCards, ref, renderAfterColumns, renderCard }: KanbanProps<TCardData, TMenuItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=kanban.d.ts.map
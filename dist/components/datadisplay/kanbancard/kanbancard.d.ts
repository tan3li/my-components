import { ReactNode, RefAttributes } from 'react';
import { KanbanCardData } from '../kanban/index.js';
import { MenuItem, MenuProps } from '../../action/index.js';
import { KanbanCardFooterProps } from './kanbancardfooter.js';
export interface KanbanCardProps<TData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    /**
     * Content to display in the body after title.
     */
    bodyContent?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifier of the column that the card belongs to. Required for drag and drop.
     */
    columnId: string;
    /**
     * Card data
     */
    data: TData;
    /**
     * Content to display after body.
     */
    detailsContent?: ReactNode;
    /**
     * Props for footer.
     */
    footerProps?: KanbanCardFooterProps;
    /**
     * Content to display on the right side of the header.
     */
    headerContent?: ReactNode;
    /**
     * Name of the id property in data. Defaults to "id" if not given.
     */
    idAccessor?: string;
    /**
     * Whether card is displayed as drag overlay.
     */
    isOverlay?: boolean;
    /**
     * Props for header actions menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children'> & {
        isDisabled?: boolean;
    };
    /**
     * Subtitle of the card.
     */
    subTitle?: string;
    /**
     * Title of the card.
     */
    title: string;
}
export declare const KANBAN_CARD_HOVER_BUTTON_CSS_CLASS = "kanban-card__hover-button";
export declare function KanbanCard<TData extends KanbanCardData, TMenuItem extends MenuItem>({ bodyContent, className, columnId, data, detailsContent, footerProps, headerContent, idAccessor, isOverlay, menuProps, ref, subTitle, title }: KanbanCardProps<TData, TMenuItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=kanbancard.d.ts.map
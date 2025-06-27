import { CSSProperties, ReactNode, RefAttributes } from 'react';
export interface DataTableToolbarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Action buttons for selected items.
     */
    actions?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of selected rows/items.
     */
    selectedCount: number;
    /**
     * Minimum width reserved for the "<selectedCount> selected" text.
     */
    selectedTextMinWidth?: CSSProperties['minWidth'];
}
export declare function DataTableToolbar({ actions, className, ref, selectedCount, selectedTextMinWidth }: DataTableToolbarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatabletoolbar.d.ts.map
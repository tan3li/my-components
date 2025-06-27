import { ReactNode } from 'react';
import { ColumnConfiguratorItem } from './columnitem.js';
import { DrawerProps } from '../../feedback/index.js';
export declare const enum ColumnConfiguratorVariant {
    Basic = "basic",
    Extended = "extended"
}
export interface ColumnConfiguratorProps {
    /**
     * Actions setup for the extended variant.
     */
    actions?: Pick<DrawerProps, 'primaryAction' | 'secondaryAction' | 'destructiveAction'>;
    /**
     * Pressable trigger element.
     */
    children: ReactNode;
    /**
     * List of columns.
     */
    columns: ColumnConfiguratorItem[];
    /**
     * Array of column ids which define the current order.
     */
    columnOrder?: string[];
    /**
     * Column visibility by id.
     */
    columnVisibility?: Record<string, boolean>;
    /**
     * Column order change callback.
     */
    onColumnOrderChange?: (columnOrder: string[]) => void;
    /**
     * Column visibility change callback.
     */
    onColumnVisibilityChange?: (columnVisibility: Record<string, boolean>) => void;
    /**
     * Configurator variant.
     * Basic (default): column items are rendered inside Popover.
     * Extended: column items are rendered inside Drawer with additional functionality.
     */
    variant?: ColumnConfiguratorVariant;
}
export declare function ColumnConfigurator({ actions, columns, columnOrder: propsColumnOrder, columnVisibility: propsColumnVisibility, children, onColumnOrderChange, onColumnVisibilityChange, variant }: ColumnConfiguratorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=columnconfigurator.d.ts.map
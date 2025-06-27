import { ReactNode, RefAttributes } from 'react';
export declare const enum FilterBarStyle {
    Card = "card",
    Plain = "plain"
}
export interface FilterBarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Number of active, visible and non-visible, filters.
     */
    activeFiltersCount?: number;
    /**
     * Visible filters to render.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of active non-visible filters.
     */
    nonVisibleActiveFiltersCount?: number;
    /**
     * Callback for the "Clear all" action.
     */
    onClearAll?: () => void;
    /**
     * Callback for the "Filters" action.
     */
    onPressFilters?: () => void;
    /**
     * Display style for the element.
     */
    style?: FilterBarStyle;
}
export declare function FilterBar({ activeFiltersCount, className, children, nonVisibleActiveFiltersCount, onClearAll, onPressFilters, ref, style }: FilterBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=filterbar.d.ts.map
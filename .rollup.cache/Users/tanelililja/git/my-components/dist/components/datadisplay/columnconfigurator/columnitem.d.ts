export interface ColumnConfiguratorItem {
    id: string;
    name: string;
    isHidden?: boolean;
    isSelectable?: boolean;
    [key: string]: any;
}
export interface ColumnItemProps {
    isDraggable?: boolean;
    isSelected?: boolean;
    item: ColumnConfiguratorItem;
    onSelectedChange?: (isSelected: boolean) => void;
}
export declare function ColumnItem({ isDraggable, isSelected, item, onSelectedChange }: ColumnItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=columnitem.d.ts.map
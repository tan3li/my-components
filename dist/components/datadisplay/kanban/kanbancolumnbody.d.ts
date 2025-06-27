import { ReactNode, RefAttributes } from 'react';
import { KanbanCardData, KanbanColumnData } from './types.js';
import { MenuItem } from '../../action/index.js';
export interface KanbanColumnBodyProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    children: ReactNode;
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}
export declare function KanbanColumnBody<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ children, column, isDisabled, ref }: KanbanColumnBodyProps<TCardData, TMenuItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=kanbancolumnbody.d.ts.map
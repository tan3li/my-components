import { KanbanCardData, KanbanColumnData } from './types.js';
import { MenuItem } from '../../action/index.js';
export declare function useKanbanDroppableColumnBody<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ column, isDisabled }: {
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}): {
    isDroppableOver: any;
    bodyProps: {
        ref: any;
    };
};
//# sourceMappingURL=usekanbandroppablecolumnbody.d.ts.map
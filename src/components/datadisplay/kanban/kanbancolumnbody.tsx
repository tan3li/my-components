import {classNames} from '../../../utils/classnames.js';
import {ReactNode, RefAttributes} from 'react';
import {KanbanCardData, KanbanColumnData} from './types.js';
import {mergeRefs} from '@react-aria/utils';
import {MenuItem} from '../../action/index.js';
import {useKanbanDroppableColumnBody} from './usekanbandroppablecolumnbody.js';

export interface KanbanColumnBodyProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem>
    extends RefAttributes<HTMLDivElement> {
    children: ReactNode;
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}

export function KanbanColumnBody<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({
    children,
    column,
    isDisabled,
    ref
}: KanbanColumnBodyProps<TCardData, TMenuItem>) {
    const {isDroppableOver, bodyProps} = useKanbanDroppableColumnBody({column, isDisabled});

    return (
        <div
            className={classNames('kanban-column__body', {
                'kanban-column__body--droppable-over': isDroppableOver
            })}
            ref={mergeRefs<HTMLDivElement>(bodyProps.ref, ref)}
            role="list">
            {children}
        </div>
    );
}

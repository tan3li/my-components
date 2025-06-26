import {ReactNode} from 'react';
import {Alignment} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';

interface DataTableCellContentProps {
    alignment?: Alignment;
    className?: string;
    children: ReactNode;
}

export function DataTableCellContent({alignment = Alignment.start, children, className}: DataTableCellContentProps) {
    return (
        <div
            className={classNames(
                'data-table__cell-content',
                `data-table__cell-content--align-${alignment}`,
                className
            )}>
            {children}
        </div>
    );
}

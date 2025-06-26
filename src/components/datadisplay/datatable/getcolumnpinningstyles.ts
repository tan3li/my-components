import {Column} from '@tanstack/table-core';
import {CSSProperties} from 'react';

export function getColumnPinningStyles<TData>(column: Column<TData>): CSSProperties | undefined {
    const pinSide = column.getIsPinned();
    const options = column.columnDef.meta?.columnPinningOptions;

    if (pinSide && options?.[pinSide]?.isSticky) {
        return {
            [pinSide]: `${options?.[pinSide]?.offset ?? 0}px`,
            position: 'sticky',
            zIndex: 1
        };
    }

    return undefined;
}

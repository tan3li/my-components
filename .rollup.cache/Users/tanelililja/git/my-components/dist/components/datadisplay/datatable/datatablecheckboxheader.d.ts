import { HeaderContext } from '@tanstack/table-core';
import { CheckboxCommonProps } from '../../inputs/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { ReactNode } from 'react';
export interface DataTableCheckboxHeaderProps<TData, TValue, T extends AnyObject> extends HeaderContext<TData, TValue>, CheckboxCommonProps<T> {
    label?: ReactNode;
}
export declare function DataTableCheckboxHeader<TData, TValue, T extends AnyObject>({ table, ...props }: DataTableCheckboxHeaderProps<TData, TValue, T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=datatablecheckboxheader.d.ts.map
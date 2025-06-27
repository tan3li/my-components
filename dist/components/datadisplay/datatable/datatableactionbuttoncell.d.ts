import { ReactNode, RefAttributes } from 'react';
import { CellContext } from '@tanstack/table-core';
import { Button, ButtonProps, IconButton, IconButtonProps } from '../../action/index.js';
import { PartialWithRequired } from '../../../utils/types.js';
import { TooltipProps } from '../../feedback/index.js';
type TActionButton = typeof Button | typeof IconButton;
export interface DataTableActionButtonCellProps<TData, TValue, TButton extends TActionButton> extends CellContext<TData, TValue>, RefAttributes<HTMLDivElement> {
    buttonComponent?: TButton;
    buttonProps: TButton extends typeof IconButton ? PartialWithRequired<IconButtonProps, 'aria-label' | 'iconName'> : PartialWithRequired<ButtonProps, 'children'>;
    children?: ReactNode;
    className?: string;
    stopChildrenClickPropagation?: boolean;
    tooltipProps?: PartialWithRequired<TooltipProps, 'children'>;
}
export declare function DataTableActionButtonCell<TData, TValue, TButton extends TActionButton>({ buttonComponent: ActionButton, buttonProps, children, className, ref, stopChildrenClickPropagation, tooltipProps }: DataTableActionButtonCellProps<TData, TValue, TButton>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=datatableactionbuttoncell.d.ts.map
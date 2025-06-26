import {ReactNode, RefAttributes} from 'react';
import {CellContext} from '@tanstack/table-core';
import {classNames} from '../../../utils/classnames.js';
import {Button, ButtonProps, ButtonStyle, ButtonVariant, IconButton, IconButtonProps} from '../../action/index.js';
import {Size} from '../../../constants/index.js';
import {PartialWithRequired} from '../../../utils/types.js';
import {Tooltip, TooltipProps, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {isTouchDevice} from '../../../utils/istouchdevice.js';
import {stopPropagation} from '../../../utils/stoppropagation.js';

type TActionButton = typeof Button | typeof IconButton;

export interface DataTableActionButtonCellProps<TData, TValue, TButton extends TActionButton>
    extends CellContext<TData, TValue>,
        RefAttributes<HTMLDivElement> {
    buttonComponent?: TButton;
    buttonProps: TButton extends typeof IconButton ? PartialWithRequired<IconButtonProps, 'aria-label' | 'iconName'>
    :   PartialWithRequired<ButtonProps, 'children'>;
    children?: ReactNode;
    className?: string;
    stopChildrenClickPropagation?: boolean;
    tooltipProps?: PartialWithRequired<TooltipProps, 'children'>;
}

export function DataTableActionButtonCell<TData, TValue, TButton extends TActionButton>({
    buttonComponent: ActionButton = Button as TButton,
    buttonProps,
    children,
    className,
    ref,
    stopChildrenClickPropagation,
    tooltipProps
}: DataTableActionButtonCellProps<TData, TValue, TButton>) {
    return (
        <div className={classNames('data-table__action-button-cell', className)} ref={ref}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
                className="data-table__action-button-cell-content"
                onClick={stopChildrenClickPropagation ? stopPropagation : undefined}>
                {children}
            </div>
            <TooltipTrigger isDisabled={!tooltipProps}>
                <ActionButton
                    className={classNames('data-table__action-button', {
                        'data-table__action-button--visible': isTouchDevice
                    })}
                    size={Size.md}
                    style={ButtonStyle.Outline}
                    variant={ButtonVariant.Neutral}
                    {...(buttonProps as any)}
                />
                {tooltipProps && <Tooltip type={TooltipType.Plain} {...tooltipProps} />}
            </TooltipTrigger>
        </div>
    );
}

import {
    MenuItem as ReactAriaMenuItem,
    MenuItemProps as ReactAriaMenuItemProps,
    MenuItemRenderProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {ReactNode, Ref, RefAttributes, useEffect, useRef, useState} from 'react';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {ACTION_ITEM_CSS_CLASS, ActionItemContent, ActionItemContentProps} from '../actionitem/actionitem.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {Position} from '../../../constants/index.js';
import {useFocusable} from 'react-aria';
import {mergeRefs} from '@react-aria/utils';

export interface MenuOptionProps extends ReactAriaMenuItemProps, RefAttributes<HTMLDivElement> {
    actionLabel?: ReactNode;
    description?: string;
    isDestructive?: boolean;
    isReadOnly?: boolean;
    label?: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    tooltip?: {
        content: ReactNode;
    };
}

interface MenuOptionContentProps extends ActionItemContentProps, MenuItemRenderProps, RefAttributes<HTMLDivElement> {
    isDestructive?: boolean;
    isReadOnly?: boolean;
    tooltip?: MenuOptionProps['tooltip'];
}

function MenuOptionContent({
    hasSubmenu,
    isDestructive,
    isDisabled,
    isFocusVisible,
    isHovered,
    isPressed,
    isReadOnly,
    leftIconName,
    ref: outerRef,
    rightIconName,
    selectionMode,
    ...props
}: MenuOptionContentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {focusableProps} = useFocusable({}, ref);
    const showLeftIcon = !!leftIconName || selectionMode !== 'none';
    const showRightIcon = !!rightIconName || hasSubmenu;

    return (
        <div
            {...focusableProps}
            className={ACTION_ITEM_CSS_CLASS}
            data-destructive={!!isDestructive || undefined}
            data-disabled={isDisabled || undefined}
            data-focus-visible={isFocusVisible || undefined}
            data-hovered={(isHovered && !isReadOnly) || undefined}
            data-pressed={(isPressed && !isReadOnly) || undefined}
            data-readonly={!!isReadOnly || undefined}
            ref={mergeRefs(ref, outerRef)}>
            <ActionItemContent
                {...props}
                leftIconName={showLeftIcon ? (leftIconName ?? iconNames.InputCheck) : undefined}
                rightIconName={showRightIcon ? (rightIconName ?? iconNames.ArrowRightFilled) : undefined}
            />
        </div>
    );
}

interface MenuOptionInnerProps extends MenuOptionContentProps {
    tooltipRef?: Ref<HTMLDivElement>;
}

function MenuOptionInner({tooltipRef, ...props}: MenuOptionInnerProps) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {isFocusVisible, tooltip} = props;
    const tooltipContent = tooltip?.content;

    useEffect(() => {
        setIsTooltipOpen(tooltipContent ? isFocusVisible : false);
    }, [isFocusVisible]);

    return (
        <TooltipTrigger isDisabled={!tooltipContent} isOpen={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
            <MenuOptionContent {...props} ref={ref} />
            <Tooltip offset={-2} position={Position.Left} ref={tooltipRef} triggerRef={ref} type={TooltipType.Plain}>
                {tooltipContent}
            </Tooltip>
        </TooltipTrigger>
    );
}

export function MenuOption({
    actionLabel,
    className,
    description,
    isDestructive,
    isReadOnly,
    label,
    leftIconName,
    prefix,
    rightIconName,
    ref: outerRef,
    tooltip,
    ...props
}: MenuOptionProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <ReactAriaMenuItem
            {...props}
            className={classNames('menu-item', className)}
            ref={mergeRefs(outerRef, ref, (node) => {
                // RAC MenuItem does not support aria-disabled prop so need to do this the hard way...
                if (node && isReadOnly) {
                    node.setAttribute('aria-disabled', 'true');
                }
            })}>
            {(itemRenderProps: MenuItemRenderProps) => (
                <MenuOptionInner
                    {...itemRenderProps}
                    actionLabel={actionLabel}
                    description={description}
                    isDestructive={isDestructive}
                    isReadOnly={isReadOnly}
                    label={label}
                    leftIconName={leftIconName}
                    prefix={prefix}
                    rightIconName={rightIconName}
                    tooltip={tooltip}
                    tooltipRef={(tooltipNode) => {
                        // RAC MenuItem does not support Tooltip so need to handle the aria-describedby the hard way...
                        const itemNode = ref.current;

                        if (!itemNode) {
                            return;
                        }

                        if (tooltipNode) {
                            itemNode.setAttribute('aria-describedby', tooltipNode.getAttribute('id')!);
                        } else {
                            itemNode.removeAttribute('aria-describedby');
                        }
                    }}
                />
            )}
        </ReactAriaMenuItem>
    );
}

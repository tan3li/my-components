import {DisclosureGroupState, useDisclosureState} from 'react-stately';
import {KeyboardEvent, ReactNode, RefAttributes, useRef} from 'react';
import {Heading, Label} from '../../text/index.js';
import {Alignment, KeyboardEventKey, Size} from '../../../constants/index.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {Divider} from '../divider/index.js';
import {classNames} from '../../../utils/classnames.js';
import {AriaDisclosureProps, chain, FocusRing, mergeProps, useDisclosure} from 'react-aria';
import {Button, Key} from 'react-aria-components';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {TriggerElement} from '../../action/index.js';
import {useAutoHeightAnimation} from '../../../hooks/useautoheightanimation.js';

export const enum CollapsibleItemStyle {
    Card = 'card',
    Plain = 'plain'
}

export interface CollapsibleItemObject {
    children: ReactNode;
    id: Key;
    title: ReactNode;
    tooltipContent?: ReactNode;
}

export interface CollapsibleItemProps extends AriaDisclosureProps, RefAttributes<HTMLDivElement> {
    arrowPlacement?: Alignment.start | Alignment.end;
    groupState?: DisclosureGroupState;
    item: CollapsibleItemObject;
    style?: CollapsibleItemStyle;
}

export function CollapsibleItem({
    arrowPlacement = Alignment.start,
    groupState,
    isDisabled,
    item,
    ref,
    style = CollapsibleItemStyle.Plain,
    ...props
}: CollapsibleItemProps) {
    const {id, title, tooltipContent, children} = item;
    const panelRef = useRef<HTMLDivElement>(null);
    const propsIsExpanded = groupState ? groupState.expandedKeys.has(id) : props.isExpanded;
    const state = useDisclosureState({
        ...props,
        isExpanded: propsIsExpanded,
        onExpandedChange(newIsExpanded) {
            if (groupState) {
                groupState.toggleKey(id);
            }

            props.onExpandedChange?.(newIsExpanded);
        }
    });
    const {buttonProps, panelProps} = useDisclosure(
        {...props, isExpanded: propsIsExpanded, isDisabled},
        state,
        panelRef
    );
    const isExpanded = state.isExpanded;
    const {isLoaded, props: panelProps2} = useAutoHeightAnimation({isExpanded, ref: panelRef});

    const onKeyDown = (e: KeyboardEvent) => {
        if (isExpanded && e.key === KeyboardEventKey.Escape) {
            state.collapse();
        }
    };

    const tooltipElement =
        tooltipContent ?
            <TooltipTrigger>
                <TriggerElement>
                    <Icon
                        className="collapsible-item__tooltip-icon"
                        name={iconNames.InfoFilled}
                        size={style === CollapsibleItemStyle.Card ? IconSize.SM : IconSize.XS}
                    />
                </TriggerElement>
                <Tooltip type={TooltipType.Plain}>{tooltipContent}</Tooltip>
            </TooltipTrigger>
        :   null;

    return (
        <div
            className={classNames(
                `collapsible-item collapsible-item--${style} collapsible-item--arrow-${arrowPlacement}`,
                {
                    'collapsible-item--disabled': isDisabled,
                    'collapsible-item--open': isExpanded
                }
            )}
            ref={ref}>
            <FocusRing focusRingClass="collapsible-item__header--focused">
                <Button
                    {...buttonProps}
                    className="collapsible-item__header"
                    onKeyDown={chain(buttonProps.onKeyDown, onKeyDown)}>
                    {style === CollapsibleItemStyle.Card ?
                        <Heading className="collapsible-item__header-text" level={1} size={Size.xs}>
                            {title}
                            {tooltipElement}
                        </Heading>
                    :   <Label className="collapsible-item__header-text" size={Size.lg}>
                            <strong>{title}</strong>
                            {tooltipElement}
                        </Label>
                    }
                    <Icon
                        className="collapsible-item__header-icon"
                        name={isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight}
                        size={IconSize.LG}
                    />
                </Button>
            </FocusRing>
            <div {...mergeProps(panelProps, panelProps2)} className="collapsible-item__content-wrapper" ref={panelRef}>
                {(isExpanded || isLoaded) && <div className="collapsible-item__content">{children}</div>}
            </div>
            {style === CollapsibleItemStyle.Plain && <Divider className="collapsible-item__divider" size={Size.sm} />}
        </div>
    );
}

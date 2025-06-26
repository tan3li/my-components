import {DisclosureProps, useDisclosureState} from 'react-stately';
import {ReactNode, useRef} from 'react';
import {mergeProps, useButton, useDisclosure, useFocusRing} from 'react-aria';
import {Divider} from '../divider/index.js';
import {Size} from '../../../constants/index.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {Label} from '../../text/index.js';
import {useAutoHeightAnimation} from '../../../hooks/useautoheightanimation.js';

export const enum KanbanCardFooterAlertLevel {
    Success = 1,
    Warning,
    Danger
}

export interface KanbanCardFooterProps extends DisclosureProps {
    alertLevel?: KanbanCardFooterAlertLevel;
    children: ReactNode;
    title: string;
}

const ALERT_ICON_CSS_CLASS = 'kanban-card__alert-icon';

const alertLevelIconProps = {
    [KanbanCardFooterAlertLevel.Success]: {
        className: `${ALERT_ICON_CSS_CLASS} ${ALERT_ICON_CSS_CLASS}--success`,
        name: iconNames.ErrorFilled
    },
    [KanbanCardFooterAlertLevel.Warning]: {
        className: `${ALERT_ICON_CSS_CLASS} ${ALERT_ICON_CSS_CLASS}--warning`,
        name: iconNames.WarningFilled
    },
    [KanbanCardFooterAlertLevel.Danger]: {
        className: `${ALERT_ICON_CSS_CLASS} ${ALERT_ICON_CSS_CLASS}--danger`,
        name: iconNames.EmergencyHomeFilled
    }
};

export function KanbanCardFooter({alertLevel, children, title, ...props}: KanbanCardFooterProps) {
    const state = useDisclosureState(props);
    const panelRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const {buttonProps: triggerProps, panelProps} = useDisclosure(props, state, panelRef);
    const {buttonProps} = useButton(triggerProps, triggerRef);
    const {isFocusVisible, focusProps} = useFocusRing();
    const isExpanded = state.isExpanded;
    const {isLoaded, props: panelProps2} = useAutoHeightAnimation({isExpanded, ref: panelRef});

    return (
        <div className="kanban-card__footer">
            <Divider size={Size.sm} />
            <div className="kanban-card__disclosure">
                <button
                    {...mergeProps(buttonProps, focusProps)}
                    className="kanban-card__disclosure-btn"
                    data-focus-visible={isFocusVisible || undefined}
                    ref={triggerRef}>
                    <div className="kanban-card__disclosure-icon">
                        <Icon name={isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight} size={IconSize.SM} />
                    </div>
                    <Label className="kanban-card__disclosure-title" size={Size.md}>
                        {title}
                    </Label>
                    {alertLevel && <Icon {...alertLevelIconProps[alertLevel]} size={IconSize.MD} />}
                </button>
                <div {...mergeProps(panelProps, panelProps2)} className="kanban-card__disclosure-panel" ref={panelRef}>
                    {(isExpanded || isLoaded) && (
                        <div className="kanban-card__disclosure-panel-content">{children}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

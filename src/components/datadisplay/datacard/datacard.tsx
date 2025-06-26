import {HTMLElementType, Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Label, Title, TitleProps} from '../../text/index.js';
import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {Badge, BadgeProps} from '../../feedback/index.js';
import {Button as ActionButton, ButtonStyle, ButtonVariant, TriggerElement} from '../../action/index.js';
import {FocusRing} from 'react-aria';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {DataCardAction, DataCardActionElement, DataCardAlert, DataCardAlertLevel, DataCardStyle} from './types.js';
import {SkeletonDataCard} from '../../feedback/skeleton/skeletondatacard.js';

export interface DataCardProps extends RefAttributes<HTMLDivElement> {
    /**
     * CTA for the element. Action element can be the whole card (Self) or Button.
     * Note: Self-option is applied only when Card-style is used.
     */
    action?: DataCardAction;
    /**
     * Options for alert icon to show after value.
     */
    alert?: DataCardAlert;
    /**
     * Props for Badge element displayed in the header area.
     */
    badgeProps?: BadgeProps;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Description text for the value.
     */
    description: string;
    /**
     * Header icon name.
     */
    headerIconName?: IconName;
    /**
     * Header text.
     */
    headerText?: string;
    /**
     * Whether element is disabled. Given actions will be disabled if set.
     */
    isDisabled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Minimum width for the card.
     */
    minWidth?: CSSProperties['minWidth'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * Display style of the element.
     */
    style: DataCardStyle;
    /**
     * Main display value.
     */
    value: string | number;
    /**
     * Slot to provide data visualization.
     */
    visualization?: ReactNode;
}

const valueSize: Record<DataCardProps['size'], TitleProps['size']> = {
    [Size.sm]: Size.xs,
    [Size.md]: Size.sm,
    [Size.lg]: Size.md
};

const headerIconSize: Record<DataCardProps['size'], IconSize> = {
    [Size.sm]: IconSize.XS,
    [Size.md]: IconSize.SM,
    [Size.lg]: IconSize.MD
};

export function DataCard({
    action,
    alert,
    badgeProps,
    className,
    description,
    headerIconName,
    headerText,
    isDisabled,
    isSkeleton,
    minWidth,
    ref,
    size,
    style,
    value,
    visualization
}: DataCardProps) {
    const translateCommon = useTranslateCommon();

    if (isSkeleton) {
        return (
            <SkeletonDataCard
                hasHeaderIcon={!!headerIconName}
                hasHeaderText={!!headerText}
                hasVisualization={!!visualization}
                minWidth={minWidth}
                size={size}
                style={style}
            />
        );
    }

    const showHeader = !!headerText || !!badgeProps;
    const alertLevel = alert?.level;
    const content = (
        <>
            {showHeader && (
                <div className="data-card__header">
                    {headerText && (
                        <div className="data-card__header-left">
                            {headerIconName && (
                                <Icon
                                    className="data-card__header-icon"
                                    name={headerIconName}
                                    size={headerIconSize[size]}
                                />
                            )}
                            <Label className="data-card__header-text" size={Size.md}>
                                {headerText}
                            </Label>
                        </div>
                    )}
                    {badgeProps && (
                        <Badge
                            className="data-card__badge"
                            isDisabled={isDisabled && style === DataCardStyle.Card}
                            {...badgeProps}
                        />
                    )}
                </div>
            )}
            <div className="data-card__body">
                <div className="data-card__value-wrapper">
                    <Title className="data-card__value" key="value" size={valueSize[size]}>
                        <strong>{value}</strong>
                    </Title>
                    {alert && alertLevel && (
                        <Icon
                            ariaLabel={alert.ariaLabel ?? translateCommon(alertLevel)}
                            className={`data-card__alert-icon--${alertLevel}`}
                            name={
                                alertLevel === DataCardAlertLevel.Danger ?
                                    iconNames.EmergencyHomeFilled
                                :   iconNames.MinusCircleFilled
                            }
                            size={IconSize.SM}
                        />
                    )}
                </div>
                <Label className="data-card__description" size={Size.md}>
                    {description}
                </Label>
            </div>
            {action && action.element === DataCardActionElement.Button && (
                <ActionButton
                    isDisabled={isDisabled}
                    size={Size.sm}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Neutral}>
                    {action.text}
                </ActionButton>
            )}
            {visualization && <div className="data-card__visualization">{visualization}</div>}
        </>
    );
    const cssClassName = classNames(`data-card data-card--${style} data-card--${size}`, className, {
        'data-card--disabled': isDisabled
    });

    // Self-action is only allowed for Card variation.
    if (style === DataCardStyle.Card && action && action.element === DataCardActionElement.Self && !isDisabled) {
        return (
            <FocusRing focusRingClass="data-card--focused">
                <TriggerElement
                    className={cssClassName}
                    elementType={HTMLElementType.Div}
                    onPress={action.onPress}
                    ref={ref}>
                    {content}
                </TriggerElement>
            </FocusRing>
        );
    }

    return (
        <div className={cssClassName} ref={ref} style={{minWidth}}>
            {content}
        </div>
    );
}

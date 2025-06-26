import {classNames} from '../../../utils/classnames.js';
import {useLanguageDay} from '../../../hooks/uselanguageday.js';
import {
    ButtonStyle,
    ButtonVariant,
    IconButton,
    Menu,
    MenuItem,
    MenuProps,
    TriggerElement,
    TriggerElementRenderProps
} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {useLocales} from '../../../contexts/index.js';
import {isToday as isTodayFn, parseDate} from '@internationalized/date';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {AriaRole, ReactNode} from 'react';
import {Divider} from '../divider/index.js';
import {Tooltip, TooltipProps, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {capitalizeFirstLetter} from '../../../utils/stringhelper.js';
import {DayOfMonth, DayOfMonthProps} from './dayofmonth.js';

type DateLike = string | number | Date;

export interface DateTileProps<TMenuItem extends MenuItem, TDate extends DateLike> {
    /**
     * Aria-label for the element.
     * Overrides default aria-label if given as string.
     * Can be used to extend or override default aria-label if provided as function.
     */
    ariaLabel?: string | ((defaultAriaLabel: string) => string);
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Name of icon to display next to weekday name when isCompleted = true.
     * Defaults to "CheckFilled" if not given.
     */
    completedIconName?: IconName;
    /**
     * Whether to show completed indicator.
     */
    isCompleted?: boolean;
    /**
     * Whether to show locked indicator.
     */
    isLocked?: boolean;
    /**
     * Whether date is selected.
     */
    isSelected?: boolean;
    /**
     * Whether date is today.
     * If not given, date and I18nContext timeZone are used to determine it.
     */
    isToday?: boolean;
    /**
     * Date to display.
     * Can be given as ISO 8601 date string (YYYY-MM-DD), number of milliseconds or Date object.
     */
    date: TDate;
    /**
     * Props for menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children'>;
    /**
     * Handler that is called when the press is released over the target.
     */
    onPress?: (date: TDate) => void;
    /**
     * Custom renderer for day of month.
     */
    renderDayOfMonth?: (dayOfMonthProps: DayOfMonthProps) => ReactNode;
    /**
     * WAI-ARIA role of the element. Should be given if interactive.
     */
    role?: AriaRole;
    /**
     * Secondary text to display under weekday name.
     */
    secondaryText?: ReactNode;
    /**
     * Tooltip props.
     */
    tooltipProps?: {
        headerText?: TooltipProps['headerText'];
        content: TooltipProps['children'];
        type?: TooltipProps['type'];
    };
}

export function DateTile<TMenuItem extends MenuItem, TDate extends DateLike>({
    ariaLabel: propsAriaLabel,
    className,
    completedIconName = iconNames.CheckFilled,
    date,
    isCompleted,
    isLocked,
    isSelected,
    isToday,
    menuProps,
    onPress,
    renderDayOfMonth: propsRenderDayOfMonth,
    secondaryText,
    tooltipProps
}: DateTileProps<TMenuItem, TDate>) {
    const {timeZone} = useLocales();
    const languageDay = useLanguageDay();
    const translateCommon = useTranslateCommon();
    const dayObj = languageDay(date);
    const isDateToday = isToday ?? isTodayFn(parseDate(dayObj.format('YYYY-MM-DD')), timeZone);
    const isFocusable = !!tooltipProps || !!onPress || !!isLocked || !!isCompleted;
    let ariaLabel = '',
        tooltipContent: ReactNode = '';

    const getDefaultAriaLabel = () => {
        let text = dayObj.format('dddd, LL');

        if (isDateToday) {
            text += `, ${translateCommon('today')}`;
        }
        if (isSelected) {
            text += `, ${translateCommon('selected')}`;
        }

        return text;
    };

    // eslint-disable-next-line sonarjs/function-return-type
    const renderDayOfMonth = ({isFocusVisible}: TriggerElementRenderProps) => {
        const dayOfMonthProps: DayOfMonthProps = {
            children: dayObj.date(),
            isCompleted,
            isFocused: isFocusVisible,
            isInteractive: !!onPress,
            isSelected,
            isToday: isDateToday
        };

        if (propsRenderDayOfMonth) {
            return propsRenderDayOfMonth(dayOfMonthProps);
        }

        return <DayOfMonth {...dayOfMonthProps} />;
    };

    if (isFunction(propsAriaLabel)) {
        ariaLabel = propsAriaLabel(getDefaultAriaLabel());
    } else if (propsAriaLabel) {
        ariaLabel = propsAriaLabel;
    } else {
        ariaLabel = getDefaultAriaLabel();
    }

    if (tooltipProps?.content) {
        tooltipContent = tooltipProps.content;
    } else {
        const parts: string[] = [];

        if (isCompleted) {
            parts.push(translateCommon('completed'));
        }
        if (isLocked) {
            parts.push(translateCommon('locked'));
        }

        tooltipContent = capitalizeFirstLetter(parts.join(', ').toLowerCase());
    }

    return (
        <div
            className={classNames('date-tile', className)}
            data-completed={!!isCompleted || undefined}
            data-interactive={!!onPress || undefined}
            data-locked={!!isLocked || undefined}
            data-selected={!!isSelected || undefined}
            data-today={isDateToday || undefined}>
            <TooltipTrigger isDisabled={!tooltipContent}>
                <TriggerElement
                    aria-label={ariaLabel}
                    className="date-tile__start"
                    excludeFromTabOrder={!isFocusable}
                    onPress={() => {
                        safeCall(onPress, date);
                    }}>
                    {(renderProps) => (
                        <>
                            <div className="date-tile__date-area">{renderDayOfMonth(renderProps)}</div>
                            <div className="date-tile__texts">
                                <div className="date-tile__primary-text-row">
                                    <Label className="date-tile__weekday" size={Size.sm}>
                                        {capitalizeFirstLetter(dayObj.format('ddd'))}
                                    </Label>
                                    {isCompleted && (
                                        <Icon
                                            className="date-tile__primary-icon"
                                            name={completedIconName}
                                            size={IconSize.SM}
                                        />
                                    )}
                                </div>
                                {(!!secondaryText || !!isLocked) && (
                                    <div className="date-tile__secondary-text-row">
                                        {secondaryText && (
                                            <Label className="date-tile__secondary-text" size={Size.sm}>
                                                {secondaryText}
                                            </Label>
                                        )}
                                        {isLocked && (
                                            <Icon
                                                className="date-tile__secondary-icon"
                                                name={iconNames.Lock}
                                                size={IconSize.XS}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </TriggerElement>
                <Tooltip headerText={tooltipProps?.headerText} type={tooltipProps?.type ?? TooltipType.Plain}>
                    {tooltipContent}
                </Tooltip>
            </TooltipTrigger>
            {menuProps && (
                <Menu {...menuProps}>
                    <IconButton
                        aria-label={translateCommon('actions')}
                        iconName={iconNames.MoreVert}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}
                    />
                </Menu>
            )}
            {isSelected && <Divider className="date-tile__divider" size={Size.md} />}
        </div>
    );
}

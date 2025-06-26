import {Button, ButtonProps, ButtonStyle} from '../button/index.js';
import {ButtonVariant} from '../constants/index.js';
import {useCultureDay} from '../../../hooks/usecultureday.js';
import {Size} from '../../../constants/index.js';
import {classNames} from '../../../utils/classnames.js';
import {iconNames} from '../../media/index.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';

export const enum DueDateButtonVariant {
    Neutral = 'neutral',
    Danger = 'danger',
    Warning = 'warning'
}

export interface DueDateButtonProps extends Omit<ButtonProps, 'children' | 'size' | 'style' | 'variant'> {
    /**
     * Date value. Should be provided in ISO 8601 date string format (YYYY-MM-DD).
     */
    date: string;
    /**
     * Text to display in the tooltip.
     */
    tooltipContent?: string;
    /**
     * Variant of the button.
     */
    variant?: DueDateButtonVariant;
}

export function DueDateButton({
    date,
    tooltipContent,
    variant = DueDateButtonVariant.Neutral,
    ...props
}: DueDateButtonProps) {
    const cultureDay = useCultureDay();
    const startIconName =
        variant === DueDateButtonVariant.Danger ? iconNames.EmergencyHomeFilled : iconNames.CalendarToday;

    return (
        <TooltipTrigger isDisabled={!tooltipContent}>
            <Button
                {...props}
                aria-label={date}
                className={classNames(`due-date-button due-date-button--${variant}`, props.className)}
                size={Size.sm}
                startIconName={startIconName}
                style={ButtonStyle.Fill}
                variant={ButtonVariant.Neutral}>
                {`${cultureDay(date).format('l')}`}
            </Button>
            <Tooltip type={TooltipType.Plain}>{tooltipContent}</Tooltip>
        </TooltipTrigger>
    );
}

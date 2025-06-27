import { MenuItem, MenuProps } from '../../action/index.js';
import { IconName } from '../../media/index.js';
import { AriaRole, ReactNode } from 'react';
import { TooltipProps } from '../../feedback/index.js';
import { DayOfMonthProps } from './dayofmonth.js';
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
export declare function DateTile<TMenuItem extends MenuItem, TDate extends DateLike>({ ariaLabel: propsAriaLabel, className, completedIconName, date, isCompleted, isLocked, isSelected, isToday, menuProps, onPress, renderDayOfMonth: propsRenderDayOfMonth, secondaryText, tooltipProps }: DateTileProps<TMenuItem, TDate>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=datetile.d.ts.map
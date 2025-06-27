import { CalendarGridProps } from './calendargrid.js';
import { AriaCalendarProps, DateValue } from 'react-aria';
import { ReactNode, RefAttributes } from 'react';
export interface CalendarProps extends Omit<AriaCalendarProps<DateValue>, 'onChange' | 'value' | 'defaultValue' | 'focusedValue' | 'defaultFocusedValue' | 'minValue' | 'maxValue'>, RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Provide footer to render custom content below the calendar grid.
     */
    footer?: ReactNode;
    /**
     * Whether week of selected date should be highlighted.
     */
    highlightSelectedWeek?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Maximum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    maxValue?: DateValue | string;
    /**
     * Minimum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    minValue?: DateValue | string;
    /**
     * Selected date change callback.
     */
    onChange?: (date: DateValue) => void;
    /**
     * Date related to selected value which will create a range between them.
     */
    relatedValue?: DateValue | string | null;
    /**
     * Custom cell content renderer.
     */
    renderCellContent?: CalendarGridProps['renderCellContent'];
    /**
     * Whether to show week numbers.
     */
    showWeekNumbers?: boolean;
    /**
     * Selected date for the calendar. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    value?: DateValue | string | null;
    /**
     * Range for year select items. By default, year select shows current year +/- 5 years.
     */
    yearSelectionRange?: {
        start: number;
        end: number;
    };
}
export declare function Calendar({ className, footer, highlightSelectedWeek, isSkeleton, maxValue: propsMaxValue, minValue: propsMinValue, onFocusChange: propsOnFocusChange, ref, relatedValue, renderCellContent, showWeekNumbers, yearSelectionRange, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=calendar.d.ts.map
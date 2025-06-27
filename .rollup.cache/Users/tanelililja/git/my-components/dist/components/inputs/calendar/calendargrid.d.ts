import { AriaCalendarGridProps, DateValue } from 'react-aria';
import { CalendarState } from 'react-stately';
import { CalendarCellProps } from './calendarcell.js';
export interface CalendarGridProps extends AriaCalendarGridProps {
    highlightSelectedWeek?: boolean;
    relatedValue?: DateValue | string | null;
    renderCellContent?: CalendarCellProps['renderContent'];
    showWeekNumbers?: boolean;
    state: CalendarState;
}
export declare function CalendarGrid({ highlightSelectedWeek, relatedValue, renderCellContent, showWeekNumbers, state, ...props }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=calendargrid.d.ts.map
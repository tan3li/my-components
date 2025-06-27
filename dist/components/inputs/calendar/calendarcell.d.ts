import { CalendarState } from 'react-stately';
import { CalendarDate } from '@internationalized/date';
import { ReactNode } from 'react';
import { DayOfMonthProps } from '../../datadisplay/index.js';
interface RenderContentProps {
    date: string;
    dayOfMonthProps: DayOfMonthProps;
}
interface CalendarCellRangeInfo {
    isEndOfRange?: boolean;
    isInRange: boolean;
    isStartOfRange?: boolean;
}
export interface CalendarCellProps {
    date: CalendarDate;
    isSelectedAsRelatedValue?: boolean;
    rangeInfo?: CalendarCellRangeInfo;
    renderContent?: (props: RenderContentProps) => ReactNode;
    state: CalendarState;
}
export declare function CalendarCell({ date, isSelectedAsRelatedValue, rangeInfo, renderContent, state }: CalendarCellProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=calendarcell.d.ts.map
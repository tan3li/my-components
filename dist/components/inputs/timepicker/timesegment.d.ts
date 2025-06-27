import { RefAttributes } from 'react';
import { DateSegment } from '@react-stately/datepicker';
import { DateFieldState } from 'react-stately';
interface TimeSegmentProps extends RefAttributes<HTMLDivElement> {
    className?: string;
    segment: DateSegment;
    state: DateFieldState;
}
export declare function TimeSegment({ className, ref: outerRef, segment, state }: TimeSegmentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=timesegment.d.ts.map
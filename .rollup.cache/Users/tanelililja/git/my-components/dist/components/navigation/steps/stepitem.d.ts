import { Alignment } from '../../../constants/alignment.js';
import { Orientation } from '../../../constants/orientation.js';
import { RefAttributes } from 'react';
export interface StepItemProps extends RefAttributes<HTMLDivElement> {
    alignment?: Alignment.start | Alignment.center;
    index?: number;
    isActive?: boolean;
    isCompleted?: boolean;
    isDisabled?: boolean;
    orientation?: Orientation;
    progressValue?: number;
    supportText?: string;
    title: string;
}
export declare function StepItem({ alignment, index, isActive, isCompleted, isDisabled, orientation, progressValue, ref, supportText, title }: StepItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=stepitem.d.ts.map
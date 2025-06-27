import { Orientation } from '../../../constants/orientation.js';
import { ReactElement, RefAttributes } from 'react';
import { StepItemProps } from './stepitem.js';
import { Alignment } from '../../../constants/alignment.js';
export interface StepsProps extends RefAttributes<HTMLDivElement> {
    /**
     * Index of the currently selected step.
     */
    activeStep?: string | number;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * The children of the component.
     */
    children: Array<ReactElement<StepItemProps>>;
    /**
     * The orientation of the element.
     */
    orientation?: Orientation;
    /**
     * Alignment of the step item content.
     */
    stepAlignment?: Alignment.start | Alignment.center;
}
export declare function Steps({ activeStep, className, children, orientation, ref, stepAlignment }: StepsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=steps.d.ts.map
import {classNames} from '../../../utils/classnames.js';
import {Orientation} from '../../../constants/orientation.js';
import {Children, cloneElement, ReactElement, RefAttributes} from 'react';
import {StepItemProps} from './stepitem.js';
import {Alignment} from '../../../constants/alignment.js';

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

export function Steps({
    activeStep,
    className,
    children,
    orientation = Orientation.horizontal,
    ref,
    stepAlignment = Alignment.start
}: StepsProps) {
    const mappedChildren = Children.map(children, (child, index) =>
        cloneElement(child, {
            alignment: orientation === Orientation.horizontal ? stepAlignment : Alignment.start,
            index,
            isActive: activeStep === index,
            orientation,
            progressValue: index === children.length - 1 ? undefined : child.props.progressValue
        })
    );

    return (
        <div className={classNames(`steps steps--${orientation}`, className)} ref={ref}>
            {mappedChildren}
        </div>
    );
}

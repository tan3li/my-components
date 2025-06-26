import {classNames} from '../../../utils/classnames.js';
import {StepIndicator} from './stepindicator.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';
import {Alignment} from '../../../constants/alignment.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {StepProgressBar} from './stepprogressbar.js';
import {Orientation} from '../../../constants/orientation.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';
import {RefAttributes} from 'react';

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

export function StepItem({
    alignment = Alignment.start,
    index = 0,
    isActive,
    isCompleted,
    isDisabled,
    orientation = Orientation.horizontal,
    progressValue,
    ref,
    supportText,
    title
}: StepItemProps) {
    return (
        <>
            <div
                className={classNames(`step-item step-item--${alignment}-aligned`, {
                    'step-item--active': isActive,
                    'step-item--completed': isCompleted
                })}
                ref={ref}>
                <StepIndicator isActive={isActive} isCompleted={isCompleted} isDisabled={isDisabled} text={index + 1} />
                <div className="step-item__texts">
                    <BodyText className="step-item__title" elementType={HTMLElementType.Div} size={Size.sm}>
                        <strong>{title}</strong>
                    </BodyText>
                    <BodyText className="step-item__support-text" elementType={HTMLElementType.Div} size={Size.xs}>
                        {supportText}
                    </BodyText>
                </div>
            </div>
            {!isNullOrUndefined(progressValue) && <StepProgressBar orientation={orientation} value={progressValue} />}
        </>
    );
}

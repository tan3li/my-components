import {ProgressBar, ProgressBarRenderProps} from 'react-aria-components';
import {Orientation} from '../../../constants/orientation.js';
import {useTranslateProject} from '../../../hooks/translations/usetranslateproject.js';

export interface StepProgressBarProps {
    orientation?: Orientation;
    value: number;
}

export function StepProgressBar({orientation = Orientation.horizontal, value}: StepProgressBarProps) {
    const isVertical = orientation === Orientation.vertical;
    const translateProject = useTranslateProject();

    return (
        <ProgressBar
            aria-label={translateProject('progress')}
            className={`step-progress-bar step-progress-bar--${orientation}`}
            value={value}>
            {({percentage}: ProgressBarRenderProps) => (
                <div className="step-progress-bar__bar">
                    <div
                        className="step-progress-bar__fill"
                        style={{
                            height: isVertical ? `${percentage}%` : undefined,
                            width: isVertical ? undefined : `${percentage}%`
                        }}
                    />
                </div>
            )}
        </ProgressBar>
    );
}

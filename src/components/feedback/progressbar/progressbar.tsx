import {
    ProgressBar as ReactAriaProgressBar,
    ProgressBarProps as ReactAriaProgressBarProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {TriggerElement} from '../../action/triggerelement/triggerelement.js';
import {Tooltip, TooltipType} from '../tooltip/tooltip.js';
import {TooltipTrigger} from '../tooltip/tooltiptrigger.js';
import {Position} from '../../../constants/position.js';
import {Size} from '../../../constants/size.js';
import {HelpText} from '../../text/helptext/helptext.js';
import {Label} from '../../text/label/label.js';
import {RefAttributes, useCallback, useRef, useState} from 'react';
import {useIntersectionObserver} from '../../inputs/select/useintersectionobserver.js';
import {useResizeObserver} from '@react-aria/utils';
import {HTMLElementType} from '../../../constants/index.js';

// Tooltip arrow width is hardcoded to 12px
const TOOLTIP_ARROW_WIDTH = 12;

export interface ProgressBarProps extends ReactAriaProgressBarProps, RefAttributes<HTMLDivElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Position of the label. If not given, label will not be shown.
     */
    labelPosition?: Position.Bottom | Position.Top;
    /**
     * Whether to show the help text icon.
     */
    showHelpTextIcon?: boolean;
    /**
     * Position of the tooltip.
     */
    tooltipPosition?: Position.Bottom | Position.Top;
    /**
     * Position of the value label. If not given, value label will not be shown.
     */
    valueLabelPosition?: Position.Bottom | Position.Right;
}

export function ProgressBar(props: ProgressBarProps) {
    const {className, helpText, isIndeterminate, labelPosition, showHelpTextIcon, tooltipPosition, valueLabelPosition} =
        props;

    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const [tooltipArrowOffset, setTooltipArrowOffset] = useState(0);

    const isValueLabelPositionRight = valueLabelPosition === Position.Right;
    const label = props['aria-label'];
    const progressBarRef = useRef<HTMLDivElement>(null);

    const calculateTooltipOffset = (percentage = 0) => {
        const progressBarFillWidth = (percentage / 100) * progressBarWidth;

        return Math.round(progressBarFillWidth - progressBarWidth / 2);
    };

    const onProgressBarResize = useCallback(() => {
        const width = progressBarRef.current?.clientWidth ?? 0;

        setProgressBarWidth(width);
    }, [progressBarRef]);

    const onTooltipVisible = (tooltipElement: IntersectionObserverEntry) => {
        const tooltipContentWidth = tooltipElement.intersectionRect?.width ?? 0;

        if (tooltipContentWidth === 0) {
            return;
        }

        const arrowOffset = Math.round(tooltipContentWidth / 2 - TOOLTIP_ARROW_WIDTH / 2);

        setTooltipArrowOffset(arrowOffset);
    };

    useResizeObserver({
        ref: progressBarRef,
        onResize: onProgressBarResize
    });

    const tooltipRef = useIntersectionObserver(onTooltipVisible);

    return (
        <ReactAriaProgressBar {...props} className={classNames('progress-bar', className)}>
            {({percentage, valueText}) => (
                <>
                    {label && labelPosition === Position.Top && (
                        <Label
                            className={classNames('progress-bar__label', {
                                'progress-bar__label--top': !valueText || !isValueLabelPositionRight
                            })}
                            elementType={HTMLElementType.Div}
                            size={Size.md}>
                            {label}
                        </Label>
                    )}
                    <div className="progress-bar__top_container">
                        <TooltipTrigger>
                            <div className="progress-bar__bar-wrapper" ref={progressBarRef}>
                                <TriggerElement aria-label={label ?? props['aria-label']} className="progress-bar__bar">
                                    <div
                                        className={classNames('progress-bar__fill', {
                                            'progress-bar__fill--indeterminate': isIndeterminate
                                        })}
                                        style={isIndeterminate ? {} : {width: `${percentage}%`}}
                                    />
                                </TriggerElement>
                            </div>
                            {valueText && (
                                <Tooltip
                                    arrowBoundaryOffset={tooltipArrowOffset}
                                    crossOffset={calculateTooltipOffset(percentage)}
                                    position={tooltipPosition}
                                    ref={tooltipRef}
                                    type={TooltipType.Plain}>
                                    <Label size={Size.sm}>
                                        <strong>{valueText}</strong>
                                    </Label>
                                </Tooltip>
                            )}
                        </TooltipTrigger>
                        {valueText && isValueLabelPositionRight && (
                            <Label
                                className="progress-bar__value-label progress-bar__value-label--right"
                                size={Size.md}>
                                {valueText}
                            </Label>
                        )}
                    </div>
                    <div className="progress-bar__bottom_container">
                        <div className="progress-bar__bottom_left-container">
                            {label && labelPosition === Position.Bottom && (
                                <Label
                                    className={classNames('progress-bar__label', {
                                        'progress-bar__label--bottom': !valueText || !isValueLabelPositionRight
                                    })}
                                    size={Size.md}>
                                    {label}
                                </Label>
                            )}
                            {helpText && (
                                <HelpText className="progress-bar__help-text" showIcon={showHelpTextIcon}>
                                    {helpText}
                                </HelpText>
                            )}
                        </div>
                        {valueText && valueLabelPosition === Position.Bottom && (
                            <Label
                                className="progress-bar__value-label progress-bar__value-label--bottom"
                                size={Size.md}>
                                {valueText}
                            </Label>
                        )}
                    </div>
                </>
            )}
        </ReactAriaProgressBar>
    );
}

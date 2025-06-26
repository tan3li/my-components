import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {AriaRole} from '../../../constants/ariarole.js';
import {ReactNode, RefAttributes} from 'react';
import {Position} from '../../../constants/index.js';
import {Label, LabelProps} from '../../text/index.js';

export const enum SpinnerVariant {
    Neutral = 'neutral',
    Accent = 'accent',
    None = 'none'
}

export interface SpinnerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if you don't want to have visible label.
     */
    ['aria-label']?: string;
    /**
     * Id of the label element which labels the spinner.
     */
    ['aria-labelledby']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Label for the element.
     */
    label?: ReactNode;
    /**
     * Position of the label.
     */
    labelPosition?: Position.Bottom | Position.Right;
    /**
     * Custom size for label. Use only if you need to override default sizing logic.
     */
    labelSize?: LabelProps['size'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg | Size.xl;
    /**
     * Spinner color variant.
     * If variant = SpinnerVariant.None, color will be inherited from nearest element where color is set.
     */
    variant?: SpinnerVariant;
}

export function Spinner({
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
    label,
    labelPosition = Position.Bottom,
    labelSize,
    ref,
    size,
    variant = SpinnerVariant.Accent
}: SpinnerProps) {
    return (
        <div
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            className={classNames(`spinner spinner--${size}`, className, {
                [`spinner--${variant}`]: variant !== SpinnerVariant.None,
                [`spinner--label-${labelPosition}`]: !!label
            })}
            ref={ref}
            role={AriaRole.status}>
            <span className="spinner__loader" />
            {label && (
                <Label className="spinner__label" size={labelSize ?? (size === Size.xl ? Size.lg : Size.md)}>
                    {label}
                </Label>
            )}
        </div>
    );
}

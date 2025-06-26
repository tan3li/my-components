import {
    Radio as ReactAriaRadio,
    RadioGroupStateContext,
    RadioProps as ReactAriaRadioProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {ReactNode, RefAttributes, useContext} from 'react';
import {Size} from '../../../constants/size.js';
import {LabelPlacement} from '../../../constants/labelplacement.js';
import {Label} from '../../text/label/label.js';
import {HelpText} from '../../text/index.js';
import {getHelpContentAndVariant} from '../common/field/field.js';
import {SkeletonCheckbox} from '../../feedback/skeleton/skeletoncheckbox.js';

export interface RadioCommonProps extends ReactAriaRadioProps, RefAttributes<HTMLLabelElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}

export interface RadioPropsAriaLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}

export interface RadioPropsLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}

export type RadioProps = RadioPropsAriaLabelRequired | RadioPropsLabelRequired;

export function Radio({
    className,
    helpText,
    isSkeleton,
    label,
    labelPlacement = LabelPlacement.End,
    size = Size.sm,
    ...props
}: RadioProps) {
    const radioGroupState = useContext(RadioGroupStateContext);
    const labelSize = size === Size.md ? Size.lg : Size.md;

    if (isSkeleton) {
        return <SkeletonCheckbox className="skeleton-radio" hasHelpText={!!helpText} size={size} />;
    }

    const content: ReactNode[] = [];
    const button = <div className={`radio__button radio__button--${size}`} key="button" />;

    if (label) {
        const buttonAndLabels: ReactNode[] = [];
        const labelNode = (
            <Label className="radio__label" key="label" size={labelSize}>
                {label}
            </Label>
        );
        let wrapperClass = 'radio__button-and-label';

        if (labelPlacement === LabelPlacement.Start) {
            buttonAndLabels.push(labelNode, button);
            wrapperClass = 'radio__label-and-button';
        } else {
            buttonAndLabels.push(button, labelNode);
        }

        if (helpText) {
            const {helpContent, helpVariant} = getHelpContentAndVariant({
                hasError: radioGroupState?.isInvalid,
                helpText,
                isDisabled: !!props.isDisabled || radioGroupState?.isDisabled
            });

            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                buttonAndLabels.push(<div key="buttonPlaceholder" />);
            }

            buttonAndLabels.push(
                <HelpText key="helpText" variant={helpVariant}>
                    {helpContent}
                </HelpText>
            );
        }

        content.push(
            <div className={wrapperClass} key="buttonAndLabel">
                {buttonAndLabels}
            </div>
        );
    } else {
        content.push(button);
    }

    return (
        <ReactAriaRadio
            {...props}
            className={classNames('radio', className, {
                'radio--labeled': !!label,
                'radio--reversed': !!label && labelPlacement === LabelPlacement.Start
            })}>
            {content}
        </ReactAriaRadio>
    );
}

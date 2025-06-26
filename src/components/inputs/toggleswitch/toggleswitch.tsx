import {Switch as ReactAriaSwitch, SwitchProps as ReactAriaSwitchProps} from 'react-aria-components';
import {TDataState} from '../../../constants/datastate.js';
import {Size} from '../../../constants/size.js';
import {ReactNode, RefAttributes, useId} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Label} from '../../text/label/label.js';
import {SwitchNob} from './switchnob.js';
import {RequiredIndicator} from '../../feedback/requiredindicator/requiredindicator.js';
import {ChangeArgs, AnyObject, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {LabelPlacement} from '../../../constants/labelplacement.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {HelpText} from '../../text/index.js';
import {mergeStrings} from '../../../utils/stringhelper.js';
import {getHelpContentAndVariant} from '../common/field/field.js';
import {SkeletonCheckbox} from '../../feedback/skeleton/skeletoncheckbox.js';
import {Icon, iconNames} from '../../media/index.js';

export interface ToggleSwitchCommonProps<P extends AnyObject>
    extends ReactAriaSwitchProps,
        RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states associated with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether ToggleSwitch is in error state.
     */
    isInvalid?: boolean;
    /**
     * Whether ToggleSwitch is in required.
     */
    isRequired?: boolean;
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

export interface ToggleSwitchPropsAriaLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label: undefined;
}

export interface ToggleSwitchPropsLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}

export type ToggleSwitchProps<P extends AnyObject> =
    | ToggleSwitchPropsAriaLabelRequired<P>
    | ToggleSwitchPropsLabelRequired<P>;

export function ToggleSwitch<P extends AnyObject>({
    changeCallback,
    changeParams,
    className,
    dataState,
    dataTestId,
    helpText,
    isDisabled,
    isInvalid,
    isRequired,
    isSelected,
    isSkeleton,
    label,
    labelPlacement = LabelPlacement.End,
    onChange,
    size = Size.sm,
    ...props
}: ToggleSwitchProps<P>) {
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const helpTextId = useId();
    let labelSize = Size.md;

    if (size === Size.md) {
        labelSize = Size.lg;
    }

    if (isSkeleton) {
        return (
            <SkeletonCheckbox
                className="skeleton-toggle-switch"
                hasHelpText={!!helpText || !!errorMessage}
                size={size}
            />
        );
    }

    const content: ReactNode[] = [];

    if (isRequired) {
        content.push(<RequiredIndicator key="required" />);
    }

    const toggleItem = (
        <div className={classNames(`toggle-switch__toggle-item toggle-switch__toggle-item--${size}`)} key="toggleItem">
            <Icon aria-hidden={true} className="toggle-switch__check-icon" name={iconNames.InputCheck} />
            <SwitchNob className="toggle-switch__switch-nob-icon" size={size} />
        </div>
    );

    if (label) {
        const toggleItemAndLabels: ReactNode[] = [];
        const labelNode = (
            <Label className="toggle-switch__label" key="label" size={labelSize}>
                {label}
            </Label>
        );
        let wrapperClass = 'toggle-switch__toggle-item-and-label';

        if (labelPlacement === LabelPlacement.Start) {
            toggleItemAndLabels.push(labelNode, toggleItem);
            wrapperClass = 'toggle-switch__label-and-toggle-item';
        } else {
            toggleItemAndLabels.push(toggleItem, labelNode);
        }

        if (helpText || errorMessage) {
            const {helpContent, helpVariant} = getHelpContentAndVariant({
                errorMessage,
                hasError,
                helpText,
                isDisabled
            });

            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                toggleItemAndLabels.push(<div key="toggleItemPlaceholder" />);
            }

            toggleItemAndLabels.push(
                <HelpText id={helpTextId} key="helpText" variant={helpVariant}>
                    {helpContent}
                </HelpText>
            );
        }

        content.push(
            <div className={wrapperClass} key="toggleItemAndLabel">
                {toggleItemAndLabels}
            </div>
        );
    } else {
        content.push(toggleItem);
    }

    return (
        <ReactAriaSwitch
            {...props}
            aria-describedby={mergeStrings(' ', helpTextId, props['aria-describedby'])}
            className={classNames('toggle-switch', className, {
                'toggle-switch--invalid': hasError,
                'toggle-switch--labeled': !!label,
                'toggle-switch--reversed': !!label && labelPlacement === LabelPlacement.Start
            })}
            data-testid={dataTestId}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isSelected={isSelected}
            onChange={onChange ?? changeParamsCb}>
            {content}
        </ReactAriaSwitch>
    );
}

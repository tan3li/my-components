import {
    Checkbox as ReactAriaCheckbox,
    CheckboxGroupStateContext,
    CheckboxProps as ReactAriaCheckboxProps
} from 'react-aria-components';
import {ReactNode, RefAttributes, useContext, useId} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {Label} from '../../text/label/label.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {InputIndeterminate} from './inputindeterminate.js';
import {RequiredIndicator} from '../../feedback/requiredindicator/requiredindicator.js';
import {TDataState} from '../../../constants/datastate.js';
import {AnyObject, ChangeArgs, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {LabelPlacement} from '../../../constants/labelplacement.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {HelpText} from '../../text/index.js';
import {mergeStrings} from '../../../utils/stringhelper.js';
import {getHelpContentAndVariant} from '../common/field/field.js';
import {SkeletonCheckbox} from '../../feedback/skeleton/skeletoncheckbox.js';
import {iconNames} from '../../media/index.js';

export interface CheckboxCommonProps<P extends AnyObject>
    extends ReactAriaCheckboxProps,
        RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
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

export interface CheckboxPropsAriaLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}

export interface CheckboxPropsLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}

export type CheckboxProps<P extends AnyObject> = CheckboxPropsAriaLabelRequired<P> | CheckboxPropsLabelRequired<P>;

export function Checkbox<P extends AnyObject>({
    className,
    changeCallback,
    changeParams,
    dataState,
    dataTestId,
    helpText,
    isDisabled,
    isIndeterminate,
    isInvalid,
    isRequired,
    isSelected,
    isSkeleton,
    label,
    labelPlacement = LabelPlacement.End,
    onChange,
    size = Size.sm,
    ...props
}: CheckboxProps<P>) {
    const checkboxGroupState = useContext(CheckboxGroupStateContext);
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const helpTextId = useId();
    let labelSize = Size.md,
        iconSize = IconSize.SM;

    if (size === Size.md) {
        labelSize = Size.lg;
        iconSize = IconSize.LG;
    }

    if (isSkeleton) {
        return <SkeletonCheckbox hasHelpText={!!helpText || !!errorMessage} size={size} />;
    }

    const content: ReactNode[] = [];

    if (isRequired) {
        content.push(<RequiredIndicator key="required" />);
    }

    const box = (
        <div className={classNames(`checkbox__box checkbox__box--${size}`)} key="box">
            {isIndeterminate ?
                <InputIndeterminate size={iconSize} />
            :   <Icon aria-hidden={true} name={iconNames.InputCheck} size={iconSize} />}
        </div>
    );

    if (label) {
        const boxAndLabels: ReactNode[] = [];
        const labelNode = (
            <Label className="checkbox__label" key="label" size={labelSize}>
                {label}
            </Label>
        );
        let wrapperClass = 'checkbox__box-and-label';

        if (labelPlacement === LabelPlacement.Start) {
            boxAndLabels.push(labelNode, box);
            wrapperClass = 'checkbox__label-and-box';
        } else {
            boxAndLabels.push(box, labelNode);
        }

        if (helpText || errorMessage) {
            const {helpContent, helpVariant} = getHelpContentAndVariant({
                errorMessage,
                hasError: hasError || checkboxGroupState?.isInvalid,
                helpText,
                isDisabled: !!isDisabled || checkboxGroupState?.isDisabled
            });

            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                boxAndLabels.push(<div key="boxPlaceholder" />);
            }

            boxAndLabels.push(
                <HelpText id={helpTextId} key="helpText" variant={helpVariant}>
                    {helpContent}
                </HelpText>
            );
        }

        content.push(
            <div className={wrapperClass} key="boxAndLabel">
                {boxAndLabels}
            </div>
        );
    } else {
        content.push(box);
    }

    return (
        <ReactAriaCheckbox
            {...props}
            aria-describedby={mergeStrings(' ', helpTextId, props['aria-describedby'])}
            className={classNames('checkbox', className, {
                'checkbox--labeled': !!label,
                'checkbox--reversed': !!label && labelPlacement === LabelPlacement.Start
            })}
            data-testid={dataTestId}
            isDisabled={isDisabled}
            isIndeterminate={isIndeterminate}
            isInvalid={hasError}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isSelected={isSelected}
            onChange={onChange ?? changeParamsCb}>
            {content}
        </ReactAriaCheckbox>
    );
}

import {Children, cloneElement, ReactElement, ReactNode, RefAttributes} from 'react';
import {RadioGroup as ReactAriaRadioGroup, RadioGroupProps as ReactAriaRadioGroupProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {TDataState} from '../../../constants/datastate.js';
import {ChangeArgs, AnyObject, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {Field} from '../common/field/field.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {TooltipContent} from '../../text/fieldlabel/fieldlabel.js';
import {RadioProps} from '../radio/index.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface RadioGroupProps<P extends AnyObject> extends ReactAriaRadioGroupProps, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<RadioProps>>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Help text to show in success style.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label for the element.
     */
    label: ReactNode;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}

export function RadioGroup<P extends AnyObject>({
    changeCallback,
    changeParams,
    children,
    className,
    dataState,
    helpText,
    helpTextSuccess,
    isDisabled,
    isInvalid,
    isRequired,
    isSkeleton,
    label,
    onChange,
    showHelpTextIcon,
    size,
    tooltipContent,
    ...props
}: RadioGroupProps<P>) {
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const mappedChildren = Children.map(children, (child) => cloneElement(child, {size}));
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    let fieldSize = Size.md;

    if (size === Size.md) {
        fieldSize = Size.lg;
    }

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-radio-group"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                inputRectHeight={size === Size.md ? '5.5rem' : '4.75rem'}
                size={fieldSize}
            />
        );
    }

    return (
        <ReactAriaRadioGroup
            {...props}
            className={classNames('radio-group', className)}
            isDisabled={isDisabled}
            isInvalid={hasError}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            onChange={onChange ?? changeParamsCb}>
            <Field
                dataState={dataState}
                helpText={helpText}
                helpTextSuccess={helpTextSuccess}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isRequired={isRequired}
                label={label}
                showHelpTextIcon={showHelpTextIcon}
                size={fieldSize}
                tooltipContent={tooltipContent}>
                {mappedChildren}
            </Field>
        </ReactAriaRadioGroup>
    );
}

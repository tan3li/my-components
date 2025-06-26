import {Children, cloneElement, ReactElement, ReactNode, RefAttributes} from 'react';
import {
    CheckboxGroup as ReactAriaCheckboxGroup,
    CheckboxGroupProps as ReactAriaCheckboxGroupProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {TDataState} from '../../../constants/datastate.js';
import {AnyObject, ChangeArgs, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {Field} from '../common/field/field.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {TooltipContent} from '../../text/fieldlabel/fieldlabel.js';
import {CheckboxProps} from '../checkbox/index.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface CheckboxGroupProps<P extends AnyObject>
    extends ReactAriaCheckboxGroupProps,
        RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string[]>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<CheckboxProps<any>>>;
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

export function CheckboxGroup<P extends AnyObject>({
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
}: CheckboxGroupProps<P>) {
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
                className="skeleton-checkbox-group"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                inputRectHeight={size === Size.md ? '5.5rem' : '4.75rem'}
                size={fieldSize}
            />
        );
    }

    return (
        <ReactAriaCheckboxGroup
            {...props}
            className={classNames('checkbox-group', className)}
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
        </ReactAriaCheckboxGroup>
    );
}

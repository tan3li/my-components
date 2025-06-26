import {ReactNode, RefAttributes} from 'react';
import {Radio, RadioGroup, RadioGroupProps} from 'react-aria-components';
import {AnyObject, ChangeArgs, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {TDataState} from '../../../constants/datastate.js';
import {Size} from '../../../constants/index.js';
import {Label, TooltipContent} from '../../text/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Field} from '../common/field/field.js';
import {chain} from 'react-aria';
import {useDataState} from '../../../hooks/usedatastate.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface ToggleButtonItem {
    isDisabled?: boolean;
    text: string;
    value: string;
}

export interface ToggleButtonProps<P extends AnyObject>
    extends Omit<RadioGroupProps, 'children'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
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
     * Selectable items.
     */
    items: ToggleButtonItem[];
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
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}

export function ToggleButton<P extends AnyObject>({
    changeCallback,
    changeParams,
    className,
    dataState,
    helpText,
    helpTextSuccess,
    isDisabled,
    isInvalid,
    isRequired,
    isSkeleton,
    items,
    label,
    onChange,
    showHelpTextIcon,
    size = Size.sm,
    tooltipContent,
    ...props
}: ToggleButtonProps<P>) {
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const labelSize = size === Size.xs ? Size.sm : Size.md;

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-toggle-button"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                size={size}
            />
        );
    }

    return (
        <RadioGroup
            {...props}
            className={classNames(`toggle-button toggle-button--${size}`, className)}
            isDisabled={isDisabled}
            isInvalid={hasError}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            onChange={chain(onChange, changeParamsCb)}>
            <Field
                dataState={dataState}
                helpText={helpText}
                helpTextSuccess={helpTextSuccess}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isRequired={isRequired}
                label={label}
                showHelpTextIcon={showHelpTextIcon}
                size={labelSize}
                tooltipContent={tooltipContent}>
                <div className="toggle-button__options">
                    {items.map(({isDisabled: isItemDisabled, value, text}) => (
                        <Radio className="toggle-button__option" isDisabled={isItemDisabled} key={value} value={value}>
                            <Label size={labelSize}>{text}</Label>
                        </Radio>
                    ))}
                </div>
            </Field>
        </RadioGroup>
    );
}

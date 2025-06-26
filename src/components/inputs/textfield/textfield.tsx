import {
    Input as ReactAriaInput,
    InputProps,
    TextField as ReactAriaTextField,
    TextFieldProps as ReactAriaTextFieldProps
} from 'react-aria-components';
import {Size} from '../../../constants/size.js';
import {classNames} from '../../../utils/classnames.js';
import {IconName} from '../../media/icon/icons.js';
import {Icon} from '../../media/icon/icon.js';
import {Field} from '../common/field/field.js';
import {chain, useFocusRing, useHover} from 'react-aria';
import {ReactNode, RefAttributes, RefObject, useEffect, useId, useRef, useState} from 'react';
import {isEmptyString} from '../../../utils/objecthelper.js';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {isString} from '../../../utils/stringhelper.js';
import {TDataState} from '../../../constants/datastate.js';
import {ChangeArgs, AnyObject, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {TextFieldUnit} from './textfieldunit.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {TooltipContent} from '../../text/fieldlabel/fieldlabel.js';
import {Alignment} from '../../../constants/alignment.js';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

type TextFieldSizes = Size.xs | Size.sm | Size.md;

interface PartContentProps {
    inputRef: RefObject<HTMLInputElement | null>;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    size: TextFieldSizes;
}

type PartContent = string | ((props: PartContentProps) => ReactNode);

export interface TextFieldProps<P extends AnyObject>
    extends Omit<ReactAriaTextFieldProps, 'validate'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Icon that will be rendered at the end of the Input block of TextField
     */
    endIconName?: IconName;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Input size attribute.
     */
    inputSize?: number;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether element has borderless style.
     */
    isPlain?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label?: string;
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * Prefix text or element to be rendered at the start of the input element.
     */
    prefix?: PartContent;
    /**
     * Maximum value for input.
     */
    maxValue?: InputProps['max'];
    /**
     * Minimum value for input.
     */
    minValue?: InputProps['min'];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the TextField, two different sizes are available.
     */
    size?: TextFieldSizes;
    /**
     * Icon that will be rendered at the start of the Input block of TextField
     */
    startIconName?: IconName;
    /**
     * Suffix text or element to be rendered at the end of the input element.
     */
    suffix?: PartContent;
    /**
     * Alignment of the input text.
     */
    textAlign?: Alignment.start | Alignment.end | Alignment.center;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}

interface PartProps {
    content?: PartContent;
    id?: string;
    inputRef: RefObject<HTMLInputElement | null>;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    size: TextFieldSizes;
}

// eslint-disable-next-line sonarjs/function-return-type
function Part({content, id, inputRef, isDisabled, isReadOnly, size}: PartProps) {
    if (isFunction(content)) {
        return content({inputRef, isDisabled, isReadOnly, size});
    } else if (isString(content)) {
        return (
            <TextFieldUnit id={id} size={size === Size.xs ? Size.md : Size.lg}>
                {content}
            </TextFieldUnit>
        );
    }

    return null;
}

export function TextField<P extends AnyObject>({
    className,
    changeParams,
    changeCallback,
    dataState,
    dataTestId,
    endIconName,
    helpText,
    helpTextSuccess,
    inputSize,
    isControlled,
    isInvalid,
    isPlain,
    isSkeleton,
    label,
    maxValue,
    minValue,
    onBlur,
    onChange,
    placeholder,
    prefix,
    showHelpTextIcon,
    size = Size.md,
    startIconName,
    suffix,
    textAlign = Alignment.start,
    tooltipContent,
    value = '',
    ...props
}: TextFieldProps<P>) {
    const {focusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const {hoverProps, isHovered} = useHover(props);
    const {isDisabled, isRequired} = props;
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const inputRef = useRef<HTMLInputElement>(null);
    const [stateValue, setStateValue] = useState(value);
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const currentValue = isControlled ? value : stateValue;
    const prefixId = useId();
    const suffixId = useId();
    let ariaLabelledBy = props['aria-labelledby'];

    if (!ariaLabelledBy) {
        const labelledBy: string[] = [];

        // If prefix/suffix is function, aria-labelledby should be used.
        if (isString(prefix)) {
            labelledBy.push(prefixId);
        }
        if (isString(suffix)) {
            labelledBy.push(suffixId);
        }

        ariaLabelledBy = labelledBy.join(' ');
    }

    const onChangeInner = (val: string) => {
        if (!isControlled) {
            setStateValue(val);
        }
        safeCall(onChange, val);
    };

    useEffect(() => {
        if (!isControlled) {
            setStateValue(value);
        }
    }, [value, isControlled]);

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-text-field"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                size={size}
            />
        );
    }

    return (
        <ReactAriaTextField
            {...props}
            aria-labelledby={ariaLabelledBy}
            className={classNames('text-field', className)}
            isInvalid={hasError}
            isReadOnly={isReadOnly}
            onBlur={chain(onBlur, changeParamsCb)}
            onChange={onChangeInner}
            value={currentValue}>
            <Field
                dataState={dataState}
                helpText={helpText}
                helpTextSuccess={helpTextSuccess}
                isDisabled={isDisabled}
                isInvalid={hasError}
                isRequired={isRequired}
                label={label}
                showHelpTextIcon={showHelpTextIcon}
                size={size === Size.xs ? Size.sm : Size.md}
                tooltipContent={tooltipContent}>
                <div
                    {...hoverProps}
                    className={classNames(`text-field__content text-field__content--${size}`, {
                        'text-field__content--filled': !isEmptyString(currentValue),
                        'text-field__content--plain': isPlain
                    })}
                    data-disabled={!!isDisabled || undefined}
                    data-focus-visible={isFocusVisible || undefined}
                    data-focused={isFocused || undefined}
                    data-hovered={isHovered || undefined}
                    data-invalid={!!hasError || undefined}
                    data-readonly={!!isReadOnly || undefined}>
                    <Part
                        content={prefix}
                        id={prefixId}
                        inputRef={inputRef}
                        isDisabled={isDisabled}
                        isReadOnly={isReadOnly}
                        size={size}
                    />
                    <div className="text-field__input">
                        {startIconName && <Icon className="text-field__icon" name={startIconName} />}
                        <ReactAriaInput
                            {...focusProps}
                            className={classNames(
                                'text-field__input-field',
                                size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS,
                                {
                                    'text-field__input-field--right-aligned': textAlign === Alignment.end
                                },
                                {
                                    'text-field__input-field--center-aligned': textAlign === Alignment.center
                                }
                            )}
                            data-testid={dataTestId}
                            max={maxValue}
                            min={minValue}
                            placeholder={placeholder}
                            ref={inputRef}
                            size={inputSize}
                        />
                        {endIconName && <Icon className="text-field__icon" name={endIconName} />}
                    </div>
                    <Part
                        content={suffix}
                        id={suffixId}
                        inputRef={inputRef}
                        isDisabled={isDisabled}
                        isReadOnly={isReadOnly}
                        size={size}
                    />
                </div>
            </Field>
        </ReactAriaTextField>
    );
}

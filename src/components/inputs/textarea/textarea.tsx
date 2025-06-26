import {
    TextArea as ReactAriaTextArea,
    TextField as ReactAriaTextField,
    TextFieldProps as ReactAriaTextFieldProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Field} from '../common/field/field.js';
import {CSSProperties, RefAttributes, useEffect, useRef, useState} from 'react';
import {LABEL_SIZE_LG_CSS_CLASS} from '../../text/label/label.js';
import {TDataState} from '../../../constants/datastate.js';
import {AnyObject, ChangeArgs, useChangeParamsCallback} from '../../../hooks/usechangeparamscallback.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {chain, useFocusRing, useHover} from 'react-aria';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';
import {TooltipContent} from '../../text/fieldlabel/fieldlabel.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

export interface TextAreaProps<P extends AnyObject> extends ReactAriaTextFieldProps, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
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
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label: string;
    /**
     * Minimum height for the textarea. Defaults to value which will show 5 visible lines.
     */
    minHeight?: CSSProperties['minHeight'];
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * The number of visible lines. Defaults to 2.
     * Can be used as minHeight alternative or together with minHeight to fine-tune the initial height behavior.
     */
    rows?: number;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}

export function TextArea<P extends AnyObject>({
    className,
    changeParams,
    changeCallback,
    dataState,
    dataTestId,
    helpText,
    helpTextSuccess,
    isControlled,
    isInvalid,
    isSkeleton,
    label,
    minHeight,
    onChange,
    onBlur,
    placeholder,
    rows,
    showHelpTextIcon,
    tooltipContent,
    value = '',
    ...props
}: TextAreaProps<P>) {
    const {focusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const {hoverProps, isHovered} = useHover(props);
    const {isDisabled, isRequired, maxLength} = props;
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const [stateValue, setStateValue] = useState(value);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    const currentValue = isControlled ? value : stateValue;

    const onChangeInner = (val: string) => {
        if (!isControlled) {
            setStateValue(val);
        }

        const input = inputRef.current;

        if (input) {
            // Handle autogrow
            const prevOverflow = input.style.overflow;
            const isFirefox = 'MozAppearance' in input.style;

            if (!isFirefox) {
                input.style.overflow = 'hidden';
            }

            input.style.height = 'auto';
            input.style.height = `${input.scrollHeight + (input.offsetHeight - input.clientHeight)}px`;
            input.style.overflow = prevOverflow;
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
                className="skeleton-textarea-field"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                inputRectHeight={minHeight ?? '134px'}
                size={Size.md}
                style={{minWidth: '225px'}}
            />
        );
    }

    return (
        <ReactAriaTextField
            {...props}
            className={classNames('textarea-field', className)}
            data-testid={dataTestId}
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
                labelSuffix={
                    isNullOrUndefined(maxLength) ? null : (
                        <BodyText className="textarea-field__letter-count" size={Size.xs}>
                            {`${currentValue.length}/${maxLength}`}
                        </BodyText>
                    )
                }
                showHelpTextIcon={showHelpTextIcon}
                size={Size.md}
                tooltipContent={tooltipContent}>
                <div
                    {...hoverProps}
                    className="textarea-field__content"
                    data-disabled={!!isDisabled || undefined}
                    data-focus-visible={isFocusVisible || undefined}
                    data-focused={isFocused || undefined}
                    data-hovered={isHovered || undefined}
                    data-invalid={!!hasError || undefined}
                    data-readonly={!!isReadOnly || undefined}>
                    <div className="textarea-field__textarea-wrap">
                        <ReactAriaTextArea
                            {...focusProps}
                            className={classNames('textarea-field__textarea', LABEL_SIZE_LG_CSS_CLASS)}
                            placeholder={placeholder}
                            ref={inputRef}
                            rows={rows}
                            style={{minHeight}}
                        />
                    </div>
                </div>
            </Field>
        </ReactAriaTextField>
    );
}

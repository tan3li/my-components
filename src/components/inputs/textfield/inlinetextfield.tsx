import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {TextField, TextFieldProps} from './textfield.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {Position, Size} from '../../../constants/index.js';
import {iconNames} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';
import {chain} from 'react-aria';

export interface InlineTextFieldProps<P extends AnyObject>
    extends Omit<TextFieldProps<P>, 'helpText' | 'helpTextSuccess' | 'showHelpTextIcon'> {
    /**
     * Function that is called when input value changes. Should return error message if given value is invalid.
     * Message will be shown in tooltip when field has focus.
     */
    validate?: (value: string) => string | null | undefined;
}

export function InlineTextField<P extends AnyObject>({
    dataState,
    ref: outerRef,
    size = Size.xs,
    validate,
    value,
    ...props
}: InlineTextFieldProps<P>) {
    const {hasError, errorMessage, isReadOnly} = useDataState(dataState, props.isInvalid, props.isReadOnly);
    const [stateValue, setStateValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const [validationState, setValidationState] = useState({isInvalid: hasError, errorText: errorMessage});
    const {isInvalid, errorText} = validationState;
    const ref = useRef<HTMLDivElement>(null);
    const translateCommon = useTranslateCommon();

    useImperativeHandle(outerRef, () => ref.current!, []);

    const onChange = (newValue: string) => {
        const validationErrorMsg = validate?.(newValue) ?? '';

        setStateValue(newValue);
        setValidationState({isInvalid: !!validationErrorMsg, errorText: validationErrorMsg});
        props.onChange?.(newValue);
    };

    useEffect(() => {
        setStateValue(value);
    }, [value]);

    useEffect(() => {
        setValidationState({isInvalid: hasError, errorText: errorMessage});
    }, [hasError, errorMessage]);

    return (
        <TooltipTrigger isOpen={isInvalid && isFocused}>
            <TextField
                {...props}
                className={classNames(props.className, 'inline-text-field')}
                helpText={errorText}
                isInvalid={isInvalid}
                isPlain={true}
                isReadOnly={isReadOnly}
                onChange={onChange}
                onFocusChange={chain(setIsFocused, props.onFocusChange)}
                ref={ref}
                size={size}
                value={stateValue}
            />
            <Tooltip
                className="inline-text-field__error-tooltip"
                headerIconName={iconNames.EmergencyHomeFilled}
                headerText={translateCommon('error')}
                offset={2}
                position={Position.Left}
                triggerRef={ref}
                type={TooltipType.Rich}>
                {errorText}
            </Tooltip>
        </TooltipTrigger>
    );
}

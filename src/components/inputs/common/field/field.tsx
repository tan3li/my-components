import {FieldLabel, TooltipContent} from '../../../text/fieldlabel/fieldlabel.js';
import {HelpText, HelpTextVariant} from '../../../text/helptext/helptext.js';
import {TDataState} from '../../../../constants/datastate.js';
import {ReactNode} from 'react';
import {Size} from '../../../../constants/size.js';
import {useDataState} from '../../../../hooks/usedatastate.js';

interface FieldProps {
    children: ReactNode;
    dataState?: Map<TDataState, string> | null;
    helpText?: ReactNode;
    helpTextSuccess?: ReactNode;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isRequired?: boolean;
    label?: ReactNode;
    labelSuffix?: ReactNode;
    showHelpTextIcon?: boolean;
    size: Size.sm | Size.md | Size.lg;
    tooltipContent?: TooltipContent;
}

export function getHelpContentAndVariant({
    errorMessage,
    hasError,
    helpText,
    helpTextSuccess,
    isDisabled
}: {
    errorMessage?: string;
    hasError?: boolean;
    helpText?: ReactNode;
    helpTextSuccess?: ReactNode;
    isDisabled?: boolean;
}) {
    let helpContent = helpText,
        helpVariant = HelpTextVariant.Neutral;

    if (hasError) {
        helpVariant = HelpTextVariant.Danger;
        helpContent = errorMessage ? errorMessage : helpContent;
    } else if (helpTextSuccess) {
        helpVariant = HelpTextVariant.Success;
        helpContent = helpTextSuccess;
    } else if (isDisabled) {
        helpVariant = HelpTextVariant.Disabled;
    }

    return {
        helpContent,
        helpVariant
    };
}

export function Field({
    children,
    dataState,
    helpText,
    helpTextSuccess,
    isDisabled,
    isInvalid,
    isRequired,
    label,
    labelSuffix,
    showHelpTextIcon,
    size,
    tooltipContent
}: FieldProps) {
    const {hasError, errorMessage} = useDataState(dataState, isInvalid);
    const {helpContent, helpVariant} = getHelpContentAndVariant({
        errorMessage,
        hasError,
        helpText,
        helpTextSuccess,
        isDisabled
    });

    return (
        <>
            {label && (
                <FieldLabel
                    isDisabled={isDisabled}
                    isRequired={isRequired}
                    size={size}
                    suffix={labelSuffix}
                    tooltipContent={tooltipContent}>
                    {label}
                </FieldLabel>
            )}
            {children}
            {helpContent && (
                <HelpText showIcon={showHelpTextIcon} variant={helpVariant}>
                    {helpContent}
                </HelpText>
            )}
        </>
    );
}

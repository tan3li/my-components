import { TooltipContent } from '../../../text/fieldlabel/fieldlabel.js';
import { HelpTextVariant } from '../../../text/helptext/helptext.js';
import { TDataState } from '../../../../constants/datastate.js';
import { ReactNode } from 'react';
import { Size } from '../../../../constants/size.js';
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
export declare function getHelpContentAndVariant({ errorMessage, hasError, helpText, helpTextSuccess, isDisabled }: {
    errorMessage?: string;
    hasError?: boolean;
    helpText?: ReactNode;
    helpTextSuccess?: ReactNode;
    isDisabled?: boolean;
}): {
    helpContent: ReactNode;
    helpVariant: HelpTextVariant;
};
export declare function Field({ children, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, label, labelSuffix, showHelpTextIcon, size, tooltipContent }: FieldProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=field.d.ts.map
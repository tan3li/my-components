import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FieldLabel } from '../../../text/fieldlabel/fieldlabel.js';
import { HelpText, HelpTextVariant } from '../../../text/helptext/helptext.js';
import { useDataState } from '../../../../hooks/usedatastate.js';
export function getHelpContentAndVariant(_a) {
    var errorMessage = _a.errorMessage, hasError = _a.hasError, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled;
    var helpContent = helpText, helpVariant = HelpTextVariant.Neutral;
    if (hasError) {
        helpVariant = HelpTextVariant.Danger;
        helpContent = errorMessage ? errorMessage : helpContent;
    }
    else if (helpTextSuccess) {
        helpVariant = HelpTextVariant.Success;
        helpContent = helpTextSuccess;
    }
    else if (isDisabled) {
        helpVariant = HelpTextVariant.Disabled;
    }
    return {
        helpContent: helpContent,
        helpVariant: helpVariant
    };
}
export function Field(_a) {
    var children = _a.children, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, label = _a.label, labelSuffix = _a.labelSuffix, showHelpTextIcon = _a.showHelpTextIcon, size = _a.size, tooltipContent = _a.tooltipContent;
    var _b = useDataState(dataState, isInvalid), hasError = _b.hasError, errorMessage = _b.errorMessage;
    var _c = getHelpContentAndVariant({
        errorMessage: errorMessage,
        hasError: hasError,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isDisabled: isDisabled
    }), helpContent = _c.helpContent, helpVariant = _c.helpVariant;
    return (_jsxs(_Fragment, { children: [label && (_jsx(FieldLabel, __assign({ isDisabled: isDisabled, isRequired: isRequired, size: size, suffix: labelSuffix, tooltipContent: tooltipContent }, { children: label }))), children, helpContent && (_jsx(HelpText, __assign({ showIcon: showHelpTextIcon, variant: helpVariant }, { children: helpContent })))] }));
}
//# sourceMappingURL=field.js.map
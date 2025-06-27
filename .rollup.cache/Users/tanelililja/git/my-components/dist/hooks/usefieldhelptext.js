import { useDataState } from './usedatastate.js';
import { useSlotId } from '@react-aria/utils';
/**
 * Use for field components which do not pass id and aria-describedby via Reach Aria components.
 */
export function useFieldHelpText(props) {
    var dataState = props.dataState, helpText = props.helpText, helpTextSuccess = props.helpTextSuccess, isInvalid = props.isInvalid;
    var _a = useDataState(dataState, isInvalid), hasError = _a.hasError, errorMessage = _a.errorMessage;
    var helpContent = helpText;
    if (hasError) {
        helpContent = errorMessage ? errorMessage : helpContent;
    }
    else if (helpTextSuccess) {
        helpContent = helpTextSuccess;
    }
    var helpId = useSlotId([!!helpContent]);
    return {
        fieldProps: {
            'aria-describedby': helpId || undefined
        },
        helpTextProps: {
            id: helpId
        }
    };
}
//# sourceMappingURL=usefieldhelptext.js.map
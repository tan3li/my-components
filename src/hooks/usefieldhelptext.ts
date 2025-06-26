import {TDataState} from '../constants/datastate.js';
import {ReactNode} from 'react';
import {useDataState} from './usedatastate.js';
import {useSlotId} from '@react-aria/utils';

interface FieldWithHelpTextProps {
    dataState?: Map<TDataState, string> | null;
    helpText?: ReactNode;
    helpTextSuccess?: ReactNode;
    isInvalid?: boolean;
}

/**
 * Use for field components which do not pass id and aria-describedby via Reach Aria components.
 */
export function useFieldHelpText(props: FieldWithHelpTextProps) {
    const {dataState, helpText, helpTextSuccess, isInvalid} = props;
    const {hasError, errorMessage} = useDataState(dataState, isInvalid);
    let helpContent = helpText;

    if (hasError) {
        helpContent = errorMessage ? errorMessage : helpContent;
    } else if (helpTextSuccess) {
        helpContent = helpTextSuccess;
    }

    const helpId = useSlotId([!!helpContent]);

    return {
        fieldProps: {
            'aria-describedby': helpId || undefined
        },
        helpTextProps: {
            id: helpId
        }
    };
}

import { TDataState } from '../constants/datastate.js';
import { ReactNode } from 'react';
interface FieldWithHelpTextProps {
    dataState?: Map<TDataState, string> | null;
    helpText?: ReactNode;
    helpTextSuccess?: ReactNode;
    isInvalid?: boolean;
}
/**
 * Use for field components which do not pass id and aria-describedby via Reach Aria components.
 */
export declare function useFieldHelpText(props: FieldWithHelpTextProps): {
    fieldProps: {
        'aria-describedby': any;
    };
    helpTextProps: {
        id: any;
    };
};
export {};
//# sourceMappingURL=usefieldhelptext.d.ts.map
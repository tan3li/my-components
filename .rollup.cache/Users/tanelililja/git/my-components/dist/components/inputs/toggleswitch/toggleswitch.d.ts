import { SwitchProps as ReactAriaSwitchProps } from 'react-aria-components';
import { TDataState } from '../../../constants/datastate.js';
import { Size } from '../../../constants/size.js';
import { ReactNode, RefAttributes } from 'react';
import { ChangeArgs, AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
export interface ToggleSwitchCommonProps<P extends AnyObject> extends ReactAriaSwitchProps, RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states associated with messages.
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
     * Whether ToggleSwitch is in error state.
     */
    isInvalid?: boolean;
    /**
     * Whether ToggleSwitch is in required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}
export interface ToggleSwitchPropsAriaLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label: undefined;
}
export interface ToggleSwitchPropsLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
export type ToggleSwitchProps<P extends AnyObject> = ToggleSwitchPropsAriaLabelRequired<P> | ToggleSwitchPropsLabelRequired<P>;
export declare function ToggleSwitch<P extends AnyObject>({ changeCallback, changeParams, className, dataState, dataTestId, helpText, isDisabled, isInvalid, isRequired, isSelected, isSkeleton, label, labelPlacement, onChange, size, ...props }: ToggleSwitchProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=toggleswitch.d.ts.map
import { CheckboxProps as ReactAriaCheckboxProps } from 'react-aria-components';
import { ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
import { TDataState } from '../../../constants/datastate.js';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
export interface CheckboxCommonProps<P extends AnyObject> extends ReactAriaCheckboxProps, RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
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
export interface CheckboxPropsAriaLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}
export interface CheckboxPropsLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
export type CheckboxProps<P extends AnyObject> = CheckboxPropsAriaLabelRequired<P> | CheckboxPropsLabelRequired<P>;
export declare function Checkbox<P extends AnyObject>({ className, changeCallback, changeParams, dataState, dataTestId, helpText, isDisabled, isIndeterminate, isInvalid, isRequired, isSelected, isSkeleton, label, labelPlacement, onChange, size, ...props }: CheckboxProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkbox.d.ts.map
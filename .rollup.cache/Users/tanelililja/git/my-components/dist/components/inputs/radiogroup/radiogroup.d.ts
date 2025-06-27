import { ReactElement, ReactNode, RefAttributes } from 'react';
import { RadioGroupProps as ReactAriaRadioGroupProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { TDataState } from '../../../constants/datastate.js';
import { ChangeArgs, AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { TooltipContent } from '../../text/fieldlabel/fieldlabel.js';
import { RadioProps } from '../radio/index.js';
export interface RadioGroupProps<P extends AnyObject> extends ReactAriaRadioGroupProps, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<RadioProps>>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Help text to show in success style.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label for the element.
     */
    label: ReactNode;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
export declare function RadioGroup<P extends AnyObject>({ changeCallback, changeParams, children, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: RadioGroupProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=radiogroup.d.ts.map
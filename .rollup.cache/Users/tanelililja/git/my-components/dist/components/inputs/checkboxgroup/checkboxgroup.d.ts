import { ReactElement, ReactNode, RefAttributes } from 'react';
import { CheckboxGroupProps as ReactAriaCheckboxGroupProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { TDataState } from '../../../constants/datastate.js';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { TooltipContent } from '../../text/fieldlabel/fieldlabel.js';
import { CheckboxProps } from '../checkbox/index.js';
export interface CheckboxGroupProps<P extends AnyObject> extends ReactAriaCheckboxGroupProps, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string[]>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<CheckboxProps<any>>>;
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
export declare function CheckboxGroup<P extends AnyObject>({ changeCallback, changeParams, children, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: CheckboxGroupProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkboxgroup.d.ts.map
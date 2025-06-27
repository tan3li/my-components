import { ReactNode, RefAttributes } from 'react';
import { RadioGroupProps } from 'react-aria-components';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { TDataState } from '../../../constants/datastate.js';
import { Size } from '../../../constants/index.js';
import { TooltipContent } from '../../text/index.js';
export interface ToggleButtonItem {
    isDisabled?: boolean;
    text: string;
    value: string;
}
export interface ToggleButtonProps<P extends AnyObject> extends Omit<RadioGroupProps, 'children'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
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
     * Selectable items.
     */
    items: ToggleButtonItem[];
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
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
export declare function ToggleButton<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, items, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: ToggleButtonProps<P>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=togglebutton.d.ts.map
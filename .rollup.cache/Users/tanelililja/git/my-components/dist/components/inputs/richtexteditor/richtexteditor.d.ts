import { TooltipContent } from '../../text/index.js';
import { TDataState } from '../../../constants/datastate.js';
import { AnyObject, ChangeArgs } from '../../../hooks/usechangeparamscallback.js';
import { RefAttributes } from 'react';
import { RichTextEditorToolbarConfig, VariableItem } from './toolbarconfig.js';
interface VariableToHtmlOptions {
    regExp: RegExp;
    getItem: (match: string) => VariableItem;
}
interface VariableToTextOptions {
    getText: (variableItem: VariableItem) => string;
}
export interface RichTextEditorProps<P extends AnyObject> extends RefAttributes<HTMLDivElement> {
    /**
     * Aria-label for the field.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called on blur with current content.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether element is in error.
     */
    isInvalid?: boolean;
    /**
     * Whether value is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Label for the field.
     */
    label?: string;
    /**
     * Placeholder text.
     */
    placeholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Customize which actions are available in the toolbar.
     */
    toolbarConfig?: RichTextEditorToolbarConfig;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Text editor content. Can be provided as HTML-string or plain text string.
     */
    value?: string;
    /**
     * Options for converting text variables to HTML.
     */
    variableToHtmlOptions?: VariableToHtmlOptions;
    /**
     * Options for converting HTML variables to text.
     */
    variableToTextOptions?: VariableToTextOptions;
}
export declare function RichTextEditor<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, placeholder, ref, showHelpTextIcon, tooltipContent, value, variableToHtmlOptions, variableToTextOptions, ...props }: RichTextEditorProps<P>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=richtexteditor.d.ts.map
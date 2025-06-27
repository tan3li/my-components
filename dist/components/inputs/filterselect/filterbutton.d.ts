import { ReactNode, RefAttributes } from 'react';
import { ClearButtonProps } from '../../action/index.js';
import { ButtonProps } from 'react-aria-components';
import { Size } from '../../../constants/index.js';
import { LabelProps } from '../../text/index.js';
import { IconName } from '../../media/index.js';
export interface FilterButtonProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for the element.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Props for clear button.
     */
    clearButtonProps?: ClearButtonProps & RefAttributes<HTMLButtonElement>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether element is active, i.e. it's filtering something.
     */
    isActive?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether element is focusable.
     */
    isFocusable?: boolean;
    /**
     * Whether related popover element is open.
     */
    isOpen?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Hidden label for the element.
     */
    label: string;
    /**
     * Props for hidden label.
     */
    labelProps?: Partial<LabelProps>;
    /**
     * Callback for open state change.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Whether to show clear button when isActive = true.
     */
    showClearButton?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
    /**
     * Props for toggle button.
     */
    toggleButtonProps?: ButtonProps & RefAttributes<HTMLButtonElement>;
}
export declare function FilterButton({ children, className, clearButtonProps, helpText, isActive, isDisabled, isFocusable, isOpen, isSkeleton, label, labelProps, onOpenChange, ref, showClearButton, showHelpTextIcon, size, startIconName, toggleButtonProps }: FilterButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=filterbutton.d.ts.map
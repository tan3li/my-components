import { PopoverProps as ReactAriaPopoverProps } from 'react-aria-components';
import { CSSProperties, ReactNode, RefAttributes } from 'react';
export interface PopoverPadding {
    top?: CSSProperties['paddingTop'];
    bottom?: CSSProperties['paddingBottom'];
    left?: CSSProperties['paddingLeft'];
    right?: CSSProperties['paddingRight'];
}
export interface PopoverProps extends Omit<ReactAriaPopoverProps, 'children'>, RefAttributes<HTMLDivElement> {
    /**
     * Aria label for the dialog.
     */
    ['aria-label']?: string;
    /**
     * Id of the element which labels the dialog.
     */
    ['aria-labelledby']?: string;
    /**
     * Popover content.
     */
    children: ReactNode;
    /**
     * Maximum width for the popover.
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * Padding for the popover content.
     */
    padding?: CSSProperties['padding'] | PopoverPadding;
}
export declare function Popover({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, children, className, maxWidth, padding, style, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=popover.d.ts.map
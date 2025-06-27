import { ButtonProps } from '../button/index.js';
export declare const enum DueDateButtonVariant {
    Neutral = "neutral",
    Danger = "danger",
    Warning = "warning"
}
export interface DueDateButtonProps extends Omit<ButtonProps, 'children' | 'size' | 'style' | 'variant'> {
    /**
     * Date value. Should be provided in ISO 8601 date string format (YYYY-MM-DD).
     */
    date: string;
    /**
     * Text to display in the tooltip.
     */
    tooltipContent?: string;
    /**
     * Variant of the button.
     */
    variant?: DueDateButtonVariant;
}
export declare function DueDateButton({ date, tooltipContent, variant, ...props }: DueDateButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=duedatebutton.d.ts.map
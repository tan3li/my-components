import { ButtonProps as ReactAriaButtonProps, LinkProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { IconName } from '../../media/icon/icons.js';
import { ReactNode, RefAttributes } from 'react';
import { ButtonVariant } from '../constants/buttonvariant.js';
export declare const enum ButtonStyle {
    Fill = "fill",
    Outline = "outline",
    Dash = "dash",
    Plain = "plain",
    Link = "link"
}
export declare const enum ButtonRole {
    Button = "button",
    Link = "link"
}
export interface ButtonProps extends Omit<ReactAriaButtonProps, 'style'>, Omit<LinkProps, 'className' | 'style'>, RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children: ReactNode;
    /**
     * WalkMe id for the Button
     */
    ['data-walkmeid']?: string;
    /**
     * Icon that will be rendered at the end of the Button
     */
    endIconName?: IconName;
    /**
     * Indicating if the Button is in a loading state
     */
    isLoading?: boolean;
    /**
     * Use inverted color tokens in the Button, only available for Neutral variant and Outlined and Plain style
     */
    inverted?: boolean;
    /**
     * Button can act as a link or button. Default: button.
     */
    role?: ButtonRole;
    /**
     * Size of the Button
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * Icon that will be rendered at the start of the Button
     */
    startIconName?: IconName;
    /**
     * Style of the Button
     */
    style: ButtonStyle;
    /**
     * Variant of the Button
     */
    variant: ButtonVariant;
}
export declare function Button({ 'aria-label': ariaLabel, className, children, endIconName, inverted, isLoading, ref, role, size, startIconName, style, variant, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=button.d.ts.map
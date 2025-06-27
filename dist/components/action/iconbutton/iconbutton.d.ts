import { ButtonProps as ReactAriaButtonProps, LinkProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { IconName } from '../../media/icon/icons.js';
import { ButtonVariant } from '../constants/buttonvariant.js';
import { ButtonRole, ButtonStyle } from '../button/button.js';
import { RefAttributes } from 'react';
export interface IconButtonProps extends Omit<ReactAriaButtonProps, 'children' | 'style'>, Omit<LinkProps, 'children' | 'className' | 'style'>, RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
    ['aria-label']: string;
    /**
     * WalkMe id for the Button
     */
    ['data-walkmeid']?: string;
    /**
     * Icon that will be rendered inside the IconButton
     */
    iconName: IconName;
    /**
     * Use inverted color tokens in the IconButton, only available for Neutral variant and Outlined and Plain style
     */
    inverted?: boolean;
    /**
     * Indicating if the IconButton is in a loading state
     */
    isLoading?: boolean;
    /**
     * Button can act as a link or button. Default: button.
     */
    role?: ButtonRole;
    /**
     * Size of the IconButton
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * Style of the IconButton
     */
    style: ButtonStyle.Fill | ButtonStyle.Outline | ButtonStyle.Dash | ButtonStyle.Plain;
    /**
     * Variant of the IconButton
     */
    variant: ButtonVariant;
}
export declare function IconButton({ className, iconName, inverted, isLoading, ref, role, size, style, variant, ...props }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=iconbutton.d.ts.map
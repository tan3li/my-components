import {
    Button as ReactAriaButton,
    ButtonProps as ReactAriaButtonProps,
    Link as ReactAriaLink,
    LinkProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {IconName} from '../../media/icon/icons.js';
import {Icon} from '../../media/icon/icon.js';
import {Spinner, SpinnerVariant} from '../../feedback/spinner/spinner.js';
import {ButtonVariant} from '../constants/buttonvariant.js';
import {ButtonRole, ButtonStyle} from '../button/button.js';
import {Ref, RefAttributes} from 'react';

export interface IconButtonProps
    extends Omit<ReactAriaButtonProps, 'children' | 'style'>,
        Omit<LinkProps, 'children' | 'className' | 'style'>,
        RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
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

export function IconButton({
    className,
    iconName,
    inverted,
    isLoading,
    ref,
    role = ButtonRole.Button,
    size = Size.md,
    style,
    variant,
    ...props
}: IconButtonProps) {
    const commonProps = {
        className: classNames(
            `button icon-button ${style}-button ${style}-button--${variant} button--${size} icon-button--${size}`,
            className,
            {
                'button--loading': isLoading,
                'button--inverted': inverted
            }
        )
    };
    const content = (
        <>
            {isLoading && (
                <Spinner
                    className="button__spinner"
                    size={size === Size.lg ? Size.md : Size.sm}
                    variant={SpinnerVariant.None}
                />
            )}
            <Icon
                className={classNames(`button__icon icon-button__icon icon-button__icon--${size}`, {
                    'button__icon--loading': isLoading
                })}
                name={iconName}
            />
        </>
    );

    if (role === ButtonRole.Link) {
        return (
            <ReactAriaLink {...props} {...commonProps} ref={ref as Ref<HTMLAnchorElement>}>
                {content}
            </ReactAriaLink>
        );
    }

    return (
        <ReactAriaButton {...props} {...commonProps} ref={ref as Ref<HTMLButtonElement>}>
            {content}
        </ReactAriaButton>
    );
}

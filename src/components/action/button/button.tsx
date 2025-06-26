import {
    Button as ReactAriaButton,
    ButtonProps as ReactAriaButtonProps,
    Link as ReactAriaLink,
    LinkProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {IconName} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {ReactNode, Ref, RefAttributes} from 'react';
import {Icon} from '../../media/icon/icon.js';
import {Spinner, SpinnerVariant} from '../../feedback/spinner/spinner.js';
import {ButtonVariant} from '../constants/buttonvariant.js';
import {isString} from '../../../utils/stringhelper.js';
import {isNumber} from '../../../utils/objecthelper.js';

export const enum ButtonStyle {
    Fill = 'fill',
    Outline = 'outline',
    Dash = 'dash',
    Plain = 'plain',
    Link = 'link'
}

export const enum ButtonRole {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    Button = 'button',
    Link = 'link'
}

export interface ButtonProps
    extends Omit<ReactAriaButtonProps, 'style'>,
        Omit<LinkProps, 'className' | 'style'>,
        RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
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

export function Button({
    'aria-label': ariaLabel,
    className,
    children,
    endIconName,
    inverted,
    isLoading,
    ref,
    role = ButtonRole.Button,
    size = Size.md,
    startIconName,
    style,
    variant,
    ...props
}: ButtonProps) {
    const isChildrenStrOrNum = isString(children) || isNumber(children);
    const commonProps = {
        'aria-label': ariaLabel ?? (isChildrenStrOrNum ? children.toString() : undefined),
        className: classNames(`button ${style}-button ${style}-button--${variant} button--${size}`, className, {
            'button--loading': isLoading,
            'button--inverted': inverted
        })
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
            {startIconName && (
                <Icon ariaHidden={true} className={`button__icon button__icon--${size}`} name={startIconName} />
            )}
            <Label className="button__label" size={size}>
                {isChildrenStrOrNum ?
                    <strong>{children}</strong>
                :   children}
            </Label>
            {endIconName && (
                <Icon ariaHidden={true} className={`button__icon button__icon--${size}`} name={endIconName} />
            )}
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

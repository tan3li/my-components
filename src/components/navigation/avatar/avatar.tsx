import {classNames} from '../../../utils/classnames.js';
import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {Size} from '../../../constants/size.js';
import {Label, LabelProps} from '../../text/index.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {TriggerElement} from '../../action/index.js';
import {FocusRing} from 'react-aria';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';

type AvatarSize = Size.xs | Size.sm | Size.md | Size.lg;

export interface AvatarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Textual replacement for the image. Required for accessibility.
     */
    alt: string;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Description to show below label.
     */
    description?: string;
    /**
     * Icon to show as avatar when image src or text is not provided.
     */
    iconName?: IconName;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether avatar is navigable with keyboard.
     */
    isInteractive?: boolean;
    /**
     * Label to display next to the image.
     */
    label?: ReactNode;
    /**
     * Max width label container can take.
     */
    labelMaxWidth?: CSSProperties['maxWidth'];
    /**
     * Handler that is called when avatar is pressed.
     */
    onPress?: () => void;
    /**
     * Size of the Avatar
     */
    size?: AvatarSize;
    /**
     * Path to the image to show as avatar.
     */
    src?: string;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to show as avatar when image src is not provided, f.e. user initials.
     */
    text?: string;
}

const labelSize: Record<AvatarSize, LabelProps['size']> = {
    [Size.xs]: Size.sm,
    [Size.sm]: Size.md,
    [Size.md]: Size.lg,
    [Size.lg]: Size.lg
};
const descriptionSize: Record<AvatarSize, LabelProps['size']> = {
    [Size.xs]: Size.xs,
    [Size.sm]: Size.xs,
    [Size.md]: Size.sm,
    [Size.lg]: Size.sm
};
const iconSize: Record<AvatarSize, IconSize> = {
    [Size.xs]: IconSize.XS,
    [Size.sm]: IconSize.SM,
    [Size.md]: IconSize.MD,
    [Size.lg]: IconSize.LG
};

export function Avatar(props: AvatarProps) {
    const {
        alt,
        className,
        description,
        iconName = iconNames.GhostFilled,
        isDisabled,
        isInteractive,
        label,
        labelMaxWidth,
        onPress,
        ref,
        size = Size.md,
        src,
        style,
        text
    } = props;
    const hasImage = !!src;
    let image: ReactNode;

    if (hasImage) {
        image = <img alt={alt} className="avatar__image" src={src} title={alt} />;
    } else if (text) {
        image = (
            <span className="avatar__image" title={alt}>
                {text}
            </span>
        );
    } else {
        image = (
            <span className="avatar__image" title={alt}>
                <Icon className="avatar__icon" name={iconName} size={iconSize[size]} />
            </span>
        );
    }

    if (isInteractive && !isDisabled) {
        image = (
            <TooltipTrigger>
                <FocusRing focusRingClass="avatar__trigger-element--focused">
                    <TriggerElement
                        className="avatar__trigger-element"
                        onPress={onPress}
                        role={onPress ? 'button' : undefined}>
                        {image}
                        {<span className="avatar__scrim" />}
                    </TriggerElement>
                </FocusRing>
                <Tooltip type={TooltipType.Plain}>{alt}</Tooltip>
            </TooltipTrigger>
        );
    }

    return (
        <div
            className={classNames(`avatar avatar--${size}`, className, {
                'avatar--disabled': isDisabled,
                'avatar--interactive': isInteractive,
                'avatar--pressable': !!onPress
            })}
            ref={ref}
            style={style}>
            {image}
            {(!!label || !!description) && (
                <div className="avatar__label-wrapper" style={{maxWidth: labelMaxWidth}}>
                    {label && (
                        <Label className="avatar__label" size={labelSize[size]}>
                            {label}
                        </Label>
                    )}
                    {description && (
                        <Label className="avatar__description" size={descriptionSize[size]}>
                            {description}
                        </Label>
                    )}
                </div>
            )}
        </div>
    );
}

import {AriaRole, ReactNode, RefAttributes, useRef} from 'react';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';
import {ButtonStyle, ButtonVariant, IconButton, IconButtonProps, TriggerElement} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {useIsTextTruncated} from '../../../hooks/useistexttruncated.js';
import {isString} from '../../../utils/stringhelper.js';

export const enum TagStyle {
    Fill = 'fill',
    Outline = 'outline'
}

export interface TagProps extends RefAttributes<HTMLSpanElement> {
    /**
     * Tag content.
     */
    children: ReactNode;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Icon for the content.
     */
    iconName?: IconName;
    /**
     * Whether tag is disabled.
     */
    isDisabled?: boolean;
    /**
     * Content press callback. Makes the element interactive.
     */
    onPress?: () => void;
    /**
     * Remove callback. If given, remove button will be displayed with this handler attached to it.
     */
    onRemove?: () => void;
    /**
     * Props for remove button. If contains onPress, it will override given onRemove callback.
     */
    removeButtonProps?: Partial<IconButtonProps>;
    /**
     * The ARIA role of the element.
     */
    role?: AriaRole;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Style of the Tag.
     */
    style?: TagStyle;
    /**
     * The ARIA role of the trigger element.
     */
    triggerRole?: AriaRole;
}

export function Tag({
    children,
    className,
    iconName,
    isDisabled,
    onPress,
    onRemove,
    ref,
    removeButtonProps,
    role,
    size = Size.md,
    style = TagStyle.Outline,
    triggerRole
}: TagProps) {
    const labelRef = useRef<HTMLSpanElement>(null);
    const isTruncated = useIsTextTruncated({ref: labelRef});
    const translateCommon = useTranslateCommon();
    const isPressable = !!onPress && !isDisabled;
    const isInteractive = isTruncated || isPressable;

    return (
        <span
            className={classNames(`tag tag--${size} ${style}-tag`, className, {
                'tag--interactive': isInteractive,
                'tag--pressable': isPressable,
                'tag--disabled': isDisabled
            })}
            ref={ref}
            role={role}>
            <TooltipTrigger isDisabled={!isTruncated}>
                <TriggerElement
                    className="tag__content"
                    excludeFromTabOrder={!isInteractive}
                    onPress={onPress}
                    role={triggerRole}>
                    {iconName && <Icon className="tag__icon" name={iconName} size={IconSize.SM} />}
                    <Label className="tag__label" ref={labelRef} size={size === Size.xs ? Size.sm : size}>
                        {children}
                    </Label>
                </TriggerElement>
                <Tooltip type={TooltipType.Plain}>{children}</Tooltip>
            </TooltipTrigger>
            {onRemove && (
                <IconButton
                    aria-label={`${isString(children) ? children : ''} ${translateCommon('remove')}`}
                    className="tag__remove-button"
                    iconName={iconNames.Close}
                    isDisabled={isDisabled}
                    onPress={onRemove}
                    size={size === Size.xs ? Size.sm : size}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                    {...removeButtonProps}
                />
            )}
        </span>
    );
}

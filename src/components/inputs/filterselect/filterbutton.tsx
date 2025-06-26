import {ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {ClearButton, ClearButtonProps} from '../../action/index.js';
import {Button, ButtonProps} from 'react-aria-components';
import {KeyboardEventKey, Size} from '../../../constants/index.js';
import {HelpText, HelpTextVariant, Label, LabelProps} from '../../text/index.js';
import {Icon, IconName, iconNames} from '../../media/index.js';
import {useFieldHelpText} from '../../../hooks/usefieldhelptext.js';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

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

export function FilterButton({
    children,
    className,
    clearButtonProps,
    helpText,
    isActive,
    isDisabled,
    isFocusable = true,
    isOpen,
    isSkeleton,
    label,
    labelProps,
    onOpenChange,
    ref,
    showClearButton,
    showHelpTextIcon,
    size = Size.md,
    startIconName,
    toggleButtonProps
}: FilterButtonProps) {
    const isClearable = showClearButton && isActive;
    const {fieldProps, helpTextProps} = useFieldHelpText({helpText});

    if (isSkeleton) {
        return <SkeletonField className="skeleton-filter-button" hasHelpText={!!helpText} size={size} />;
    }

    return (
        <div
            className={classNames(`filter-button filter-button--${size}`, className)}
            data-clearable={!!isClearable || undefined}
            ref={ref}>
            <Label {...labelProps} className="visually-hidden" size={Size.lg}>
                {label}
            </Label>
            <div className={classNames('filter-toggle-button-wrapper', className)}>
                <Button
                    {...fieldProps}
                    {...toggleButtonProps}
                    className={`filter-toggle-button filter-toggle-button--${size}`}
                    data-active={!!isActive || undefined}
                    data-focusable={!!isFocusable || undefined}
                    excludeFromTabOrder={!isFocusable}
                    isDisabled={isDisabled}
                    onKeyDown={(e) => {
                        const eventKey = e.key;

                        if (eventKey === KeyboardEventKey.ArrowDown) {
                            e.preventDefault();
                            onOpenChange?.(true);
                        } else if (eventKey === KeyboardEventKey.Escape) {
                            onOpenChange?.(false);
                        }

                        toggleButtonProps?.onKeyDown?.(e);
                    }}
                    onPress={(e) => {
                        onOpenChange?.(!isOpen);
                        toggleButtonProps?.onPress?.(e);
                    }}
                    preventFocusOnPress={!isFocusable}>
                    <span className="filter-toggle-button__content">
                        {startIconName && (
                            <Icon ariaHidden={true} className="filter-toggle-button__start-icon" name={startIconName} />
                        )}
                        <Label className="filter-toggle-button__label" size={size === Size.xs ? Size.md : Size.lg}>
                            {children}
                        </Label>
                        {isFocusable && (
                            <Icon
                                className={classNames(
                                    `filter-toggle-button__expand-icon filter-toggle-button__expand-icon--${size}`,
                                    {
                                        'filter-toggle-button__expand-icon--disabled': isDisabled
                                    }
                                )}
                                name={isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled}
                            />
                        )}
                    </span>
                </Button>
                {isClearable && (
                    <ClearButton
                        className={`filter-clear-button filter-clear-button--${size}`}
                        isDisabled={isDisabled}
                        {...clearButtonProps}
                    />
                )}
            </div>
            {helpText && (
                <HelpText
                    {...helpTextProps}
                    showIcon={showHelpTextIcon}
                    variant={isDisabled ? HelpTextVariant.Disabled : HelpTextVariant.Neutral}>
                    {helpText}
                </HelpText>
            )}
        </div>
    );
}

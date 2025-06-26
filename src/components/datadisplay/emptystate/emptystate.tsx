import {Label} from '../../text/label/label.js';
import {Button, ButtonProps} from '../../action/button/button.js';
import {Size} from '../../../constants/index.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {IconName} from '../../media/icon/icons.js';
import {classNames} from '../../../utils/classnames.js';
import {RefAttributes} from 'react';

export const enum EmptyStateLayoutVariant {
    Centered = 'centered',
    LeftAligned = 'left-aligned',
    SideBySide = 'side-by-side'
}

export interface EmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * Body text.
     */
    bodyText: string;
    /**
     * Props for the button.
     */
    buttonProps?: ButtonProps;
    /**
     * Additional class name to be applied to the EmptyState component.
     */
    className?: string;
    /**
     * Descriptive icon.
     */
    iconName?: IconName;
    /**
     * Size of the icon. Defaults to IconSize.XXL.
     */
    iconSize?: IconSize;
    /**
     * Layout of the EmptyState component. Defaults to EmptyStateLayoutVariant.SideBySide.
     */
    layout?: EmptyStateLayoutVariant;
    /**
     * Title text.
     */
    title: string;
}

export function EmptyState({
    bodyText,
    buttonProps,
    className,
    iconName,
    iconSize = IconSize.XXL,
    layout = EmptyStateLayoutVariant.SideBySide,
    ref,
    title
}: EmptyStateProps) {
    const isLayoutCentered = layout === EmptyStateLayoutVariant.Centered;
    const isLayoutSideBySide = layout === EmptyStateLayoutVariant.SideBySide;

    return (
        <div className={classNames('empty-state', className)} ref={ref}>
            {iconName && isLayoutSideBySide && (
                <Icon className="empty-state__icon empty-state__icon--side-by-side" name={iconName} size={iconSize} />
            )}
            <div
                className={classNames('empty-state__main-content', {
                    'empty-state__main-content--centered': isLayoutCentered
                })}>
                {iconName && !isLayoutSideBySide && (
                    <Icon className="empty-state__icon" name={iconName} size={iconSize} />
                )}
                <div
                    className={classNames('empty-state__text-content', {
                        'empty-state__text-content--centered': isLayoutCentered
                    })}>
                    <Label className="empty-state__title-text" size={Size.lg}>
                        <strong>{title}</strong>
                    </Label>
                    <BodyText
                        className={classNames('empty-state__body-text', {
                            'empty-state__body-text--centered': isLayoutCentered
                        })}
                        size={Size.sm}>
                        {bodyText}
                    </BodyText>
                </div>
                {buttonProps?.onPress && buttonProps?.children && (
                    <Button {...buttonProps} size={Size.md}>
                        {buttonProps.children}
                    </Button>
                )}
            </div>
        </div>
    );
}

import {Icon, IconSize} from '../../media/icon/icon.js';
import {IconName} from '../../media/icon/icons.js';
import {Text} from 'react-aria-components';
import {Label, LABEL_SIZE_MD_CSS_CLASS, LABEL_SIZE_SM_CSS_CLASS} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {classNames} from '../../../utils/classnames.js';
import {ReactNode} from 'react';

export interface ActionItemContentProps {
    actionLabel?: ReactNode;
    description?: string;
    label: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    suffix?: ReactNode;
}

export const ACTION_ITEM_CSS_CLASS = 'action-item';

export function ActionItemContent({
    actionLabel,
    description,
    label,
    leftIconName,
    prefix,
    rightIconName,
    suffix
}: ActionItemContentProps) {
    return (
        <>
            {prefix}
            {leftIconName && <Icon className="action-item__left-icon" name={leftIconName} size={IconSize.MD} />}
            <div className="action-item__body">
                <Text className={classNames('action-item__label', LABEL_SIZE_MD_CSS_CLASS)} slot="label">
                    {label}
                </Text>
                {description && (
                    <Text
                        className={classNames('action-item__description', LABEL_SIZE_SM_CSS_CLASS)}
                        slot="description">
                        {description}
                    </Text>
                )}
            </div>
            {(!!rightIconName || !!actionLabel || !!suffix) && (
                <div className="action-item__suffix">
                    {suffix}
                    {actionLabel && (
                        <Label className="action-item__action-label" size={Size.md}>
                            {actionLabel}
                        </Label>
                    )}
                    {rightIconName && (
                        <Icon className="action-item__right-icon" name={rightIconName} size={IconSize.MD} />
                    )}
                </div>
            )}
        </>
    );
}

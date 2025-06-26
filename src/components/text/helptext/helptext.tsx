import {classNames} from '../../../utils/classnames.js';
import {Label} from '../label/label.js';
import {ReactNode} from 'react';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {TranslateFn} from '../../../hooks/translations/usetranslatefn.js';
import {Text} from 'react-aria-components';
import {Size} from '../../../constants/index.js';

export const enum HelpTextVariant {
    Neutral = 'neutral',
    Danger = 'danger',
    Success = 'success',
    Disabled = 'disabled'
}

export interface HelpTextProps {
    children: ReactNode;
    className?: string;
    id?: string;
    showIcon?: boolean;
    variant?: HelpTextVariant;
}

function getIconProps(variant: HelpTextVariant, translateFn: TranslateFn) {
    let name: IconName, label: string;

    switch (variant) {
        case HelpTextVariant.Danger:
            name = iconNames.EmergencyHomeFilled;
            label = translateFn('warning');
            break;
        case HelpTextVariant.Success:
            name = iconNames.CheckCircleFilled;
            label = translateFn('success');
            break;
        default:
            name = iconNames.InfoFilled;
            label = translateFn('info');
            break;
    }

    return {name, label};
}

export function HelpText({children, className, id, showIcon, variant = HelpTextVariant.Neutral}: HelpTextProps) {
    const translateCommon = useTranslateCommon();
    const content: ReactNode[] = [
        <Label key="text" size={Size.sm}>
            {children}
        </Label>
    ];

    if (showIcon || variant === HelpTextVariant.Danger) {
        const {name, label} = getIconProps(variant, translateCommon);

        content.unshift(<Icon ariaLabel={label} key="icon" name={name} size={IconSize.SM} />);
    }

    return (
        <Text className={classNames(`help-text help-text--${variant}`, className)} id={id} slot="description">
            {content}
        </Text>
    );
}

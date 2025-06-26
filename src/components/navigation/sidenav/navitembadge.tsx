import {Icon, IconName, IconSize} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';

export interface NavItemBadgeProps {
    ariaLabel?: string;
    iconName: IconName;
    isVisible?: boolean;
}

export function NavItemBadge({ariaLabel, iconName, isVisible}: NavItemBadgeProps) {
    return (
        <Icon
            ariaLabel={ariaLabel}
            className={classNames('nav-item__badge', {'nav-item__badge--visible': isVisible})}
            name={iconName}
            size={IconSize.XS}
        />
    );
}

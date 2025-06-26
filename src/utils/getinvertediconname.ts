import {IconName, iconNames} from '../components';
import {isNullOrUndefined} from './objecthelper';

export function getInvertedIconName(iconName?: IconName, invert?: boolean): IconName | undefined {
    if (isNullOrUndefined(iconName)) {
        return undefined;
    }

    if (iconName.includes('Filled')) {
        return invert ? iconNames[iconName.replace('Filled', '')] : iconName;
    }

    return invert ? iconNames[`${iconName}Filled`] : iconName;
}

import { iconNames } from '../components';
import { isNullOrUndefined } from './objecthelper';
export function getInvertedIconName(iconName, invert) {
    if (isNullOrUndefined(iconName)) {
        return undefined;
    }
    if (iconName.includes('Filled')) {
        return invert ? iconNames[iconName.replace('Filled', '')] : iconName;
    }
    return invert ? iconNames["".concat(iconName, "Filled")] : iconName;
}
//# sourceMappingURL=getinvertediconname.js.map
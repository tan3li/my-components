import { IconName } from './icons.js';
import { RefAttributes } from 'react';
export declare const enum IconSize {
    XS = 12,
    SM = 16,
    MD = 20,
    LG = 24,
    XL = 32,
    XXL = 48
}
export interface IconProps extends RefAttributes<SVGSVGElement> {
    ariaHidden?: boolean;
    ariaLabel?: string;
    className?: string;
    color?: string;
    name: IconName;
    size?: IconSize;
}
export declare function Icon({ ariaHidden, ariaLabel, className, color, name, ref, size }: IconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=icon.d.ts.map
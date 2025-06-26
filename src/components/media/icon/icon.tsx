import {classNames} from '../../../utils/classnames.js';
import {IconName, icons} from './icons.js';
import {RefAttributes} from 'react';

export const enum IconSize {
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

export function Icon({ariaHidden, ariaLabel, className, color, name, ref, size}: IconProps) {
    const SvgIcon = icons[name];

    return (
        <SvgIcon
            aria-hidden={ariaHidden}
            aria-label={ariaLabel}
            className={classNames('icon', className)}
            color={color}
            height={size}
            ref={ref}
            width={size}
        />
    );
}

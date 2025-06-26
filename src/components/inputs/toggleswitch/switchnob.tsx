import {Size} from '../../../constants/size.js';

interface SwitchNobProps {
    className?: string;
    size: Size.sm | Size.md;
}

const SM_SIZE = 8;
const MD_SIZE = 12;

export function SwitchNob({className, size}: SwitchNobProps) {
    const iconSize = size === Size.sm ? SM_SIZE : MD_SIZE;

    return (
        <svg
            aria-hidden={true}
            className={className}
            fill="none"
            height={iconSize}
            viewBox={`0 0 ${iconSize} ${iconSize}`}
            width={iconSize}>
            <circle cx={iconSize / 2} cy={iconSize / 2} fill="currentColor" r={iconSize / 2} />
        </svg>
    );
}

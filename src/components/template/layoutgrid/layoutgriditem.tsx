import {classNames} from '../../../utils/classnames.js';
import {ReactNode, RefAttributes, useMemo} from 'react';
import {BreakpointValues} from './breakpointvalues.js';
import {isNumber} from '../../../utils/objecthelper.js';

const layoutGridColumnCounts = {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12
};

export const LayoutGridItemPresetSize = {
    Full: {xs: layoutGridColumnCounts.xs, sm: layoutGridColumnCounts.sm, lg: layoutGridColumnCounts.lg},
    Half: {xs: layoutGridColumnCounts.xs / 2, sm: layoutGridColumnCounts.sm / 2, lg: layoutGridColumnCounts.lg / 2}
};

export interface LayoutGridItemProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid item.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * How many units does the item take space in a grid.
     * Can be provided as single value or per breakpoint.
     */
    size: number | BreakpointValues<number>;
    /**
     * From which column item starts in a grid.
     * Can be provided as single value or per breakpoint.
     */
    start?: number | BreakpointValues<number>;
}

function getPlacementProperties(suffix: string, placement?: number | BreakpointValues<number>) {
    const cssVariables = {};
    const cssClassNames: string[] = [];

    if (placement) {
        if (isNumber(placement)) {
            cssVariables[`--layout-grid-item-${suffix}`] = placement;
        } else {
            for (const breakpoint in placement) {
                cssVariables[`--layout-grid-item-${suffix}-${breakpoint}`] = placement[breakpoint];
                cssClassNames.push(`layout-grid-item--${suffix}-${breakpoint}`);
            }
        }
    }

    return {
        cssVariables,
        cssClassNames
    };
}

// eslint-disable-next-line sonarjs/function-return-type
function sanitizeSize(size: number | BreakpointValues<number>) {
    let newSize = size;

    if (isNumber(newSize)) {
        if (newSize > layoutGridColumnCounts.xs) {
            newSize = {
                xs: layoutGridColumnCounts.xs,
                sm: Math.min(newSize, layoutGridColumnCounts.sm),
                lg: Math.min(newSize, layoutGridColumnCounts.lg)
            };
        }
    } else {
        for (const breakpoint in newSize) {
            newSize[breakpoint] = Math.min(
                layoutGridColumnCounts[breakpoint] ?? layoutGridColumnCounts.lg,
                newSize[breakpoint]
            );
        }
    }

    return newSize;
}

export function LayoutGridItem({children, className, ref, size, start}: LayoutGridItemProps) {
    const sanitizedSize = useMemo(() => sanitizeSize(size), [size]);
    const spanProperties = getPlacementProperties('span', sanitizedSize);
    const startProperties = getPlacementProperties('start', start);

    return (
        <div
            className={classNames(
                'layout-grid-item',
                ...spanProperties.cssClassNames,
                ...startProperties.cssClassNames,
                className
            )}
            ref={ref}
            style={{
                ...spanProperties.cssVariables,
                ...startProperties.cssVariables
            }}>
            {children}
        </div>
    );
}

import {ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {coreTokens} from '@tan3li/d-tokens';
import {BreakpointValues} from './breakpointvalues.js';
import {isString} from '../../../utils/stringhelper.js';

export const enum LayoutGridColumnSpacing {
    Default = 'var(--space-md)',
    Compact = 'var(--space-xs)',
    Comfy = 'var(--space-xl)',
    None = 'var(--space-none)'
}

export interface LayoutGridProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Spacing between columns. Can be provided as single value or per breakpoint.
     */
    columnSpacing?: LayoutGridColumnSpacing | BreakpointValues<LayoutGridColumnSpacing>;
    /**
     * Spacing between row. Can be provided as single value or per breakpoint.
     */
    rowSpacing?: string | BreakpointValues<string>;
}

function getGapProperties(dimension: string, spacing: string | BreakpointValues<string>) {
    const cssVariables = {};
    const cssClassNames: string[] = [];

    if (isString(spacing)) {
        cssVariables[`--layout-grid-${dimension}-gap`] = spacing;
    } else {
        for (const breakpoint in spacing) {
            cssVariables[`--layout-grid-${dimension}-gap-${breakpoint}`] = spacing[breakpoint];
            cssClassNames.push(`layout-grid--${dimension}-gap-${breakpoint}`);
        }
    }

    return {
        cssVariables,
        cssClassNames
    };
}

export function LayoutGrid({
    children,
    className,
    columnSpacing = LayoutGridColumnSpacing.Default,
    ref,
    rowSpacing = coreTokens.dimension.spaceMd.value
}: LayoutGridProps) {
    const rowGapProperties = getGapProperties('row', rowSpacing);
    const columnGapProperties = getGapProperties('column', columnSpacing);

    return (
        <div
            className={classNames(
                'layout-grid',
                ...rowGapProperties.cssClassNames,
                ...columnGapProperties.cssClassNames,
                className
            )}
            ref={ref}
            style={{...rowGapProperties.cssVariables, ...columnGapProperties.cssVariables}}>
            {children}
        </div>
    );
}

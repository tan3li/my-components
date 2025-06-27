import { DisclosureGroupProps } from 'react-stately';
import { CollapsibleItemObject, CollapsibleItemStyle } from './collapsibleitem.js';
import { Key } from 'react-aria-components';
import { Alignment } from '../../../constants/index.js';
import { RefAttributes } from 'react';
export interface CollapsibleProps extends DisclosureGroupProps, RefAttributes<HTMLDivElement> {
    /**
     * Placement of the arrow in the collapsible item headers.
     */
    arrowPlacement?: Alignment.start | Alignment.end;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Disabled item keys.
     */
    disabledKeys?: Iterable<Key>;
    /**
     * Collapsible items.
     */
    items: CollapsibleItemObject[];
    /**
     * Display style for the collapsible items.
     */
    style?: CollapsibleItemStyle;
}
export declare function Collapsible({ allowsMultipleExpanded, arrowPlacement, className, disabledKeys, items, ref, style, ...props }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=collapsible.d.ts.map
import { DisclosureGroupState } from 'react-stately';
import { ReactNode, RefAttributes } from 'react';
import { Alignment } from '../../../constants/index.js';
import { AriaDisclosureProps } from 'react-aria';
import { Key } from 'react-aria-components';
export declare const enum CollapsibleItemStyle {
    Card = "card",
    Plain = "plain"
}
export interface CollapsibleItemObject {
    children: ReactNode;
    id: Key;
    title: ReactNode;
    tooltipContent?: ReactNode;
}
export interface CollapsibleItemProps extends AriaDisclosureProps, RefAttributes<HTMLDivElement> {
    arrowPlacement?: Alignment.start | Alignment.end;
    groupState?: DisclosureGroupState;
    item: CollapsibleItemObject;
    style?: CollapsibleItemStyle;
}
export declare function CollapsibleItem({ arrowPlacement, groupState, isDisabled, item, ref, style, ...props }: CollapsibleItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=collapsibleitem.d.ts.map
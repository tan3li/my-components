import {DisclosureGroupProps, useDisclosureGroupState} from 'react-stately';
import {CollapsibleItem, CollapsibleItemObject, CollapsibleItemStyle} from './collapsibleitem.js';
import {Key} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Alignment} from '../../../constants/index.js';
import {RefAttributes, useMemo} from 'react';

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

export function Collapsible({
    allowsMultipleExpanded = true,
    arrowPlacement = Alignment.start,
    className,
    disabledKeys,
    items,
    ref,
    style = CollapsibleItemStyle.Plain,
    ...props
}: CollapsibleProps) {
    const groupState = useDisclosureGroupState({allowsMultipleExpanded, ...props});
    const disabledKeysSet = useMemo(() => (disabledKeys ? new Set(disabledKeys) : new Set<Key>()), [disabledKeys]);

    return (
        <div className={classNames(`collapsible collapsible--${style}-items`, className)} ref={ref}>
            {items.map((item) => (
                <CollapsibleItem
                    arrowPlacement={arrowPlacement}
                    groupState={groupState}
                    isDisabled={props.isDisabled ?? disabledKeysSet.has(item.id)}
                    item={item}
                    key={item.id}
                    style={style}
                />
            ))}
        </div>
    );
}

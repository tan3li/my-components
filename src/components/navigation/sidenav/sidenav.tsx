import {classNames} from '../../../utils/classnames.js';
import {ReactNode, RefAttributes, useEffect, useId, useMemo, useState} from 'react';
import {Key} from 'react-aria-components';
import {IconButton} from '../../action/iconbutton/iconbutton.js';
import {iconNames} from '../../media/icon/icons.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {ButtonStyle} from '../../action/button/button.js';
import {ButtonVariant} from '../../action/constants/buttonvariant.js';
import {Size} from '../../../constants/size.js';
import {SideNavItem} from './sidenavitem.js';
import {NavItem, NavItemType} from './navitem.js';
import {isFunction, safeCall} from '../../../utils/functionhelper.js';
import {TooltipTrigger} from '../../feedback/tooltip/tooltiptrigger.js';
import {Tooltip, TooltipType} from '../../feedback/tooltip/tooltip.js';
import {Alignment} from '../../../constants/alignment.js';
import {Divider} from '../../datadisplay/divider/divider.js';
import {Position} from '../../../constants/position.js';
import {getInvertedIconName} from '../../../utils/getinvertediconname';
import {NavItemBadge} from './navitembadge.js';

export const enum SideNavMode {
    Default = 'default',
    Inverted = 'inverted'
}

export interface SideNavProps extends RefAttributes<HTMLDivElement> {
    ['aria-label']: string;
    /**
     * Whether the side nav can be collapsed. Items should have icon when this is set to true.
     */
    canShrink?: boolean;
    /**
     * Set of expanded item keys.
     */
    expandedKeys?: Set<Key>;
    /**
     * The header of the side nav.
     */
    header?: ReactNode | ((isExpanded: boolean) => ReactNode);
    /**
     * Whether the side nav is expanded.
     */
    isExpanded?: boolean;
    /**
     * The items to display in the side nav.
     */
    items: SideNavItem[];
    /**
     * The mode of the side nav.
     */
    mode?: SideNavMode;
    /**
     * Handler that is called when items are expanded or collapsed.
     */
    onExpandedKeysChange?: (keys: Set<Key>) => void;
    /**
     * Callback that is called when the side nav is toggled.
     */
    toggleCallback?: (isExpanded: boolean) => void;
}

function containsExpandableItems(items: SideNavItem[]) {
    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];
        const {items: subItems, isHeading} = item;

        if (subItems && (!isHeading || (isHeading && containsExpandableItems(subItems)))) {
            return true;
        }
    }

    return false;
}

export function SideNav({
    canShrink = true,
    expandedKeys: propsExpandedKeys,
    header,
    isExpanded = true,
    items,
    mode = SideNavMode.Default,
    onExpandedKeysChange,
    ref,
    toggleCallback,
    ...props
}: SideNavProps) {
    const domIdPrefix = useId();
    const [isSideNavExpanded, setIsSideNavExpanded] = useState(canShrink ? isExpanded : true);
    const translateCommon = useTranslateCommon();
    const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(propsExpandedKeys ?? new Set());
    const toggleItems = () => {
        setIsSideNavExpanded(!isSideNavExpanded);
        safeCall(toggleCallback, !isSideNavExpanded);
    };
    const getDomId = (id: Key) => `${domIdPrefix}${id}`;
    const hasExpandableItems = useMemo(() => containsExpandableItems(items), [items]);

    const isItemOrChildrenActive = (sideNavItem: SideNavItem) => {
        if (sideNavItem.isActive) {
            return true;
        }
        const sideNavItemChildren = sideNavItem.items;

        if (sideNavItemChildren) {
            for (let i = 0, len = sideNavItemChildren.length; i < len; i++) {
                if (isItemOrChildrenActive(sideNavItemChildren[i])) {
                    return true;
                }
            }
        }

        return false;
    };

    const renderItem = (item: SideNavItem, level: number) => {
        const {onPress, id, isHeading, badge, label, icon} = item;
        const hasChildren = !!item.items;
        const showExpanderPlaceholder = hasExpandableItems && !hasChildren && !!badge;
        const isItemExpanded = expandedKeys.has(id);
        let type: NavItemType | undefined;

        if (isHeading) {
            type = NavItemType.GroupHeading;
        } else if (level === 0) {
            type = NavItemType.Main;
        } else {
            type = NavItemType.Indented;
        }

        if (!isSideNavExpanded && (isHeading || level > 0)) {
            return null;
        }

        // Showing the upper level item as active if any of its children is active. Currently, cannot open sub levels
        // when displaying only IconButtons.
        const isActive = isItemOrChildrenActive(item);

        if (isSideNavExpanded) {
            return (
                <NavItem
                    domId={isHeading ? getDomId(id) : undefined}
                    inverted={mode === SideNavMode.Inverted}
                    isActive={isActive}
                    isExpanded={isItemExpanded}
                    item={item}
                    level={level}
                    showExpanderPlaceholder={showExpanderPlaceholder}
                    type={type}
                />
            );
        }

        return (
            <TooltipTrigger>
                <div className="side-nav__icon-button-wrapper">
                    <IconButton
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={label}
                        className="side-nav__icon-button"
                        iconName={getInvertedIconName(icon, isActive)!}
                        inverted={mode === SideNavMode.Inverted}
                        onPress={() => onPress?.(id)}
                        size={Size.sm}
                        style={isActive ? ButtonStyle.Fill : ButtonStyle.Plain}
                        variant={isActive ? ButtonVariant.Accent : ButtonVariant.Neutral}
                    />
                    {badge && <NavItemBadge {...badge} />}
                </div>
                <Tooltip position={Position.Right} type={TooltipType.Plain}>
                    {label}
                </Tooltip>
            </TooltipTrigger>
        );
    };

    const expandCallback = (id: Key) => {
        const newExpandedKeys = new Set(expandedKeys);

        if (expandedKeys.has(id)) {
            newExpandedKeys.delete(id);
        } else {
            newExpandedKeys.add(id);
        }

        setExpandedKeys(newExpandedKeys);
        onExpandedKeysChange?.(newExpandedKeys);
    };

    const renderItems = (itemArr: SideNavItem[], level: number) => {
        const itemNodes: ReactNode[] = [];

        for (let i = 0, len = itemArr.length; i < len; i++) {
            const item = itemArr[i];
            const subItems = item.items;
            const itemToRender = {
                ...item,
                onPress: isSideNavExpanded && subItems ? expandCallback : item.onPress
            };

            if (subItems) {
                if (item.isHeading) {
                    itemNodes.push(
                        <li className="side-nav__nav-list-item" key={item.id}>
                            {renderItem(item, level)}
                            <ul
                                aria-labelledby={getDomId(item.id)}
                                className="side-nav__nav-list side-nav__nav-section">
                                {renderItems(subItems, level)}
                            </ul>
                        </li>
                    );
                } else {
                    itemNodes.push(
                        <li className="side-nav__nav-list-item" key={item.id}>
                            {renderItem(itemToRender, level)}
                            {expandedKeys.has(item.id) && (
                                <ul className="side-nav__nav-list side-nav__sub-nav-list">
                                    {renderItems(subItems, level + 1)}
                                </ul>
                            )}
                        </li>
                    );
                }
            } else {
                itemNodes.push(
                    <li className="side-nav__nav-list-item" key={item.id}>
                        {renderItem(item, level)}
                    </li>
                );
            }
        }

        return itemNodes;
    };

    useEffect(() => {
        setExpandedKeys(propsExpandedKeys ?? new Set());
    }, [propsExpandedKeys]);

    useEffect(() => {
        setIsSideNavExpanded(canShrink ? isExpanded : true);
    }, [isExpanded]);

    return (
        <div
            className={classNames(`side-nav side-nav--mode-${mode}`, {'side-nav--expanded': isSideNavExpanded})}
            ref={ref}>
            {(canShrink || header) && (
                <div className="side-nav__header">
                    {isFunction(header) ? header(isSideNavExpanded) : header}
                    {canShrink && (
                        <IconButton
                            aria-expanded={isSideNavExpanded}
                            aria-label={translateCommon(isSideNavExpanded ? 'collapse' : 'expand')}
                            className="side-nav__toggle"
                            iconName={iconNames.Menu}
                            inverted={mode === SideNavMode.Inverted}
                            onPress={toggleItems}
                            size={isSideNavExpanded ? Size.md : Size.sm}
                            style={ButtonStyle.Plain}
                            variant={ButtonVariant.Neutral}
                        />
                    )}
                    <Divider alignment={Alignment.center} className="side-nav__divider" size={Size.sm} />
                </div>
            )}
            <nav aria-label={props['aria-label']} className="side-nav__content">
                <ul className="side-nav__nav-list">{renderItems(items, 0)}</ul>
            </nav>
        </div>
    );
}

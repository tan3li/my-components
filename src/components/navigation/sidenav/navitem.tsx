import {classNames} from '../../../utils/classnames.js';
import {MenuDecorLine} from './menudecorline.js';
import {MenuGroupHeader} from '../../action/menu/menugroupheader.js';
import {ActionItemContent} from '../../action/actionitem/actionitem.js';
import {IconName, iconNames} from '../../media/icon/icons.js';
import {TriggerElement} from '../../action/triggerelement/triggerelement.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';
import {getInvertedIconName} from '../../../utils/getinvertediconname';
import {SideNavItem} from './sidenavitem.js';
import {AriaRole} from '../../../constants/index.js';
import {NavItemBadge} from './navitembadge.js';
import {ReactNode} from 'react';

export const enum NavItemType {
    Main = 'main',
    Indented = 'indented',
    GroupHeading = 'group-heading'
}

interface NavItemProps {
    /**
     * Unique id for DOM element.
     */
    domId?: string;
    /**
     * Whether the item is using inverted colors.
     */
    inverted?: boolean;
    /**
     * Whether the item is active.
     */
    isActive?: boolean;
    /**
     * Whether the item is expanded.
     */
    isExpanded?: boolean;
    /**
     * Item property object.
     */
    item: SideNavItem;
    /**
     * The indentation level of the item.
     */
    level?: number;
    /**
     * Whether to show placeholder for expander when expander is not visible.
     */
    showExpanderPlaceholder?: boolean;
    /**
     * The type of the item.
     */
    type?: NavItemType;
}

export function NavItem({
    domId,
    inverted,
    isActive,
    isExpanded,
    item,
    level = 0,
    showExpanderPlaceholder,
    type = NavItemType.Main
}: NavItemProps) {
    const {items, id, label, icon, onPress, showLine, useDecorLine, badge} = item;
    const hasChildren = !!items;
    const role = hasChildren ? AriaRole.button : AriaRole.link;
    const isHeading = type === NavItemType.GroupHeading;

    if (isHeading) {
        return (
            <div
                aria-current={isActive ? 'page' : undefined}
                className={classNames(`nav-item nav-item--type-${type}`)}
                id={domId}>
                {useDecorLine && (
                    <MenuDecorLine inverted={inverted} isActive={isActive} isHeading={isHeading} showLine={showLine} />
                )}
                <MenuGroupHeader
                    className={classNames('nav-item__menu-group-header', {
                        'nav-item__menu-group-header--inverted': inverted
                    })}>
                    {label}
                </MenuGroupHeader>
            </div>
        );
    }

    const suffix: ReactNode[] = [];
    let expanderIcon: IconName | undefined;

    if (hasChildren) {
        expanderIcon = isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight;
    }
    if (badge) {
        suffix.push(<NavItemBadge {...badge} key="badge" />);
    }
    if (!expanderIcon && showExpanderPlaceholder) {
        suffix.push(<div className="nav-item__expander-placeholder" key="exp-ph" />);
    }

    return (
        <TriggerElement
            aria-current={isActive ? 'page' : undefined}
            aria-expanded={hasChildren ? isExpanded : undefined}
            className={classNames(`nav-item nav-item--type-${type}`, {
                'nav-item--inverted': inverted,
                'nav-item--active': isActive && !hasChildren,
                'nav-item--with-decor-line': useDecorLine
            })}
            elementType={HTMLElementType.A}
            id={domId}
            onPress={() => onPress?.(id)}
            role={role}>
            {useDecorLine && (
                <MenuDecorLine inverted={inverted} isActive={isActive} isHeading={isHeading} showLine={showLine} />
            )}
            <div
                className={classNames(`nav-item__action-item nav-item--indentation-level-${level}`, {
                    'nav-item__action-item--indented': type === NavItemType.Indented,
                    'nav-item__action-item--inverted': inverted
                })}>
                <ActionItemContent
                    label={label}
                    leftIconName={hasChildren ? icon : getInvertedIconName(icon, isActive)}
                    rightIconName={expanderIcon}
                    suffix={suffix}
                />
            </div>
        </TriggerElement>
    );
}

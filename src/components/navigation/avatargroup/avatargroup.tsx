import {AvatarProps} from '../avatar/index.js';
import {Children, cloneElement, ReactElement, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Menu, MenuItem} from '../../action/index.js';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Button} from 'react-aria-components';

export const enum AvatarGroupLayout {
    Grid = 'grid',
    Stack = 'stack'
}

export interface AvatarGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Avatar element or list of Avatar elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Avatars can be displayed with stack or grid layout.
     */
    layout?: AvatarGroupLayout;
    /**
     * Max visible avatar count. Applied only for the grid layout.
     */
    maxVisibleCount?: number;
    /**
     * Size of the avatars.
     */
    size?: Size.sm | Size.md | Size.lg;
}

const STACK_MAX_VISIBLE_COUNT = 5;
const GRID_MAX_VISIBLE_COUNT = 10;

export function AvatarGroup({
    children: propsChildren,
    className,
    layout = AvatarGroupLayout.Stack,
    maxVisibleCount,
    ref,
    size
}: AvatarGroupProps) {
    const children = Children.toArray(propsChildren);
    const childCount = children.length;
    const hasStackLayout = layout === AvatarGroupLayout.Stack;
    const maxCount = hasStackLayout ? STACK_MAX_VISIBLE_COUNT : (maxVisibleCount ?? GRID_MAX_VISIBLE_COUNT);
    const content: ReactNode[] = children.slice(0, maxCount).map((child, i) =>
        cloneElement(child as ReactElement<AvatarProps>, {
            // always ignore label and description
            description: undefined,
            isInteractive: true,
            label: undefined,
            size,
            style: hasStackLayout ? {zIndex: maxCount - i} : undefined
        })
    );

    if (childCount > maxCount) {
        const menuItems: MenuItem[] = children.slice(maxCount, childCount).map((child, i) => {
            const avatarElement = child as ReactElement<AvatarProps>;
            const item: MenuItem = {
                id: i,
                name: avatarElement.props.alt,
                props: {
                    onAction: avatarElement.props.onPress,
                    prefix: cloneElement(avatarElement, {
                        // always ignore label and description
                        description: undefined,
                        isInteractive: false,
                        label: undefined,
                        onPress: undefined,
                        size: Size.xs
                    })
                }
            };

            return item;
        });

        content.push(
            <Menu items={menuItems} key="more">
                <Button
                    className={`avatar-group__more-button avatar-group__more-button--${size}`}
                    style={hasStackLayout ? {zIndex: 0} : undefined}>
                    <Label size={size === Size.lg ? Size.sm : Size.xs}>{`+${childCount - maxCount}`}</Label>
                </Button>
            </Menu>
        );
    }

    return (
        <div className={classNames(`avatar-group avatar-group--${layout} avatar-group--${size}`, className)} ref={ref}>
            {content}
        </div>
    );
}

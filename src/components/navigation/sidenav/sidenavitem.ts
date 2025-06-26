import {Key} from 'react-aria-components';
import {IconName} from '../../media/icon/icons.js';

export interface SideNavItem {
    /**
     * Element to indicate something that needs user's attention.
     */
    badge?: {
        ariaLabel?: string;
        iconName: IconName;
        isVisible: boolean;
    };
    /**
     * The unique identifier of the item.
     */
    id: Key;
    /**
     * The name of the icon.
     */
    icon?: IconName;
    /**
     * Whether the item is active.
     */
    isActive?: boolean;
    /**
     * Whether the item is a heading.
     */
    isHeading?: boolean;
    /**
     * The children of the item.
     */
    items?: SideNavItem[];
    /**
     * The label of the item.
     */
    label: string;
    /**
     * Callback that is called when the item is pressed.
     */
    onPress?: (id: Key) => void;
    /**
     * Whether to show the decorator line.
     */
    showLine?: boolean;
    /**
     * Whether to use decorator line.
     */
    useDecorLine?: boolean;
}

import { IconName } from '../../media/icon/icons.js';
import { Size } from '../../../constants/size.js';
import { RefAttributes } from 'react';
export interface SelectOptionsEmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Name of decorative icon.
     */
    iconName?: IconName;
    /**
     * Text for the element.
     */
    text?: string;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
}
export declare function SelectOptionsEmptyState({ className, iconName, ref, size, text }: SelectOptionsEmptyStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=selectoptionsemptystate.d.ts.map
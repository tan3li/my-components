import { ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/index.js';
export interface CalloutProps extends RefAttributes<HTMLDivElement> {
    /**
     * Callout content.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether elements is expanded by default.
     */
    defaultExpanded?: boolean;
    /**
     * Name of decorative icon displayed in the header.
     */
    iconName: IconName;
    /**
     * Whether element is expanded (controlled).
     */
    isExpanded?: boolean;
    /**
     * Handler called when expanded state changes. Use together with isExpanded to control state from outside.
     */
    onExpandedChange?: (isExpanded: boolean) => void;
    /**
     * Title displayed in the header.
     */
    title: ReactNode;
}
export declare function Callout({ children, className, iconName, ref, title, ...props }: CalloutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=callout.d.ts.map
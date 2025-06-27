import { ModalOverlayProps } from 'react-aria-components';
import { ReactNode, Ref, RefAttributes } from 'react';
import { OverlayFooterAction, OverlayFooterIconAction } from '../overlayfooter/overlayfooter.js';
export declare const enum DrawerVariant {
    FullOverlay = "full-overlay",
    Standard = "standard"
}
export declare const enum DrawerWidth {
    Medium = "medium",
    Wide = "wide"
}
export declare const enum DrawerHeaderStyle {
    Emphasized = "emphasized",
    Standard = "standard"
}
export interface DrawerRenderProps {
    close: () => void;
}
export interface DrawerProps extends ModalOverlayProps, RefAttributes<HTMLDivElement> {
    /**
     * Aria-label for Dialog in case header does not contain Heading element.
     */
    ['aria-label']?: string;
    /**
     * Whether to focus header close button on initial render.
     */
    autoFocusClose?: boolean;
    /**
     * Drawer body content.
     */
    children: ReactNode;
    /**
     * Extra CSS class name of Drawer
     */
    className?: string;
    /**
     * Destructive action in the footer.
     */
    destructiveAction?: OverlayFooterIconAction;
    /**
     * Custom footer content. Overrides the default footer content rendering.
     */
    footer?: ReactNode | ((renderProps: DrawerRenderProps) => ReactNode);
    /**
     * Custom header content. Overrides the default header content rendering.
     */
    header?: ReactNode | ((renderProps: DrawerRenderProps) => ReactNode);
    /**
     * Custom content to display in header below the title.
     */
    headerDetails?: ReactNode;
    /**
     * Determines the background color of the header element.
     */
    headerStyle?: DrawerHeaderStyle;
    /**
     * Primary action in the footer.
     */
    primaryAction?: OverlayFooterAction;
    /**
     * Ref to Drawer content which has the scroll bar.
     */
    scrollRef?: Ref<HTMLDivElement>;
    /**
     * Secondary action in the footer.
     */
    secondaryAction?: OverlayFooterAction;
    /**
     * Whether Drawer entering and exiting should be animated. Slide animation is shown by default.
     */
    shouldAnimate?: boolean;
    /**
     * Whether to show loading indicator in header.
     * Applied only when using the default header rendering (= header prop not set).
     */
    showHeaderLoadingIndicator?: boolean;
    /**
     * Title to display in header.
     * Applied only when using the default header rendering (= header prop not set).
     */
    title?: ReactNode;
    /**
     * Variant of the Drawer. Defines if user can act with the content behind the Drawer.
     */
    variant?: DrawerVariant;
    /**
     * Width of the drawer.
     */
    width?: DrawerWidth;
}
export declare function Drawer({ 'aria-label': ariaLabel, autoFocusClose, children, className, destructiveAction, footer, header, headerDetails, headerStyle, isDismissable, primaryAction, scrollRef, secondaryAction, showHeaderLoadingIndicator, shouldAnimate, title, variant, width, ...props }: DrawerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=drawer.d.ts.map
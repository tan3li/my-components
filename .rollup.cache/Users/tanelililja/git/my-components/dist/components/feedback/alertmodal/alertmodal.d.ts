import { ModalOverlayProps } from 'react-aria-components';
import { ReactNode, RefAttributes } from 'react';
import { OverlayHeaderVariant } from '../overlayheader/overlayheader.js';
import { Size } from '../../../constants/size.js';
import { IconName } from '../../media/icon/icons.js';
import { OverlayFooterAction, OverlayFooterIconAction } from '../overlayfooter/overlayfooter.js';
export interface AlertModalProps extends Omit<ModalOverlayProps, 'children' | 'isDismissable'>, RefAttributes<HTMLDivElement> {
    /**
     * Whether to focus header close button on initial render.
     */
    autoFocusClose?: boolean;
    /**
     * Modal body content.
     */
    children: ReactNode | ((closeCallback: () => void) => ReactNode);
    /**
     * Destructive action in the footer.
     */
    destructiveAction?: OverlayFooterIconAction;
    /**
     * Icon to display in the header. Appearance depends on the variant.
     */
    headerIcon?: IconName;
    /**
     * Whether modal can be closed by clicking outside it.
     */
    isDismissibleOnOutClick?: boolean;
    /**
     * Primary action in the footer.
     */
    primaryAction?: OverlayFooterAction;
    /**
     * Secondary action in the footer.
     */
    secondaryAction?: OverlayFooterAction;
    /**
     * Whether to scroll window viewport instead of body content if it does not fit the screen.
     */
    shouldScrollInViewport?: boolean;
    /**
     * Size determines the width of the modal.
     */
    size: Size.sm | Size.md | Size.lg | Size.xl | Size.xxl;
    /**
     * Title to display in the header.
     */
    title: ReactNode;
    /**
     * Header variant. Mainly affects the headerIcon.
     */
    variant?: OverlayHeaderVariant;
}
export declare function AlertModal({ autoFocusClose, children, className, destructiveAction, headerIcon, isDismissibleOnOutClick, primaryAction, secondaryAction, shouldScrollInViewport, size, title, variant, ...props }: AlertModalProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=alertmodal.d.ts.map
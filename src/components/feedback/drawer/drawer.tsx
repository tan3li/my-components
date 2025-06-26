import {Dialog, Modal, ModalOverlay, ModalOverlayProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {ReactNode, Ref, RefAttributes} from 'react';
import {OverlayHeader, OverlayHeaderVariant} from '../overlayheader/overlayheader.js';
import {OverlayFooter, OverlayFooterAction, OverlayFooterIconAction} from '../overlayfooter/overlayfooter.js';
import {useBodyScrollPosition} from '../../../hooks/usebodyscrollposition.js';
import {mergeRefs} from '@react-aria/utils';
import {isFunction} from '../../../utils/functionhelper.js';

export const enum DrawerVariant {
    FullOverlay = 'full-overlay',
    Standard = 'standard'
}

export const enum DrawerWidth {
    Medium = 'medium',
    Wide = 'wide'
}

export const enum DrawerHeaderStyle {
    Emphasized = 'emphasized',
    Standard = 'standard'
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

export function Drawer({
    'aria-label': ariaLabel,
    autoFocusClose,
    children,
    className,
    destructiveAction,
    footer,
    header,
    headerDetails,
    headerStyle = DrawerHeaderStyle.Standard,
    isDismissable,
    primaryAction,
    scrollRef,
    secondaryAction,
    showHeaderLoadingIndicator,
    shouldAnimate = true,
    title,
    variant = DrawerVariant.Standard,
    width = DrawerWidth.Medium,
    ...props
}: DrawerProps) {
    const {bodyScrollPosition, onScroll, onBodyRef} = useBodyScrollPosition();

    const renderContent = ({close}: DrawerRenderProps) => {
        const headerCssClass = `drawer__header drawer__header--${headerStyle}`;
        const footerCssClass = 'drawer__footer';
        let headerElement: ReactNode, footerElement: ReactNode;

        if (header) {
            headerElement = <div className={headerCssClass}>{isFunction(header) ? header({close}) : header}</div>;
        } else if (title) {
            headerElement = (
                <OverlayHeader
                    autoFocusClose={autoFocusClose}
                    className={headerCssClass}
                    details={headerDetails}
                    onClose={close}
                    showLoadingIndicator={showHeaderLoadingIndicator}
                    variant={OverlayHeaderVariant.Neutral}>
                    {title}
                </OverlayHeader>
            );
        }

        if (footer) {
            footerElement = <div className={footerCssClass}>{isFunction(footer) ? footer({close}) : footer}</div>;
        } else if (primaryAction) {
            footerElement = (
                <OverlayFooter
                    className={footerCssClass}
                    closeCallback={close}
                    destructiveAction={destructiveAction}
                    primaryAction={primaryAction}
                    secondaryAction={secondaryAction}
                />
            );
        }

        return (
            <>
                {headerElement}
                <div className="drawer__body" onScroll={onScroll} ref={mergeRefs(scrollRef, onBodyRef)}>
                    {children}
                </div>
                {footerElement}
            </>
        );
    };

    return (
        <ModalOverlay
            {...props}
            className={classNames(`drawer-overlay drawer-overlay--${variant}`, {
                'drawer-overlay--animated': shouldAnimate
            })}
            isDismissable={isDismissable ?? true}>
            <Modal className={classNames(`drawer drawer--${width}`, className)}>
                <Dialog
                    aria-label={ariaLabel}
                    className={`drawer__dialog drawer__dialog--scroll-${bodyScrollPosition}`}>
                    {renderContent}
                </Dialog>
            </Modal>
        </ModalOverlay>
    );
}

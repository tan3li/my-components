import {Dialog, Modal, ModalOverlay, ModalOverlayProps} from 'react-aria-components';
import {ReactNode, RefAttributes} from 'react';
import {OverlayHeader, OverlayHeaderVariant} from '../overlayheader/overlayheader.js';
import {Size} from '../../../constants/size.js';
import {IconName} from '../../media/icon/icons.js';
import {OverlayFooter, OverlayFooterAction, OverlayFooterIconAction} from '../overlayfooter/overlayfooter.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {classNames} from '../../../utils/classnames.js';
import {useBodyScrollPosition} from '../../../hooks/usebodyscrollposition.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';

export interface AlertModalProps
    extends Omit<ModalOverlayProps, 'children' | 'isDismissable'>,
        RefAttributes<HTMLDivElement> {
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

export function AlertModal({
    autoFocusClose,
    children,
    className,
    destructiveAction,
    headerIcon,
    isDismissibleOnOutClick,
    primaryAction,
    secondaryAction,
    shouldScrollInViewport,
    size,
    title,
    variant,
    ...props
}: AlertModalProps) {
    const {bodyScrollPosition, onScroll, onBodyRef} = useBodyScrollPosition();

    const hasFooter = !(isNullOrUndefined(primaryAction) && isNullOrUndefined(secondaryAction));

    const renderContent = ({close}) => (
        <>
            <OverlayHeader
                autoFocusClose={autoFocusClose}
                className="alert-modal-dialog__header"
                iconName={headerIcon}
                onClose={close}
                variant={variant}>
                {title}
            </OverlayHeader>
            <div
                className={classNames('alert-modal-dialog__body', {
                    'alert-modal-dialog__body--no-footer': !hasFooter
                })}
                onScroll={onScroll}
                ref={shouldScrollInViewport ? null : onBodyRef}
                // Scrollable body should be keyboard-focusable.
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}>
                {isFunction(children) ? children(close) : children}
            </div>
            {hasFooter && (
                <OverlayFooter
                    className="alert-modal-dialog__footer"
                    closeCallback={close}
                    destructiveAction={destructiveAction}
                    primaryAction={primaryAction}
                    secondaryAction={secondaryAction}
                />
            )}
        </>
    );

    return (
        <ModalOverlay
            {...props}
            className={classNames('alert-modal-overlay', className, {
                'alert-modal-overlay--scrollable': shouldScrollInViewport
            })}
            isDismissable={isDismissibleOnOutClick}>
            <div className="alert-modal-wrapper">
                <Modal className={`alert-modal alert-modal--${size}`}>
                    <Dialog
                        className={classNames('alert-modal-dialog', {
                            [`alert-modal-dialog--scroll-${bodyScrollPosition}`]:
                                !shouldScrollInViewport && bodyScrollPosition
                        })}>
                        {renderContent}
                    </Dialog>
                </Modal>
            </div>
        </ModalOverlay>
    );
}

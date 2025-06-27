import { useEffect } from 'react';
import { ariaHideOutside } from '@react-aria/overlays';
// This hook should be run when using Popover with isNonModal = true.
// It is a workaround for accessibility issue when Popover is used inside Modal.
// For more info, see: https://github.com/adobe/react-spectrum/issues/4213
export function useNonModalPopoverInModalFix(isOpen, triggerRef, popoverRef) {
    useEffect(function () {
        if (isOpen && triggerRef.current && popoverRef.current) {
            return ariaHideOutside([triggerRef.current, popoverRef.current]);
        }
    }, [isOpen, triggerRef, popoverRef]);
}
//# sourceMappingURL=usenonmodalpopoverinmodalfix.js.map
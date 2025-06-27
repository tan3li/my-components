import { useEffect } from 'react';
export function useScrollToSelectedOption(_a) {
    var isLoading = _a.isLoading, isOpen = _a.isOpen, menuRef = _a.menuRef;
    useEffect(function () {
        if (isOpen && !isLoading) {
            var menuElement = menuRef.current;
            if (menuElement) {
                var selectedElement = menuElement.querySelector('.select-option[data-selected]');
                if (selectedElement instanceof HTMLElement) {
                    menuElement.scrollTop = selectedElement.offsetTop - menuElement.offsetHeight / 2;
                }
            }
        }
    }, [isOpen, isLoading]);
}
//# sourceMappingURL=usescrolltoselectedoption.js.map
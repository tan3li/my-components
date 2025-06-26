import {RefObject, useEffect} from 'react';

export function useScrollToSelectedOption<T extends HTMLElement>({
    isLoading,
    isOpen,
    menuRef
}: {
    isLoading?: boolean;
    isOpen?: boolean;
    menuRef: RefObject<T | null>;
}) {
    useEffect(() => {
        if (isOpen && !isLoading) {
            const menuElement = menuRef.current;

            if (menuElement) {
                const selectedElement = menuElement.querySelector('.select-option[data-selected]');

                if (selectedElement instanceof HTMLElement) {
                    menuElement.scrollTop = selectedElement.offsetTop - menuElement.offsetHeight / 2;
                }
            }
        }
    }, [isOpen, isLoading]);
}

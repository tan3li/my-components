import {CSSProperties, ReactNode, useCallback, useRef} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface ToastWrapperProps {
    children?: ReactNode;
    id: string;
    isActive?: boolean;
    onHeightUpdate: (id: string, height: number) => void;
    style?: CSSProperties;
}

export function ToastWrapper({children, id, isActive, onHeightUpdate, style}: ToastWrapperProps) {
    const observerRef = useRef<MutationObserver | null>(null);
    const ref = useCallback(
        (el: HTMLElement | null) => {
            if (el) {
                const updateHeight = () => {
                    const height = el.getBoundingClientRect().height;

                    onHeightUpdate(id, height);
                };

                updateHeight();

                observerRef.current = new MutationObserver(updateHeight);
                observerRef.current.observe(el, {
                    subtree: true,
                    childList: true,
                    characterData: true
                });
            } else if (observerRef.current) {
                observerRef.current.disconnect();
            }
        },
        [id, onHeightUpdate]
    );

    return (
        <div
            className={classNames('toast-wrapper', {
                'toast-wrapper--active': isActive
            })}
            ref={ref}
            style={style}>
            {children}
        </div>
    );
}

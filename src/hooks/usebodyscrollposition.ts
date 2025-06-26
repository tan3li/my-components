import {UIEvent, useCallback, useRef, useState} from 'react';
import {throttle} from '../utils/debounce.js';

export const enum BodyScrollPosition {
    Top = 'top',
    Middle = 'middle',
    Bottom = 'bottom'
}

export function useBodyScrollPosition() {
    const [bodyScrollPosition, setBodyScrollPosition] = useState<BodyScrollPosition | null>(null);

    const detectAndSetBodyScrollPosition = useCallback((bodyElement: HTMLDivElement) => {
        const {scrollTop, scrollHeight, clientHeight} = bodyElement;
        let position: BodyScrollPosition | null = null;

        if (scrollHeight > clientHeight) {
            if (scrollTop === 0) {
                position = BodyScrollPosition.Top;
            } else if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
                position = BodyScrollPosition.Bottom;
            } else {
                position = BodyScrollPosition.Middle;
            }
        }

        setBodyScrollPosition(position);
    }, []);

    const onScroll = useCallback(
        throttle((e: UIEvent<HTMLDivElement>) => {
            detectAndSetBodyScrollPosition(e.target as HTMLDivElement);
        }, 100),
        []
    );

    const resizeObserver = useRef<ResizeObserver | null>(null);

    const onBodyRef = useCallback((bodyElement: HTMLDivElement | null) => {
        if (bodyElement) {
            resizeObserver.current = new ResizeObserver(() => {
                detectAndSetBodyScrollPosition(bodyElement);
            });
            resizeObserver.current.observe(bodyElement);
        }

        return () => {
            resizeObserver.current?.disconnect();
        };
    }, []);

    return {
        bodyScrollPosition,
        onBodyRef,
        onScroll
    };
}

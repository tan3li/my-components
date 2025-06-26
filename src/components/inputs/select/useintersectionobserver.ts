import {useCallback, useRef} from 'react';
import {isEmptyArray} from '../../../utils/objecthelper.js';
import {safeCall} from '../../../utils/functionhelper.js';

export function useIntersectionObserver(callback?: (entry: IntersectionObserverEntry) => void) {
    const observer = useRef<IntersectionObserver | null>(null);
    const onVisible = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            if (!isEmptyArray(entries) && entries[0].isIntersecting) {
                safeCall(callback, entries[0]);
            }
        },
        [callback]
    );

    return useCallback(
        (element: HTMLDivElement) => {
            if (element) {
                observer.current = new IntersectionObserver(onVisible);
                observer.current.observe(element);
            } else {
                observer.current?.disconnect();
            }

            return () => {
                observer.current?.disconnect();
            };
        },
        [onVisible]
    );
}

import {RefObject, useCallback, useState} from 'react';
import {Orientation} from '../constants/index.js';
import {useResizeObserver} from '@react-aria/utils';

export function useIsTextTruncated({
    onTruncatedChange,
    overflowDirection = Orientation.horizontal,
    ref
}: {
    onTruncatedChange?: (isTruncated: boolean) => void;
    overflowDirection?: Orientation;
    ref: RefObject<HTMLElement | null>;
}) {
    const [isTruncated, setIsTruncated] = useState(false);

    const onResize = useCallback(() => {
        const element = ref.current;

        if (element) {
            const newIsTruncated =
                overflowDirection === Orientation.vertical ?
                    element.offsetHeight < element.scrollHeight
                :   element.offsetWidth < element.scrollWidth;

            setIsTruncated(newIsTruncated);
            onTruncatedChange?.(newIsTruncated);
        }
    }, [onTruncatedChange, ref, overflowDirection]);

    useResizeObserver({ref, onResize});

    return isTruncated;
}

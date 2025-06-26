import {RefObject, TransitionEventHandler, useEffect, useRef} from 'react';

export function useAutoHeightAnimation({isExpanded, ref}: {isExpanded: boolean; ref: RefObject<HTMLElement | null>}) {
    const isFirstRenderRef = useRef(true);
    const isLoadedRef = useRef(isExpanded);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const isFirstRender = isFirstRenderRef.current;

        // @ts-expect-error TS2322
        element.hidden = isFirstRender && !isExpanded ? 'until-found' : false;
        element.style.overflow = isFirstRender ? 'visible' : 'hidden';
        element.style.height = isFirstRender && isExpanded ? 'auto' : `${element.scrollHeight}px`;

        isFirstRenderRef.current = false;

        if (isExpanded) {
            isLoadedRef.current = true;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            element.offsetHeight; // force browser re-paint
            element.style.height = '0px';
        }
    }, [isExpanded]);

    const onTransitionEnd: TransitionEventHandler<HTMLElement> = (event) => {
        const target = event.target as HTMLElement;

        if (isExpanded) {
            target.style.height = 'auto';
        } else {
            // @ts-expect-error TS2322
            target.hidden = 'until-found';
        }

        target.style.overflow = 'visible';
    };

    return {
        isLoaded: isLoadedRef.current,
        props: {
            onTransitionEnd,
            style: {
                transition: 'height 0.2s ease-out'
            }
        }
    };
}

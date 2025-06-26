import {useEffect, useRef} from 'react';

export function useAnimationFrame(nextAnimationFrameHandler: (time: number) => void, shouldAnimate = true) {
    const frame = useRef(0);

    const animate = (time: number) => {
        nextAnimationFrameHandler(time);
        frame.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (shouldAnimate) {
            frame.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [shouldAnimate]);
}

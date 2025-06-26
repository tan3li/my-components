import {ProgressBar} from 'react-aria-components';
import {useTranslateProject} from '../../../hooks/translations/usetranslateproject.js';
import {useAnimationFrame} from '../../../hooks/useanimationframe.js';
import {useEffect, useRef, useState} from 'react';

export interface ToastProgressBarProps {
    isPaused?: boolean;
    timeout: number;
}

export function ToastProgressBar({isPaused, timeout}: ToastProgressBarProps) {
    const translateProject = useTranslateProject();
    const [remainingTimeout, setRemainingTimeout] = useState(timeout);
    const fillRef = useRef<HTMLDivElement>(null);
    const prevTimeRef = useRef<number | null>(null);

    useAnimationFrame(
        (time: number) => {
            if (prevTimeRef.current !== null) {
                const deltaTime = time - prevTimeRef.current;

                setRemainingTimeout((prevRemainingTimeout) => prevRemainingTimeout - deltaTime);
            }

            prevTimeRef.current = time;
        },
        remainingTimeout > 0 && !isPaused
    );

    useEffect(() => {
        const fill = fillRef.current;

        if (fill) {
            // Need to set width directly to DOM node because React style prop makes the animation lag when moving mouse.
            fill.style.width = `${(remainingTimeout / timeout) * 100}%`;
        }
    }, [remainingTimeout, timeout]);

    useEffect(() => {
        if (isPaused) {
            prevTimeRef.current = null;
        }
    }, [isPaused]);

    return (
        <ProgressBar
            aria-label={translateProject('progress')}
            className="toast-progress-bar"
            value={(remainingTimeout / timeout) * 100}>
            <div className="toast-progress-bar__bar">
                <div className="toast-progress-bar__fill" ref={fillRef} />
            </div>
        </ProgressBar>
    );
}

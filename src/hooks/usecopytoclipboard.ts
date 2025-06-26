import {useRef, useState} from 'react';

export function useCopyToClipboard({text, tooltipDuration}: {text: string; tooltipDuration: number}) {
    const timeoutId = useRef<number | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const onPress = async () => {
        if (timeoutId.current) {
            window.clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }

        try {
            await navigator.clipboard.writeText(text);
            setShowTooltip(true);
            timeoutId.current = window.setTimeout(() => {
                setShowTooltip(false);
            }, tooltipDuration);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    };

    return {
        onPress,
        showTooltip
    };
}

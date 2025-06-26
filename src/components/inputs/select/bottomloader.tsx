import {useIntersectionObserver} from './useintersectionobserver.js';

interface BottomLoaderProps {
    onVisible: (entry: IntersectionObserverEntry) => void;
}

export function BottomLoader({onVisible}: BottomLoaderProps) {
    return <div className="bottom-loader" ref={useIntersectionObserver(onVisible)} />;
}

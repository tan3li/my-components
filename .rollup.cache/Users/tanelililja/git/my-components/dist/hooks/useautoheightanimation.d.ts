import { RefObject, TransitionEventHandler } from 'react';
export declare function useAutoHeightAnimation({ isExpanded, ref }: {
    isExpanded: boolean;
    ref: RefObject<HTMLElement | null>;
}): {
    isLoaded: boolean;
    props: {
        onTransitionEnd: TransitionEventHandler<HTMLElement>;
        style: {
            transition: string;
        };
    };
};
//# sourceMappingURL=useautoheightanimation.d.ts.map
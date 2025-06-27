import { UIEvent } from 'react';
export declare const enum BodyScrollPosition {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom"
}
export declare function useBodyScrollPosition(): {
    bodyScrollPosition: BodyScrollPosition | null;
    onBodyRef: (bodyElement: HTMLDivElement | null) => () => void;
    onScroll: {
        (e: UIEvent<HTMLDivElement, globalThis.UIEvent>): void;
        cancel: () => void;
    };
};
//# sourceMappingURL=usebodyscrollposition.d.ts.map
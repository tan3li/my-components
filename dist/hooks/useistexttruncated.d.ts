import { RefObject } from 'react';
import { Orientation } from '../constants/index.js';
export declare function useIsTextTruncated({ onTruncatedChange, overflowDirection, ref }: {
    onTruncatedChange?: (isTruncated: boolean) => void;
    overflowDirection?: Orientation;
    ref: RefObject<HTMLElement | null>;
}): boolean;
//# sourceMappingURL=useistexttruncated.d.ts.map
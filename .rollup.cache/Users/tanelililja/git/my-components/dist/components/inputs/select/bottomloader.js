import { jsx as _jsx } from "react/jsx-runtime";
import { useIntersectionObserver } from './useintersectionobserver.js';
export function BottomLoader(_a) {
    var onVisible = _a.onVisible;
    return _jsx("div", { className: "bottom-loader", ref: useIntersectionObserver(onVisible) });
}
//# sourceMappingURL=bottomloader.js.map
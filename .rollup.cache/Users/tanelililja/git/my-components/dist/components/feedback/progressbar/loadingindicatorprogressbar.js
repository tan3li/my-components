import { jsx as _jsx } from "react/jsx-runtime";
import { ProgressBar } from './progressbar.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
export function LoadingIndicatorProgressBar() {
    var translateCommon = useTranslateCommon();
    return (_jsx(ProgressBar, { "aria-label": translateCommon('loading'), className: "loading-indicator-progress-bar", isIndeterminate: true }));
}
//# sourceMappingURL=loadingindicatorprogressbar.js.map
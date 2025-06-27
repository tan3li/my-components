import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Spinner, SpinnerVariant } from '../../feedback/spinner/spinner.js';
import { Size } from '../../../constants/size.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Position } from '../../../constants/index.js';
export function LoadingItem(_a) {
    var size = _a.size;
    var translateCommon = useTranslateCommon();
    return (_jsx("div", __assign({ className: "loading-item", role: "presentation" }, { children: _jsx(Spinner, { label: "".concat(translateCommon('loading'), "..."), labelPosition: Position.Right, labelSize: size === Size.xs ? Size.md : Size.lg, size: Size.sm, variant: SpinnerVariant.Neutral }) })));
}
//# sourceMappingURL=loadingitem.js.map
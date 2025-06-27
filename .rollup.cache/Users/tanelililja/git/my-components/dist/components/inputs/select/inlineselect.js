import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useImperativeHandle, useRef, useState } from 'react';
import { useDataState } from '../../../hooks/usedatastate.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { Select } from './select.js';
import { Position, Size } from '../../../constants/index.js';
import { iconNames } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { chain } from 'react-aria';
export function InlineSelect(_a) {
    var _b = _a.size, size = _b === void 0 ? Size.xs : _b, props = __rest(_a, ["size"]);
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useDataState(props.dataState), hasError = _d.hasError, errorMessage = _d.errorMessage;
    var ref = useRef(null);
    var translateCommon = useTranslateCommon();
    useImperativeHandle(props.ref, function () { return ref.current; }, []);
    return (_jsxs(TooltipTrigger, __assign({ isOpen: hasError && isFocused }, { children: [_jsx(Select, __assign({}, props, { className: classNames(props.className, 'inline-select'), isPlain: true, onFocusChange: chain(setIsFocused, props.onFocusChange), ref: ref, showSearchIcon: false, size: size })), _jsx(Tooltip, __assign({ className: "inline-select__error-tooltip", headerIconName: iconNames.EmergencyHomeFilled, headerText: translateCommon('error'), offset: 2, position: Position.Left, triggerRef: ref, type: TooltipType.Rich }, { children: errorMessage }))] })));
}
//# sourceMappingURL=inlineselect.js.map
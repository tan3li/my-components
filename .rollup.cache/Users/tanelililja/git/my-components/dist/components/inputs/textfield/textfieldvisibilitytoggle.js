import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../../media/icon/icon.js';
import { iconNames } from '../../media/icon/icons.js';
import { Label } from '../../text/label/label.js';
import { Size } from '../../../constants/size.js';
import { useImperativeHandle, useRef } from 'react';
import { useButton } from 'react-aria';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
export function TextFieldVisibilityToggle(_a) {
    var isVisible = _a.isVisible, onPress = _a.onPress, outerRef = _a.ref;
    var translateCommon = useTranslateCommon();
    var ref = useRef(null);
    var buttonProps = useButton({
        onPress: onPress,
        elementType: 'div'
    }, ref).buttonProps;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (_jsxs("div", __assign({}, buttonProps, { className: "text-field__action", ref: ref }, { children: [_jsx(Icon, { name: isVisible ? iconNames.VisibilityOff : iconNames.Visibility }), _jsx(Label, __assign({ size: Size.lg }, { children: translateCommon(isVisible ? 'hide' : 'show') }))] })));
}
//# sourceMappingURL=textfieldvisibilitytoggle.js.map
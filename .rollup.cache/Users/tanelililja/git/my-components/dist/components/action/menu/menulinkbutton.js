import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, ButtonStyle } from '../button/button.js';
import { ButtonVariant } from '../constants/buttonvariant.js';
import { useContext } from 'react';
import { RootMenuTriggerStateContext } from 'react-aria-components';
import { safeCall } from '../../../utils/functionhelper.js';
export function MenuLinkButton(_a) {
    var children = _a.children, onPress = _a.onPress, role = _a.role;
    var state = useContext(RootMenuTriggerStateContext);
    return (_jsx(Button, __assign({ className: "menu-link-button", onPress: function () {
            safeCall(onPress);
            state === null || state === void 0 ? void 0 : state.close();
        }, role: role, style: ButtonStyle.Link, variant: ButtonVariant.Neutral }, { children: children })));
}
//# sourceMappingURL=menulinkbutton.js.map
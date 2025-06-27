import { isMac } from '@react-aria/utils';
export var KeyboardEventKey;
(function (KeyboardEventKey) {
    KeyboardEventKey["ArrowDown"] = "ArrowDown";
    KeyboardEventKey["ArrowLeft"] = "ArrowLeft";
    KeyboardEventKey["ArrowRight"] = "ArrowRight";
    KeyboardEventKey["ArrowUp"] = "ArrowUp";
    KeyboardEventKey["Enter"] = "Enter";
    KeyboardEventKey["Escape"] = "Escape";
    KeyboardEventKey["l"] = "l";
    KeyboardEventKey["Space"] = " ";
    KeyboardEventKey["Tab"] = "Tab";
})(KeyboardEventKey || (KeyboardEventKey = {}));
export var CTRL_MODIFIER_KEY = isMac() ? 'metaKey' : 'ctrlKey';
//# sourceMappingURL=keyboardeventkey.js.map
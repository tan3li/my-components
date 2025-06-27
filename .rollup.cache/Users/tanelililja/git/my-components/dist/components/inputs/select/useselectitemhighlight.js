import { useCombobox, useSelect } from 'downshift';
import { InteractionSource } from '../../../constants/interactionsource.js';
import { useState } from 'react';
var _a = useCombobox.stateChangeTypes, InputKeyDownArrowDown = _a.InputKeyDownArrowDown, InputKeyDownArrowUp = _a.InputKeyDownArrowUp, InputKeyDownPageUp = _a.InputKeyDownPageUp, InputKeyDownPageDown = _a.InputKeyDownPageDown, InputKeyDownEnd = _a.InputKeyDownEnd, InputKeyDownHome = _a.InputKeyDownHome;
var _b = useSelect.stateChangeTypes, ToggleButtonKeyDownArrowDown = _b.ToggleButtonKeyDownArrowDown, ToggleButtonKeyDownArrowUp = _b.ToggleButtonKeyDownArrowUp, ToggleButtonKeyDownPageUp = _b.ToggleButtonKeyDownPageUp, ToggleButtonKeyDownPageDown = _b.ToggleButtonKeyDownPageDown, ToggleButtonKeyDownHome = _b.ToggleButtonKeyDownHome, ToggleButtonKeyDownEnd = _b.ToggleButtonKeyDownEnd;
var keyboardNavigationChangeTypes = [
    InputKeyDownArrowDown,
    InputKeyDownArrowUp,
    InputKeyDownPageUp,
    InputKeyDownPageDown,
    InputKeyDownEnd,
    InputKeyDownHome,
    ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownPageUp,
    ToggleButtonKeyDownPageDown,
    ToggleButtonKeyDownHome,
    ToggleButtonKeyDownEnd
];
export function useSelectItemHighlight() {
    var _a = useState(-1), highlightedIndex = _a[0], setHighlightedIndex = _a[1];
    var _b = useState(InteractionSource.Mouse), highlightSource = _b[0], setHighlightSource = _b[1];
    var onHighlightedIndexChange = function (changes) {
        var type = changes.type, newHighlightedIndex = changes.highlightedIndex;
        setHighlightedIndex(newHighlightedIndex);
        setHighlightSource(newHighlightedIndex > -1 && keyboardNavigationChangeTypes.includes(type) ?
            InteractionSource.Keyboard
            : InteractionSource.Mouse);
    };
    return {
        onHighlightedIndexChange: onHighlightedIndexChange,
        highlightedIndex: highlightedIndex,
        highlightSource: highlightSource,
        setHighlightSource: setHighlightSource,
        setHighlightedIndex: setHighlightedIndex
    };
}
//# sourceMappingURL=useselectitemhighlight.js.map
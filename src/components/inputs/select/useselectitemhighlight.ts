import {
    useCombobox,
    UseComboboxHighlightedIndexChange,
    UseComboboxStateChangeTypes,
    useSelect,
    UseSelectHighlightedIndexChange,
    UseSelectStateChangeTypes
} from 'downshift';
import {SelectItemBase} from './selectitem.js';
import {InteractionSource} from '../../../constants/interactionsource.js';
import {useState} from 'react';

const {
    InputKeyDownArrowDown,
    InputKeyDownArrowUp,
    InputKeyDownPageUp,
    InputKeyDownPageDown,
    InputKeyDownEnd,
    InputKeyDownHome
} = useCombobox.stateChangeTypes;
const {
    ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownPageUp,
    ToggleButtonKeyDownPageDown,
    ToggleButtonKeyDownHome,
    ToggleButtonKeyDownEnd
} = useSelect.stateChangeTypes;

const keyboardNavigationChangeTypes: Array<UseComboboxStateChangeTypes | UseSelectStateChangeTypes> = [
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

export function useSelectItemHighlight<TItem extends SelectItemBase<TItem>>() {
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const [highlightSource, setHighlightSource] = useState<InteractionSource>(InteractionSource.Mouse);

    const onHighlightedIndexChange = (
        changes: UseComboboxHighlightedIndexChange<TItem> | UseSelectHighlightedIndexChange<TItem>
    ) => {
        const {type, highlightedIndex: newHighlightedIndex} = changes;

        setHighlightedIndex(newHighlightedIndex);
        setHighlightSource(
            newHighlightedIndex > -1 && keyboardNavigationChangeTypes.includes(type) ?
                InteractionSource.Keyboard
            :   InteractionSource.Mouse
        );
    };

    return {
        onHighlightedIndexChange,
        highlightedIndex,
        highlightSource,
        setHighlightSource,
        setHighlightedIndex
    };
}

import {isMac} from '@react-aria/utils';

export const enum KeyboardEventKey {
    ArrowDown = 'ArrowDown',
    ArrowLeft = 'ArrowLeft',
    ArrowRight = 'ArrowRight',
    ArrowUp = 'ArrowUp',
    Enter = 'Enter',
    Escape = 'Escape',
    l = 'l',
    Space = ' ',
    Tab = 'Tab'
}

export const CTRL_MODIFIER_KEY = isMac() ? 'metaKey' : 'ctrlKey';

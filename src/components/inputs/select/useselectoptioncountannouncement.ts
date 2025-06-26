import {useEffect} from 'react';
import {announce} from '@react-aria/live-announcer';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';

export function useSelectOptionCountAnnouncement({isOpen, itemCount}: {isOpen: boolean; itemCount: number}) {
    const translateCommon = useTranslateCommon();

    useEffect(() => {
        if (isOpen) {
            announce(translateCommon('optionsAvailable', {count: itemCount}));
        }
    }, [isOpen, itemCount]);
}

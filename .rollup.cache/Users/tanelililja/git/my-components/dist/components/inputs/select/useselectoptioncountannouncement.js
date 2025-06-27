import { useEffect } from 'react';
import { announce } from '@react-aria/live-announcer';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
export function useSelectOptionCountAnnouncement(_a) {
    var isOpen = _a.isOpen, itemCount = _a.itemCount;
    var translateCommon = useTranslateCommon();
    useEffect(function () {
        if (isOpen) {
            announce(translateCommon('optionsAvailable', { count: itemCount }));
        }
    }, [isOpen, itemCount]);
}
//# sourceMappingURL=useselectoptioncountannouncement.js.map
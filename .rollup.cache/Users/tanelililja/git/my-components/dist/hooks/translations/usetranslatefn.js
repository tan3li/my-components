import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
export function useTranslateFn(prefix) {
    var t = useTranslation().t;
    return useCallback(function (phrase, keys) { return t("".concat(prefix, ".").concat(phrase), keys); }, [t, prefix]);
}
//# sourceMappingURL=usetranslatefn.js.map
import {ProgressBar} from './progressbar.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';

export function LoadingIndicatorProgressBar() {
    const translateCommon = useTranslateCommon();

    return (
        <ProgressBar
            aria-label={translateCommon('loading')}
            className="loading-indicator-progress-bar"
            isIndeterminate={true}
        />
    );
}

import {Spinner, SpinnerVariant} from '../../feedback/spinner/spinner.js';
import {Size} from '../../../constants/size.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Position} from '../../../constants/index.js';

export interface LoadingItemProps {
    size?: Size.xs | Size.sm | Size.md;
}

export function LoadingItem({size}: LoadingItemProps) {
    const translateCommon = useTranslateCommon();

    return (
        <div className="loading-item" role="presentation">
            <Spinner
                label={`${translateCommon('loading')}...`}
                labelPosition={Position.Right}
                labelSize={size === Size.xs ? Size.md : Size.lg}
                size={Size.sm}
                variant={SpinnerVariant.Neutral}
            />
        </div>
    );
}

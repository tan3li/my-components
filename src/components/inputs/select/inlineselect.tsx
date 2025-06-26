import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from './selectitem.js';
import {SelectProps} from './selectprops.js';
import {useImperativeHandle, useRef, useState} from 'react';
import {useDataState} from '../../../hooks/usedatastate.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {Select} from './select.js';
import {Position, Size} from '../../../constants/index.js';
import {iconNames} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';
import {chain} from 'react-aria';

export interface InlineSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends Omit<SelectProps<P, TItem>, 'helpText' | 'showHelpTextIcon' | 'showSearchIcon'> {}

export function InlineSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    size = Size.xs,
    ...props
}: InlineSelectProps<P, TItem>) {
    const [isFocused, setIsFocused] = useState(false);
    const {hasError, errorMessage} = useDataState(props.dataState);
    const ref = useRef<HTMLDivElement>(null);
    const translateCommon = useTranslateCommon();

    useImperativeHandle(props.ref, () => ref.current!, []);

    return (
        <TooltipTrigger isOpen={hasError && isFocused}>
            <Select
                {...props}
                className={classNames(props.className, 'inline-select')}
                isPlain={true}
                onFocusChange={chain(setIsFocused, props.onFocusChange)}
                ref={ref}
                showSearchIcon={false}
                size={size}
            />
            <Tooltip
                className="inline-select__error-tooltip"
                headerIconName={iconNames.EmergencyHomeFilled}
                headerText={translateCommon('error')}
                offset={2}
                position={Position.Left}
                triggerRef={ref}
                type={TooltipType.Rich}>
                {errorMessage}
            </Tooltip>
        </TooltipTrigger>
    );
}

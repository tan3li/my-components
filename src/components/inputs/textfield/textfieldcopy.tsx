import {Icon} from '../../media/icon/icon.js';
import {iconNames} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {RefAttributes, RefObject} from 'react';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {TooltipTrigger} from '../../feedback/tooltip/tooltiptrigger.js';
import {Tooltip, TooltipType} from '../../feedback/tooltip/tooltip.js';
import {Position} from '../../../constants/position.js';
import {TriggerElement} from '../../action/triggerelement/triggerelement.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';
import {useCopyToClipboard} from '../../../hooks/usecopytoclipboard.js';

export interface TextFieldCopyProps extends RefAttributes<HTMLDivElement> {
    inputRef?: RefObject<HTMLInputElement | null>;
    prefix?: string;
    suffix?: string;
}

const TOOLTIP_TIMEOUT_IN_MS = 3000;

export function TextFieldCopy({inputRef, prefix, ref, suffix}: TextFieldCopyProps) {
    const translateCommon = useTranslateCommon();
    const {onPress, showTooltip} = useCopyToClipboard({
        text: `${prefix ?? ''}${inputRef?.current?.value ?? ''}${suffix ?? ''}`,
        tooltipDuration: TOOLTIP_TIMEOUT_IN_MS
    });

    return (
        <TooltipTrigger isOpen={showTooltip}>
            <TriggerElement
                className="text-field__action"
                elementType={HTMLElementType.Div}
                onPress={onPress}
                ref={ref}>
                <Icon name={iconNames.CopyAll} />
                <Label size={Size.lg}>{translateCommon('copy')}</Label>
            </TriggerElement>
            <Tooltip position={Position.Bottom} showArrow={false} type={TooltipType.Plain}>
                {translateCommon('copied')}
            </Tooltip>
        </TooltipTrigger>
    );
}

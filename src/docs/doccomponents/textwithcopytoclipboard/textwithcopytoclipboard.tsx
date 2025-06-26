import {
    ButtonStyle,
    ButtonVariant,
    IconButton,
    iconNames,
    Tooltip,
    TooltipTrigger,
    TooltipType
} from '../../../components/index.js';
import {Position, Size} from '../../../constants/index.js';
import {ReactNode} from 'react';
import {useCopyToClipboard} from '../../../hooks/usecopytoclipboard.js';

interface TextWithCopyToClipboardProps {
    children: ReactNode;
    text: string;
}

export function TextWithCopyToClipboard({children, text}: TextWithCopyToClipboardProps) {
    const {onPress, showTooltip} = useCopyToClipboard({text, tooltipDuration: 3000});

    return (
        <span style={{display: 'flex', alignItems: 'center', gap: 'var(--space-xxs)'}}>
            {children}
            <TooltipTrigger isOpen={showTooltip}>
                <IconButton
                    aria-label="Copy"
                    iconName={iconNames.CopyAll}
                    onPress={onPress}
                    size={Size.sm}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
                <Tooltip position={Position.Bottom} showArrow={false} type={TooltipType.Plain}>
                    Copied
                </Tooltip>
            </TooltipTrigger>
        </span>
    );
}

import './icongallery.scss';
import {Icon, IconName, IconSize, Label, Tooltip, TooltipTrigger, TooltipType} from '../../../components/index.js';
import {Position, Size} from '../../../constants/index.js';
import {Button} from 'react-aria-components';
import {useCopyToClipboard} from '../../../hooks/usecopytoclipboard.js';

interface IconGalleryButtonProps {
    iconName: IconName;
}

export function IconGalleryButton({iconName}: IconGalleryButtonProps) {
    const {onPress, showTooltip} = useCopyToClipboard({text: iconName, tooltipDuration: 3000});

    return (
        <TooltipTrigger isOpen={showTooltip}>
            <Button className="icon-gallery__button" onPress={onPress}>
                <Icon name={iconName} size={IconSize.LG} />
                <Label size={Size.sm}>{iconName}</Label>
            </Button>
            <Tooltip offset={-40} position={Position.Bottom} showArrow={false} type={TooltipType.Plain}>
                Copied
            </Tooltip>
        </TooltipTrigger>
    );
}

interface IconGalleryProps {
    iconNames: IconName[];
}

export function IconGallery({iconNames}: IconGalleryProps) {
    return (
        <div className="icon-gallery sb-unstyled">
            {iconNames.map((iconName) => (
                <IconGalleryButton iconName={iconName} key={iconName} />
            ))}
        </div>
    );
}

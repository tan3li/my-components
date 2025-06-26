import {
    OverlayArrow as ReactAriaOverlayArrow,
    Tooltip as ReactAriaTooltip,
    TooltipProps as ReactAriaTooltipProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Size} from '../../../constants/size.js';
import {ElementType, ReactNode, RefAttributes} from 'react';
import {IconName} from '../../media/icon/icons.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {Label} from '../../text/label/label.js';
import {Position} from '../../../constants/position.js';
import {HTMLElementType} from '../../../constants/index.js';

const DEFAULT_MAX_WIDTH = 160;

export const enum TooltipType {
    Rich = 'rich',
    Plain = 'plain'
}

export interface TooltipProps extends ReactAriaTooltipProps, RefAttributes<HTMLDivElement> {
    /**
     * Content of the tooltip.
     */
    children: ReactNode | string;
    /**
     * Content wrapper element type.
     */
    elementType?: ElementType;
    /**
     * Header icon of the tooltip. Only shown for the rich tooltip type.
     */
    headerIconName?: IconName;
    /**
     * Header text of the tooltip. Only shown for the rich tooltip type.
     */
    headerText?: string;
    /**
     * Max width of the tooltip (px).
     */
    maxWidth?: number;
    /**
     * Position of the tooltip.
     */
    position?: Position;
    /**
     * Whether to show the arrow of the tooltip.
     */
    showArrow?: boolean;
    /**
     * Type of the tooltip.
     */
    type: TooltipType;
}

export function Tooltip({
    children,
    className,
    elementType = HTMLElementType.Div,
    headerIconName,
    headerText,
    maxWidth = DEFAULT_MAX_WIDTH,
    position = Position.Top,
    showArrow = true,
    type,
    ...props
}: TooltipProps) {
    return (
        <ReactAriaTooltip
            {...props}
            className={classNames(`tooltip tooltip--${type}`, className)}
            placement={position}
            style={{maxWidth}}>
            {type === 'rich' && (
                <div className="tooltip__header">
                    <Label className="tooltip__header-text" size={Size.sm}>
                        <strong>{headerText}</strong>
                    </Label>
                    {headerIconName && (
                        <Icon className="tooltip__header-icon" name={headerIconName} size={IconSize.SM} />
                    )}
                </div>
            )}
            {showArrow && (
                <ReactAriaOverlayArrow>
                    <svg className="tooltip__arrow" height="12" viewBox="0 0 12 12" width="12">
                        <path d="M6 6.16614L7.15493e-08 0L12 0L6 6.16614Z" />
                    </svg>
                </ReactAriaOverlayArrow>
            )}
            <BodyText elementType={elementType} size={Size.xs}>
                {children}
            </BodyText>
        </ReactAriaTooltip>
    );
}

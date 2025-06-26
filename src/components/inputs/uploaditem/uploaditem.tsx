import {Icon, IconName, IconSize} from '../../media/index.js';
import {ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {BodyText, HelpText, HelpTextVariant} from '../../text/index.js';
import {HTMLElementType, Position, Size} from '../../../constants/index.js';
import {TDataState} from '../../../constants/datastate.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {Divider} from '../../datadisplay/index.js';
import {isFunction} from '../../../utils/functionhelper.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {useTranslateProject} from '../../../hooks/translations/usetranslateproject.js';
import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {ProgressBar, Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {PressEvent} from 'react-aria-components';

export const enum UploadItemStyle {
    Card = 'card',
    Plain = 'plain'
}

export interface UploadItemProps extends RefAttributes<HTMLDivElement> {
    /**
     * Element or renderer for displaying actions.
     */
    actions?: ReactNode | ((props: UploadItemProps) => ReactNode);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Description text.
     */
    description: ReactNode;
    /**
     * Error text.
     */
    errorMessage?: string;
    /**
     * Descriptive icon.
     */
    iconName: IconName;
    /**
     * Whether item is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether item is invalid.
     */
    isInvalid?: boolean;
    /**
     * Whether item is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Name of the item.
     */
    name: ReactNode;
    /**
     * Press handler for the name.
     */
    onNamePress?: (e: PressEvent) => void;
    /**
     * Item display style.
     */
    style: UploadItemStyle;
    /**
     * Tooltip text for the name.
     */
    tooltipText?: string;
    /**
     * Value between 0-100 to display progress bar.
     */
    uploadProgress?: number;
}

export function UploadItem(props: UploadItemProps) {
    const {
        actions,
        className,
        dataState,
        description,
        iconName,
        isDisabled,
        isInvalid,
        onNamePress,
        name,
        ref,
        style,
        tooltipText,
        uploadProgress
    } = props;
    const {hasError, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const errorMsg = errorMessage || props.errorMessage;
    const showErrorMessage = hasError && !!errorMsg;
    const translateProject = useTranslateProject();

    return (
        <div
            className={classNames(`upload-item upload-item--${style}`, className, {
                'upload-item--invalid': hasError,
                'upload-item--disabled': isDisabled
            })}
            ref={ref}>
            <div className="upload-item__top">
                <Icon className="upload-item__icon" name={iconName} size={IconSize.LG} />
                <div className="upload-item__content">
                    <div className="upload-item__heading">
                        <div className="upload-item__texts">
                            <TooltipTrigger isDisabled={!tooltipText}>
                                <Button
                                    className="upload-item__name"
                                    isDisabled={isDisabled}
                                    onPress={onNamePress}
                                    size={Size.md}
                                    style={ButtonStyle.Link}
                                    variant={hasError ? ButtonVariant.Danger : ButtonVariant.Neutral}>
                                    {name}
                                </Button>
                                <Tooltip type={TooltipType.Plain}>{tooltipText}</Tooltip>
                            </TooltipTrigger>
                            <BodyText
                                className="upload-item__description"
                                elementType={HTMLElementType.Div}
                                size={Size.xs}>
                                {description}
                            </BodyText>
                        </div>
                        {isFunction(actions) ? actions(props) : actions}
                    </div>
                    {!isNullOrUndefined(uploadProgress) && (
                        <ProgressBar
                            aria-label={translateProject('progress')}
                            value={uploadProgress}
                            valueLabelPosition={Position.Right}
                        />
                    )}
                </div>
            </div>
            {showErrorMessage && (
                <>
                    <Divider size={Size.sm} />
                    <HelpText variant={HelpTextVariant.Danger}>{errorMsg}</HelpText>
                </>
            )}
        </div>
    );
}

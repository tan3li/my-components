import {DropZone, DropZoneProps, Text} from 'react-aria-components';
import {FileTrigger, FileTriggerProps} from './filetrigger.js';
import {classNames} from '../../../utils/classnames.js';
import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {HTMLElementType, Size} from '../../../constants/index.js';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {BodyText, HelpText, HelpTextProps, LABEL_SIZE_LG_CSS_CLASS} from '../../text/index.js';
import {DropEvent, DropOperation} from 'react-aria';
import {safeCall} from '../../../utils/functionhelper.js';
import {RefAttributes} from 'react';
import {SkeletonFileUploadArea} from '../../feedback/skeleton/skeletonfileuploadarea.js';

export interface FileUploadAreaProps
    extends Omit<DropZoneProps, 'getDropOperation' | 'onDrop'>,
        RefAttributes<HTMLDivElement> {
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: FileTriggerProps['acceptedFileTypes'];
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: FileTriggerProps['allowsMultiple'];
    /**
     * Description text.
     */
    descriptionText: string;
    /**
     * Descriptive icon.
     */
    helpTextProps?: HelpTextProps;
    /**
     * Descriptive icon.
     */
    iconName: IconName;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Main text
     */
    mainText: string;
    /**
     * Handler that is called when a valid drag is dropped on the drop target.
     */
    onDrop?: (files: File[]) => void;
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: File[]) => void;
}

export function FileUploadArea({
    acceptedFileTypes,
    allowsMultiple,
    className,
    descriptionText,
    helpTextProps,
    iconName,
    isSkeleton,
    mainText,
    onSelect,
    ref,
    ...props
}: FileUploadAreaProps) {
    const {isDisabled} = props;
    const translateCommon = useTranslateCommon();

    const onDrop = async (e: DropEvent) => {
        const items = e.items;
        const files: File[] = [];

        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];

            if (item.kind === 'file' && (!acceptedFileTypes || acceptedFileTypes.includes(item.type))) {
                files.push(await item.getFile());
            }
        }

        safeCall(props.onDrop, files);
    };

    if (isSkeleton) {
        return <SkeletonFileUploadArea />;
    }

    return (
        <div className="file-upload-area-wrapper" ref={ref}>
            <DropZone
                {...props}
                className={classNames('file-upload-area', className)}
                getDropOperation={(types) => {
                    let op: DropOperation = 'copy';

                    if (acceptedFileTypes) {
                        for (const fileType of acceptedFileTypes) {
                            if (types.has(fileType)) {
                                return op;
                            }
                        }

                        op = 'cancel';
                    }

                    return op;
                }}
                onDrop={(e) => {
                    onDrop(e);
                }}>
                <div className="file-upload-area__inner">
                    <Icon className="file-upload-area__icon" name={iconName} size={IconSize.XXL} />
                    <div className="file-upload-area__content">
                        <div className="file-upload-area__texts">
                            <Text
                                className={`${LABEL_SIZE_LG_CSS_CLASS} file-upload-area__main-text`}
                                elementType={HTMLElementType.Div}
                                slot="label">
                                <strong>{mainText}</strong>
                            </Text>
                            <BodyText
                                className="file-upload-area__description-text"
                                elementType={HTMLElementType.Div}
                                size={Size.sm}>
                                {descriptionText}
                            </BodyText>
                        </div>
                        <FileTrigger
                            acceptedFileTypes={acceptedFileTypes}
                            allowsMultiple={allowsMultiple}
                            onSelect={(files) => {
                                safeCall(onSelect, files ? Array.from(files) : []);
                            }}>
                            <Button
                                isDisabled={isDisabled}
                                size={Size.md}
                                startIconName={iconNames.Upload}
                                style={ButtonStyle.Outline}
                                variant={ButtonVariant.Neutral}>
                                {translateCommon('upload')}
                            </Button>
                        </FileTrigger>
                    </div>
                </div>
            </DropZone>
            {helpTextProps && (
                <HelpText
                    {...helpTextProps}
                    className={classNames('file-upload-area__help-text', helpTextProps.className)}
                />
            )}
        </div>
    );
}

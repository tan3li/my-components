import { DropZoneProps } from 'react-aria-components';
import { FileTriggerProps } from './filetrigger.js';
import { IconName } from '../../media/index.js';
import { HelpTextProps } from '../../text/index.js';
import { RefAttributes } from 'react';
export interface FileUploadAreaProps extends Omit<DropZoneProps, 'getDropOperation' | 'onDrop'>, RefAttributes<HTMLDivElement> {
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
export declare function FileUploadArea({ acceptedFileTypes, allowsMultiple, className, descriptionText, helpTextProps, iconName, isSkeleton, mainText, onSelect, ref, ...props }: FileUploadAreaProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=fileuploadarea.d.ts.map
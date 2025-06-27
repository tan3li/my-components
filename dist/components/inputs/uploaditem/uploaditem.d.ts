import { IconName } from '../../media/index.js';
import { ReactNode, RefAttributes } from 'react';
import { TDataState } from '../../../constants/datastate.js';
import { PressEvent } from 'react-aria-components';
export declare const enum UploadItemStyle {
    Card = "card",
    Plain = "plain"
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
export declare function UploadItem(props: UploadItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=uploaditem.d.ts.map
import {SelectItemBase} from './selectitem.js';
import {ReactNode, RefAttributes, RefObject} from 'react';
import {Size} from '../../../constants/index.js';

export interface SelectOptionContentProps<TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Element to display at start of content body, e.g. icon.
     */
    bodyPrefix?: ReactNode;
    /**
     * Element to display at the end of content body, e.g. number, text, badge.
     */
    bodySuffix?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Description text to display under label.
     */
    description?: string;
    /**
     * Description ref.
     */
    descriptionRef?: RefObject<HTMLElement | null>;
    /**
     * Whether item is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether item is expanded. Affects the expander icon and aria-label.
     */
    isExpanded?: boolean;
    /**
     * Whether item is loading. Will replace expander with spinner.
     */
    isLoading?: boolean;
    /**
     * Whether item is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Select item data.
     */
    item: TItem;
    /**
     * By default, item text is used for label content internally. Can be used to replace that with custom label element.
     */
    label?: ReactNode;
    /**
     * Label ref.
     */
    labelRef?: RefObject<HTMLElement | null>;
    /**
     * Element to display at end of label text line.
     */
    labelSuffix?: ReactNode;
    /**
     * Hierarchical level of item. Affects the indentation. Should be provided as 0 if no indentation is wanted.
     */
    level: number;
    /**
     * Handler to call when expander is clicked. Expander is rendered when this prop is set.
     * Visibility of the expander depends on item children being defined.
     */
    onToggleItem?: (item: TItem) => void;
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
    /**
     * Element to display at the end of the element, e.g. icon.
     */
    suffix?: ReactNode;
}

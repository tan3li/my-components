import { RefAttributes } from 'react';
import { IconName } from '../../media';
interface ISegmentedControlItemBase<TSegmentId extends string = string> {
    id: TSegmentId;
    isDisabled?: boolean;
    startIconName?: IconName;
}
interface ISegmentedControlItemLabel<TSegmentId extends string = string> extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel?: string;
    label: string;
}
interface ISegmentedControlItemAriaLabel<TSegmentId extends string = string> extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel: string;
    label?: string;
}
export type ISegmentedControlItem<TSegmentId extends string = string> = ISegmentedControlItemLabel<TSegmentId> | ISegmentedControlItemAriaLabel<TSegmentId>;
export interface SegmentedControlProps<TSegmentId extends string = string> extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class for the element
     */
    className?: string;
    /**
     * Segmented control items.
     */
    items: Array<ISegmentedControlItem<TSegmentId>>;
    /**
     * Selection change callback.
     */
    onSelectionChange?: (id: TSegmentId) => void;
    /**
     * Currently selected item key/id.
     */
    selectedKey?: TSegmentId;
}
export declare function SegmentedControl<TSegmentId extends string = string>({ className, items, onSelectionChange, ref, ...props }: SegmentedControlProps<TSegmentId>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=segmentedcontrol.d.ts.map
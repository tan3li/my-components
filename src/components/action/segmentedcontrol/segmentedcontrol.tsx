import {RefAttributes, useEffect, useState} from 'react';
import {classNames} from '../../../utils/classnames';
import {SegmentedControlItem} from './segmentedcontrolitem';
import {safeCall} from '../../../utils/functionhelper';
import {IconName} from '../../media';

interface ISegmentedControlItemBase<TSegmentId extends string = string> {
    id: TSegmentId;
    isDisabled?: boolean;
    startIconName?: IconName;
}
interface ISegmentedControlItemLabel<TSegmentId extends string = string> extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel?: string;
    label: string;
}
interface ISegmentedControlItemAriaLabel<TSegmentId extends string = string>
    extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel: string;
    label?: string;
}
export type ISegmentedControlItem<TSegmentId extends string = string> =
    | ISegmentedControlItemLabel<TSegmentId>
    | ISegmentedControlItemAriaLabel<TSegmentId>;

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

export function SegmentedControl<TSegmentId extends string = string>({
    className,
    items,
    onSelectionChange,
    ref,
    ...props
}: SegmentedControlProps<TSegmentId>) {
    const initialSelectedKey = props.selectedKey;
    const [selectedKey, setSelectedKey] = useState<TSegmentId | null>(
        initialSelectedKey ?? (items.length > 0 ? items[0].id : null)
    );

    const onChange = (id: TSegmentId) => {
        setSelectedKey(id);
        safeCall(onSelectionChange, id);
    };

    useEffect(() => {
        setSelectedKey(initialSelectedKey ?? (items.length > 0 ? items[0].id : null));
    }, [initialSelectedKey]);

    return (
        <div className={classNames('segmented-control', className)} ref={ref} role="group">
            {items.map(({id, label, ariaLabel, isDisabled, startIconName}) => {
                const isSelected = selectedKey === id;

                return (
                    <SegmentedControlItem
                        aria-label={ariaLabel}
                        aria-pressed={isSelected}
                        data-selected={isSelected || undefined}
                        isDisabled={isDisabled}
                        key={id}
                        label={label}
                        onPress={() => onChange(id)}
                        startIconName={startIconName}
                    />
                );
            })}
        </div>
    );
}

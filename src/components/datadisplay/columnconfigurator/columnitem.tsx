import {useSortable} from '@dnd-kit/sortable';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {CSSProperties} from 'react';
import {CSS} from '@dnd-kit/utilities';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Checkbox} from '../../inputs/index.js';
import {DragHandle} from '../draghandle/draghandle.js';

export interface ColumnConfiguratorItem {
    id: string;
    name: string;
    isHidden?: boolean;
    isSelectable?: boolean;
    [key: string]: any;
}

export interface ColumnItemProps {
    isDraggable?: boolean;
    isSelected?: boolean;
    item: ColumnConfiguratorItem;
    onSelectedChange?: (isSelected: boolean) => void;
}

export function ColumnItem({isDraggable, isSelected, item, onSelectedChange}: ColumnItemProps) {
    const {id, name, isSelectable} = item;
    const {transform, transition, setNodeRef, isDragging, attributes, listeners} = useSortable({
        id,
        disabled: !isDraggable
    });
    const translateCommon = useTranslateCommon();

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : 0,
        position: 'relative'
    };

    return (
        <div className="column-item" ref={setNodeRef} style={style}>
            <DragHandle {...attributes} {...listeners} disabled={!isDraggable} />
            <Checkbox
                aria-label={translateCommon('show')}
                isDisabled={isSelectable === false}
                isSelected={isSelected}
                onChange={onSelectedChange}
            />
            <Label className="column-item__label" size={Size.sm}>
                <strong>{name}</strong>
            </Label>
        </div>
    );
}

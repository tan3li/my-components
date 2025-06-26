import {ReactNode, RefAttributes, useId} from 'react';
import {KanbanCardData} from '../kanban/index.js';
import {useDraggable} from '@dnd-kit/core';
import {KanbanCardDragData, KanbanElementType} from '../kanban/types.js';
import {mergeRefs} from '@react-aria/utils';
import {DragHandle} from '../draghandle/draghandle.js';
import {ButtonStyle, ButtonVariant, IconButton, Menu, MenuItem, MenuProps} from '../../action/index.js';
import {iconNames} from '../../media/index.js';
import {Size} from '../../../constants/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {classNames} from '../../../utils/classnames.js';
import {Label, Title} from '../../text/index.js';
import {KanbanCardFooter, KanbanCardFooterProps} from './kanbancardfooter.js';

export interface KanbanCardProps<TData extends KanbanCardData, TMenuItem extends MenuItem>
    extends RefAttributes<HTMLDivElement> {
    /**
     * Content to display in the body after title.
     */
    bodyContent?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifier of the column that the card belongs to. Required for drag and drop.
     */
    columnId: string;
    /**
     * Card data
     */
    data: TData;
    /**
     * Content to display after body.
     */
    detailsContent?: ReactNode;
    /**
     * Props for footer.
     */
    footerProps?: KanbanCardFooterProps;
    /**
     * Content to display on the right side of the header.
     */
    headerContent?: ReactNode;
    /**
     * Name of the id property in data. Defaults to "id" if not given.
     */
    idAccessor?: string;
    /**
     * Whether card is displayed as drag overlay.
     */
    isOverlay?: boolean;
    /**
     * Props for header actions menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children'> & {isDisabled?: boolean};
    /**
     * Subtitle of the card.
     */
    subTitle?: string;
    /**
     * Title of the card.
     */
    title: string;
}

export const KANBAN_CARD_HOVER_BUTTON_CSS_CLASS = 'kanban-card__hover-button';

export function KanbanCard<TData extends KanbanCardData, TMenuItem extends MenuItem>({
    bodyContent,
    className,
    columnId,
    data,
    detailsContent,
    footerProps,
    headerContent,
    idAccessor = 'id',
    isOverlay,
    menuProps,
    ref,
    subTitle,
    title
}: KanbanCardProps<TData, TMenuItem>) {
    const {isDragging, setNodeRef, listeners, attributes} = useDraggable({
        id: data[idAccessor],
        data: {
            card: data,
            columnId,
            type: KanbanElementType.Card
        } satisfies KanbanCardDragData<TData>
    });
    const translateCommon = useTranslateCommon();
    const titleId = useId();

    return (
        <div
            className={classNames('kanban-card', className, {
                'kanban-card--overlay': isOverlay,
                'kanban-card--dragging': isDragging
            })}
            ref={mergeRefs<HTMLDivElement>(setNodeRef, ref)}
            role="listitem">
            <div className="kanban-card__header">
                <DragHandle {...attributes} {...listeners} aria-labelledby={titleId} />
                {(!!menuProps || !!headerContent) && (
                    <div className="kanban-card__header-right">
                        {headerContent}
                        {menuProps && (
                            <Menu {...menuProps} placement="bottom right">
                                <IconButton
                                    aria-label={translateCommon('moreActions')}
                                    iconName={iconNames.MoreVert}
                                    isDisabled={menuProps.isDisabled}
                                    size={Size.sm}
                                    style={ButtonStyle.Outline}
                                    variant={ButtonVariant.Neutral}
                                />
                            </Menu>
                        )}
                    </div>
                )}
            </div>
            <div className="kanban-card__body">
                <div className="kanban-card__title-wrapper" id={titleId}>
                    <Title size={Size.xxs}>
                        <strong>{title}</strong>
                    </Title>
                    {subTitle && <Label size={Size.md}>{subTitle}</Label>}
                </div>
                {bodyContent}
            </div>
            {detailsContent && <div className="kanban-card__details">{detailsContent}</div>}
            {footerProps && <KanbanCardFooter {...footerProps} />}
        </div>
    );
}

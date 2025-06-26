import {closestCorners, DroppableContainer, getFirstCollision, KeyboardCoordinateGetter} from '@dnd-kit/core';
import {KanbanElementType} from './types.js';
import {KeyboardEventKey} from '../../../constants/index.js';
import {arrayMove} from '@dnd-kit/sortable';

const COLUMN_OVERLAY_X_OFFSET = 12;
const COLUMN_OVERLAY_Y_OFFSET = 40;

const CARD_OVERLAY_X_OFFSET = 8;
const CARD_OVERLAY_Y_OFFSET = 8;

const eventKeys: string[] = [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.ArrowLeft,
    KeyboardEventKey.ArrowRight
];

const enum Direction {
    Left = -1,
    Right = 1
}

const kanbanCardKeyboardCoordinateGetter: KeyboardCoordinateGetter = (event, args) => {
    const {context} = args;
    const {active, collisionRect, droppableContainers, droppableRects} = context;

    if (!active?.data.current || !collisionRect) {
        return;
    }

    const filteredContainers: DroppableContainer[] = [];

    droppableContainers.getEnabled().forEach((entry) => {
        if (!entry || entry?.disabled) {
            return;
        }

        const rect = droppableRects.get(entry.id);

        if (!rect) {
            return;
        }

        const data = entry.data.current;

        if (data && data.type !== KanbanElementType.ColumnBody) {
            return;
        }

        switch (event.key) {
            case KeyboardEventKey.ArrowDown:
                if (collisionRect.top < rect.top) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowUp:
                if (collisionRect.top > rect.top + CARD_OVERLAY_Y_OFFSET) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowLeft:
                if (collisionRect.left >= rect.left + rect.width) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowRight:
                if (collisionRect.left + collisionRect.width <= rect.left) {
                    filteredContainers.push(entry);
                }
                break;
            default:
                break;
        }
    });

    const collisions = closestCorners({
        active,
        collisionRect,
        droppableRects,
        droppableContainers: filteredContainers,
        pointerCoordinates: null
    });
    const closestId = getFirstCollision(collisions, 'id');

    if (closestId !== null) {
        const newDroppable = droppableContainers.get(closestId);
        const newNode = newDroppable?.node.current;
        const newRect = newDroppable?.rect.current;

        if (newNode && newRect) {
            if (newDroppable.data.current?.columnId === active.data.current?.columnId) {
                // Moving back to initial position...
                const initialRect = active.rect.current.initial;

                if (initialRect) {
                    return {
                        x: newRect.left + CARD_OVERLAY_X_OFFSET,
                        y: initialRect.top
                    };
                }
            }

            return {
                x: newRect.left + CARD_OVERLAY_X_OFFSET,
                y: newRect.top + CARD_OVERLAY_Y_OFFSET
            };
        }
    }
};

const kanbanColumnKeyboardCoordinateGetter: KeyboardCoordinateGetter = (event, args) => {
    const {context} = args;
    const {active, over, droppableContainers, collisionRect} = context;

    if (!collisionRect || !active?.data.current) {
        return;
    }

    const activeId = active.id as string;
    const overId = (over?.id ?? activeId) as string;
    const items = active.data.current.sortable.items as string[];
    const overIdx = items.indexOf(overId);
    const activeIdx = items.indexOf(activeId);
    let nextIdx = overIdx,
        direction = Direction.Right,
        nextId: string | undefined;

    switch (event.key) {
        case KeyboardEventKey.ArrowRight:
            nextIdx = Math.min(overIdx + 1, items.length - 1);
            break;
        case KeyboardEventKey.ArrowLeft:
            nextIdx = Math.max(0, overIdx - 1);
            direction = Direction.Left;
            break;
        default:
            break;
    }

    if (overIdx !== nextIdx) {
        nextId = items[nextIdx];
    }

    if (nextId) {
        const activeNode = droppableContainers.get(activeId)?.node.current;
        const sortedItems = arrayMove(items, activeIdx, overIdx);
        const currentNodeIdAtNextIndex = sortedItems[nextIdx];
        const newNode = droppableContainers.get(currentNodeIdAtNextIndex)?.node.current;

        if (newNode && activeNode) {
            const activeRect = activeNode.getBoundingClientRect();
            const newRect = newNode.getBoundingClientRect();
            const gapBetweenColumns =
                direction === Direction.Right ? newRect.left - activeRect.right : activeRect.left - newRect.right;

            return {
                x: activeRect.left + direction * (newRect.width + gapBetweenColumns) + COLUMN_OVERLAY_X_OFFSET,
                y: activeRect.top + COLUMN_OVERLAY_Y_OFFSET
            };
        }
    }
};

export const kanbanKeyboardCoordinateGetter: KeyboardCoordinateGetter = (event, args) => {
    event.preventDefault();

    const eventKey = event.key;
    const {active} = args.context;

    if (!eventKeys.includes(eventKey) || !active) {
        return;
    }

    const activeElementType = active.data.current?.type;

    if (activeElementType === KanbanElementType.Column) {
        return kanbanColumnKeyboardCoordinateGetter(event, args);
    } else if (activeElementType === KanbanElementType.Card) {
        return kanbanCardKeyboardCoordinateGetter(event, args);
    }
};

import {closestCorners, DroppableContainer, getFirstCollision, KeyboardCoordinateGetter} from '@dnd-kit/core';
import {KeyboardEventKey} from '../../../constants/index.js';

const eventKeys: string[] = [KeyboardEventKey.ArrowDown, KeyboardEventKey.ArrowUp];

const enum Direction {
    Up = -1,
    Down = 1
}

const X_OFFSET = 30;

export const nestedDataTableKeyboardCoordinateGetter: KeyboardCoordinateGetter = (event, args) => {
    event.preventDefault();

    const eventKey = event.key;
    const {active, collisionRect, droppableContainers, droppableRects} = args.context;

    if (!eventKeys.includes(eventKey) || !active || !collisionRect) {
        return;
    }

    const filteredContainers: DroppableContainer[] = [];
    const activeId = active.id;
    const heightPercentage = 0.25;
    let direction: Direction | undefined;

    droppableContainers.getEnabled().forEach((entry) => {
        if (!entry || entry?.disabled) {
            return;
        }

        const entryId = entry.id;
        const rect = droppableRects.get(entryId);

        if (!rect) {
            return;
        }

        switch (eventKey) {
            case KeyboardEventKey.ArrowDown:
                if (entryId !== activeId && collisionRect.top < rect.top + rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction.Down;
                break;
            case KeyboardEventKey.ArrowUp:
                if (entryId !== activeId && collisionRect.top > rect.top - rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction.Up;
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
        const newRect = newDroppable?.rect.current;

        if (newRect && direction) {
            const activeTop = collisionRect.top;
            const {top: newRectTop, height: newRectHeight} = newRect;
            const afterThreshold = newRectTop + newRectHeight * heightPercentage;
            const beforeThreshold = newRectTop - newRectHeight * heightPercentage;
            let y: number | undefined;

            if (direction === Direction.Up) {
                if (activeTop > afterThreshold + 1) {
                    y = afterThreshold + 1;
                } else if (activeTop > newRectTop) {
                    y = newRectTop;
                } else {
                    y = beforeThreshold - 1;
                }
            } else if (direction === Direction.Down) {
                if (activeTop < beforeThreshold - 1) {
                    y = beforeThreshold - 1;
                } else if (activeTop < newRectTop) {
                    y = newRectTop;
                } else {
                    y = afterThreshold + 1;
                }
            }

            if (y !== undefined) {
                return {
                    x: newRect.left + X_OFFSET,
                    y
                };
            }
        }
    }
};

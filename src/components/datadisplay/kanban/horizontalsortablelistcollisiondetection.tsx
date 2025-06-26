import {CollisionDetection, DroppableContainer} from '@dnd-kit/core';
import sortBy from 'lodash.sortby';

const collision = (droppableContainer?: DroppableContainer) => ({
    id: droppableContainer?.id ?? '',
    value: droppableContainer
});

const HALF = 0.5;

const leftmostDroppableContainerMajorityCovered: CollisionDetection = ({droppableContainers, collisionRect}) => {
    const ascendingDroppableContainers = sortBy(droppableContainers, (c) => c?.rect.current?.left);

    for (const droppableContainer of ascendingDroppableContainers) {
        const {
            rect: {current: droppableRect}
        } = droppableContainer;

        if (droppableRect) {
            const coveredPercentage =
                (droppableRect.left + droppableRect.width - collisionRect.left) / droppableRect.width;

            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }

    return [collision(ascendingDroppableContainers[0])];
};

const rightmostDroppableContainerMajorityCovered: CollisionDetection = ({droppableContainers, collisionRect}) => {
    const descendingDroppableContainers = sortBy(droppableContainers, (c) => c?.rect.current?.left).reverse();

    for (const droppableContainer of descendingDroppableContainers) {
        const {
            rect: {current: droppableRect}
        } = droppableContainer;

        if (droppableRect) {
            const coveredPercentage = (collisionRect.right - droppableRect.left) / droppableRect.width;

            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }

    return [collision(descendingDroppableContainers[0])];
};

export const horizontalSortableListCollisionDetection: CollisionDetection = (args) => {
    if (args.collisionRect.left < (args.active.rect.current?.initial?.left ?? 0)) {
        return leftmostDroppableContainerMajorityCovered(args);
    }

    return rightmostDroppableContainerMajorityCovered(args);
};

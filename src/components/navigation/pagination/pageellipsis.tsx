import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Menu, MenuItem} from '../../action/index.js';
import {Button, Key} from 'react-aria-components';

interface PageEllipsisProps {
    items: MenuItem[];
    onAction?: (key: Key) => void;
}

export function PageEllipsis({items, onAction}: PageEllipsisProps) {
    return (
        <Menu items={items} onAction={onAction}>
            <Button className="page-button">
                <Label className="page-button__label" size={Size.sm}>
                    ...
                </Label>
            </Button>
        </Menu>
    );
}

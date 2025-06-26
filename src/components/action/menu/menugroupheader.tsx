import {Header} from 'react-aria-components';
import {ReactNode} from 'react';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {classNames} from '../../../utils/classnames.js';

interface HeaderProps {
    children: ReactNode;
    className?: string;
}

export function MenuGroupHeader({children, className}: HeaderProps) {
    return (
        <Header className={classNames('menu-group-header', className)}>
            <Label size={Size.sm}>
                <strong>{children}</strong>
            </Label>
        </Header>
    );
}

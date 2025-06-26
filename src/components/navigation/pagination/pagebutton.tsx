import {Button, ButtonProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';
import {ReactNode} from 'react';

interface PageButtonProps extends ButtonProps {
    children: ReactNode;
    isActive?: boolean;
}

export function PageButton({children, className, isActive, ...props}: PageButtonProps) {
    return (
        <Button {...props} className={classNames('page-button', className)} data-active={!!isActive || undefined}>
            <Label className="page-button__label" size={Size.md}>
                <strong>{children}</strong>
            </Label>
        </Button>
    );
}

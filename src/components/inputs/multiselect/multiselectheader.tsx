import {HTMLAttributes, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

interface MultiSelectOptionProps extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isDisabled?: boolean;
    isFocused?: boolean;
    isSelected?: boolean;
}

export function MultiSelectHeader({
    children,
    className,
    isDisabled,
    isFocused,
    isSelected,
    ...props
}: MultiSelectOptionProps) {
    return (
        <div
            {...props}
            className={classNames('multiselect-header', className)}
            data-disabled={!!isDisabled || undefined}
            data-focused={!!isFocused || undefined}
            data-selected={!!isSelected || undefined}>
            {children}
        </div>
    );
}

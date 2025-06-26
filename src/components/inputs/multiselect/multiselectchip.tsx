import {HTMLAttributes, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export const enum SelectedItemStyle {
    tag = 'tag',
    text = 'text'
}

interface MultiSelectChipProps extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    displayStyle: SelectedItemStyle;
}

export function MultiSelectChip({
    children,
    className,
    displayStyle = SelectedItemStyle.text,
    ...props
}: MultiSelectChipProps) {
    return (
        <span {...props} className={classNames(`multiselect__chip multiselect__chip--${displayStyle}`, className)}>
            {children}
        </span>
    );
}

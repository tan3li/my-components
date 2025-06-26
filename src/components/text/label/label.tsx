import {classNames} from '../../../utils/classnames.js';
import {ElementType, HTMLAttributes, RefAttributes} from 'react';
import {Size} from '../../../constants/size.js';
import {HTMLElementType} from '../../../constants/index.js';

export interface LabelProps extends HTMLAttributes<HTMLElement>, RefAttributes<any> {
    elementType?: ElementType;
    htmlFor?: string;
    size: Size.xs | Size.sm | Size.md | Size.lg;
}

export const LABEL_SIZE_XS_CSS_CLASS = 'label--xs';
export const LABEL_SIZE_SM_CSS_CLASS = 'label--sm';
export const LABEL_SIZE_MD_CSS_CLASS = 'label--md';
export const LABEL_SIZE_LG_CSS_CLASS = 'label--lg';

export function Label({className, elementType, htmlFor, size, ...props}: LabelProps) {
    const Element = elementType ?? (htmlFor ? HTMLElementType.Label : HTMLElementType.Span);

    return (
        <Element
            {...props}
            className={classNames(`label label--${size}`, className)}
            {...(Element === HTMLElementType.Label && {htmlFor})}
        />
    );
}

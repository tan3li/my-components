import {classNames} from '../../../utils/classnames.js';
import {CSSProperties, ElementType, ReactNode, RefAttributes} from 'react';
import {Size} from '../../../constants/size.js';
import {Alignment} from '../../../constants/alignment.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';

export interface BodyTextProps extends RefAttributes<any> {
    alignment?: Alignment;
    children: ReactNode | string;
    className?: string;
    elementType?: ElementType;
    size: Size.xs | Size.sm | Size.md | Size.lg;
    style?: CSSProperties;
}

export function BodyText({
    alignment = Alignment.start,
    children,
    className,
    elementType,
    ref,
    size,
    style
}: BodyTextProps) {
    const Element = elementType ?? HTMLElementType.P;

    return (
        <Element
            className={classNames(`body-text body-text--${size} body-text--align-${alignment}`, className)}
            ref={ref}
            style={style}>
            {children}
        </Element>
    );
}

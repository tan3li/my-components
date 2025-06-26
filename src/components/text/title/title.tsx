import {ElementType, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {HTMLElementType, Size} from '../../../constants/index.js';
import {Heading, HeadingProps} from 'react-aria-components';

export interface TitleProps extends HeadingProps, RefAttributes<any> {
    /**
     * Element type of title.
     */
    elementType?: ElementType;
    /**
     * Size of the element.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
}

export function Title({children, className, elementType: Element = HTMLElementType.Div, size, ...props}: TitleProps) {
    const cssClassName = classNames(`title title--${size}`, className);

    if (props.level) {
        return (
            <Heading {...props} className={cssClassName}>
                {children}
            </Heading>
        );
    }

    return (
        <Element {...props} className={cssClassName}>
            {children}
        </Element>
    );
}

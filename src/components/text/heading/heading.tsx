import {Heading as ReactAriaHeading, HeadingProps as ReactAriaHeadingProps} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/size.js';
import {Alignment} from '../../../constants/alignment.js';
import {ElementType, RefAttributes} from 'react';

export interface HeadingProps extends ReactAriaHeadingProps, RefAttributes<any> {
    /**
     * Text align of the header.
     */
    alignment?: Alignment;
    /**
     * Element type of header.
     */
    elementType?: ElementType;
    /**
     * Size of the element.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
}

export const HEADING_SIZE_XXS_CSS_CLASS = 'heading--xxs';
export const HEADING_SIZE_XS_CSS_CLASS = 'heading--xs';
export const HEADING_SIZE_SM_CSS_CLASS = 'heading--sm';
export const HEADING_SIZE_MD_CSS_CLASS = 'heading--md';
export const HEADING_SIZE_LG_CSS_CLASS = 'heading--lg';

export function Heading({
    alignment = Alignment.start,
    children,
    className,
    elementType: Element,
    size,
    ...props
}: HeadingProps) {
    const cssClassName = classNames(`heading heading--${size} heading--align-${alignment}`, className);

    if (Element) {
        return (
            <Element {...props} className={cssClassName}>
                {children}
            </Element>
        );
    }

    return (
        <ReactAriaHeading {...props} className={cssClassName}>
            {children}
        </ReactAriaHeading>
    );
}

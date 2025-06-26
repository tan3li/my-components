import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface ContentBlockProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS styles for the body if you need to override the default styling.
     */
    bodyStyle?: CSSProperties;
    /**
     * Element body content.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Content to display on the right side of the header.
     */
    headerContent?: ReactNode;
    /**
     * CSS styles for the header if you need to override the default styling.
     */
    headerStyle?: CSSProperties;
    /**
     * Whether element has "nested" style, i.e. whole element will get a background color and header will have left and right padding.
     * Useful when placed inside a container element.
     */
    isNested?: boolean;
    /**
     * Title to display in the header.
     * Heading and Title components with semantic level (2-6) should be used for this as needed.
     */
    title: ReactNode;
}

export function ContentBlock({
    bodyStyle,
    children,
    className,
    headerContent,
    headerStyle,
    isNested,
    title
}: ContentBlockProps) {
    return (
        <div
            className={classNames('content-block', className, {
                'content-block--nested': isNested
            })}>
            <div className="content-block__header" style={headerStyle}>
                {title}
                {headerContent}
            </div>
            <div className="content-block__body" style={bodyStyle}>
                {children}
            </div>
        </div>
    );
}

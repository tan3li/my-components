import {Size} from '../../../constants/size.js';
import {classNames} from '../../../utils/classnames.js';
import {Label} from '../../text/label/label.js';
import {AriaRole} from '../../../constants/ariarole.js';
import {Orientation} from '../../../constants/orientation.js';
import {Separator} from 'react-aria-components';
import {Alignment} from '../../../constants/alignment.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';
import {CSSProperties, RefAttributes} from 'react';

export interface DividerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the Divider text label
     */
    alignment?: Alignment;
    /**
     * Additional class names to be applied to the Divider
     */
    className?: string;
    /**
     * Orientation of the Divider
     */
    orientation?: Orientation;
    /**
     * Size of the Divider
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to be displayed in the Divider. If not given, displays only divider line.
     */
    text?: string;
}

export function Divider({
    alignment = Alignment.center,
    className,
    orientation = Orientation.horizontal,
    ref,
    size,
    style,
    text
}: DividerProps) {
    const cssClassName = classNames(
        `divider divider--${size} divider--${orientation} divider--align-${alignment}`,
        className
    );

    if (!text) {
        return (
            <Separator
                className={cssClassName}
                elementType={HTMLElementType.Div}
                orientation={orientation}
                style={style}
            />
        );
    }

    return (
        <div aria-orientation={orientation} className={cssClassName} ref={ref} role={AriaRole.separator} style={style}>
            <Label className="divider__label" size={Size.sm}>
                {text}
            </Label>
        </div>
    );
}

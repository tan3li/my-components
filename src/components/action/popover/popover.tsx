import {Dialog, Popover as ReactAriaPopover, PopoverProps as ReactAriaPopoverProps} from 'react-aria-components';
import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {isObject} from '../../../utils/objecthelper.js';
import {isString} from '../../../utils/stringhelper.js';

export interface PopoverPadding {
    top?: CSSProperties['paddingTop'];
    bottom?: CSSProperties['paddingBottom'];
    left?: CSSProperties['paddingLeft'];
    right?: CSSProperties['paddingRight'];
}

export interface PopoverProps extends Omit<ReactAriaPopoverProps, 'children'>, RefAttributes<HTMLDivElement> {
    /**
     * Aria label for the dialog.
     */
    ['aria-label']?: string;
    /**
     * Id of the element which labels the dialog.
     */
    ['aria-labelledby']?: string;
    /**
     * Popover content.
     */
    children: ReactNode;
    /**
     * Maximum width for the popover.
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * Padding for the popover content.
     */
    padding?: CSSProperties['padding'] | PopoverPadding;
}

export function Popover({
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    className,
    maxWidth,
    padding,
    style,
    ...props
}: PopoverProps) {
    return (
        <ReactAriaPopover {...props} className={classNames('popover', className)} style={{...style, maxWidth}}>
            <Dialog
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                className="popover__dialog"
                style={
                    isObject(padding) && !isString(padding) ?
                        {
                            paddingTop: padding?.top,
                            paddingBottom: padding?.bottom,
                            paddingLeft: padding?.left,
                            paddingRight: padding?.right
                        }
                    :   {padding}
                }>
                {children}
            </Dialog>
        </ReactAriaPopover>
    );
}

import {AriaRole, CSSProperties, ReactNode, RefAttributes, useImperativeHandle, useRef} from 'react';
import {AriaButtonOptions, mergeProps, useButton, useFocusRing} from 'react-aria';
import {classNames} from '../../../utils/classnames.js';
import {HTMLElementType} from '../../../constants/htmlelementtype.js';
import {isFunction} from '../../../utils/functionhelper.js';

type AllowedHTMLElementType = HTMLElementType.Span | HTMLElementType.Div | HTMLElementType.Button | HTMLElementType.A;

export interface TriggerElementRenderProps {
    isFocused: boolean;
    isFocusVisible: boolean;
}

export interface TriggerElementProps extends AriaButtonOptions<AllowedHTMLElementType>, RefAttributes<any> {
    children: ReactNode | ((renderProps: TriggerElementRenderProps) => ReactNode);
    className?: string;
    elementType?: AllowedHTMLElementType;
    role?: AriaRole;
    style?: CSSProperties;
}

export function TriggerElement({
    children,
    className,
    elementType,
    ref: outerRef,
    role,
    style,
    ...props
}: TriggerElementProps) {
    const ElementType = elementType ?? HTMLElementType.Span;
    const ref = useRef(null);
    const {focusProps, isFocused, isFocusVisible} = useFocusRing(props);
    const {buttonProps} = useButton(
        {
            elementType: ElementType,
            ...props
        },
        ref
    );
    const renderProps: TriggerElementRenderProps = {
        isFocused,
        isFocusVisible
    };

    useImperativeHandle(outerRef, () => ref.current, []);

    return (
        <ElementType
            {...mergeProps(buttonProps, focusProps)}
            className={classNames('trigger-element', className)}
            ref={ref}
            role={role ?? buttonProps.role}
            style={{...buttonProps.style, ...style}}>
            {isFunction(children) ? children(renderProps) : children}
        </ElementType>
    );
}

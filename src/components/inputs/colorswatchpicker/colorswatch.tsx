import {
    ColorSwatch as ReactAriaColorSwatch,
    ColorSwatchProps as ReactAriaColorSwatchProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {RefAttributes} from 'react';

export interface ColorSwatchProps extends ReactAriaColorSwatchProps, RefAttributes<HTMLDivElement> {
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
}

export function ColorSwatch({className, size, ...props}: ColorSwatchProps) {
    return <ReactAriaColorSwatch {...props} className={classNames(`color-swatch color-swatch--${size}`, className)} />;
}

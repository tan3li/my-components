import { ElementType, RefAttributes } from 'react';
import { Size } from '../../../constants/index.js';
import { HeadingProps } from 'react-aria-components';
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
export declare function Title({ children, className, elementType: Element, size, ...props }: TitleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=title.d.ts.map
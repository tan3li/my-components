import { SearchFieldProps as ReactAriaSearchFieldProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { RefAttributes } from 'react';
export interface SearchFieldProps extends ReactAriaSearchFieldProps, RefAttributes<HTMLDivElement> {
    'aria-label': string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Placeholder to show when there is no text.
     */
    placeholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the TextField, two different sizes are available.
     */
    size?: Size.xs | Size.sm | Size.md;
}
export declare function SearchField({ className, helpText, isSkeleton, placeholder, showHelpTextIcon, size, ...props }: SearchFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=searchfield.d.ts.map
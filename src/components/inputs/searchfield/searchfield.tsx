import {
    Input,
    SearchField as ReactAriaSearchField,
    SearchFieldProps as ReactAriaSearchFieldProps
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {iconNames} from '../../media/icon/icons.js';
import {Icon} from '../../media/icon/icon.js';
import {useFocusRing, useHover} from 'react-aria';
import {Size} from '../../../constants/size.js';
import {ClearButton} from '../../action/clearbutton/clearbutton.js';
import {HelpText} from '../../text/helptext/helptext.js';
import {LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {RefAttributes} from 'react';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

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

export function SearchField({
    className,
    helpText,
    isSkeleton,
    placeholder,
    showHelpTextIcon,
    size = Size.md,
    ...props
}: SearchFieldProps) {
    const {focusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const {hoverProps, isHovered} = useHover(props);

    if (isSkeleton) {
        return <SkeletonField className="skeleton-search-field" hasHelpText={!!helpText} size={size} />;
    }

    return (
        <ReactAriaSearchField {...props} className={classNames(`search-field search-field--${size}`, className)}>
            <div
                {...hoverProps}
                {...focusProps}
                className="search-field__content"
                data-focus-visible={isFocusVisible || undefined}
                data-focused={isFocused || undefined}
                data-hovered={isHovered || undefined}>
                <Icon className="search-field__search-icon" name={iconNames.MagnifyingGlass} />
                <Input
                    className={classNames(
                        'search-field__input',
                        size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS
                    )}
                    placeholder={placeholder}
                />
                <ClearButton className="search-field__clear-button" />
            </div>
            {helpText && <HelpText showIcon={showHelpTextIcon}>{helpText}</HelpText>}
        </ReactAriaSearchField>
    );
}

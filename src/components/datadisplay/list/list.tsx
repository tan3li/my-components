import {Children, cloneElement, isValidElement, ReactElement, ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {ListItem, ListItemProps, ListItemStyle} from './listitem.js';
import {coreTokens} from '@visma-severa/severa-design-tokens';
import {isFunction} from '../../../utils/functionhelper.js';

export interface ListProps<TData extends object> extends RefAttributes<HTMLUListElement> {
    /**
     * The contents of the list.
     * For static lists, use ListItem component.
     * For dynamic lists, provide render function which renders item content or ListItem for each data item.
     */
    children: ReactNode | ((item: TData) => ReactNode);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Data for dynamic list.
     */
    data?: TData[];
    /**
     * Accessor to get unique identifier for dynamic list item.
     * Can be either item id property name or method which returns id value for item.
     */
    idAccessor?: string | ((item: TData) => string | number);
    /**
     * Whether to separate list item body and footer with separator.
     */
    showItemFooterSeparator?: boolean;
    /**
     * Spacing between rows. Should be provided using design tokens.
     * Defaults to 0 with Plain-style and space-sm with other styles.
     */
    spacing?: string;
    /**
     * Display style for the list items.
     */
    style?: ListItemStyle;
}

export function List<TData extends object>({
    children,
    className,
    data,
    idAccessor,
    ref,
    showItemFooterSeparator,
    spacing,
    style = ListItemStyle.Card
}: ListProps<TData>) {
    const defaultSpacing = style === ListItemStyle.Plain ? 0 : coreTokens.dimension.spaceSm.value;
    const commonListItemProps: Partial<ListItemProps> = {
        showFooterSeparator: showItemFooterSeparator,
        style
    };
    let listItems: ReactNode;

    if (isFunction(children)) {
        if (!data) {
            throw new Error('Must provide data prop for dynamic children.');
        }
        if (!idAccessor) {
            throw new Error('Must provide idAccessor prop for dynamic children.');
        }

        listItems = data.map((item) => {
            const element = children(item);
            const key = isFunction(idAccessor) ? idAccessor(item) : item[idAccessor];

            if (isValidElement(element) && element.type === ListItem) {
                return cloneElement(element as ReactElement<ListItemProps>, {key, ...commonListItemProps});
            }

            return (
                <ListItem key={key} {...commonListItemProps}>
                    {element}
                </ListItem>
            );
        });
    } else {
        const childrenArr = Children.toArray(children);

        listItems = childrenArr.map((child) =>
            cloneElement(child as ReactElement<ListItemProps>, {...commonListItemProps})
        );
    }

    return (
        <ul className={classNames('list', className)} ref={ref} style={{gap: spacing ?? defaultSpacing}}>
            {listItems}
        </ul>
    );
}

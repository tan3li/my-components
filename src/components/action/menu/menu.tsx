import {
    Key,
    Menu as ReactAriaMenu,
    MenuProps as ReactAriaMenuProps,
    MenuSection,
    MenuTrigger,
    Popover,
    Selection,
    SubmenuTrigger
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {MenuOption, MenuOptionProps} from './menuoption.js';
import {Fragment, ReactNode, RefAttributes, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {MenuLinkButton} from './menulinkbutton.js';
import {Divider} from '../../datadisplay/divider/divider.js';
import {Size} from '../../../constants/size.js';
import {Label} from '../../text/label/label.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {iconNames} from '../../media/icon/icons.js';
import {isNullOrUndefined} from '../../../utils/objecthelper.js';
import {MenuGroupHeader} from './menugroupheader.js';
import {Placement} from 'react-aria';
import {ButtonRole} from '../button/index.js';

export const enum SubmenuBehavior {
    Separate = 'separate',
    InPlace = 'in-place'
}

export const enum SelectionMode {
    Single = 'single',
    Multiple = 'multiple'
}

export interface MenuItem {
    id: Key;
    name: string;
    props?: MenuOptionProps;
    children?: MenuItem[];
    hasSeparator?: boolean;
    isSubmenuTrigger?: boolean;
    submenuBehavior?: SubmenuBehavior;
    selectionMode?: SelectionMode;
}

export interface MenuFooterItem {
    id: Key;
    name: string;
    onPress?: () => void;
    role?: ButtonRole;
}

export interface MenuProps<T> extends Omit<ReactAriaMenuProps<T>, 'children' | 'items'>, RefAttributes<HTMLDivElement> {
    /**
     * Menu trigger element.
     */
    children: ReactNode;
    /**
     * Header content.
     */
    header?: ReactNode;
    /**
     * List of footer items.
     */
    footerItems?: MenuFooterItem[];
    /**
     * List of menu items.
     */
    items: MenuItem[];
    /**
     * Minimum width for the menu in pixels.
     */
    minWidth?: number;
    /**
     * Handler that is called when open state changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placement of the menu in relation to its trigger element.
     */
    placement?: Placement;
}

function findItem(items?: MenuItem[], key?: Key | null): MenuItem | undefined {
    if (!items || isNullOrUndefined(key)) {
        return undefined;
    }

    for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i];

        if (item.id === key) {
            return item;
        }

        if (item.children) {
            const childItem = findItem(item.children, key);

            if (childItem) {
                return childItem;
            }
        }
    }

    return undefined;
}

export function Menu<T extends MenuItem>({
    className,
    children,
    footerItems,
    header,
    minWidth,
    onOpenChange: propsOnOpenChange,
    placement,
    ref,
    ...props
}: MenuProps<T>) {
    const selectedKeysFromProps = props.selectedKeys;
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(selectedKeysFromProps));
    const [isOpen, setIsOpen] = useState(false);
    const skipCloseRef = useRef(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeSubMenuItem, setActiveSubMenuItem] = useState<MenuItem | null>(null);
    const itemsToRender =
        activeSubMenuItem ? [{...activeSubMenuItem, children: undefined}, ...activeSubMenuItem.children!] : props.items;

    useImperativeHandle(ref, () => menuRef.current!, []);

    const onAction = (key: Key) => {
        const item = findItem(props.items, key);

        if (!item) {
            return;
        }
        if (item.props?.isReadOnly) {
            skipCloseRef.current = true;

            return;
        }

        if (item.isSubmenuTrigger) {
            skipCloseRef.current = item.selectionMode !== SelectionMode.Multiple || activeSubMenuItem === null;
            setActiveSubMenuItem(activeSubMenuItem ? null : item);
        } else {
            safeCall(props.onAction, key);
        }
    };

    const onOpenChange = (isMenuOpen: boolean) => {
        if (!isMenuOpen && skipCloseRef.current) {
            skipCloseRef.current = false;

            return;
        }

        setIsOpen(isMenuOpen);
        propsOnOpenChange?.(isMenuOpen);

        if (!isMenuOpen) {
            setActiveSubMenuItem(null);
        }
    };

    const onSelectionChange = (keys: Selection) => {
        if (activeSubMenuItem && keys instanceof Set && keys.has(activeSubMenuItem.id)) {
            return;
        }
        setSelectedKeys(keys);
        safeCall(props.onSelectionChange, keys);
    };

    useEffect(() => {
        setSelectedKeys(new Set(selectedKeysFromProps));
    }, [selectedKeysFromProps]);

    const renderItem = (item: MenuItem) => {
        const {
            id,
            props: itemProps,
            name,
            children: itemChildren,
            hasSeparator,
            isSubmenuTrigger,
            submenuBehavior = SubmenuBehavior.Separate,
            selectionMode
        } = item;

        if (itemChildren) {
            if (isSubmenuTrigger) {
                if (submenuBehavior === SubmenuBehavior.InPlace) {
                    return (
                        <Fragment key={id}>
                            <MenuOption
                                {...itemProps}
                                id={id}
                                key={id}
                                label={itemProps?.label ?? name}
                                rightIconName={iconNames.ArrowRightFilled}
                                textValue={itemProps?.textValue ?? name}
                            />
                            {hasSeparator && <Divider size={Size.sm} />}
                        </Fragment>
                    );
                }

                return (
                    <Fragment key={id}>
                        <SubmenuTrigger>
                            <MenuOption
                                {...itemProps}
                                key={id}
                                label={itemProps?.label ?? name}
                                textValue={itemProps?.textValue ?? name}
                            />
                            <Popover className="menu-popover">
                                <div className="menu-popover__content">
                                    <ReactAriaMenu
                                        className={classNames('menu', className)}
                                        onAction={onAction}
                                        onSelectionChange={onSelectionChange}
                                        selectedKeys={selectedKeys}
                                        selectionMode={selectionMode}>
                                        {itemChildren.map(renderItem)}
                                    </ReactAriaMenu>
                                </div>
                            </Popover>
                        </SubmenuTrigger>
                        {hasSeparator && <Divider size={Size.sm} />}
                    </Fragment>
                );
            }

            return (
                <Fragment key={id}>
                    <MenuSection className="menu-section">
                        <MenuGroupHeader>{name}</MenuGroupHeader>
                        {itemChildren.map(renderItem)}
                    </MenuSection>
                    {hasSeparator && <Divider size={Size.sm} />}
                </Fragment>
            );
        }

        return (
            <Fragment key={id}>
                <MenuOption
                    {...itemProps}
                    className={classNames(itemProps?.className, {'menu-item--back': isSubmenuTrigger})}
                    id={id}
                    key={id}
                    label={itemProps?.label ?? name}
                    leftIconName={isSubmenuTrigger ? iconNames.ArrowLeftFilled : itemProps?.leftIconName}
                    textValue={itemProps?.textValue ?? name}
                />
                {hasSeparator && <Divider size={Size.sm} />}
            </Fragment>
        );
    };

    return (
        <MenuTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
            {children}
            <Popover className="menu-popover" placement={placement}>
                <div className="menu-popover__content">
                    {header && (
                        <div className="menu-header">
                            <Label size={Size.md}>
                                <strong>{header}</strong>
                            </Label>
                        </div>
                    )}
                    <ReactAriaMenu
                        {...props}
                        className={classNames('menu', className)}
                        onAction={onAction}
                        onSelectionChange={onSelectionChange}
                        ref={menuRef}
                        selectedKeys={selectedKeys}
                        selectionMode={activeSubMenuItem?.selectionMode ?? props.selectionMode}
                        style={{minWidth: minWidth ? `${minWidth}px` : undefined}}>
                        {itemsToRender.map(renderItem)}
                    </ReactAriaMenu>
                    {footerItems && footerItems.length > 0 && (
                        <>
                            <Divider size={Size.sm} />
                            <div
                                className="menu-footer"
                                onBlur={() => {
                                    if (menuRef.current) {
                                        menuRef.current.tabIndex = -1;
                                    }
                                }}
                                onFocus={() => {
                                    if (menuRef.current) {
                                        menuRef.current.tabIndex = 0;
                                    }
                                }}>
                                {footerItems.map((footerItem) => (
                                    <MenuLinkButton
                                        key={footerItem.id}
                                        onPress={footerItem.onPress}
                                        role={footerItem.role}>
                                        {footerItem.name}
                                    </MenuLinkButton>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Popover>
        </MenuTrigger>
    );
}

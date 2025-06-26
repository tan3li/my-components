import {
    Tab as ReactAriaTab,
    TabsProps as ReactAriaTabsProps,
    TabList as ReactAriaTabList,
    TabPanel as ReactAriaTabPanel,
    Tabs as ReactAriaTabs
} from 'react-aria-components';
import {ReactNode, RefAttributes} from 'react';
import {Size} from '../../../constants/size.js';
import {Label} from '../../text/label/label.js';
import {IconName} from '../../media/icon/icons.js';
import {Icon, IconSize} from '../../media/icon/icon.js';
import {Badge, BadgeStyle, BadgeVariant} from '../../feedback/badge/badge.js';
import {Orientation} from '../../../constants/orientation.js';
import {Alignment} from '../../../constants/alignment.js';
import {Divider} from '../../datadisplay/divider/divider.js';

export interface PanelItem {
    content: ReactNode;
    id: string;
}

export interface TabItem {
    badgeText?: string;
    iconName?: IconName;
    id: string;
    isDisabled?: boolean;
    name: string;
}

export const enum TabsType {
    Card = 'card',
    Underline = 'underline'
}

export interface TabsProps extends ReactAriaTabsProps, RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the tabs.
     */
    alignment?: Exclude<Alignment, 'end'>;
    /**
     * Orientation of the tabs. Vertical can only be used with underline.
     */
    orientation?: Orientation;
    /**
     * List of panel items.
     */
    panelItems: PanelItem[];
    /**
     * List of Tab items.
     */
    tabItems: TabItem[];
    /**
     * Type of the tabs
     */
    type?: TabsType;
}

export function Tabs({
    alignment = Alignment.center,
    orientation = Orientation.horizontal,
    panelItems,
    tabItems,
    type = TabsType.Underline,
    ...props
}: TabsProps) {
    const disabledKeys = tabItems.filter((item) => item.isDisabled).map((item) => item.id);
    const effectiveOrientation = type === TabsType.Underline ? orientation : Orientation.horizontal;

    return (
        <ReactAriaTabs {...props} className="tabs" disabledKeys={disabledKeys} orientation={effectiveOrientation}>
            <ReactAriaTabList className={`tab-list tab-list--${alignment}`}>
                {tabItems.map((item) => (
                    <ReactAriaTab
                        className={`tab tab--${type} tab--${alignment}`}
                        data-orientation={effectiveOrientation}
                        id={item.id}
                        key={`tab${item.id}`}>
                        {({isSelected}) => (
                            <div
                                className={`tab__container tab__container--${type} tab__container--${alignment}`}
                                data-orientation={effectiveOrientation}
                                data-selected={isSelected || undefined}>
                                {item.iconName && <Icon name={item.iconName} size={IconSize.MD} />}
                                <Label size={Size.md}>{item.name}</Label>
                                {item.badgeText && (
                                    <Badge
                                        isDisabled={!!props.isDisabled || item.isDisabled}
                                        style={BadgeStyle.Outline}
                                        variant={BadgeVariant.Neutral}>
                                        {item.badgeText}
                                    </Badge>
                                )}
                            </div>
                        )}
                    </ReactAriaTab>
                ))}
            </ReactAriaTabList>
            <Divider
                alignment={Alignment.center}
                className={`tab__divider tab__divider--${type}`}
                orientation={effectiveOrientation}
                size={type === TabsType.Underline ? Size.md : Size.sm}
            />
            {panelItems.map((item) => (
                <ReactAriaTabPanel className={`panel panel--${type}`} id={item.id} key={`panel${item.id}`}>
                    {item.content}
                </ReactAriaTabPanel>
            ))}
        </ReactAriaTabs>
    );
}

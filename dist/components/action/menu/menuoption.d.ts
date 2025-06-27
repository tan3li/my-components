import { MenuItemProps as ReactAriaMenuItemProps } from 'react-aria-components';
import { ReactNode, RefAttributes } from 'react';
import { IconName } from '../../media/icon/icons.js';
export interface MenuOptionProps extends ReactAriaMenuItemProps, RefAttributes<HTMLDivElement> {
    actionLabel?: ReactNode;
    description?: string;
    isDestructive?: boolean;
    isReadOnly?: boolean;
    label?: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    tooltip?: {
        content: ReactNode;
    };
}
export declare function MenuOption({ actionLabel, className, description, isDestructive, isReadOnly, label, leftIconName, prefix, rightIconName, ref: outerRef, tooltip, ...props }: MenuOptionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=menuoption.d.ts.map
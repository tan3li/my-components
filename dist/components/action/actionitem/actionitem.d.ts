import { IconName } from '../../media/icon/icons.js';
import { ReactNode } from 'react';
export interface ActionItemContentProps {
    actionLabel?: ReactNode;
    description?: string;
    label: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    suffix?: ReactNode;
}
export declare const ACTION_ITEM_CSS_CLASS = "action-item";
export declare function ActionItemContent({ actionLabel, description, label, leftIconName, prefix, rightIconName, suffix }: ActionItemContentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=actionitem.d.ts.map
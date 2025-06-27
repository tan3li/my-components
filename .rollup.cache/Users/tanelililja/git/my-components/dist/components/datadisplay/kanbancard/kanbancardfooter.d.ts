import { DisclosureProps } from 'react-stately';
import { ReactNode } from 'react';
export declare const enum KanbanCardFooterAlertLevel {
    Success = 1,
    Warning = 2,
    Danger = 3
}
export interface KanbanCardFooterProps extends DisclosureProps {
    alertLevel?: KanbanCardFooterAlertLevel;
    children: ReactNode;
    title: string;
}
export declare function KanbanCardFooter({ alertLevel, children, title, ...props }: KanbanCardFooterProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=kanbancardfooter.d.ts.map
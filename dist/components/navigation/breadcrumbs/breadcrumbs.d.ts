import { BreadcrumbsProps as ReactAriaBreadcrumbsProps } from 'react-aria-components';
import { RefAttributes } from 'react';
export interface BreadcrumbItem {
    id: string;
    label: string;
    isDisabled?: boolean;
}
export interface BreadcrumbsProps<T extends BreadcrumbItem> extends Omit<ReactAriaBreadcrumbsProps<T>, 'onAction'>, RefAttributes<HTMLOListElement> {
    items: T[];
    /**
     * Handler that is called when a breadcrumb is clicked.
     */
    onAction?: (id: string) => void;
}
export declare function Breadcrumbs<T extends BreadcrumbItem>({ className, items, ref, ...props }: BreadcrumbsProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=breadcrumbs.d.ts.map
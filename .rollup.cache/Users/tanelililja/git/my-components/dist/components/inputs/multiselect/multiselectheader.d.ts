import { HTMLAttributes, RefAttributes } from 'react';
interface MultiSelectOptionProps extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isDisabled?: boolean;
    isFocused?: boolean;
    isSelected?: boolean;
}
export declare function MultiSelectHeader({ children, className, isDisabled, isFocused, isSelected, ...props }: MultiSelectOptionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=multiselectheader.d.ts.map
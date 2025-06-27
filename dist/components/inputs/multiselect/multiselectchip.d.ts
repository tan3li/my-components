import { HTMLAttributes, RefAttributes } from 'react';
export declare const enum SelectedItemStyle {
    tag = "tag",
    text = "text"
}
interface MultiSelectChipProps extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    displayStyle: SelectedItemStyle;
}
export declare function MultiSelectChip({ children, className, displayStyle, ...props }: MultiSelectChipProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=multiselectchip.d.ts.map
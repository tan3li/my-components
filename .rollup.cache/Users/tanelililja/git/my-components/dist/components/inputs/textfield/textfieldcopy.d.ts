import { RefAttributes, RefObject } from 'react';
export interface TextFieldCopyProps extends RefAttributes<HTMLDivElement> {
    inputRef?: RefObject<HTMLInputElement | null>;
    prefix?: string;
    suffix?: string;
}
export declare function TextFieldCopy({ inputRef, prefix, ref, suffix }: TextFieldCopyProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=textfieldcopy.d.ts.map
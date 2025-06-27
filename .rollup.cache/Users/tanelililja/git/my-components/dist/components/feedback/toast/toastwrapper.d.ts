import { CSSProperties, ReactNode } from 'react';
export interface ToastWrapperProps {
    children?: ReactNode;
    id: string;
    isActive?: boolean;
    onHeightUpdate: (id: string, height: number) => void;
    style?: CSSProperties;
}
export declare function ToastWrapper({ children, id, isActive, onHeightUpdate, style }: ToastWrapperProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=toastwrapper.d.ts.map
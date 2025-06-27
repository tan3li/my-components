import { ButtonRole } from '../button/button.js';
import { ReactNode } from 'react';
interface MenuLinkButtonProps {
    children: ReactNode;
    onPress?: () => void;
    role?: ButtonRole;
}
export declare function MenuLinkButton({ children, onPress, role }: MenuLinkButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=menulinkbutton.d.ts.map
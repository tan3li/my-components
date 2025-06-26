import {Button, ButtonRole, ButtonStyle} from '../button/button.js';
import {ButtonVariant} from '../constants/buttonvariant.js';
import {ReactNode, useContext} from 'react';
import {RootMenuTriggerStateContext} from 'react-aria-components';
import {safeCall} from '../../../utils/functionhelper.js';

interface MenuLinkButtonProps {
    children: ReactNode;
    onPress?: () => void;
    role?: ButtonRole;
}

export function MenuLinkButton({children, onPress, role}: MenuLinkButtonProps) {
    const state = useContext(RootMenuTriggerStateContext);

    return (
        <Button
            className="menu-link-button"
            onPress={() => {
                safeCall(onPress);
                state?.close();
            }}
            role={role}
            style={ButtonStyle.Link}
            variant={ButtonVariant.Neutral}>
            {children}
        </Button>
    );
}

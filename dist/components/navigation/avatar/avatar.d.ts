import { CSSProperties, ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
import { IconName } from '../../media/index.js';
type AvatarSize = Size.xs | Size.sm | Size.md | Size.lg;
export interface AvatarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Textual replacement for the image. Required for accessibility.
     */
    alt: string;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Description to show below label.
     */
    description?: string;
    /**
     * Icon to show as avatar when image src or text is not provided.
     */
    iconName?: IconName;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether avatar is navigable with keyboard.
     */
    isInteractive?: boolean;
    /**
     * Label to display next to the image.
     */
    label?: ReactNode;
    /**
     * Max width label container can take.
     */
    labelMaxWidth?: CSSProperties['maxWidth'];
    /**
     * Handler that is called when avatar is pressed.
     */
    onPress?: () => void;
    /**
     * Size of the Avatar
     */
    size?: AvatarSize;
    /**
     * Path to the image to show as avatar.
     */
    src?: string;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to show as avatar when image src is not provided, f.e. user initials.
     */
    text?: string;
}
export declare function Avatar(props: AvatarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=avatar.d.ts.map
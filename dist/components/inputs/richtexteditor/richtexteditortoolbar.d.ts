import { RichTextEditorToolbarConfig } from './toolbarconfig.js';
interface RichTextEditorToolbarProps {
    config?: RichTextEditorToolbarConfig;
    isDisabled?: boolean;
    onModalOpenChange?: (isOpen: boolean) => void;
}
export declare function RichTextEditorToolbar({ isDisabled, onModalOpenChange, ...props }: RichTextEditorToolbarProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=richtexteditortoolbar.d.ts.map
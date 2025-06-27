export interface VariableItem {
    id: string;
    label: string;
}
export interface RichTextEditorToolbarConfig {
    bold?: boolean;
    bulletList?: boolean;
    heading?: boolean;
    italic?: boolean;
    link?: boolean;
    orderedList?: boolean;
    underline?: boolean;
    variables?: VariableItem[];
}
export declare const DEFAULT_TOOLBAR_CONFIG: RichTextEditorToolbarConfig;
//# sourceMappingURL=toolbarconfig.d.ts.map
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

export const DEFAULT_TOOLBAR_CONFIG: RichTextEditorToolbarConfig = {
    bold: true,
    bulletList: true,
    heading: true,
    italic: true,
    link: true,
    orderedList: true,
    underline: true,
    variables: []
};

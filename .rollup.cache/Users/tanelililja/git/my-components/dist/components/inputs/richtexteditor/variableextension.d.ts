export interface VariableOptions {
    /**
     * HTML attributes to add to the variable element.
     * @default {}
     * @example { class: 'foo' }
     */
    HTMLAttributes: Record<string, any>;
}
export interface SetVariableOptions {
    id: string;
    label: string;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        variable: {
            /**
             * Add a variable
             * @example editor.commands.setVariable({id: '123', label: 'My variable'})
             */
            setVariable: (obj: SetVariableOptions) => ReturnType;
        };
    }
}
export declare const VariableExtension: any;
//# sourceMappingURL=variableextension.d.ts.map
import {Node, mergeAttributes} from '@tiptap/core';
import {ReactNodeViewRenderer} from '@tiptap/react';
import {Variable} from './variable.js';

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

export const VariableExtension = Node.create<VariableOptions>({
    name: 'variable',

    addNodeView() {
        // eslint-disable-next-line new-cap
        return ReactNodeViewRenderer(Variable, {className: 'text-editor-variable-wrapper'});
    },

    addOptions() {
        return {
            HTMLAttributes: {}
        };
    },

    group: 'inline',

    inline: true,

    selectable: false,

    atom: true,

    addAttributes() {
        return {
            'data-id': {
                default: null
            },
            'data-label': {
                default: null
            }
        };
    },

    parseHTML() {
        return [{tag: `span[data-type="${this.name}"]`}];
    },

    renderHTML({HTMLAttributes}) {
        return ['span', mergeAttributes({'data-type': this.name}, this.options.HTMLAttributes, HTMLAttributes)];
    },

    renderText({node}) {
        return node.attrs['data-label'];
    },

    addCommands() {
        return {
            setVariable:
                ({id, label}: SetVariableOptions) =>
                ({commands, state}) =>
                    commands.insertContent({
                        marks: state.selection.$from.marks().map((mark) => ({
                            type: mark.type.name
                        })),
                        type: this.name,
                        attrs: {
                            'data-id': id,
                            'data-label': label
                        }
                    })
        };
    }
});

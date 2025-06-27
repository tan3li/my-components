import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { Variable } from './variable.js';
export var VariableExtension = Node.create({
    name: 'variable',
    addNodeView: function () {
        // eslint-disable-next-line new-cap
        return ReactNodeViewRenderer(Variable, { className: 'text-editor-variable-wrapper' });
    },
    addOptions: function () {
        return {
            HTMLAttributes: {}
        };
    },
    group: 'inline',
    inline: true,
    selectable: false,
    atom: true,
    addAttributes: function () {
        return {
            'data-id': {
                default: null
            },
            'data-label': {
                default: null
            }
        };
    },
    parseHTML: function () {
        return [{ tag: "span[data-type=\"".concat(this.name, "\"]") }];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['span', mergeAttributes({ 'data-type': this.name }, this.options.HTMLAttributes, HTMLAttributes)];
    },
    renderText: function (_a) {
        var node = _a.node;
        return node.attrs['data-label'];
    },
    addCommands: function () {
        var _this = this;
        return {
            setVariable: function (_a) {
                var id = _a.id, label = _a.label;
                return function (_a) {
                    var commands = _a.commands, state = _a.state;
                    return commands.insertContent({
                        marks: state.selection.$from.marks().map(function (mark) { return ({
                            type: mark.type.name
                        }); }),
                        type: _this.name,
                        attrs: {
                            'data-id': id,
                            'data-label': label
                        }
                    });
                };
            }
        };
    }
});
//# sourceMappingURL=variableextension.js.map
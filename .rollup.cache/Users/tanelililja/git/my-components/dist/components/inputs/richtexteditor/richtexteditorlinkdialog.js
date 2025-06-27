import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertModal } from '../../feedback/index.js';
import { Size } from '../../../constants/index.js';
import { TextField } from '../textfield/index.js';
import { useState } from 'react';
import { useCurrentEditor } from '@tiptap/react';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { DialogTrigger } from '../../action/popover/index.js';
export function RichTextEditorLinkDialog(_a) {
    var children = _a.children, onOpenChange = _a.onOpenChange;
    var editor = useCurrentEditor().editor;
    var _b = useState(''), selectedLinkText = _b[0], setSelectedLinkText = _b[1];
    var _c = useState(''), selectedLinkUrl = _c[0], setSelectedLinkUrl = _c[1];
    var translateCommon = useTranslateCommon();
    if (!editor) {
        return null;
    }
    return (_jsxs(DialogTrigger, __assign({ onOpenChange: function (isOpen) {
            if (isOpen) {
                var currentUrl = editor.getAttributes('link').href;
                if (currentUrl) {
                    setSelectedLinkUrl(currentUrl);
                    editor.commands.extendMarkRange('link');
                }
                var view = editor.view, state = editor.state;
                var _a = view.state.selection, from = _a.from, to = _a.to;
                var selectedText = state.doc.textBetween(from, to);
                if (selectedText !== currentUrl) {
                    setSelectedLinkText(selectedText);
                }
            }
            else {
                setSelectedLinkText('');
                setSelectedLinkUrl('');
                editor.chain().focus(editor.view.state.selection.to).run();
            }
            safeCall(onOpenChange, isOpen);
        } }, { children: [children, _jsx(AlertModal, __assign({ primaryAction: {
                    onPress: function (closeCallback) {
                        var commands = editor.chain().focus().extendMarkRange('link');
                        if (selectedLinkUrl) {
                            commands = commands
                                .deleteSelection()
                                .setLink({ href: selectedLinkUrl })
                                .command(function (_a) {
                                var tr = _a.tr;
                                tr.insertText(selectedLinkText || selectedLinkUrl);
                                return true;
                            });
                        }
                        else {
                            commands = commands.unsetLink();
                        }
                        commands.run();
                        closeCallback();
                    },
                    label: translateCommon('save')
                }, secondaryAction: {
                    onPress: function (closeCallback) {
                        closeCallback();
                    },
                    label: translateCommon('cancel')
                }, size: Size.sm, title: translateCommon('addLink') }, { children: _jsxs("div", __assign({ className: "link-modal__body" }, { children: [_jsx(TextField, { autoFocus: !selectedLinkText, label: translateCommon('textToDisplay'), onChange: setSelectedLinkText, placeholder: translateCommon('enterDisplayText'), value: selectedLinkText }), _jsx(TextField, { autoFocus: !!selectedLinkText, label: "URL", onChange: setSelectedLinkUrl, placeholder: "https://example.com/", value: selectedLinkUrl })] })) }))] })));
}
//# sourceMappingURL=richtexteditorlinkdialog.js.map
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCurrentEditor } from '@tiptap/react';
import { Label, LABEL_SIZE_MD_CSS_CLASS } from '../../text/index.js';
import { Orientation, Size } from '../../../constants/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { Divider } from '../../datadisplay/index.js';
import { RichTextEditorLinkDialog } from './richtexteditorlinkdialog.js';
export function RichTextEditorLinkPreview(_a) {
    var onOpenChange = _a.onOpenChange;
    var editor = useCurrentEditor().editor;
    var translateCommon = useTranslateCommon();
    if (!editor) {
        return null;
    }
    var url = editor.getAttributes('link').href;
    return (_jsxs("div", __assign({ className: "text-editor__link-preview" }, { children: [_jsx(Label, __assign({ size: Size.md }, { children: translateCommon('visitURL') })), _jsx("a", __assign({ className: "text-editor__link ".concat(LABEL_SIZE_MD_CSS_CLASS), href: url, rel: "noopener noreferrer nofollow", target: "_blank", title: url }, { children: url })), _jsx(RichTextEditorLinkDialog, __assign({ onOpenChange: onOpenChange }, { children: _jsx(Button, __assign({ size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('edit') })) })), _jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }), _jsx(Button, __assign({ onPress: function () {
                    editor.chain().focus().extendMarkRange('link').unsetLink().run();
                }, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('remove') }))] })));
}
//# sourceMappingURL=richtexteditorlinkpreview.js.map
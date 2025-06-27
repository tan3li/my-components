import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCurrentEditor } from '@tiptap/react';
import { Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
import { ButtonStyle, ButtonVariant, IconButton, Menu } from '../../action/index.js';
import { iconNames } from '../../media/index.js';
import { Orientation, Size } from '../../../constants/index.js';
import { useTranslateFormatting } from '../../../hooks/translations/usetranslateformatting.js';
import { Select } from '../select/index.js';
import { Divider } from '../../datadisplay/index.js';
import { LABEL_SIZE_LG_CSS_CLASS } from '../../text/index.js';
import { headingExtensionClasses } from './headingextension.js';
import { useMemo } from 'react';
import { RichTextEditorLinkDialog } from './richtexteditorlinkdialog.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { getIndexWithPropertyValue } from '../../../utils/collectionhelper.js';
import { SelectOptionContent } from '../select/selectoptioncontent.js';
function ToolbarButton(_a) {
    var iconName = _a.iconName, isActive = _a.isActive, isDisabled = _a.isDisabled, label = _a.label, onPress = _a.onPress;
    return (_jsxs(TooltipTrigger, { children: [_jsx(IconButton, { "aria-label": label, iconName: iconName, isDisabled: isDisabled, onPress: onPress, size: Size.sm, style: isActive ? ButtonStyle.Fill : ButtonStyle.Plain, variant: ButtonVariant.Neutral }), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: label }))] }));
}
// eslint-disable-next-line max-statements,complexity
export function RichTextEditorToolbar(_a) {
    var _b;
    var isDisabled = _a.isDisabled, onModalOpenChange = _a.onModalOpenChange, props = __rest(_a, ["isDisabled", "onModalOpenChange"]);
    var editor = useCurrentEditor().editor;
    var translateFormatting = useTranslateFormatting();
    var translateCommon = useTranslateCommon();
    var _c = (_b = props.config) !== null && _b !== void 0 ? _b : {}, heading = _c.heading, bold = _c.bold, italic = _c.italic, underline = _c.underline, orderedList = _c.orderedList, bulletList = _c.bulletList, link = _c.link, variables = _c.variables;
    var variableMenuItems = useMemo(function () { return (variables ? variables.map(function (_a) {
        var id = _a.id, label = _a.label;
        return ({ id: id, name: label });
    }) : []); }, [variables]);
    if (!editor) {
        return null;
    }
    var actionNodes = [];
    if (heading) {
        var headingItems = [
            { value: 1, text: translateFormatting('heading1') },
            { value: 2, text: translateFormatting('heading2') },
            { value: -1, text: translateFormatting('normalText') },
            { value: 3, text: translateFormatting('smallText') }
        ];
        var activeHeadingItem_1 = headingItems[2];
        for (var i = 0, len = headingItems.length; i < len; i++) {
            var headingItem = headingItems[i];
            if (editor.isActive('heading', { level: headingItem.value })) {
                activeHeadingItem_1 = headingItem;
                break;
            }
        }
        actionNodes.push(_jsx(Select, { "aria-label": translateFormatting('textStyle'), className: "text-editor-toolbar__heading-select", isDisabled: isDisabled, isPlain: true, isSearchable: false, items: headingItems, menuWidth: '14rem', onSelectionChange: function (value) {
                if (!value) {
                    return;
                }
                editor
                    .chain()
                    .focus()
                    .toggleHeading({
                    level: (value === -1 ? activeHeadingItem_1.value : value)
                })
                    .run();
            }, renderItemContent: function (optionContentProps) {
                var _a = optionContentProps.item, value = _a.value, text = _a.text;
                var headingClass = headingExtensionClasses[value];
                return (_jsx(SelectOptionContent, __assign({}, optionContentProps, { label: _jsx("span", __assign({ className: headingClass ? headingClass : LABEL_SIZE_LG_CSS_CLASS }, { children: text })) })));
            }, size: Size.xs, text: activeHeadingItem_1.text, value: activeHeadingItem_1.value }, "h"));
    }
    if (actionNodes.length > 0 && (bold || italic || underline)) {
        actionNodes.push(_jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d1"));
    }
    if (bold) {
        actionNodes.push(_jsx(ToolbarButton, { iconName: iconNames.TextB, isActive: editor.isActive('bold'), isDisabled: isDisabled, label: translateFormatting('bold'), onPress: function () { return editor.chain().focus().toggleBold().run(); } }, "b"));
    }
    if (italic) {
        actionNodes.push(_jsx(ToolbarButton, { iconName: iconNames.TextItalic, isActive: editor.isActive('italic'), isDisabled: isDisabled, label: translateFormatting('italic'), onPress: function () { return editor.chain().focus().toggleItalic().run(); } }, "i"));
    }
    if (underline) {
        actionNodes.push(_jsx(ToolbarButton, { iconName: iconNames.TextUnderline, isActive: editor.isActive('underline'), isDisabled: isDisabled, label: translateFormatting('underline'), onPress: function () { return editor.chain().focus().toggleUnderline().run(); } }, "u"));
    }
    if (actionNodes.length > 0 && (orderedList || bulletList)) {
        actionNodes.push(_jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d2"));
    }
    if (orderedList) {
        actionNodes.push(_jsx(ToolbarButton, { iconName: iconNames.FormatListNumbers, isActive: editor.isActive('orderedList'), isDisabled: isDisabled, label: translateFormatting('numberedList'), onPress: function () { return editor.chain().focus().toggleOrderedList().run(); } }, "ol"));
    }
    if (bulletList) {
        actionNodes.push(_jsx(ToolbarButton, { iconName: iconNames.FormatListBullets, isActive: editor.isActive('bulletList'), isDisabled: isDisabled, label: translateFormatting('bulletList'), onPress: function () { return editor.chain().focus().toggleBulletList().run(); } }, "ul"));
    }
    if (actionNodes.length > 0 && link) {
        actionNodes.push(_jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d3"));
    }
    if (link) {
        actionNodes.push(_jsx(RichTextEditorLinkDialog, __assign({ onOpenChange: onModalOpenChange }, { children: _jsx(ToolbarButton, { iconName: iconNames.LinkAlt, isActive: editor.isActive('link'), isDisabled: isDisabled, label: translateFormatting('link') }) }), "a"));
    }
    if (actionNodes.length > 0 && (variableMenuItems === null || variableMenuItems === void 0 ? void 0 : variableMenuItems.length)) {
        actionNodes.push(_jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d4"));
    }
    if (variableMenuItems === null || variableMenuItems === void 0 ? void 0 : variableMenuItems.length) {
        actionNodes.push(_jsx(Menu, __assign({ items: variableMenuItems, onAction: function (key) {
                var itemIdx = getIndexWithPropertyValue('id', key, variableMenuItems);
                if (itemIdx !== -1) {
                    var _a = variableMenuItems[itemIdx], id = _a.id, name_1 = _a.name;
                    editor
                        .chain()
                        .focus()
                        .setVariable({ id: id, label: name_1 })
                        .run();
                }
            } }, { children: _jsx(ToolbarButton, { iconName: iconNames.Variables, isDisabled: isDisabled, label: translateCommon('variable') }) }), "var"));
    }
    return (_jsx("div", __assign({ "aria-controls": editor.view.dom.id, "aria-label": translateFormatting('textFormatting'), className: "text-editor-toolbar", role: "toolbar" }, { children: actionNodes })));
}
//# sourceMappingURL=richtexteditortoolbar.js.map
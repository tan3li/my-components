import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../../utils/classnames.js';
import { Size } from '../../../constants/index.js';
import { Field } from '../common/field/field.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { BubbleMenu, EditorProvider } from '@tiptap/react';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Link from '@tiptap/extension-link';
import { HeadingExtension } from './headingextension.js';
import { RichTextEditorToolbar } from './richtexteditortoolbar.js';
import { Divider } from '../../datadisplay/index.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { safeCall } from '../../../utils/functionhelper.js';
import { useFocusRing, useLabel } from 'react-aria';
import { RichTextEditorLinkPreview } from './richtexteditorlinkpreview.js';
import { VariableExtension } from './variableextension.js';
import { DEFAULT_TOOLBAR_CONFIG } from './toolbarconfig.js';
import { isArray } from '../../../utils/objecthelper.js';
import { EnabledCheckExtension } from './enabledcheckextension.js';
import { useFieldHelpText } from '../../../hooks/usefieldhelptext.js';
import { LabelContext, Provider, TextContext } from 'react-aria-components';
import { SkeletonField } from '../../feedback/skeleton/skeletonfield.js';
function createEditorContent(value, variableToHtmlOptions) {
    var content = value !== null && value !== void 0 ? value : '';
    if (variableToHtmlOptions) {
        content = content.replace(variableToHtmlOptions.regExp, function (substring) {
            var _a = variableToHtmlOptions.getItem(substring), id = _a.id, label = _a.label;
            return "<span data-type=\"variable\" data-id=\"".concat(id, "\" data-label=\"").concat(label, "\"></span>");
        });
    }
    return content;
}
function replaceVariablesWithText(value, variableToTextOptions) {
    return value.replace(/<span data-type="variable"(.*?)><\/span>/gim, function (match) {
        var idMatches = match.match(/data-id="(.*?)"/gim);
        var labelMatches = match.match(/data-label="(.*?)"/gim);
        if ((idMatches === null || idMatches === void 0 ? void 0 : idMatches.length) && (labelMatches === null || labelMatches === void 0 ? void 0 : labelMatches.length)) {
            var id = idMatches[0].split('"')[1];
            var lbl = labelMatches[0].split('"')[1];
            return variableToTextOptions.getText({ id: id, label: lbl });
        }
        return match;
    });
}
function isToolbarVisible(toolbarConfig) {
    for (var key in toolbarConfig) {
        var value = toolbarConfig[key];
        if (isArray(value) ? value.length > 0 : value) {
            return true;
        }
    }
    return false;
}
export function RichTextEditor(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, placeholder = _a.placeholder, ref = _a.ref, showHelpTextIcon = _a.showHelpTextIcon, tooltipContent = _a.tooltipContent, value = _a.value, variableToHtmlOptions = _a.variableToHtmlOptions, variableToTextOptions = _a.variableToTextOptions, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "label", "placeholder", "ref", "showHelpTextIcon", "tooltipContent", "value", "variableToHtmlOptions", "variableToTextOptions"]);
    var _b = useFocusRing({ within: true, isTextInput: false }), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var prevIsFocusedRef = useRef(false);
    var editorRef = useRef(null);
    var _c = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _c.hasError, isReadOnly = _c.isReadOnly, errorMessage = _c.errorMessage;
    var isEditable = !isDisabled && !isReadOnly;
    var _d = useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var propsToolbarConfig = props.toolbarConfig;
    var toolbarConfig = useMemo(function () { return (__assign(__assign({}, DEFAULT_TOOLBAR_CONFIG), propsToolbarConfig)); }, [propsToolbarConfig]);
    var showToolbar = useMemo(function () { return isToolbarVisible(toolbarConfig); }, [toolbarConfig]);
    var _e = useLabel({ label: label, 'aria-label': props['aria-label'] }), fieldProps = _e.fieldProps, labelProps = _e.labelProps;
    var _f = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isInvalid: isInvalid
    }), fieldProps2 = _f.fieldProps, helpTextProps = _f.helpTextProps;
    var onCreate = function (_a) {
        var editor = _a.editor;
        editorRef.current = editor;
        editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
    };
    var onModalOpenChange = function (isOpen) {
        setIsModalOpen(isOpen);
    };
    useEffect(function () {
        var editor = editorRef.current;
        if (editor) {
            // Workaround for flushSync issue with Node views: https://github.com/ueberdosis/tiptap/issues/3764
            queueMicrotask(function () {
                editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
            });
        }
    }, [value]);
    useEffect(function () {
        var _a;
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.setEditable(isEditable);
    }, [isEditable]);
    useEffect(function () {
        var editor = editorRef.current;
        if (editor && isFocused !== prevIsFocusedRef.current && !isFocused && !isModalOpen) {
            var outputValue = editor.getHTML();
            if (variableToTextOptions) {
                outputValue = replaceVariablesWithText(outputValue, variableToTextOptions);
            }
            if (outputValue === '<p></p>') {
                outputValue = '';
            }
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: outputValue }));
        }
        prevIsFocusedRef.current = isFocused;
    }, [isFocused]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (_jsx(SkeletonField, { className: "skeleton-text-editor", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: 148, size: Size.md, style: { minWidth: '21rem' } }));
    }
    return (_jsx(Provider, __assign({ values: [
            [LabelContext, labelProps],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: _jsx("div", __assign({ className: classNames('text-editor-field', className), ref: ref }, { children: _jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: Size.md, tooltipContent: tooltipContent }, { children: _jsx("div", __assign({}, focusProps, { className: "text-editor-wrapper", "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: _jsx(EditorProvider, __assign({ editable: isEditable, editorProps: {
                            attributes: Object.entries(__assign(__assign(__assign({}, fieldProps), fieldProps2), { 'aria-disabled': isDisabled, 'aria-invalid': hasError, 'aria-multiline': true, 'aria-readonly': isReadOnly, 'aria-required': isRequired, class: 'text-editor', role: 'textbox' }))
                                .filter(function (_a) {
                                var val = _a[1];
                                return !!val;
                            })
                                .reduce(function (obj, _a) {
                                var key = _a[0], val = _a[1];
                                obj[key] = val;
                                return obj;
                            }, {})
                        }, extensions: [
                            Document,
                            Paragraph,
                            Text,
                            Placeholder.configure({
                                placeholder: placeholder,
                                showOnlyWhenEditable: false
                            }),
                            HeadingExtension.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.heading
                            }),
                            Bold.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.bold
                            }),
                            Italic.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.italic
                            }),
                            Underline.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.underline
                            }),
                            ListItem,
                            OrderedList.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.orderedList
                            }),
                            BulletList.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.bulletList
                            }),
                            Link.extend({ inclusive: false }).configure({
                                openOnClick: false,
                                autolink: toolbarConfig.link,
                                defaultProtocol: 'https'
                            }),
                            VariableExtension
                        ], onCreate: onCreate, slotBefore: showToolbar ?
                            _jsxs("div", __assign({ className: "text-editor-toolbar-wrapper" }, { children: [_jsx(RichTextEditorToolbar, { config: toolbarConfig, isDisabled: !isEditable, onModalOpenChange: onModalOpenChange }), _jsx(Divider, { size: Size.sm })] }))
                            : null }, { children: _jsx(BubbleMenu, __assign({ className: "text-editor__link-menu", editor: null, shouldShow: function (_a) {
                                var editor = _a.editor;
                                return !!editor.getAttributes('link').href && editor.isFocused;
                            }, tippyOptions: {
                                maxWidth: 400,
                                placement: 'bottom'
                            }, updateDelay: 50 }, { children: _jsx(RichTextEditorLinkPreview, { onOpenChange: onModalOpenChange }) })) })) })) })) })) })));
}
//# sourceMappingURL=richtexteditor.js.map
import {classNames} from '../../../utils/classnames.js';
import {TooltipContent} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {TDataState} from '../../../constants/datastate.js';
import {Field} from '../common/field/field.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {BubbleMenu, Editor, EditorEvents, EditorProvider} from '@tiptap/react';
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
import {HeadingExtension} from './headingextension.js';
import {RichTextEditorToolbar} from './richtexteditortoolbar.js';
import {Divider} from '../../datadisplay/index.js';
import {AnyObject, ChangeArgs} from '../../../hooks/usechangeparamscallback.js';
import {RefAttributes, useEffect, useMemo, useRef, useState} from 'react';
import {safeCall} from '../../../utils/functionhelper.js';
import {useFocusRing, useLabel} from 'react-aria';
import {RichTextEditorLinkPreview} from './richtexteditorlinkpreview.js';
import {VariableExtension} from './variableextension.js';
import {DEFAULT_TOOLBAR_CONFIG, RichTextEditorToolbarConfig, VariableItem} from './toolbarconfig.js';
import {isArray} from '../../../utils/objecthelper.js';
import {EnabledCheckExtension} from './enabledcheckextension.js';
import {useFieldHelpText} from '../../../hooks/usefieldhelptext.js';
import {LabelContext, Provider, TextContext} from 'react-aria-components';
import {SkeletonField} from '../../feedback/skeleton/skeletonfield.js';

interface VariableToHtmlOptions {
    regExp: RegExp;
    getItem: (match: string) => VariableItem;
}

interface VariableToTextOptions {
    getText: (variableItem: VariableItem) => string;
}

export interface RichTextEditorProps<P extends AnyObject> extends RefAttributes<HTMLDivElement> {
    /**
     * Aria-label for the field.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called on blur with current content.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether element is in error.
     */
    isInvalid?: boolean;
    /**
     * Whether value is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Label for the field.
     */
    label?: string;
    /**
     * Placeholder text.
     */
    placeholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Customize which actions are available in the toolbar.
     */
    toolbarConfig?: RichTextEditorToolbarConfig;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Text editor content. Can be provided as HTML-string or plain text string.
     */
    value?: string;
    /**
     * Options for converting text variables to HTML.
     */
    variableToHtmlOptions?: VariableToHtmlOptions;
    /**
     * Options for converting HTML variables to text.
     */
    variableToTextOptions?: VariableToTextOptions;
}

function createEditorContent(value?: string, variableToHtmlOptions?: VariableToHtmlOptions) {
    let content = value ?? '';

    if (variableToHtmlOptions) {
        content = content.replace(variableToHtmlOptions.regExp, (substring) => {
            const {id, label} = variableToHtmlOptions.getItem(substring);

            return `<span data-type="variable" data-id="${id}" data-label="${label}"></span>`;
        });
    }

    return content;
}

function replaceVariablesWithText(value: string, variableToTextOptions: VariableToTextOptions) {
    return value.replace(/<span data-type="variable"(.*?)><\/span>/gim, (match) => {
        const idMatches = match.match(/data-id="(.*?)"/gim);
        const labelMatches = match.match(/data-label="(.*?)"/gim);

        if (idMatches?.length && labelMatches?.length) {
            const id = idMatches[0].split('"')[1];
            const lbl = labelMatches[0].split('"')[1];

            return variableToTextOptions.getText({id, label: lbl});
        }

        return match;
    });
}

function isToolbarVisible(toolbarConfig: RichTextEditorToolbarConfig) {
    for (const key in toolbarConfig) {
        const value = toolbarConfig[key];

        if (isArray(value) ? value.length > 0 : value) {
            return true;
        }
    }

    return false;
}

export function RichTextEditor<P extends AnyObject>({
    changeCallback,
    changeParams,
    className,
    dataState,
    helpText,
    helpTextSuccess,
    isDisabled,
    isInvalid,
    isRequired,
    isSkeleton,
    label,
    placeholder,
    ref,
    showHelpTextIcon,
    tooltipContent,
    value,
    variableToHtmlOptions,
    variableToTextOptions,
    ...props
}: RichTextEditorProps<P>) {
    const {focusProps, isFocused, isFocusVisible} = useFocusRing({within: true, isTextInput: false});
    const prevIsFocusedRef = useRef(false);
    const editorRef = useRef<Editor | null>(null);
    const {hasError, isReadOnly, errorMessage} = useDataState(dataState, isInvalid, props.isReadOnly);
    const isEditable = !isDisabled && !isReadOnly;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const propsToolbarConfig = props.toolbarConfig;
    const toolbarConfig: RichTextEditorToolbarConfig = useMemo(
        () => ({
            ...DEFAULT_TOOLBAR_CONFIG,
            ...propsToolbarConfig
        }),
        [propsToolbarConfig]
    );
    const showToolbar = useMemo(() => isToolbarVisible(toolbarConfig), [toolbarConfig]);
    const {fieldProps, labelProps} = useLabel({label, 'aria-label': props['aria-label']});
    const {fieldProps: fieldProps2, helpTextProps} = useFieldHelpText({
        dataState,
        helpText,
        helpTextSuccess,
        isInvalid
    });

    const onCreate = ({editor}: EditorEvents['create']) => {
        editorRef.current = editor;
        editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
    };

    const onModalOpenChange = (isOpen: boolean) => {
        setIsModalOpen(isOpen);
    };

    useEffect(() => {
        const editor = editorRef.current;

        if (editor) {
            // Workaround for flushSync issue with Node views: https://github.com/ueberdosis/tiptap/issues/3764
            queueMicrotask(() => {
                editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
            });
        }
    }, [value]);

    useEffect(() => {
        editorRef.current?.setEditable(isEditable);
    }, [isEditable]);

    useEffect(() => {
        const editor = editorRef.current;

        if (editor && isFocused !== prevIsFocusedRef.current && !isFocused && !isModalOpen) {
            let outputValue = editor.getHTML();

            if (variableToTextOptions) {
                outputValue = replaceVariablesWithText(outputValue, variableToTextOptions);
            }

            if (outputValue === '<p></p>') {
                outputValue = '';
            }

            safeCall(changeCallback, {...changeParams, value: outputValue} as ChangeArgs<P, string>);
        }

        prevIsFocusedRef.current = isFocused;
    }, [isFocused]);

    if (isSkeleton) {
        const hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;

        return (
            <SkeletonField
                className="skeleton-text-editor"
                hasHelpText={hasAnyHelpText}
                hasLabel={!!label}
                inputRectHeight={148}
                size={Size.md}
                style={{minWidth: '21rem'}}
            />
        );
    }

    return (
        <Provider
            values={[
                [LabelContext, labelProps],
                [TextContext, {slots: {description: helpTextProps}}]
            ]}>
            <div className={classNames('text-editor-field', className)} ref={ref}>
                <Field
                    dataState={dataState}
                    helpText={helpText}
                    helpTextSuccess={helpTextSuccess}
                    isDisabled={isDisabled}
                    isInvalid={hasError}
                    isRequired={isRequired}
                    label={label}
                    showHelpTextIcon={showHelpTextIcon}
                    size={Size.md}
                    tooltipContent={tooltipContent}>
                    <div
                        {...focusProps}
                        className="text-editor-wrapper"
                        data-disabled={!!isDisabled || undefined}
                        data-focus-visible={isFocusVisible || undefined}
                        data-focused={isFocused || undefined}
                        data-invalid={!!hasError || undefined}
                        data-readonly={!!isReadOnly || undefined}>
                        <EditorProvider
                            editable={isEditable}
                            editorProps={{
                                attributes: Object.entries({
                                    ...fieldProps,
                                    ...fieldProps2,
                                    'aria-disabled': isDisabled,
                                    'aria-invalid': hasError,
                                    'aria-multiline': true,
                                    'aria-readonly': isReadOnly,
                                    'aria-required': isRequired,
                                    class: 'text-editor',
                                    role: 'textbox'
                                })
                                    .filter(([, val]) => !!val)
                                    .reduce((obj, [key, val]) => {
                                        obj[key] = val;

                                        return obj;
                                    }, {})
                            }}
                            extensions={[
                                Document,
                                Paragraph,
                                Text,
                                Placeholder.configure({
                                    placeholder,
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
                                Link.extend({inclusive: false}).configure({
                                    openOnClick: false,
                                    autolink: toolbarConfig.link,
                                    defaultProtocol: 'https'
                                }),
                                VariableExtension
                            ]}
                            onCreate={onCreate}
                            slotBefore={
                                showToolbar ?
                                    <div className="text-editor-toolbar-wrapper">
                                        <RichTextEditorToolbar
                                            config={toolbarConfig}
                                            isDisabled={!isEditable}
                                            onModalOpenChange={onModalOpenChange}
                                        />
                                        <Divider size={Size.sm} />
                                    </div>
                                :   null
                            }>
                            <BubbleMenu
                                className="text-editor__link-menu"
                                editor={null}
                                shouldShow={({editor}) => !!editor.getAttributes('link').href && editor.isFocused}
                                tippyOptions={{
                                    maxWidth: 400,
                                    placement: 'bottom'
                                }}
                                updateDelay={50}>
                                <RichTextEditorLinkPreview onOpenChange={onModalOpenChange} />
                            </BubbleMenu>
                        </EditorProvider>
                    </div>
                </Field>
            </div>
        </Provider>
    );
}

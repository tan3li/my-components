import {AlertModal} from '../../feedback/index.js';
import {Size} from '../../../constants/index.js';
import {TextField} from '../textfield/index.js';
import {ReactNode, useState} from 'react';
import {useCurrentEditor} from '@tiptap/react';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {DialogTrigger} from '../../action/popover/index.js';

interface RichTextEditorLinkDialogProps {
    children: ReactNode;
    onOpenChange?: (isOpen: boolean) => void;
}

export function RichTextEditorLinkDialog({children, onOpenChange}: RichTextEditorLinkDialogProps) {
    const {editor} = useCurrentEditor();
    const [selectedLinkText, setSelectedLinkText] = useState('');
    const [selectedLinkUrl, setSelectedLinkUrl] = useState('');
    const translateCommon = useTranslateCommon();

    if (!editor) {
        return null;
    }

    return (
        <DialogTrigger
            onOpenChange={(isOpen) => {
                if (isOpen) {
                    const currentUrl = editor.getAttributes('link').href;

                    if (currentUrl) {
                        setSelectedLinkUrl(currentUrl);
                        editor.commands.extendMarkRange('link');
                    }

                    const {view, state} = editor;
                    const {from, to} = view.state.selection;
                    const selectedText = state.doc.textBetween(from, to);

                    if (selectedText !== currentUrl) {
                        setSelectedLinkText(selectedText);
                    }
                } else {
                    setSelectedLinkText('');
                    setSelectedLinkUrl('');
                    editor.chain().focus(editor.view.state.selection.to).run();
                }

                safeCall(onOpenChange, isOpen);
            }}>
            {children}
            <AlertModal
                primaryAction={{
                    onPress: (closeCallback) => {
                        let commands = editor.chain().focus().extendMarkRange('link');

                        if (selectedLinkUrl) {
                            commands = commands
                                .deleteSelection()
                                .setLink({href: selectedLinkUrl})
                                .command(({tr}) => {
                                    tr.insertText(selectedLinkText || selectedLinkUrl);

                                    return true;
                                });
                        } else {
                            commands = commands.unsetLink();
                        }

                        commands.run();
                        closeCallback();
                    },
                    label: translateCommon('save')
                }}
                secondaryAction={{
                    onPress: (closeCallback) => {
                        closeCallback();
                    },
                    label: translateCommon('cancel')
                }}
                size={Size.sm}
                title={translateCommon('addLink')}>
                <div className="link-modal__body">
                    <TextField
                        autoFocus={!selectedLinkText}
                        label={translateCommon('textToDisplay')}
                        onChange={setSelectedLinkText}
                        placeholder={translateCommon('enterDisplayText')}
                        value={selectedLinkText}
                    />
                    <TextField
                        autoFocus={!!selectedLinkText}
                        label="URL"
                        onChange={setSelectedLinkUrl}
                        placeholder="https://example.com/"
                        value={selectedLinkUrl}
                    />
                </div>
            </AlertModal>
        </DialogTrigger>
    );
}

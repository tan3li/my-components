import {useCurrentEditor} from '@tiptap/react';
import {Label, LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {Orientation, Size} from '../../../constants/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {Divider} from '../../datadisplay/index.js';
import {RichTextEditorLinkDialog} from './richtexteditorlinkdialog.js';

interface RichTextEditorLinkPreviewProps {
    onOpenChange?: (isOpen: boolean) => void;
}

export function RichTextEditorLinkPreview({onOpenChange}: RichTextEditorLinkPreviewProps) {
    const {editor} = useCurrentEditor();
    const translateCommon = useTranslateCommon();

    if (!editor) {
        return null;
    }

    const url = editor.getAttributes('link').href;

    return (
        <div className="text-editor__link-preview">
            <Label size={Size.md}>{translateCommon('visitURL')}</Label>
            <a
                className={`text-editor__link ${LABEL_SIZE_MD_CSS_CLASS}`}
                href={url}
                rel="noopener noreferrer nofollow"
                target="_blank"
                title={url}>
                {url}
            </a>
            <RichTextEditorLinkDialog onOpenChange={onOpenChange}>
                <Button size={Size.md} style={ButtonStyle.Plain} variant={ButtonVariant.Neutral}>
                    {translateCommon('edit')}
                </Button>
            </RichTextEditorLinkDialog>
            <Divider orientation={Orientation.vertical} size={Size.sm} />
            <Button
                onPress={() => {
                    editor.chain().focus().extendMarkRange('link').unsetLink().run();
                }}
                size={Size.md}
                style={ButtonStyle.Plain}
                variant={ButtonVariant.Danger}>
                {translateCommon('remove')}
            </Button>
        </div>
    );
}

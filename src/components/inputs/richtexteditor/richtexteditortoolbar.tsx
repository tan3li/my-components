import {useCurrentEditor} from '@tiptap/react';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';
import {ButtonStyle, ButtonVariant, IconButton, Menu, MenuItem} from '../../action/index.js';
import {IconName, iconNames} from '../../media/index.js';
import {Orientation, Size} from '../../../constants/index.js';
import {useTranslateFormatting} from '../../../hooks/translations/usetranslateformatting.js';
import {Select, SelectItem} from '../select/index.js';
import {Level} from '@tiptap/extension-heading';
import {Divider} from '../../datadisplay/index.js';
import {LABEL_SIZE_LG_CSS_CLASS} from '../../text/index.js';
import {headingExtensionClasses} from './headingextension.js';
import {ReactNode, useMemo} from 'react';
import {RichTextEditorLinkDialog} from './richtexteditorlinkdialog.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {RichTextEditorToolbarConfig} from './toolbarconfig.js';
import {SelectOptionContent} from '../select/selectoptioncontent.js';

interface ToolbarButtonProps {
    iconName: IconName;
    isActive?: boolean;
    isDisabled?: boolean;
    label: string;
    onPress?: () => void;
}

function ToolbarButton({iconName, isActive, isDisabled, label, onPress}: ToolbarButtonProps) {
    return (
        <TooltipTrigger>
            <IconButton
                aria-label={label}
                iconName={iconName}
                isDisabled={isDisabled}
                onPress={onPress}
                size={Size.sm}
                style={isActive ? ButtonStyle.Fill : ButtonStyle.Plain}
                variant={ButtonVariant.Neutral}
            />
            <Tooltip type={TooltipType.Plain}>{label}</Tooltip>
        </TooltipTrigger>
    );
}

interface RichTextEditorToolbarProps {
    config?: RichTextEditorToolbarConfig;
    isDisabled?: boolean;
    onModalOpenChange?: (isOpen: boolean) => void;
}

// eslint-disable-next-line max-statements,complexity
export function RichTextEditorToolbar({isDisabled, onModalOpenChange, ...props}: RichTextEditorToolbarProps) {
    const {editor} = useCurrentEditor();
    const translateFormatting = useTranslateFormatting();
    const translateCommon = useTranslateCommon();
    const {heading, bold, italic, underline, orderedList, bulletList, link, variables}: RichTextEditorToolbarConfig =
        props.config ?? {};
    const variableMenuItems: MenuItem[] = useMemo(
        () => (variables ? variables.map(({id, label}) => ({id, name: label})) : []),
        [variables]
    );

    if (!editor) {
        return null;
    }

    const actionNodes: ReactNode[] = [];

    if (heading) {
        const headingItems: Array<SelectItem<number>> = [
            {value: 1, text: translateFormatting('heading1')},
            {value: 2, text: translateFormatting('heading2')},
            {value: -1, text: translateFormatting('normalText')},
            {value: 3, text: translateFormatting('smallText')}
        ];
        let activeHeadingItem: SelectItem<number> = headingItems[2];

        for (let i = 0, len = headingItems.length; i < len; i++) {
            const headingItem = headingItems[i];

            if (editor.isActive('heading', {level: headingItem.value})) {
                activeHeadingItem = headingItem;
                break;
            }
        }

        actionNodes.push(
            <Select
                aria-label={translateFormatting('textStyle')}
                className="text-editor-toolbar__heading-select"
                isDisabled={isDisabled}
                isPlain={true}
                isSearchable={false}
                items={headingItems}
                key="h"
                menuWidth={'14rem'}
                onSelectionChange={(value) => {
                    if (!value) {
                        return;
                    }

                    editor
                        .chain()
                        .focus()
                        .toggleHeading({
                            level: (value === -1 ? activeHeadingItem.value : value) as Level
                        })
                        .run();
                }}
                renderItemContent={(optionContentProps) => {
                    const {value, text} = optionContentProps.item;
                    const headingClass = headingExtensionClasses[value];

                    return (
                        <SelectOptionContent
                            {...optionContentProps}
                            label={
                                <span className={headingClass ? headingClass : LABEL_SIZE_LG_CSS_CLASS}>{text}</span>
                            }
                        />
                    );
                }}
                size={Size.xs}
                text={activeHeadingItem.text}
                value={activeHeadingItem.value}
            />
        );
    }

    if (actionNodes.length > 0 && (bold || italic || underline)) {
        actionNodes.push(<Divider key="d1" orientation={Orientation.vertical} size={Size.sm} />);
    }

    if (bold) {
        actionNodes.push(
            <ToolbarButton
                iconName={iconNames.TextB}
                isActive={editor.isActive('bold')}
                isDisabled={isDisabled}
                key="b"
                label={translateFormatting('bold')}
                onPress={() => editor.chain().focus().toggleBold().run()}
            />
        );
    }
    if (italic) {
        actionNodes.push(
            <ToolbarButton
                iconName={iconNames.TextItalic}
                isActive={editor.isActive('italic')}
                isDisabled={isDisabled}
                key="i"
                label={translateFormatting('italic')}
                onPress={() => editor.chain().focus().toggleItalic().run()}
            />
        );
    }
    if (underline) {
        actionNodes.push(
            <ToolbarButton
                iconName={iconNames.TextUnderline}
                isActive={editor.isActive('underline')}
                isDisabled={isDisabled}
                key="u"
                label={translateFormatting('underline')}
                onPress={() => editor.chain().focus().toggleUnderline().run()}
            />
        );
    }

    if (actionNodes.length > 0 && (orderedList || bulletList)) {
        actionNodes.push(<Divider key="d2" orientation={Orientation.vertical} size={Size.sm} />);
    }

    if (orderedList) {
        actionNodes.push(
            <ToolbarButton
                iconName={iconNames.FormatListNumbers}
                isActive={editor.isActive('orderedList')}
                isDisabled={isDisabled}
                key="ol"
                label={translateFormatting('numberedList')}
                onPress={() => editor.chain().focus().toggleOrderedList().run()}
            />
        );
    }
    if (bulletList) {
        actionNodes.push(
            <ToolbarButton
                iconName={iconNames.FormatListBullets}
                isActive={editor.isActive('bulletList')}
                isDisabled={isDisabled}
                key="ul"
                label={translateFormatting('bulletList')}
                onPress={() => editor.chain().focus().toggleBulletList().run()}
            />
        );
    }

    if (actionNodes.length > 0 && link) {
        actionNodes.push(<Divider key="d3" orientation={Orientation.vertical} size={Size.sm} />);
    }

    if (link) {
        actionNodes.push(
            <RichTextEditorLinkDialog key="a" onOpenChange={onModalOpenChange}>
                <ToolbarButton
                    iconName={iconNames.LinkAlt}
                    isActive={editor.isActive('link')}
                    isDisabled={isDisabled}
                    label={translateFormatting('link')}
                />
            </RichTextEditorLinkDialog>
        );
    }

    if (actionNodes.length > 0 && variableMenuItems?.length) {
        actionNodes.push(<Divider key="d4" orientation={Orientation.vertical} size={Size.sm} />);
    }

    if (variableMenuItems?.length) {
        actionNodes.push(
            <Menu
                items={variableMenuItems}
                key="var"
                onAction={(key) => {
                    const itemIdx = getIndexWithPropertyValue('id', key, variableMenuItems);

                    if (itemIdx !== -1) {
                        const {id, name} = variableMenuItems[itemIdx];

                        editor
                            .chain()
                            .focus()
                            .setVariable({id: id as string, label: name})
                            .run();
                    }
                }}>
                <ToolbarButton
                    iconName={iconNames.Variables}
                    isDisabled={isDisabled}
                    label={translateCommon('variable')}
                />
            </Menu>
        );
    }

    return (
        <div
            aria-controls={editor.view.dom.id}
            aria-label={translateFormatting('textFormatting')}
            className="text-editor-toolbar"
            role="toolbar">
            {actionNodes}
        </div>
    );
}

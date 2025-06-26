import {NodeViewWrapper} from '@tiptap/react';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {NodeViewRendererProps} from '@tiptap/core';
import {HTMLElementType, Size} from '../../../constants/index.js';
import {Label} from '../../text/index.js';

export function Variable(props: NodeViewRendererProps) {
    return (
        <NodeViewWrapper as={HTMLElementType.Span} className="text-editor-variable">
            <Icon name={iconNames.Variables} size={IconSize.SM} />
            <Label size={Size.sm}>
                <strong>{props.node.attrs['data-label']}</strong>
            </Label>
        </NodeViewWrapper>
    );
}

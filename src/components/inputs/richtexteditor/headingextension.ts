import BaseHeading from '@tiptap/extension-heading';
import {mergeAttributes} from '@tiptap/react';
import {HEADING_SIZE_SM_CSS_CLASS, HEADING_SIZE_XS_CSS_CLASS, LABEL_SIZE_SM_CSS_CLASS} from '../../text/index.js';

type HeadingLevels = 1 | 2 | 3;

export const headingExtensionClasses: Record<HeadingLevels, string> = {
    1: HEADING_SIZE_SM_CSS_CLASS,
    2: HEADING_SIZE_XS_CSS_CLASS,
    3: LABEL_SIZE_SM_CSS_CLASS
};

export const HeadingExtension = BaseHeading.configure({
    levels: [1, 2, 3]
}).extend({
    renderHTML({node, HTMLAttributes}) {
        const hasLevel = this.options.levels.includes(node.attrs.level);
        const level: HeadingLevels = hasLevel ? node.attrs.level : this.options.levels[0];

        return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    }
});

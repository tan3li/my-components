import {DATA_ATTRIBUTES} from './constants.js';

export function addDataAttributes(selector: string, attributes: string[]) {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;

    const iframeDocument = iframe.contentDocument ?? iframe.contentWindow?.document;
    const elements = iframeDocument?.querySelectorAll(selector) ?? [];

    elements.forEach((element) => {
        Object.values(DATA_ATTRIBUTES).forEach((attribute) => {
            element.removeAttribute(attribute);
        });
        attributes.forEach((attribute) => {
            element.setAttribute(DATA_ATTRIBUTES[attribute], 'true');
        });
    });
}

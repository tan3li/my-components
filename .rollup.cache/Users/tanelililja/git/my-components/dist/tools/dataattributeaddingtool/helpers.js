import { DATA_ATTRIBUTES } from './constants.js';
export function addDataAttributes(selector, attributes) {
    var _a, _b, _c;
    var iframe = document.getElementById('storybook-preview-iframe');
    var iframeDocument = (_a = iframe.contentDocument) !== null && _a !== void 0 ? _a : (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.document;
    var elements = (_c = iframeDocument === null || iframeDocument === void 0 ? void 0 : iframeDocument.querySelectorAll(selector)) !== null && _c !== void 0 ? _c : [];
    elements.forEach(function (element) {
        Object.values(DATA_ATTRIBUTES).forEach(function (attribute) {
            element.removeAttribute(attribute);
        });
        attributes.forEach(function (attribute) {
            element.setAttribute(DATA_ATTRIBUTES[attribute], 'true');
        });
    });
}
//# sourceMappingURL=helpers.js.map
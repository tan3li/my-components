import { useOf } from '@storybook/addon-docs/blocks';
export function Design(props) {
    var _a, _b;
    var of = props.of;
    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?');
    }
    var preparedMeta = useOf(of !== null && of !== void 0 ? of : 'meta', ['meta']).preparedMeta;
    return (_b = (_a = preparedMeta.parameters.docs).design) === null || _b === void 0 ? void 0 : _b.call(_a);
}
//# sourceMappingURL=design.js.map
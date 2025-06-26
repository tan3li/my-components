import {Of, useOf} from '@storybook/addon-docs/blocks';

interface DesignProps {
    of?: Of;
}

export function Design(props: DesignProps) {
    const {of} = props;

    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?');
    }

    const preparedMeta = useOf(of ?? 'meta', ['meta']).preparedMeta;

    return preparedMeta.parameters.docs.design?.();
}

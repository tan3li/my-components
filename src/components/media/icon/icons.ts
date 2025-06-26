import * as SvgComponents from '../../../icons/index.js';

interface IconMappings<T> {
    iconNames: {
        [K in keyof T]: K;
    };
    icons: {
        [K in keyof T]: T[K];
    };
}

function createIconMappings<T extends object>(components: T): IconMappings<T> {
    const mappings: IconMappings<T> = {
        iconNames: {} as any,
        icons: {} as any
    };

    for (const name of Object.keys(components)) {
        mappings.iconNames[name] = name;
        mappings.icons[name] = components[name];
    }

    return mappings;
}

export const {iconNames, icons} = createIconMappings(SvgComponents);

export type IconName = (typeof iconNames)[keyof typeof iconNames];

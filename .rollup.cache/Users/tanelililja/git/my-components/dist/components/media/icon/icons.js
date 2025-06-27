var _a;
import * as SvgComponents from '../../../icons/index.js';
function createIconMappings(components) {
    var mappings = {
        iconNames: {},
        icons: {}
    };
    for (var _i = 0, _a = Object.keys(components); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        mappings.iconNames[name_1] = name_1;
        mappings.icons[name_1] = components[name_1];
    }
    return mappings;
}
export var iconNames = (_a = createIconMappings(SvgComponents), _a.iconNames), icons = _a.icons;
//# sourceMappingURL=icons.js.map
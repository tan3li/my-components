import { addons } from 'storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants.js';
import { DataAttributeAddingTool } from './dataattributeaddingtool.js';
// eslint-disable-next-line camelcase
import { Addon_TypesEnum } from 'storybook/internal/types';
addons.register(ADDON_ID, function () {
    addons.add(TOOL_ID, {
        // eslint-disable-next-line camelcase
        type: Addon_TypesEnum.TOOL,
        title: 'Add data-attributes to component to show pseudo-states',
        match: function (_a) {
            var viewMode = _a.viewMode;
            return viewMode === 'story';
        },
        render: DataAttributeAddingTool
    });
});
//# sourceMappingURL=manager.js.map
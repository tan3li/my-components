import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
// @ts-expect-error TS6133 React needs to be imported
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCallback, useEffect } from 'react';
import { ButtonIcon, CheckIcon } from '@storybook/icons';
import { IconButton, WithTooltip, TooltipLinkList } from 'storybook/internal/components';
import { useGlobals, useParameter } from 'storybook/manager-api';
import { styled, color } from 'storybook/theming';
import { DATA_ATTRIBUTE_PARAM_KEY, DATA_ATTRIBUTES } from './constants.js';
import { addDataAttributes } from './helpers.js';
var LinkTitle = styled.span(function (_a) {
    var active = _a.active;
    return ({
        color: active ? color.secondary : 'inherit'
    });
});
var LinkIcon = styled(CheckIcon)(function (_a) {
    var active = _a.active;
    return ({
        opacity: active ? 1 : 0,
        path: { fill: active ? color.secondary : 'inherit' }
    });
});
var options = Object.keys(DATA_ATTRIBUTES).sort(function (a, b) { return a.localeCompare(b); });
export var DataAttributeAddingTool = function () {
    var _a = useGlobals(), globals = _a[0], updateGlobals = _a[1];
    var dataAttributeParams = useParameter(DATA_ATTRIBUTE_PARAM_KEY, {
        querySelector: null
    });
    var dataAttribute = globals[DATA_ATTRIBUTE_PARAM_KEY];
    var isActive = useCallback(function (option) {
        if (!dataAttribute) {
            return false;
        }
        return dataAttribute[option] === true;
    }, [dataAttribute]);
    var toggleOption = useCallback(function (option) { return function () {
        var _a, _b;
        var isDataAttributeActive = !isActive(option);
        updateGlobals((_a = {},
            _a[DATA_ATTRIBUTE_PARAM_KEY] = __assign(__assign({}, dataAttribute), (_b = {}, _b[option] = isDataAttributeActive, _b)),
            _a));
    }; }, [dataAttribute]);
    useEffect(function () {
        var dataAttributes = Object.keys(dataAttribute !== null && dataAttribute !== void 0 ? dataAttribute : {}).filter(function (key) { return dataAttribute[key] === true; });
        if (dataAttributeParams.querySelector) {
            addDataAttributes(dataAttributeParams.querySelector, dataAttributes);
        }
    }, [dataAttribute]);
    var renderTooltip = function () { return (_jsx(TooltipLinkList, { links: options.map(function (option) { return ({
            id: option,
            title: _jsx(LinkTitle, __assign({ active: isActive(option) }, { children: option })),
            right: _jsx(LinkIcon, { active: isActive(option), height: 12, width: 12 }),
            onClick: toggleOption(option),
            active: isActive(option)
        }); }) })); };
    return dataAttributeParams.querySelector ?
        _jsx(WithTooltip, __assign({ placement: "top", tooltip: renderTooltip, trigger: "click" }, { children: _jsx(IconButton, __assign({ active: options.some(isActive), title: "Select data-attribute to be given to the component" }, { children: _jsx(ButtonIcon, {}) }), "data-attribute-tool") }))
        : null;
};
//# sourceMappingURL=dataattributeaddingtool.js.map
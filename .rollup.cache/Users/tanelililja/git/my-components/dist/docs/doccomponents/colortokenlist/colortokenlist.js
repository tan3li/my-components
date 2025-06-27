import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './colortokenlist.scss';
import { Size } from '../../../constants/size.js';
import { kebabCase, splitSeparateNumbers } from 'change-case';
import { createDataTableColumnHelper, DataTable, DataTableTextCell, Heading, Tabs } from '../../../components/index.js';
import { Alignment } from '../../../constants/index.js';
import { TextWithCopyToClipboard } from '../textwithcopytoclipboard/textwithcopytoclipboard.js';
function ColorTokenProperty(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var text = props.getValue();
    return (_jsx(TextWithCopyToClipboard, __assign({ text: text }, { children: _jsx(DataTableTextCell, __assign({ className: className }, props)) })));
}
var columnHelper = createDataTableColumnHelper();
var columns = [
    columnHelper.accessor('value', {
        id: 'sample',
        header: 'Sample',
        cell: function (props) { return _jsx("div", { className: "color-token-sample", style: { backgroundColor: props.getValue() } }); },
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '10%'
            }
        },
        enableSorting: false
    }),
    columnHelper.accessor('variableName', {
        id: 'variableName',
        header: 'Token',
        cell: function (props) { return _jsx(ColorTokenProperty, __assign({ className: "color-token-variable" }, props)); },
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '45%'
            }
        },
        enableSorting: false
    }),
    columnHelper.accessor('reference', {
        id: 'reference',
        header: 'Reference',
        cell: ColorTokenProperty,
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '30%'
            }
        },
        enableSorting: false
    }),
    columnHelper.accessor('value', {
        id: 'value',
        header: 'Value',
        cell: ColorTokenProperty,
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '15%'
            }
        },
        enableSorting: false
    })
];
function renderColorItems(colorItems) {
    return (_jsx("div", __assign({ className: "color-tokens-wrapper" }, { children: colorItems.length === 0 ? 'No tokens' : _jsx(DataTable, { columns: columns, data: colorItems }) })));
}
export function ColorTokenList(_a) {
    var getGroup = _a.getGroup, groupOrder = _a.groupOrder, title = _a.title, tokens = _a.tokens;
    var colorItems = [];
    var groupedColorItems = new Map();
    for (var tokenKey in tokens) {
        var token = tokens[tokenKey];
        var reference = token.reference, value = token.value;
        var kebabCaseTokenName = kebabCase(tokenKey, { split: splitSeparateNumbers });
        var colorItem = {
            name: kebabCaseTokenName,
            variableName: "--".concat(kebabCaseTokenName),
            value: value,
            reference: reference
        };
        if (getGroup) {
            var group = getGroup(tokenKey, token);
            var groupItems = groupedColorItems.get(group);
            if (groupItems) {
                groupItems.push(colorItem);
            }
            else {
                groupedColorItems.set(group, [colorItem]);
            }
        }
        else {
            colorItems.push(colorItem);
        }
    }
    var content;
    if (groupedColorItems.size) {
        var panelItems_1 = [];
        var tabItems_1 = [];
        groupedColorItems.forEach(function (colorItemArr, group) {
            tabItems_1.push({ id: group, name: group });
            panelItems_1.push({ id: group, content: renderColorItems(colorItemArr) });
        });
        if (groupOrder) {
            tabItems_1.sort(function (a, b) { return groupOrder.indexOf(a.name) - groupOrder.indexOf(b.name); });
        }
        content = _jsx(Tabs, { panelItems: panelItems_1, tabItems: tabItems_1 });
    }
    else {
        content = renderColorItems(colorItems);
    }
    return (_jsxs("div", __assign({ className: "sb-unstyled" }, { children: [_jsx(Heading, __assign({ level: 2, size: Size.sm }, { children: title })), content] })));
}
//# sourceMappingURL=colortokenlist.js.map
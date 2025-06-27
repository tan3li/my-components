import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createDataTableColumnHelper, DataTable, DataTableTextCell } from '../../../components/index.js';
import { Alignment } from '../../../constants/index.js';
import { parsePixelValue } from '../../../utils/cssunithelper.js';
import { kebabCase, splitSeparateNumbers } from 'change-case';
import { TextWithCopyToClipboard } from '../textwithcopytoclipboard/textwithcopytoclipboard.js';
var columnHelper = createDataTableColumnHelper();
var spacingColumns = [
    columnHelper.accessor('token', {
        id: 'token',
        header: 'Token',
        cell: function (props) {
            var text = kebabCase(props.getValue(), {
                split: function (val) {
                    var words = [];
                    splitSeparateNumbers(val).forEach(function (word) {
                        var prevIdx = words.length - 1;
                        var prevWord = words[prevIdx];
                        if (prevWord && !isNaN(parseFloat(prevWord))) {
                            words[prevIdx] += word;
                        }
                        else {
                            words.push(word);
                        }
                    });
                    return words;
                }
            });
            return (_jsx(TextWithCopyToClipboard, __assign({ text: text }, { children: _jsx(DataTableTextCell, __assign({}, props, { children: _jsx("strong", { children: text }) })) })));
        },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('value', {
        id: 'value',
        header: 'Value',
        cell: function (props) {
            var remValue = props.getValue();
            var pxValue = "".concat(parsePixelValue(remValue), "px");
            return _jsx(DataTableTextCell, __assign({}, props, { children: "".concat(remValue, " / ").concat(pxValue) }));
        },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('value', {
        id: 'sample',
        header: 'Sample',
        cell: function (props) { return (_jsx("div", { style: { background: 'var(--neutral-background-strong)', height: '1.5rem', width: props.getValue() } })); },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    })
];
export function SpacingTable(props) {
    return (_jsx("div", __assign({ className: "sb-unstyled", style: { margin: '1rem 0 3rem' } }, { children: _jsx(DataTable, __assign({}, props, { columns: spacingColumns })) })));
}
//# sourceMappingURL=spacingtable.js.map
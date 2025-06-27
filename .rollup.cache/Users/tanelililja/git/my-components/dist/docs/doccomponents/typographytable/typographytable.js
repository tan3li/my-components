import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createDataTableColumnHelper, DataTable, DataTableTextCell } from '../../../components/index.js';
import { Alignment } from '../../../constants/index.js';
var columnHelper = createDataTableColumnHelper();
var typographyColumns = [
    columnHelper.accessor('token', {
        id: 'token',
        header: 'Token',
        cell: function (props) { return (_jsx(DataTableTextCell, __assign({}, props, { children: _jsx("strong", { children: props.getValue() }) }))); },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('sample', {
        id: 'sample',
        header: 'Example text',
        cell: function (props) { return props.getValue(); },
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '50%'
            }
        },
        enableSorting: false
    }),
    columnHelper.accessor('usage', {
        id: 'usage',
        header: 'Usage',
        cell: DataTableTextCell,
        meta: {
            alignment: Alignment.start,
            headerStyle: {
                width: '25%'
            }
        },
        enableSorting: false
    })
];
export function TypographyTable(props) {
    return (_jsx("div", __assign({ className: "sb-unstyled", style: { color: 'var(--neutral-text-strong)', margin: '1rem 0 3rem' } }, { children: _jsx(DataTable, __assign({}, props, { columns: typographyColumns })) })));
}
//# sourceMappingURL=typographytable.js.map
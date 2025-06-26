import {createDataTableColumnHelper, DataTable, DataTableTextCell} from '../../../components/index.js';
import {Alignment} from '../../../constants/index.js';
import {TypographyItem} from './typographydata.js';

const columnHelper = createDataTableColumnHelper<TypographyItem>();

const typographyColumns = [
    columnHelper.accessor('token', {
        id: 'token',
        header: 'Token',
        cell: (props) => (
            <DataTableTextCell {...props}>
                <strong>{props.getValue()}</strong>
            </DataTableTextCell>
        ),
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('sample', {
        id: 'sample',
        header: 'Example text',
        cell: (props) => props.getValue(),
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

interface TypographyTableProps {
    data: TypographyItem[];
}

export function TypographyTable(props: TypographyTableProps) {
    return (
        <div className="sb-unstyled" style={{color: 'var(--neutral-text-strong)', margin: '1rem 0 3rem'}}>
            <DataTable {...props} columns={typographyColumns} />
        </div>
    );
}

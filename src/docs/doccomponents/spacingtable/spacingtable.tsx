import {createDataTableColumnHelper, DataTable, DataTableTextCell} from '../../../components/index.js';
import {Alignment} from '../../../constants/index.js';
import {parsePixelValue} from '../../../utils/cssunithelper.js';
import {kebabCase, splitSeparateNumbers} from 'change-case';
import {TextWithCopyToClipboard} from '../textwithcopytoclipboard/textwithcopytoclipboard.js';

interface SpacingItem {
    token: string;
    value: string;
}

const columnHelper = createDataTableColumnHelper<SpacingItem>();

const spacingColumns = [
    columnHelper.accessor('token', {
        id: 'token',
        header: 'Token',
        cell: (props) => {
            const text = kebabCase(props.getValue(), {
                split: (val) => {
                    const words: string[] = [];

                    splitSeparateNumbers(val).forEach((word) => {
                        const prevIdx = words.length - 1;
                        const prevWord = words[prevIdx];

                        if (prevWord && !isNaN(parseFloat(prevWord))) {
                            words[prevIdx] += word;
                        } else {
                            words.push(word);
                        }
                    });

                    return words;
                }
            });

            return (
                <TextWithCopyToClipboard text={text}>
                    <DataTableTextCell {...props}>
                        <strong>{text}</strong>
                    </DataTableTextCell>
                </TextWithCopyToClipboard>
            );
        },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('value', {
        id: 'value',
        header: 'Value',
        cell: (props) => {
            const remValue = props.getValue();
            const pxValue = `${parsePixelValue(remValue)}px`;

            return <DataTableTextCell {...props}>{`${remValue} / ${pxValue}`}</DataTableTextCell>;
        },
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    }),
    columnHelper.accessor('value', {
        id: 'sample',
        header: 'Sample',
        cell: (props) => (
            <div style={{background: 'var(--neutral-background-strong)', height: '1.5rem', width: props.getValue()}} />
        ),
        meta: {
            alignment: Alignment.start
        },
        enableSorting: false
    })
];

interface SpacingTableProps {
    data: SpacingItem[];
}

export function SpacingTable(props: SpacingTableProps) {
    return (
        <div className="sb-unstyled" style={{margin: '1rem 0 3rem'}}>
            <DataTable {...props} columns={spacingColumns} />
        </div>
    );
}

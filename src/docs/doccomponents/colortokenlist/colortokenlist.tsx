import './colortokenlist.scss';
import {Size} from '../../../constants/size.js';
import {kebabCase, splitSeparateNumbers} from 'change-case';
import {
    createDataTableColumnHelper,
    DataTable,
    DataTableTextCell,
    Heading,
    PanelItem,
    TabItem,
    Tabs
} from '../../../components/index.js';
import {ReactNode} from 'react';
import {Alignment} from '../../../constants/index.js';
import {CellContext} from '@tanstack/table-core';
import {TextWithCopyToClipboard} from '../textwithcopytoclipboard/textwithcopytoclipboard.js';

interface ColorItem {
    name: string;
    variableName: string;
    value: string;
    reference?: string;
}

interface Token {
    reference: string;
    value: string;
}

interface ColorTokenListProps {
    getGroup?: (tokenKey: string, token: Token) => string;
    groupOrder?: string[];
    title: string;
    tokens: {
        [key: string]: Token;
    };
}

interface ColorTokenPropertyProps<TData> extends CellContext<TData, any> {
    className?: string;
}

function ColorTokenProperty<TData>({className, ...props}: ColorTokenPropertyProps<TData>) {
    const text = props.getValue();

    return (
        <TextWithCopyToClipboard text={text}>
            <DataTableTextCell className={className} {...props} />
        </TextWithCopyToClipboard>
    );
}

const columnHelper = createDataTableColumnHelper<ColorItem>();
const columns = [
    columnHelper.accessor('value', {
        id: 'sample',
        header: 'Sample',
        cell: (props) => <div className="color-token-sample" style={{backgroundColor: props.getValue()}} />,
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
        cell: (props) => <ColorTokenProperty className="color-token-variable" {...props} />,
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

function renderColorItems(colorItems: ColorItem[]) {
    return (
        <div className="color-tokens-wrapper">
            {colorItems.length === 0 ? 'No tokens' : <DataTable columns={columns} data={colorItems} />}
        </div>
    );
}

export function ColorTokenList({getGroup, groupOrder, title, tokens}: ColorTokenListProps) {
    const colorItems: ColorItem[] = [];
    const groupedColorItems: Map<string, ColorItem[]> = new Map();

    for (const tokenKey in tokens) {
        const token = tokens[tokenKey];
        const {reference, value} = token;
        const kebabCaseTokenName = kebabCase(tokenKey, {split: splitSeparateNumbers});
        const colorItem: ColorItem = {
            name: kebabCaseTokenName,
            variableName: `--${kebabCaseTokenName}`,
            value,
            reference
        };

        if (getGroup) {
            const group = getGroup(tokenKey, token);
            const groupItems = groupedColorItems.get(group);

            if (groupItems) {
                groupItems.push(colorItem);
            } else {
                groupedColorItems.set(group, [colorItem]);
            }
        } else {
            colorItems.push(colorItem);
        }
    }

    let content: ReactNode;

    if (groupedColorItems.size) {
        const panelItems: PanelItem[] = [];
        const tabItems: TabItem[] = [];

        groupedColorItems.forEach((colorItemArr, group) => {
            tabItems.push({id: group, name: group});
            panelItems.push({id: group, content: renderColorItems(colorItemArr)});
        });

        if (groupOrder) {
            tabItems.sort((a, b) => groupOrder.indexOf(a.name) - groupOrder.indexOf(b.name));
        }

        content = <Tabs panelItems={panelItems} tabItems={tabItems} />;
    } else {
        content = renderColorItems(colorItems);
    }

    return (
        <div className="sb-unstyled">
            <Heading level={2} size={Size.sm}>
                {title}
            </Heading>
            {content}
        </div>
    );
}

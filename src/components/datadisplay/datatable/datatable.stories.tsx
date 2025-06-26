import './datatable.stories.scss';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {
    createDataTableColumnHelper,
    DataTable,
    DataTableCellContext,
    DataTableColumnOrderState,
    DataTableColumnVisibilityState,
    DataTableExpandedState,
    DataTableProps,
    DataTableRowSelectionState,
    DataTableSortingState
} from './datatable.js';
import {ReactNode, useMemo, useState} from 'react';
import {Alignment, InputType, Size} from '../../../constants/index.js';
import {sortByProperties} from '../../../utils/sortinghelper.js';
import {DataTableTextFieldCell} from './datatabletextfieldcell.js';
import {DataTableTextCell} from './datatabletextcell.js';
import {isNumber, isObject, isUndefined} from '../../../utils/objecthelper.js';
import {DataTableCheckboxCell} from './datatablecheckboxcell.js';
import {DataTableCheckboxHeader} from './datatablecheckboxheader.js';
import {expandableProjects, InvoiceRow, invoiceRowsWithSubRows, Phase, phases, Project, projects} from './storydata.js';
import {PaginationState} from '@tanstack/react-table';
import {DataTableExpanderCell} from './datatableexpandercell.js';
import {DataTableDragHandleCell} from './datatabledraghandlecell.js';
import {arrayMove} from '@dnd-kit/sortable';
import {DataTableDisplayColumnID} from './datatabledisplaycolumnid.js';
import {Badge, BadgeStyle, BadgeVariant, Drawer} from '../../feedback/index.js';
import {Button, ButtonStyle, ButtonVariant, IconButton, Menu} from '../../action/index.js';
import {iconNames, IconSize} from '../../media/index.js';
import {Heading, Label} from '../../text/index.js';
import {Link} from '../../navigation/index.js';
import type {UniqueIdentifier} from '@dnd-kit/core';
import {customSortingStrategyForDraggingOnlyParentRows} from './customsortinstrategyfordraggingonlyparentrows.js';
import {classNames} from '../../../utils/classnames.js';
import {DataTableSelectCell} from './datatableselectcell.js';
import {DataTableToolbar} from './datatabletoolbar.js';
import {DataState} from '../../../constants/datastate.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {DataTableActionButtonCell} from './datatableactionbuttoncell.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {DataTableRowDragMode} from './types.js';
import {ColumnConfiguratorItem} from '../columnconfigurator/columnitem';

const meta = {
    args: {
        onRowDragStart: undefined
    },
    component: DataTable,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/DataTable'
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable<Project>>;

export const RowSelection: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table with selectable rows can be created using DataTableCheckboxHeader and DataTableCheckboxCell components. Selection state can be managed with rowSelection and onRowSelectionChange props.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const [rowSelection, setRowSelection] = useState<DataTableRowSelectionState>({});
        const totals = useMemo(() => {
            const obj = {
                workHours: 0,
                workHoursEstimate: 0
            };

            data.forEach((item) => {
                obj.workHours += item.workHours;
                obj.workHoursEstimate += item.workHoursEstimate;
            });

            return obj;
        }, [data]);
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    footer: `${totals.workHours} h`,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    footer: `${totals.workHoursEstimate} h`,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, [totals]);

        return (
            <DataTable
                {...args}
                columns={columns}
                data={data}
                getRowId={(row) => row.guid}
                onRowSelectionChange={setRowSelection}
                renderBefore={() => (
                    <DataTableToolbar
                        actions={[
                            <IconButton
                                aria-label="Copy"
                                iconName={iconNames.CopyAll}
                                key="copy"
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}
                            />,
                            <IconButton
                                aria-label="Remove"
                                iconName={iconNames.Delete}
                                key="remove"
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Danger}
                            />,
                            <IconButton
                                aria-label="Edit"
                                iconName={iconNames.Edit}
                                key="edit"
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}
                            />
                        ]}
                        selectedCount={Object.keys(rowSelection).length}
                    />
                )}
                rowSelection={rowSelection}
            />
        );
    }
};

export const Sorting: Story = {
    args: {
        sortingColumnSelectionPriority: 'Last'
    },
    parameters: {
        docs: {
            description: {
                story: 'Table with sortable columns can be created by enabling sorting for wanted columns. Sorting state can be managed with sorting and onSortingChange props. Sorting behavior can be adjusted with sortingColumnSelectionPriority prop.'
            }
        }
    },
    render: (args) => {
        const [data, setData] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: true
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: true
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                })
            ];
        }, []);

        const onSortingChange = (sorting: DataTableSortingState) => {
            const sortedData = sortByProperties(
                data,
                sorting.map((sort) => ({desc: sort.desc, props: sort.id.split('_')}))
            );

            setData(sortedData);
        };

        return (
            <DataTable
                {...args}
                columns={columns}
                data={data}
                getRowId={(row) => row.guid}
                onSortingChange={onSortingChange}
            />
        );
    }
};

export const Editing: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table with editable cells can be created using DataTableTextFieldCell and DataTableSelectCell components. Edits can be handled with onDataEdit prop.'
            }
        }
    },
    render: (args) => {
        const parseNumber = (val: string) => Number(val.replace(',', '.'));
        const [data, setData] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => (
                        <DataTableTextFieldCell
                            {...props}
                            aria-label="Project name"
                            textAlign={Alignment.start}
                            validate={(value) => (value === '' ? 'Field cannot be empty.' : undefined)}
                        />
                    ),
                    meta: {
                        alignment: Alignment.start,
                        isEditable: true
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner', {
                    header: 'Customer owner',
                    cell: (props) => {
                        const selectedValue = props.getValue();

                        return (
                            <DataTableSelectCell
                                {...props}
                                dataState={
                                    selectedValue.guid === '4' ?
                                        new Map([[DataState.ERROR, 'Must be somebody.']])
                                    :   undefined
                                }
                                items={[
                                    {text: 'John Doe', value: '1'},
                                    {text: 'Jane Doe', value: '2'},
                                    {text: 'Kevin Young', value: '3'},
                                    {text: 'Nobody', value: '4'}
                                ]}
                                menuWidth={150}
                                text={selectedValue.name}
                                value={selectedValue.guid}
                            />
                        );
                    },
                    meta: {
                        alignment: Alignment.start,
                        headerStyle: {width: '8rem'}
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => (
                        <DataTableTextFieldCell
                            {...props}
                            aria-label="Work hours estimate"
                            maxValue={999}
                            minValue={0}
                            suffix="h"
                            textAlign={Alignment.end}
                            type={InputType.number}
                            validate={(value) => {
                                const numberValue = parseNumber(value);

                                if (numberValue > 999 || numberValue <= 0) {
                                    return 'Value must be between 0 and 999.';
                                }

                                return undefined;
                            }}
                        />
                    ),
                    meta: {
                        alignment: Alignment.end,
                        isEditable: true
                    },
                    enableSorting: false
                })
            ];
        }, []);

        const onDataEdit = (rowIndex: number, columnId: string, obj: {text?: string; value: string}) => {
            setData(
                data.map((item, index) => {
                    if (index === rowIndex) {
                        let val: string | number | object = obj.value;

                        if (isObject(item[columnId])) {
                            val = {guid: obj.value, name: obj.text};
                        } else if (isNumber(item[columnId])) {
                            val = parseNumber(obj.value);
                        }

                        return {
                            ...item,
                            [columnId]: val
                        };
                    }

                    return item;
                })
            );
        };

        return (
            <DataTable {...args} columns={columns} data={data} getRowId={(row) => row.guid} onDataEdit={onDataEdit} />
        );
    }
};

export const ErrorHandling: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Editable cell validation errors can be handled with dataState and validate props for DataTableTextFieldCell and DataTableSelectCell.'
            }
        }
    },
    render: (args) => {
        const parseNumber = (val: string) => Number(val.replace(',', '.'));
        const [data, setData] = useState<Project[]>(
            projects.slice(0, 3).map((p) => {
                if (p.guid === 'p111') {
                    return {...p, workHoursEstimate: 9999};
                } else if (p.guid === 'p222') {
                    return {...p, name: ''};
                } else if (p.guid === 'p333') {
                    return {...p, customerOwner: {guid: '4', name: 'Nobody'}};
                }

                return p;
            })
        );
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => (
                        <DataTableTextFieldCell
                            {...props}
                            aria-label="Project name"
                            dataState={
                                props.getValue() === '' ?
                                    new Map([[DataState.ERROR, 'Field cannot be empty.']])
                                :   undefined
                            }
                            textAlign={Alignment.start}
                            validate={(value) => (value === '' ? 'Field cannot be empty.' : undefined)}
                        />
                    ),
                    meta: {
                        alignment: Alignment.start,
                        isEditable: true
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner', {
                    header: 'Customer owner',
                    cell: (props) => {
                        const selectedValue = props.getValue();

                        return (
                            <DataTableSelectCell
                                {...props}
                                dataState={
                                    selectedValue.guid === '4' ?
                                        new Map([[DataState.ERROR, 'Must be somebody.']])
                                    :   undefined
                                }
                                items={[
                                    {text: 'John Doe', value: '1'},
                                    {text: 'Jane Doe', value: '2'},
                                    {text: 'Kevin Young', value: '3'},
                                    {text: 'Nobody', value: '4'}
                                ]}
                                menuWidth={150}
                                text={selectedValue.name}
                                value={selectedValue.guid}
                            />
                        );
                    },
                    meta: {
                        alignment: Alignment.start,
                        headerStyle: {width: '8rem'}
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => {
                        const val = props.getValue();

                        return (
                            <DataTableTextFieldCell
                                {...props}
                                aria-label="Work hours estimate"
                                dataState={
                                    val > 999 || val <= 0 ?
                                        new Map([[DataState.ERROR, 'Value must be between 0 and 999.']])
                                    :   undefined
                                }
                                maxValue={999}
                                minValue={0}
                                suffix="h"
                                textAlign={Alignment.end}
                                type={InputType.number}
                                validate={(value) => {
                                    const numberValue = parseNumber(value);

                                    if (numberValue > 999 || numberValue <= 0) {
                                        return 'Value must be between 0 and 999.';
                                    }

                                    return undefined;
                                }}
                            />
                        );
                    },
                    meta: {
                        alignment: Alignment.end,
                        isEditable: true
                    },
                    enableSorting: false
                })
            ];
        }, []);

        // eslint-disable-next-line sonarjs/no-identical-functions
        const onDataEdit = (rowIndex: number, columnId: string, obj: {text?: string; value: string}) => {
            setData(
                data.map((item, index) => {
                    if (index === rowIndex) {
                        let val: string | number | object = obj.value;

                        if (isObject(item[columnId])) {
                            val = {guid: obj.value, name: obj.text};
                        } else if (isNumber(item[columnId])) {
                            val = parseNumber(obj.value);
                        }

                        return {
                            ...item,
                            [columnId]: val
                        };
                    }

                    return item;
                })
            );
        };

        return (
            <DataTable {...args} columns={columns} data={data} getRowId={(row) => row.guid} onDataEdit={onDataEdit} />
        );
    }
};

export const DisabledRows: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table rows can be disabled by using isRowDisabled prop.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => (
                        <DataTableTextFieldCell {...props} aria-label="Project name" textAlign={Alignment.start} />
                    ),
                    meta: {
                        alignment: Alignment.start,
                        isEditable: true
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <DataTable
                {...args}
                columns={columns}
                data={data}
                getRowId={(row) => row.guid}
                isRowDisabled={(row) => row.original.guid === 'p111'}
            />
        );
    }
};

export const ColumnGrouping: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table columns can be grouped by using column helper group method.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.group({
                    header: 'All',
                    meta: {
                        alignment: Alignment.center
                    },
                    columns: [
                        columnHelper.group({
                            header: 'General',
                            meta: {
                                alignment: Alignment.center
                            },
                            columns: [
                                columnHelper.accessor('name', {
                                    header: 'Project name',
                                    cell: DataTableTextCell,
                                    meta: {
                                        alignment: Alignment.start
                                    },
                                    enableSorting: false
                                }),
                                columnHelper.accessor('customerOwner.name', {
                                    header: 'Customer owner',
                                    cell: DataTableTextCell,
                                    meta: {
                                        alignment: Alignment.start
                                    },
                                    enableSorting: false
                                }),
                                columnHelper.accessor('deadline', {
                                    header: 'Deadline',
                                    cell: (props) => (
                                        <DataTableTextCell {...props}>
                                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                                        </DataTableTextCell>
                                    ),
                                    meta: {
                                        alignment: Alignment.start
                                    },
                                    enableSorting: false
                                })
                            ]
                        }),
                        columnHelper.group({
                            header: 'Work hours',
                            meta: {
                                alignment: Alignment.center
                            },
                            columns: [
                                columnHelper.accessor('workHours', {
                                    header: 'Work hours',
                                    cell: (props) => (
                                        <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>
                                    ),
                                    meta: {
                                        alignment: Alignment.end
                                    },
                                    enableSorting: false
                                }),
                                columnHelper.accessor('workHoursEstimate', {
                                    header: 'Work hours estimate',
                                    cell: (props) => (
                                        <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>
                                    ),
                                    meta: {
                                        alignment: Alignment.end
                                    },
                                    enableSorting: false
                                })
                            ]
                        }),
                        columnHelper.display({
                            header: 'Extra',
                            cell: (props) => <DataTableTextCell {...props}>Whatever</DataTableTextCell>,
                            meta: {
                                alignment: Alignment.start,
                                useHeaderRowSpan: true
                            }
                        })
                    ]
                })
            ];
        }, []);

        return <DataTable {...args} columns={columns} data={data} getRowId={(row) => row.guid} />;
    }
};

export const RowGrouping: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: "Table rows can be grouped under subheaders by using grouping prop and providing colSpan for grouped row's cells."
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();
            const getCellProps = (context: DataTableCellContext<Project, unknown>) => {
                const isGrouped = context.row.getIsGrouped();
                let colSpan = isGrouped ? 0 : 1;

                if (isGrouped && context.column.id === 'customerOwner_name') {
                    colSpan = 5;
                }

                return {
                    colSpan
                };
            };

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: (props) => (props.row.getIsGrouped() ? null : <DataTableCheckboxCell {...props} />),
                    meta: {
                        getCellProps,
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner / Project',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {props.row.getIsGrouped() ? props.getValue() : props.row.original.name}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {props.row.getIsGrouped() ? '' : new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {props.row.getIsGrouped() ? '' : `${props.getValue()} h`}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {props.row.getIsGrouped() ? '' : `${props.getValue()} h`}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <DataTable
                {...args}
                columnPinning={{left: [DataTableDisplayColumnID.Checkbox]}}
                columns={columns}
                data={data}
                expanded={true}
                getRowId={(row) => row.guid}
                grouping={['customerOwner_name']}
            />
        );
    }
};

export const Pagination: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table with pagination can created by providing pagination, onPaginationChange and totalRowCount props. Page sizes can be adjusted with pageSizes prop.'
            }
        }
    },
    render: (args) => {
        const [data, setData] = useState<Project[]>(projects.slice(0, 3));
        const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 3});
        const totals = useMemo(() => {
            const obj = {
                workHours: 0,
                workHoursEstimate: 0
            };

            data.forEach((item) => {
                obj.workHours += item.workHours;
                obj.workHoursEstimate += item.workHoursEstimate;
            });

            return obj;
        }, [data]);
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    footer: `${totals.workHours} h`,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    footer: `${totals.workHoursEstimate} h`,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, [totals]);

        const onPaginationChange = (newPagination: PaginationState) => {
            const {pageIndex, pageSize} = newPagination;

            setPagination(newPagination);

            for (let i = 0, len = projects.length, chunkIdx = 0; i < len; i += pageSize, chunkIdx++) {
                const chunk = projects.slice(i, i + pageSize);

                if (chunkIdx === pageIndex) {
                    setData(chunk);

                    return;
                }
            }
        };

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={columns}
                    data={data}
                    getRowId={(row) => row.guid}
                    onPaginationChange={onPaginationChange}
                    pageSizes={[3, 10, 20]}
                    pagination={pagination}
                    totalRowCount={projects.length}
                />
            </div>
        );
    }
};

export const ExpandableRows: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table with expandable rows can created using getRowCanExpand and getSubRows props. Expander cell should be defined using DataTableExpanderCell component.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(expandableProjects.slice());
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => <DataTableExpanderCell {...props} suffix={<DataTableTextCell {...props} />} />,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={columns}
                    data={data}
                    getRowCanExpand={(row) => !!row.original.subRows}
                    getRowId={(row) => row.guid}
                    getSubRows={(row) => row.subRows}
                />
            </div>
        );
    }
};

export const ExpandableRowSelection: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Parent row selection can be synced to sub-row selection. If not enabled (default), selecting sub-rows does not affect the parent selection state. If enabled, selecting sub-rows affects the parent selection state and vice versa.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(expandableProjects.slice());
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => <DataTableExpanderCell {...props} suffix={<DataTableTextCell {...props} />} />,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <div style={{minWidth: '700px', display: 'flex', gap: '2rem'}}>
                <div>
                    <Heading size={Size.sm} style={{marginBottom: '1rem'}}>
                        enableParentRowSelectionSync = false
                    </Heading>
                    <DataTable
                        {...args}
                        columns={columns}
                        data={data}
                        enableParentRowSelectionSync={false}
                        getRowCanExpand={(row) => !!row.original.subRows}
                        getRowId={(row) => row.guid}
                        getSubRows={(row) => row.subRows}
                    />
                </div>
                <div>
                    <Heading size={Size.sm} style={{marginBottom: '1rem'}}>
                        enableParentRowSelectionSync = true
                    </Heading>
                    <DataTable
                        {...args}
                        columns={columns}
                        data={data}
                        enableParentRowSelectionSync={true}
                        getRowCanExpand={(row) => !!row.original.subRows}
                        getRowId={(row) => row.guid}
                        getSubRows={(row) => row.subRows}
                    />
                </div>
            </div>
        );
    }
};

export const ExpandableRowLazyLoading: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Lazy load behavior for expandable rows can be built using isRowLoading prop.'
            }
        }
    },
    render: (args) => {
        const {projectArr, subRowMap} = useMemo(() => {
            const arr: Project[] = [];
            const map = new Map<string, Project[]>();
            const expProjects = expandableProjects.slice(0, 3);

            for (let i = 0, len = expProjects.length; i < len; i++) {
                const project = expProjects[i];

                if (project.subRows) {
                    map.set(project.guid, project.subRows);
                    arr.push({...project, subRows: []});
                } else {
                    arr.push(project);
                }
            }

            return {projectArr: arr, subRowMap: map};
        }, []);
        const [loadingGuids, setLoadingGuids] = useState<Set<string>>(new Set());
        const [data, setData] = useState<Project[]>(projectArr);
        const [expanded, setExpanded] = useState<DataTableExpandedState>({});
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => <DataTableExpanderCell {...props} suffix={<DataTableTextCell {...props} />} />,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, []);

        const onExpandedChange = (newExpanded: DataTableExpandedState) => {
            setExpanded(newExpanded);

            const expandedGuids = Object.keys(newExpanded);

            for (let i = 0, len = expandedGuids.length; i < len; i++) {
                const guid = expandedGuids[i];
                const isExpanded = newExpanded[guid];

                if (isExpanded && !loadingGuids.has(guid)) {
                    const idx = getIndexWithPropertyValue('guid', guid, data);

                    if (idx === -1) {
                        continue;
                    }

                    const project = data[idx];

                    if (project.subRows?.length === 0) {
                        setLoadingGuids((prev) => new Set(prev).add(guid));
                        setTimeout(() => {
                            setLoadingGuids((prev) => {
                                const next = new Set(prev);

                                next.delete(guid);

                                return next;
                            });
                            setData((prev) =>
                                // eslint-disable-next-line sonarjs/no-nested-functions
                                prev.map((p) => (p.guid === guid ? {...p, subRows: subRowMap.get(guid)} : p))
                            );
                        }, 1000);
                    }
                }
            }
        };

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={columns}
                    data={data}
                    expanded={expanded}
                    getRowCanExpand={(row) => !!row.original.subRows}
                    getRowId={(row) => row.guid}
                    getSubRows={(row) => row.subRows}
                    isRowLoading={(row) => row.getIsExpanded() && row.original.subRows?.length === 0}
                    onExpandedChange={onExpandedChange}
                />
            </div>
        );
    }
};

export const DragAndDrop: Story = {
    args: {
        columnConfiguratorOptions: {
            isMinimized: false
        },
        rowDragMode: DataTableRowDragMode.Flat
    },
    parameters: {
        docs: {
            description: {
                story: 'Row drag and drop can be created using DataTableDragHandleCell and onRowDragEnd prop. Column drag and drop can be enabled by setting reorderableColumns prop. Column order state can be managed with columnOrder and onColumnOrderChange props. Column configurator for keyboard users can be adjusted with columnConfiguratorOptions prop.'
            }
        }
    },
    render: (args) => {
        const [data, setData] = useState<Project[]>(projects.slice());
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.DragHandle,
                    cell: DataTableDragHandleCell,
                    meta: {
                        title: 'Drag handle',
                        headerStyle: {width: '40px'}
                    }
                }),
                columnHelper.accessor('name', {
                    id: 'name',
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        title: 'Project name'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    id: 'customerOwner_name',
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        title: 'Customer owner'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    id: 'deadline',
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        title: 'Deadline'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    id: 'workHours',
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        title: 'Work hours'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    id: 'workHoursEstimate',
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        title: 'Work hours estimate'
                    },
                    enableSorting: false
                })
            ];
        }, []);
        const initialColumnOrder = useMemo(() => columns.map((col) => col.id!), []);

        const onRowDragEnd = ({oldIndex, newIndex}: {rowId: string; oldIndex: number; newIndex: number}) => {
            setData(arrayMove(data, oldIndex, newIndex));
        };

        return (
            <div style={{width: '700px'}}>
                <DataTable
                    {...args}
                    columnOrder={initialColumnOrder}
                    columns={columns}
                    data={data}
                    getRowId={(row) => row.guid}
                    getRowTitle={(row) => row.name}
                    onRowDragEnd={onRowDragEnd}
                    reorderableColumns={true}
                />
            </div>
        );
    }
};

export const NestedDragAndDrop: StoryObj<typeof DataTable<Phase>> = {
    args: {
        rowDragMode: DataTableRowDragMode.Nested
    },
    parameters: {
        docs: {
            description: {
                story: 'Enable nested drag and drop behavior by rowDragMode = DataTableRowDragMode.Nested.'
            }
        },
        layout: 'padded'
    },
    render: (args) => {
        const [data, setData] = useState<Phase[]>(phases.slice());
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Phase>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.DragHandle,
                    cell: (props) => {
                        if (props.row.depth === 0) {
                            return null;
                        }

                        return <DataTableDragHandleCell {...props} />;
                    },
                    meta: {
                        title: 'Drag handle',
                        headerStyle: {width: '40px'}
                    }
                }),
                columnHelper.accessor('name', {
                    id: 'name',
                    header: 'Name',
                    cell: (props) => (
                        <DataTableExpanderCell
                            {...props}
                            suffix={
                                <DataTableTextCell {...props}>
                                    <strong>{props.getValue()}</strong>
                                </DataTableTextCell>
                            }
                        />
                    ),
                    meta: {
                        alignment: Alignment.start,
                        headerStyle: {width: '40%'},
                        isRowTitle: true,
                        title: 'Name'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('startDate', {
                    id: 'startDate',
                    header: 'Start date',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        headerStyle: {width: '15%'},
                        title: 'Start date'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    id: 'deadline',
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        headerStyle: {width: '15%'},
                        title: 'Deadline'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    id: 'workHours',
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        headerStyle: {width: '15%'},
                        title: 'Work hours'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    id: 'workHoursEstimate',
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        headerStyle: {width: '15%'},
                        title: 'Work hours estimate'
                    },
                    enableSorting: false
                })
            ];
        }, []);

        const updatePhase = (phaseArr: Phase[], phaseGuid: string, updateFn: (phase: Phase) => void): boolean => {
            for (let i = 0, len = phaseArr.length; i < len; i++) {
                const phase = phaseArr[i];

                if (phase.guid === phaseGuid) {
                    updateFn(phase);

                    return true;
                }

                if (phase.subRows && updatePhase(phase.subRows, phaseGuid, updateFn)) {
                    return true;
                }
            }

            return false;
        };

        const onRowDragEnd: DataTableProps<Phase>['onRowDragEnd'] = ({
            oldIndex,
            newIndex,
            newParentId,
            oldParentId
        }) => {
            if (newParentId && oldParentId) {
                const newData = data.slice();
                let phasesToMove: Phase[] = [];

                updatePhase(newData, oldParentId, (phase) => {
                    if (phase.subRows) {
                        phasesToMove = phase.subRows.splice(oldIndex, 1);
                    }
                });

                if (phasesToMove.length > 0) {
                    updatePhase(newData, newParentId, (phase) => {
                        if (phase.subRows) {
                            phase.subRows.splice(newIndex, 0, phasesToMove[0]);
                        } else {
                            phase.subRows = phasesToMove;
                        }
                    });
                }

                setData(newData);
            }
        };

        return (
            <DataTable
                {...args}
                columns={columns}
                data={data}
                expanded={true}
                getRowCanExpand={(row) => !!row.original.subRows?.length}
                getRowId={(row) => row.guid}
                getRowTitle={(row) => row.name}
                getSubRows={(row) => row.subRows}
                onRowDragEnd={onRowDragEnd}
            />
        );
    }
};

export const CustomRowGroupingExample: StoryObj<typeof DataTable<InvoiceRow>> = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Example of row grouping using always expanded rows, some custom styling and custom drag and drop logic provided via sortingStrategy prop.'
            }
        },
        layout: 'padded'
    },
    render: (args) => {
        const [data, setData] = useState<InvoiceRow[]>(invoiceRowsWithSubRows.slice());
        const [draggedExpandedId, setDraggedExpandedId] = useState<UniqueIdentifier | null>(null);
        const [expanded, setExpanded] = useState(
            data.reduce((currentValue, item) => {
                if (item.subRows) {
                    currentValue[item.guid] = true;
                }

                return currentValue;
            }, {})
        );
        const rowsFlatList: InvoiceRow[] = useMemo(() => {
            const rows: InvoiceRow[] = [];

            data.forEach((row) => {
                rows.push({...row});
                if (row?.subRows) {
                    row.subRows.forEach((subRow) => {
                        if (expanded[row.guid]) {
                            rows.push({...subRow});
                        }
                    });
                }
            });

            return rows;
        }, [data, expanded]);
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<InvoiceRow>();
            const getCellProps = ({row, cell}: DataTableCellContext<InvoiceRow, any>) => ({
                className: classNames({
                    'data-table__sub-row-first-cell': !!row.getParentRow() && cell.column.getIndex() === 0
                })
            });

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.DragHandle,
                    cell: (props) => {
                        if (props.row.original.level === 0) {
                            return <DataTableDragHandleCell {...props} />;
                        }

                        return null;
                    },
                    meta: {
                        title: 'Drag handle',
                        headerStyle: {width: '40px'},
                        getCellProps
                    }
                }),
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'},
                        getCellProps
                    }
                }),
                columnHelper.accessor('description', {
                    header: 'Description',
                    cell: (props) => {
                        const isExpandable = props.row.getCanExpand();
                        let value = props.getValue();

                        if (isExpandable) {
                            value += `(${props.row.subRows.length})`;
                        }

                        return <DataTableTextCell {...props}>{value}</DataTableTextCell>;
                    },
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('quantity', {
                    header: 'Quantity',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('unit', {
                    header: 'Unit',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('unitPrice', {
                    header: 'Unit price',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} €`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('vat', {
                    header: 'VAT',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} %`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('total', {
                    header: 'Total price',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} €`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                })
            ];
        }, []);

        const onRowDragEnd = ({oldIndex, newIndex}: {rowId: string; oldIndex: number; newIndex: number}) => {
            const reorderedFlatList = arrayMove(rowsFlatList, oldIndex, newIndex);
            const reorderedData: InvoiceRow[] = [];

            reorderedFlatList.forEach((row) => {
                if (row.level === 0) {
                    reorderedData.push(row);
                }
            });

            setData(reorderedData);

            if (draggedExpandedId) {
                setExpanded({...expanded, [draggedExpandedId]: true});
                setDraggedExpandedId(null);
            }
        };

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={columns}
                    data={data}
                    enableParentRowSelectionSync={true}
                    expanded={expanded}
                    getRowCanExpand={(row) => !!row.original.subRows}
                    getRowId={(row) => row.guid}
                    getRowProps={(row) => {
                        const isExpandable = row.getCanExpand();
                        const isExpanded = row.getIsExpanded();
                        const parentRow = row.getParentRow();
                        const parentSubRows = parentRow?.subRows;
                        const parentSubRowsLen = parentSubRows ? parentSubRows.length : 0;
                        const hasParentWithSubRows = parentSubRows && parentSubRowsLen > 0;
                        const isLastChild = hasParentWithSubRows && parentSubRows[parentSubRowsLen - 1].id === row.id;

                        return {
                            className: classNames({
                                'data-table__row--expandable': isExpandable,
                                'data-table__row--expanded': isExpanded,
                                'data-table__row--last-child': isLastChild
                            })
                        };
                    }}
                    getSubRows={(row) => row.subRows}
                    onExpandedChange={setExpanded}
                    onRowDragEnd={onRowDragEnd}
                    onRowDragStart={(event) => {
                        if (expanded[event.active.id]) {
                            setDraggedExpandedId(event.active.id);
                            setExpanded({...expanded, [event.active.id]: false});
                        }
                    }}
                    sortingStrategy={(params) => customSortingStrategyForDraggingOnlyParentRows(params, rowsFlatList)}
                />
            </div>
        );
    }
};

export const CustomRowGroupingExpandableExample: StoryObj<typeof DataTable<InvoiceRow>> = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Example of row grouping using expandable rows, some custom styling and custom drag and drop logic provided via sortingStrategy prop.'
            }
        },
        layout: 'padded'
    },
    render: (args) => {
        const [data, setData] = useState<InvoiceRow[]>(invoiceRowsWithSubRows.slice());
        const [draggedExpandedId, setDraggedExpandedId] = useState<UniqueIdentifier | null>(null);
        const [expanded, setExpanded] = useState({});
        const rowsFlatList: InvoiceRow[] = useMemo(() => {
            const rows: InvoiceRow[] = [];

            data.forEach((row) => {
                rows.push({...row});
                if (row?.subRows) {
                    row.subRows.forEach((subRow) => {
                        if (expanded[row.guid]) {
                            rows.push({...subRow});
                        }
                    });
                }
            });

            return rows;
        }, [data, expanded]);
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<InvoiceRow>();
            // eslint-disable-next-line sonarjs/no-identical-functions
            const getCellProps = ({row, cell}: DataTableCellContext<InvoiceRow, any>) => ({
                className: classNames({
                    'data-table__sub-row-first-cell': !!row.getParentRow() && cell.column.getIndex() === 0
                })
            });

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.DragHandle,
                    cell: (props) => {
                        if (props.row.original.level === 0) {
                            return <DataTableDragHandleCell {...props} />;
                        }

                        return null;
                    },
                    meta: {
                        title: 'Drag handle',
                        headerStyle: {width: '40px'},
                        getCellProps
                    }
                }),
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'},
                        getCellProps
                    }
                }),
                columnHelper.accessor('description', {
                    header: () => (
                        <div style={{display: 'flex', gap: 'var(--space-xxs)'}}>
                            {/* Spacer for expander icon */}
                            <span style={{width: IconSize.LG}} />
                            <Label size={Size.sm}>
                                <strong>Description</strong>
                            </Label>
                        </div>
                    ),
                    cell: (props) => {
                        const isExpandable = props.row.getCanExpand();
                        let value = props.getValue();

                        if (isExpandable) {
                            value += `(${props.row.subRows.length})`;
                        }

                        return (
                            <DataTableExpanderCell
                                {...props}
                                suffix={<DataTableTextCell {...props}>{value}</DataTableTextCell>}
                                useIndentation={false}
                            />
                        );
                    },
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('quantity', {
                    header: 'Quantity',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('unit', {
                    header: 'Unit',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('unitPrice', {
                    header: 'Unit price',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} €`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('vat', {
                    header: 'VAT',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} %`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('total', {
                    header: 'Total price',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} €`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        getCellProps
                    },
                    enableSorting: false
                })
            ];
        }, []);

        // eslint-disable-next-line sonarjs/no-identical-functions
        const onRowDragEnd = ({oldIndex, newIndex}: {rowId: string; oldIndex: number; newIndex: number}) => {
            const reorderedFlatList = arrayMove(rowsFlatList, oldIndex, newIndex);
            const reorderedData: InvoiceRow[] = [];

            reorderedFlatList.forEach((row) => {
                if (row.level === 0) {
                    reorderedData.push(row);
                }
            });

            setData(reorderedData);

            if (draggedExpandedId) {
                setExpanded({...expanded, [draggedExpandedId]: true});
                setDraggedExpandedId(null);
            }
        };

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={columns}
                    data={data}
                    enableParentRowSelectionSync={true}
                    expanded={expanded}
                    getRowCanExpand={(row) => !!row.original.subRows}
                    getRowId={(row) => row.guid}
                    getRowProps={(row) => {
                        const isExpandable = row.getCanExpand();
                        const isExpanded = row.getIsExpanded();
                        const parentRow = row.getParentRow();
                        const parentSubRows = parentRow?.subRows;
                        const parentSubRowsLen = parentSubRows ? parentSubRows.length : 0;
                        const hasParentWithSubRows = parentSubRows && parentSubRowsLen > 0;
                        const isLastChild = hasParentWithSubRows && parentSubRows[parentSubRowsLen - 1].id === row.id;

                        return {
                            className: classNames({
                                'data-table__row--expandable': isExpandable,
                                'data-table__row--expanded': isExpanded,
                                'data-table__row--last-child': isLastChild
                            })
                        };
                    }}
                    getSubRows={(row) => row.subRows}
                    onExpandedChange={setExpanded}
                    onRowDragEnd={onRowDragEnd}
                    onRowDragStart={(event) => {
                        if (expanded[event.active.id]) {
                            setDraggedExpandedId(event.active.id);
                            setExpanded({...expanded, [event.active.id]: false});
                        }
                    }}
                    sortingStrategy={(params) => customSortingStrategyForDraggingOnlyParentRows(params, rowsFlatList)}
                />
            </div>
        );
    }
};

export const CellTypeExamples: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Component library provides some common cell components out of the box but more can be easily created as needed.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Name',
                    cell: ({table, row, getValue}) => (
                        <Link isDisabled={table.options.meta?.isRowDisabled?.(row)} size={Size.md}>
                            {getValue()}
                        </Link>
                    ),
                    enableSorting: false
                }),
                columnHelper.display({
                    id: 'badge',
                    header: 'Status',
                    cell: ({table, row}) => {
                        const {workHours, workHoursEstimate} = row.original;
                        const isOver = workHours > workHoursEstimate;

                        return (
                            <Badge
                                iconName={iconNames.StatusLightFilled}
                                isDisabled={table.options.meta?.isRowDisabled?.(row)}
                                style={BadgeStyle.Fill}
                                variant={isOver ? BadgeVariant.Warning : BadgeVariant.Success}>
                                {isOver ? 'Needs attention' : 'All ok'}
                            </Badge>
                        );
                    }
                }),
                columnHelper.display({
                    id: 'actions',
                    header: 'Actions',
                    cell: ({table, row}) => (
                        <>
                            <IconButton
                                aria-label="Edit"
                                iconName={iconNames.Edit}
                                isDisabled={table.options.meta?.isRowDisabled?.(row)}
                                style={ButtonStyle.Plain}
                                variant={ButtonVariant.Neutral}
                            />
                            <Menu
                                items={[
                                    {id: '1', name: 'Action 1'},
                                    {id: '2', name: 'Action 2'},
                                    {id: '3', name: 'Delete', props: {isDestructive: true}}
                                ]}>
                                <IconButton
                                    aria-label="More actions"
                                    iconName={iconNames.MoreVert}
                                    isDisabled={table.options.meta?.isRowDisabled?.(row)}
                                    style={ButtonStyle.Plain}
                                    variant={ButtonVariant.Neutral}
                                />
                            </Menu>
                        </>
                    )
                })
            ];
        }, []);

        return (
            <DataTable
                {...args}
                columns={columns}
                data={data}
                getRowId={(row) => row.guid}
                isRowDisabled={(row) => row.id === 'p222'}
            />
        );
    }
};

export const ActionButton: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'DataTableActionButtonCell can be used together with other cell components to implement f.e. Drawer opening pattern.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const getColumns = ({
            useIconButton,
            useTextField,
            useLink,
            useClickableCell
        }: {
            useIconButton?: boolean;
            useTextField?: boolean;
            useLink?: boolean;
            useClickableCell?: boolean;
        }) => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: (props) => {
                        let content: ReactNode;

                        if (useTextField) {
                            content = <DataTableTextFieldCell {...props} aria-label="Project name" />;
                        } else if (useLink) {
                            content = <Link size={Size.md}>{props.getValue()}</Link>;
                        } else {
                            content = <DataTableTextCell {...props} />;
                        }

                        return (
                            <DataTableActionButtonCell
                                {...props}
                                buttonComponent={useIconButton ? IconButton : Button}
                                buttonProps={
                                    useIconButton ?
                                        {
                                            'aria-label': 'Open to edit',
                                            iconName: iconNames.DockToLeft,
                                            onPress: () => setIsDrawerOpen(true)
                                        }
                                    :   {
                                            children: 'Open',
                                            onPress: () => setIsDrawerOpen(true),
                                            startIconName: iconNames.DockToLeft
                                        }
                                }
                                stopChildrenClickPropagation={useTextField && useClickableCell}
                                tooltipProps={{children: 'Open to edit'}}>
                                {content}
                            </DataTableActionButtonCell>
                        );
                    },
                    meta: {
                        alignment: Alignment.start,
                        isEditable: useTextField,
                        getCellProps:
                            useClickableCell ?
                                () => ({
                                    onClick: () => setIsDrawerOpen(true),
                                    style: {cursor: 'pointer'}
                                })
                            :   undefined
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                })
            ];
        };
        const cols1 = useMemo(() => getColumns({useTextField: true}), []);
        const cols2 = useMemo(() => getColumns({useTextField: true, useClickableCell: true}), []);
        const cols3 = useMemo(() => getColumns({}), []);
        const cols4 = useMemo(() => getColumns({useClickableCell: true}), []);
        const cols5 = useMemo(() => getColumns({useIconButton: true, useClickableCell: true}), []);
        const cols6 = useMemo(() => getColumns({useIconButton: true, useLink: true, useClickableCell: true}), []);

        return (
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <DataTable
                    {...args}
                    columns={cols1}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Inline edit, action button'}
                />
                <DataTable
                    {...args}
                    columns={cols2}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Inline edit, action button, whole cell clickable'}
                />
                <DataTable
                    {...args}
                    columns={cols3}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Text, action button'}
                />
                <DataTable
                    {...args}
                    columns={cols4}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Text, action button, whole cell clickable'}
                />
                <DataTable
                    {...args}
                    columns={cols5}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Text, action icon button, whole cell clickable'}
                />
                <DataTable
                    {...args}
                    columns={cols6}
                    data={data}
                    getRowId={(row) => row.guid}
                    renderBefore={() => 'Link, action icon button, whole cell clickable'}
                />
                <Drawer
                    isOpen={isDrawerOpen}
                    onOpenChange={setIsDrawerOpen}
                    primaryAction={{label: 'Save', onPress: emptyFn}}
                    title="Edit project">
                    Edit project fields here...
                </Drawer>
            </div>
        );
    }
};

export const ScrollBehavior: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Table scroll behavior in viewport and scrollable container.'
            }
        }
    },
    render: () => {
        interface Item {
            guid: string;
            name: string;
            property1: string;
            property2: string;
            property3: string;
            property4: string;
            property5: string;
        }
        const data = useMemo(() => {
            const items: Item[] = [];

            for (let i = 0; i < 25; i++) {
                items.push({
                    guid: `item-${i}`,
                    name: `Item ${i}`,
                    property1: `Value ${i}`,
                    property2: `Value ${i}`,
                    property3: `Value ${i}`,
                    property4: `Value ${i}`,
                    property5: `Value ${i}`
                });
            }

            return items;
        }, []);
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Item>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        columnPinningOptions: {
                            left: {isSticky: true}
                        },
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    id: 'name',
                    header: 'Frozen column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        columnPinningOptions: {
                            left: {isSticky: true, offset: 32}
                        }
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('property1', {
                    header: 'Property 1 column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('property2', {
                    header: 'Property 2 column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('property3', {
                    header: 'Property 3 column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('property4', {
                    header: 'Property 4 column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('property5', {
                    header: 'Property 5 column',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <div style={{width: '500px'}}>
                        <Heading size={Size.sm} style={{marginBottom: '1rem'}}>
                            Scroll along viewport
                        </Heading>
                        <DataTable
                            columnPinning={{left: [DataTableDisplayColumnID.Checkbox, 'name']}}
                            columns={columns}
                            data={data}
                            getRowId={(row) => row.guid}
                        />
                    </div>
                    <div
                        style={{
                            width: '500px',
                            height: '300px',
                            overflowY: 'auto',
                            border: '1px solid black',
                            padding: '0 1rem'
                        }}>
                        <Heading size={Size.sm} style={{marginBottom: '1rem'}}>
                            Scroll along container
                        </Heading>
                        <DataTable
                            columnPinning={{left: [DataTableDisplayColumnID.Checkbox, 'name']}}
                            columns={columns}
                            data={data}
                            getRowId={(row) => row.guid}
                        />
                        <div style={{display: 'flex', alignItems: 'center', height: '500px'}}>EMPTY SPACE</div>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '1000px'}}>EMPTY SPACE</div>
            </>
        );
    }
};

export const Skeleton: Story = {
    args: {
        isSkeleton: true,
        skeletonProps: {
            columnCount: 6,
            hasRowSelection: true,
            rowCount: 3
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'DataTable can be displayed as skeleton with isSkeleton prop. Skeleton props can be modified with skeletonProps.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice(0, 3));
        const columns = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();

            return [
                columnHelper.display({
                    id: DataTableDisplayColumnID.Checkbox,
                    header: DataTableCheckboxHeader,
                    cell: DataTableCheckboxCell,
                    meta: {
                        headerStyle: {width: '32px'}
                    }
                }),
                columnHelper.accessor('name', {
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end
                    },
                    enableSorting: false
                })
            ];
        }, []);

        return (
            <div style={{minWidth: '700px'}}>
                <DataTable
                    {...args}
                    columns={args.isSkeleton ? [] : columns}
                    data={args.isSkeleton ? [] : data}
                    getRowId={(row) => row.guid}
                />
            </div>
        );
    }
};

export const ControlledColumnConfigurator: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'ColumnConfigurator props can be overridden to fully control it from outside.'
            }
        }
    },
    render: (args) => {
        const [data] = useState<Project[]>(projects.slice());
        const configuratorColumns: ColumnConfiguratorItem[] = [
            {id: 'name', name: 'Name'},
            {id: 'customerOwner_name', name: 'Customer owner'},
            {id: 'deadline', name: 'Deadline'},
            {id: 'workHours', name: 'Work hours'},
            {id: 'workHoursEstimate', name: 'Work hours estimate'}
        ];
        const [columnOrder, setColumnOrder] = useState<DataTableColumnOrderState>(() =>
            configuratorColumns.map((col) => col.id)
        );
        const [columnVisibility, setColumnVisibility] = useState<DataTableColumnVisibilityState>({
            workHours: false,
            workHoursEstimate: false
        });
        const columnMap = useMemo(() => {
            const columnHelper = createDataTableColumnHelper<Project>();
            const cols = [
                columnHelper.accessor('name', {
                    id: 'name',
                    header: 'Project name',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('customerOwner.name', {
                    id: 'customerOwner_name',
                    header: 'Customer owner',
                    cell: DataTableTextCell,
                    meta: {
                        alignment: Alignment.start,
                        title: 'Customer owner'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('deadline', {
                    id: 'deadline',
                    header: 'Deadline',
                    cell: (props) => (
                        <DataTableTextCell {...props}>
                            {new Date(props.getValue()).toLocaleDateString('fi-Fi')}
                        </DataTableTextCell>
                    ),
                    meta: {
                        alignment: Alignment.start,
                        title: 'Deadline'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHours', {
                    id: 'workHours',
                    header: 'Work hours',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        title: 'Work hours'
                    },
                    enableSorting: false
                }),
                columnHelper.accessor('workHoursEstimate', {
                    id: 'workHoursEstimate',
                    header: 'Work hours estimate',
                    cell: (props) => <DataTableTextCell {...props}>{`${props.getValue()} h`}</DataTableTextCell>,
                    meta: {
                        alignment: Alignment.end,
                        title: 'Work hours estimate'
                    },
                    enableSorting: false
                })
            ];

            return cols.reduce((map, col) => {
                map[col.id!] = col;

                return map;
            }, {});
        }, []);

        const columns = useMemo(() => {
            const cols: DataTableProps<Project>['columns'] = [];

            for (let i = 0, len = columnOrder.length; i < len; i++) {
                const colId = columnOrder[i];
                const visibility = columnVisibility[colId];
                const isVisible = isUndefined(visibility) ? true : visibility;

                if (isVisible) {
                    cols.push(columnMap[colId]);
                }
            }

            return cols;
        }, [columnOrder, columnVisibility]);

        return (
            <div style={{width: '700px'}}>
                <DataTable
                    {...args}
                    columnConfiguratorOptions={{
                        columns: configuratorColumns,
                        columnOrder,
                        columnVisibility,
                        isMinimized: false,
                        onColumnOrderChange: setColumnOrder,
                        onColumnVisibilityChange: setColumnVisibility
                    }}
                    columns={columns}
                    data={data}
                    getRowId={(row) => row.guid}
                    getRowTitle={(row) => row.name}
                    reorderableColumns={true}
                />
            </div>
        );
    }
};

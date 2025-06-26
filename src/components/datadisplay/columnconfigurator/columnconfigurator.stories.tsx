import {Meta, StoryObj} from '@storybook/react-webpack5';
import {ColumnConfigurator, ColumnConfiguratorVariant} from './columnconfigurator.js';
import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {Size} from '../../../constants/index.js';
import {useMemo, useState} from 'react';

const meta = {
    argTypes: {children: {control: false}},
    component: ColumnConfigurator,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/ColumnConfigurator'
} satisfies Meta<typeof ColumnConfigurator>;

export default meta;
type Story = StoryObj<typeof ColumnConfigurator>;

const exampleColumns = [
    {id: 'name', name: 'Name'},
    {id: 'code', name: 'Code'},
    {id: 'startDate', name: 'Start date'},
    {id: 'endDate', name: 'End date'},
    {id: 'email', name: 'Email'},
    {id: 'role', name: 'Role'},
    {id: 'status', name: 'Status'},
    {id: 'phoneNumber', name: 'Phone Number'},
    {id: 'company', name: 'Company'},
    {id: 'department', name: 'Department'},
    {id: 'manager', name: 'Manager'},
    {id: 'address', name: 'Address'},
    {id: 'city', name: 'City'},
    {id: 'country', name: 'Country'},
    {id: 'postalCode', name: 'Postal Code'},
    {id: 'priority', name: 'Priority'},
    {id: 'owner', name: 'Owner'},
    {id: 'progress', name: 'Progress'},
    {id: 'budget', name: 'Budget'},
    {id: 'actualCost', name: 'Actual Cost'},
    {id: 'hoursLogged', name: 'Hours Logged'},
    {id: 'dueDate', name: 'Due Date'},
    {id: 'createdDate', name: 'Created Date'},
    {id: 'lastModified', name: 'Last Modified'},
    {id: 'lastLogin', name: 'Last Login'},
    {id: 'notes', name: 'Notes'},
    {id: 'tags', name: 'Tags'},
    {id: 'category', name: 'Category'},
    {id: 'invoiceId', name: 'Invoice ID'},
    {id: 'paymentStatus', name: 'Payment Status'}
];

const toggler = (
    <Button size={Size.md} style={ButtonStyle.Outline} variant={ButtonVariant.Neutral}>
        Customize columns
    </Button>
);

export const Basic: Story = {
    args: {
        children: toggler,
        columns: exampleColumns.slice(0, 7),
        variant: ColumnConfiguratorVariant.Basic
    },
    parameters: {
        docs: {
            description: {
                story: 'Basic variant of the column configurator.'
            }
        }
    }
};

export const Extended: Story = {
    args: {
        children: toggler,
        columns: exampleColumns,
        variant: ColumnConfiguratorVariant.Extended
    },
    parameters: {
        docs: {
            description: {
                story: 'Extended variant of the column configurator.'
            }
        }
    },
    render: (args) => {
        const initialColumnOrder = useMemo(() => exampleColumns.map((col) => col.id), []);
        const initialColumnVisibility = useMemo(
            () =>
                exampleColumns.reduce((map, col, idx) => {
                    map[col.id] = idx < 7;

                    return map;
                }, {}),
            []
        );
        const [columnOrder, setColumnOrder] = useState(initialColumnOrder);
        const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(initialColumnVisibility);

        return (
            <ColumnConfigurator
                {...args}
                actions={{
                    primaryAction: {
                        label: 'Reset',
                        onPress: () => {
                            setColumnOrder(initialColumnOrder);
                            setColumnVisibility(initialColumnVisibility);
                        },
                        style: ButtonStyle.Outline,
                        variant: ButtonVariant.Neutral
                    }
                }}
                columnOrder={columnOrder}
                columnVisibility={columnVisibility}
                onColumnOrderChange={setColumnOrder}
                onColumnVisibilityChange={setColumnVisibility}
            />
        );
    }
};

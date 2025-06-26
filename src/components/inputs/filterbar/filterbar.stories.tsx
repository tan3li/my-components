import {Meta, StoryObj} from '@storybook/react-webpack5';
import {FilterBar, FilterBarStyle} from './filterbar.js';
import {Size} from '../../../constants/index.js';
import {Heading, Label} from '../../text/index.js';
import {FilterBarExample} from './filterbarexample.js';
import {CSSProperties, ReactNode} from 'react';

const meta = {
    component: FilterBar,
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        layout: 'padded',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/FilterBar'
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof FilterBar>;

function FiltersPlaceholder({
    children,
    style,
    size
}: {
    children?: ReactNode;
    style?: CSSProperties;
    size: Size.lg | Size.md;
}) {
    return (
        <div
            style={{
                alignItems: 'center',
                border: 'var(--stroke-xs) dashed var(--informative-500)',
                background: 'var(--informative-50)',
                display: 'flex',
                justifyContent: 'center',
                padding: '0.75rem 1.5rem',
                width: '100%',
                ...style
            }}>
            <Label size={size}>{children ?? 'Display your filters here'}</Label>
        </div>
    );
}

export const Playground: Story = {
    args: {
        activeFiltersCount: 0,
        nonVisibleActiveFiltersCount: 0,
        style: FilterBarStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'FilterBar component, be my guest and play with it!'
            }
        }
    },
    render: (args) => (
        <FilterBar {...args}>
            <FiltersPlaceholder size={args.style === FilterBarStyle.Card ? Size.lg : Size.md} />
        </FilterBar>
    )
};

export const Styles: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'FilterBar can be displayed in 2 styles.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div>
                <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                    Card
                </Heading>
                <FilterBar {...args} style={FilterBarStyle.Card}>
                    <FiltersPlaceholder size={Size.lg} />
                </FilterBar>
            </div>
            <div>
                <Heading level={3} size={Size.xs} style={{marginBottom: '1rem'}}>
                    Plain
                </Heading>
                <FilterBar {...args} style={FilterBarStyle.Plain}>
                    <FiltersPlaceholder size={Size.md} />
                </FilterBar>
            </div>
        </div>
    )
};

export const Responsiveness: Story = {
    args: {
        style: FilterBarStyle.Card
    },
    decorators: [
        (Story) => (
            <div style={{width: 500}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'Filter area becomes scrollable when there is no space.'
            }
        }
    },
    render: (args) => (
        <FilterBar {...args}>
            <FiltersPlaceholder
                size={args.style === FilterBarStyle.Card ? Size.lg : Size.md}
                style={{minWidth: 800, justifyContent: 'flex-start'}}>
                Filter area becomes scrollable when there is no space
            </FiltersPlaceholder>
        </FilterBar>
    )
};

export const Example: Story = {
    args: {
        style: FilterBarStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Example use with actual filters.'
            }
        }
    },
    render: FilterBarExample
};

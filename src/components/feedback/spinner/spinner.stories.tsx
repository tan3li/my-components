import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {Spinner, SpinnerVariant} from './spinner.js';
import {Position} from '../../../constants/index.js';

const meta = {
    component: Spinner,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Spinner'
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {
    args: {
        'aria-label': 'Loading...',
        label: '',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Spinner component, be my guest and play with it!'
            }
        }
    }
};

export const Label: Story = {
    args: {
        label: 'Loading...',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'Spinner can be displayed with aria-label or visible label positioned on bottom or right.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'flex-start', display: 'flex', gap: '2rem'}}>
            <Spinner {...args} aria-label="Loading..." label={undefined} />
            <Spinner {...args} labelPosition={Position.Bottom} />
            <Spinner {...args} labelPosition={Position.Right} />
        </div>
    )
};

export const Sizes: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Spinner can be displayed in 4 sizes: sm, md, lg and xl.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '2rem'}}>
            <Spinner {...args} aria-label="Loading sm..." size={Size.sm} />
            <Spinner {...args} aria-label="Loading md..." size={Size.md} />
            <Spinner {...args} aria-label="Loading lg..." size={Size.lg} />
            <Spinner {...args} aria-label="Loading xl..." size={Size.xl} />

            <Spinner {...args} label="Loading sm..." size={Size.sm} />
            <Spinner {...args} label="Loading md..." size={Size.md} />
            <Spinner {...args} label="Loading lg..." size={Size.lg} />
            <Spinner {...args} label="Loading xl..." size={Size.xl} />
        </div>
    )
};

export const Variants: Story = {
    args: {
        labelPosition: Position.Right
    },
    parameters: {
        docs: {
            description: {
                story: 'There are 3 color variants: Accent, Neutral and None. If variant = None, color will be inherited from nearest element where color is set.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: '2rem'
            }}>
            <Spinner {...args} label="Accent" size={Size.sm} variant={SpinnerVariant.Accent} />
            <Spinner {...args} label="Accent" size={Size.md} variant={SpinnerVariant.Accent} />
            <Spinner {...args} label="Accent" size={Size.lg} variant={SpinnerVariant.Accent} />
            <Spinner {...args} label="Accent" size={Size.xl} variant={SpinnerVariant.Accent} />

            <Spinner {...args} label="Neutral" size={Size.sm} variant={SpinnerVariant.Neutral} />
            <Spinner {...args} label="Neutral" size={Size.md} variant={SpinnerVariant.Neutral} />
            <Spinner {...args} label="Neutral" size={Size.lg} variant={SpinnerVariant.Neutral} />
            <Spinner {...args} label="Neutral" size={Size.xl} variant={SpinnerVariant.Neutral} />

            <Spinner {...args} label="None (inherit)" size={Size.sm} variant={SpinnerVariant.None} />
            <Spinner {...args} label="None (inherit)" size={Size.md} variant={SpinnerVariant.None} />
            <Spinner {...args} label="None (inherit)" size={Size.lg} variant={SpinnerVariant.None} />
            <Spinner {...args} label="None (inherit)" size={Size.xl} variant={SpinnerVariant.None} />
        </div>
    )
};

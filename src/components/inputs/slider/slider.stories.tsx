import {Slider} from './slider.js';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Position} from '../../../constants/index.js';
import {SliderValueDisplayMode} from './slidervaluedisplaymode.js';
import {expect, fireEvent, fn, userEvent, waitFor, within} from 'storybook/test';

const meta = {
    args: {
        onChange: undefined
    },
    component: Slider,
    decorators: [
        (Story) => (
            <div style={{minWidth: '600px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/Slider'
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

const argsForStories = [
    'helpText',
    'isDisabled',
    'isSkeleton',
    'label',
    'layout',
    'showFill',
    'showHelpTextIcon',
    'value',
    'valueTextFieldWidth'
];

export const Playground: Story = {
    args: {
        'aria-label': 'Slider',
        helpText: 'This is a help text!',
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        value: 20,
        valueDisplayMode: SliderValueDisplayMode.Label
    },
    parameters: {
        docs: {
            description: {
                story: 'Slider component, be my guest and play with it!'
            }
        }
    }
};

export const Steps: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        step: 10,
        value: 40,
        valueDisplayMode: SliderValueDisplayMode.Label
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Slider component with different variants of step values.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
            }}>
            <Slider {...args} />
            <Slider {...args} step={20} />
            <Slider {...args} step={50} />
            <Slider {...args} maxValue={10} minValue={0} step={0.1} value={7.7} />
            <Slider {...args} maxValue={10} minDistance={2} minValue={0} step={0.5} value={[2.5, 7.5]} />
        </div>
    )
};

export const Range: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        value: [20, 70],
        valueDisplayMode: SliderValueDisplayMode.Tooltip
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Slider component with different variants of range values.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
            }}>
            <Slider {...args} showFill={false} />
            <Slider {...args} />
            <Slider {...args} maxValue={200} minValue={10} valueDisplayMode={SliderValueDisplayMode.Label} />
            <Slider {...args} maxValue={200} minDistance={25} valueDisplayMode={SliderValueDisplayMode.TextField} />
        </div>
    )
};

export const CustomMinMax: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        minDistance: 10,
        showFill: true,
        value: 50,
        valueDisplayMode: SliderValueDisplayMode.Label
    },
    parameters: {
        docs: {
            controls: {
                include: argsForStories
            },
            description: {
                story: 'Slider component with different variants of min and max fields.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
            }}>
            <Slider {...args} maxValue={2000} minValue={1000} value={1500} />
            <Slider {...args} maxValue={100} minValue={-100} />
            <Slider {...args} maxValue={0} minValue={-200} value={-50} />
            <Slider {...args} maxValue={2000} minDistance={200} minValue={50} value={[500, 1000]} />
            <Slider {...args} maxValue={100} minValue={-100} value={[-25, 25]} />
            <Slider {...args} maxValue={0} minValue={-200} value={[-75, -25]} />
        </div>
    )
};

export const EditableValueField: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        value: 40,
        valueDisplayMode: SliderValueDisplayMode.TextField
    },
    parameters: {
        docs: {
            controls: {
                include: argsForStories
            },
            description: {
                story: 'Slider component with different variants of editable value field.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '50px'
            }}>
            <Slider {...args} value={40} />
            <Slider {...args} value={[40, 60]} valueDisplayMode={SliderValueDisplayMode.TextField} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        'aria-label': 'Slider',
        isDisabled: true,
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        value: 40
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Slider component with different variants of disabled state.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                columnGap: '3rem',
                rowGap: '3rem'
            }}>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
                <Slider {...args} valueDisplayMode={SliderValueDisplayMode.Label} />
                <Slider {...args} valueDisplayMode={SliderValueDisplayMode.TextField} />
            </div>

            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} value={[40, 60]} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
                <Slider {...args} value={[40, 60]} valueDisplayMode={SliderValueDisplayMode.Label} />
                <Slider {...args} value={[40, 60]} valueDisplayMode={SliderValueDisplayMode.TextField} />
            </div>
        </div>
    )
};

export const SingleValueLabelPosition: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        showFill: true,
        value: 40
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Label position can be controlled with labelPosition prop.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                columnGap: '3rem',
                rowGap: '3rem'
            }}>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
            </div>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.Label} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.Label} />
            </div>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.TextField} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.TextField} />
            </div>
        </div>
    )
};

export const RangeValueLabelPosition: Story = {
    args: {
        'aria-label': 'Slider',
        label: 'Donuts to buy (pcs)',
        showFill: true,
        value: [40, 60]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Label position can be controlled with labelPosition prop.'
            }
        }
    },
    render: (args) => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                columnGap: '3rem',
                rowGap: '3rem'
            }}>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.Tooltip} />
            </div>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.Label} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.Label} />
            </div>
            <div style={{display: 'grid', gap: '2rem'}}>
                <Slider {...args} labelPosition={Position.Top} valueDisplayMode={SliderValueDisplayMode.TextField} />
                <Slider {...args} labelPosition={Position.Left} valueDisplayMode={SliderValueDisplayMode.TextField} />
            </div>
        </div>
    )
};

export const Skeleton: Story = {
    args: {
        'aria-label': 'Slider',
        helpText: 'This is a help text!',
        isSkeleton: true,
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        value: 20,
        valueDisplayMode: SliderValueDisplayMode.Label
    },
    parameters: {
        docs: {
            description: {
                story: 'Slider can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const InteractionTest: Story = {
    args: {
        'aria-label': 'Slider',
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        onChangeEnd: undefined,
        label: 'Donuts to buy (pcs)',
        labelPosition: Position.Top,
        showFill: true,
        textFieldAriaLabels: ['Textfield'],
        value: 20,
        valueDisplayMode: SliderValueDisplayMode.TextField
    },
    parameters: {
        docs: {
            description: {
                story: 'Interaction test for Slider.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);

        // Click track from the middle
        const slider = canvas.getByRole('group');
        const sliderTrack = slider.querySelector('.slider__track-content')!;
        const sliderTrackRect = sliderTrack.getBoundingClientRect();
        const sliderTrackClickPoint = {
            clientX: sliderTrackRect.left + sliderTrackRect.width / 2,
            clientY: sliderTrackRect.top + sliderTrackRect.height / 2
        };

        await fireEvent.mouseDown(sliderTrack, sliderTrackClickPoint);
        await fireEvent.mouseUp(sliderTrack, sliderTrackClickPoint);
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: 50
            })
        );

        // Type 80 into text field.
        const input = canvas.getByLabelText('Textfield');

        await userEvent.clear(input);
        await userEvent.type(input, '80');
        await userEvent.tab();
        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: 80
            })
        );
    }
};

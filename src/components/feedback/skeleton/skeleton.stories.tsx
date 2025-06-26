import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Skeleton, SkeletonShape} from './skeleton.js';
import {SkeletonText, SkeletonTextMultiline, SkeletonTextType} from './skeletontext.js';
import {Size} from '../../../constants/index.js';
import {BodyText, Heading, Label, Title} from '../../text/index.js';
import SkeletonDesignMdx from './skeletondesign.mdx';
import {SkeletonField} from './skeletonfield.js';
import {SkeletonCalendar} from './skeletoncalendar.js';
import {SkeletonFileUploadArea} from './skeletonfileuploadarea.js';
import {SkeletonColorSwatchPicker} from './skeletoncolorswatchpicker.js';
import {SkeletonCheckbox} from './skeletoncheckbox.js';
import {SkeletonDataTable} from './skeletondatatable.js';
import {SkeletonDataCard} from './skeletondatacard.js';
import {DataCardStyle} from '../../datadisplay/index.js';
import {SkeletonPageHeader} from './skeletonpageheader.js';

const meta = {
    component: Skeleton,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        docs: {
            design: SkeletonDesignMdx
        }
    },
    tags: ['autodocs'],
    title: 'Components/Feedback/Skeleton'
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
    args: {
        height: 100,
        shape: SkeletonShape.Rectangle,
        width: 300
    },
    parameters: {
        docs: {
            description: {
                story: 'Skeleton component, be my guest and play with it!'
            }
        }
    }
};

export const Shapes: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Use shape, height and width props to create circular or rectangular elements.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', gap: '2rem'}}>
            <Skeleton {...args} height={48} shape={SkeletonShape.Circle} width={48} />
            <Skeleton {...args} height={48} shape={SkeletonShape.Rectangle} width={48} />
            <Skeleton {...args} height={48} shape={SkeletonShape.Rectangle} width={120} />
        </div>
    )
};

export const Text: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Use SkeletonText component to create a single line skeleton text and SkeletonTextMultiline to create multiple lines of skeleton text. Line count can be adjusted with lineCount prop.'
            }
        }
    },
    render: () => (
        <div style={{display: 'grid', gridTemplateColumns: '200px 200px', gap: '3rem'}}>
            <SkeletonText size={Size.md} type={SkeletonTextType.Body} />
            <SkeletonTextMultiline lineCount={2} size={Size.md} type={SkeletonTextType.Body} />
            <SkeletonTextMultiline lineCount={3} size={Size.md} type={SkeletonTextType.Body} />
            <SkeletonTextMultiline lineCount={4} size={Size.md} type={SkeletonTextType.Body} />
        </div>
    )
};

export const TextSizes: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonText can be matched to text component sizes using type and size props.'
            }
        }
    },
    render: () => (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 2rem'}}>
            <Heading size={Size.lg}>Heading lg</Heading>
            <SkeletonText size={Size.lg} type={SkeletonTextType.Heading} />
            <Heading size={Size.md}>Heading md</Heading>
            <SkeletonText size={Size.md} type={SkeletonTextType.Heading} />
            <Heading size={Size.sm}>Heading sm</Heading>
            <SkeletonText size={Size.sm} type={SkeletonTextType.Heading} />
            <Heading size={Size.xs}>Heading xs</Heading>
            <SkeletonText size={Size.xs} type={SkeletonTextType.Heading} />
            <Heading size={Size.xxs}>Heading xxs</Heading>
            <SkeletonText size={Size.xxs} type={SkeletonTextType.Heading} />

            <BodyText size={Size.lg}>Body lg</BodyText>
            <SkeletonText size={Size.lg} type={SkeletonTextType.Body} />
            <BodyText size={Size.md}>Body md</BodyText>
            <SkeletonText size={Size.md} type={SkeletonTextType.Body} />
            <BodyText size={Size.sm}>Body sm</BodyText>
            <SkeletonText size={Size.sm} type={SkeletonTextType.Body} />
            <BodyText size={Size.xs}>Body xs</BodyText>
            <SkeletonText size={Size.xs} type={SkeletonTextType.Body} />

            <Label size={Size.lg}>Label lg</Label>
            <SkeletonText size={Size.lg} type={SkeletonTextType.Label} />
            <Label size={Size.md}>Label md</Label>
            <SkeletonText size={Size.md} type={SkeletonTextType.Label} />
            <Label size={Size.sm}>Label sm</Label>
            <SkeletonText size={Size.sm} type={SkeletonTextType.Label} />
            <Label size={Size.xs}>Label xs</Label>
            <SkeletonText size={Size.xs} type={SkeletonTextType.Label} />

            <Title size={Size.lg}>Title lg</Title>
            <SkeletonText size={Size.lg} type={SkeletonTextType.Title} />
            <Title size={Size.md}>Title md</Title>
            <SkeletonText size={Size.md} type={SkeletonTextType.Title} />
            <Title size={Size.sm}>Title sm</Title>
            <SkeletonText size={Size.sm} type={SkeletonTextType.Title} />
            <Title size={Size.xs}>Title xs</Title>
            <SkeletonText size={Size.xs} type={SkeletonTextType.Title} />
            <Title size={Size.xxs}>Title xxs</Title>
            <SkeletonText size={Size.xxs} type={SkeletonTextType.Title} />
        </div>
    )
};

export const Field: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonField is used internally for various input components.'
            }
        }
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: 220}}>
            <SkeletonField hasHelpText={true} hasLabel={true} size={Size.md} />
            <SkeletonField hasHelpText={true} hasLabel={true} size={Size.sm} />
            <SkeletonField hasHelpText={true} hasLabel={true} size={Size.xs} />
        </div>
    )
};

export const Checkbox: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonCheckbox is used internally for Checkbox, ToggleSwitch and Radio components.'
            }
        }
    },
    render: () => <SkeletonCheckbox hasHelpText={true} size={Size.md} />
};

export const Calendar: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonCalendar is used internally for Calendar component.'
            }
        }
    },
    render: () => <SkeletonCalendar />
};

export const FileUploadArea: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonFileUploadArea is used internally for FileUploadArea component.'
            }
        }
    },
    render: () => <SkeletonFileUploadArea />
};

export const ColorSwatchPicker: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonColorSwatchPicker is used internally for ColorSwatchPicker component.'
            }
        }
    },
    render: () => <SkeletonColorSwatchPicker itemCount={10} size={Size.md} />
};

export const DataTable: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonDataTable is used internally for DataTable component.'
            }
        }
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '3rem', width: 700}}>
            <SkeletonDataTable />
            <SkeletonDataTable columnCount={6} hasRowSelection={true} rowCount={4} />
        </div>
    )
};

export const DataCard: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'SkeletonDataCard is used internally for DataCard component.'
            }
        }
    },
    render: () => (
        <SkeletonDataCard
            hasHeaderIcon={true}
            hasHeaderText={true}
            hasVisualization={true}
            size={Size.md}
            style={DataCardStyle.Card}
        />
    )
};

export const PageHeader: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'SkeletonPageHeader is used internally for PageHeader component.'
            }
        }
    },
    render: () => <SkeletonPageHeader hasBreadcrumbs={true} hasDetails={true} hasIcon={true} level={2} />
};

import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Tabs, TabsType} from './tabs.js';
import {iconNames} from '../../media/icon/icons.js';
import {Heading} from '../../text/heading/heading.js';
import {Size} from '../../../constants/size.js';
import {BodyText} from '../../text/bodytext/bodytext.js';
import {Orientation} from '../../../constants/orientation.js';
import {Alignment as AlignmentType} from '../../../constants/alignment.js';
import {emptyFn} from '../../../utils/functionhelper.js';

const meta = {
    component: Tabs,
    parameters: {
        controls: {
            sort: 'requiredFirst'
        }
    },
    title: 'Components/Navigation/Tabs',
    tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

function getContent(title: string) {
    return (
        <div style={{padding: '8px'}}>
            <Heading size={Size.xs} style={{margin: '0'}}>
                {title}
            </Heading>
            <BodyText size={Size.sm}>
                Pellentesque ultrices non nibh sit amet dapibus. Etiam malesuada at orci at ullamcorper.
            </BodyText>
        </div>
    );
}

export const Playground: Story = {
    args: {
        onSelectionChange: emptyFn,
        panelItems: [
            {
                id: 'entries',
                content: getContent('Entries')
            },
            {
                id: 'reimbursement',
                content: getContent('Reimbursement')
            },
            {
                id: 'approval',
                content: getContent('Approval')
            },
            {
                id: 'keyFigures',
                content: getContent('Key figures')
            }
        ],
        tabItems: [
            {
                id: 'entries',
                name: 'Entries'
            },
            {
                id: 'reimbursement',
                name: 'Reimbursement'
            },
            {
                id: 'approval',
                name: 'Approval'
            },
            {
                id: 'keyFigures',
                name: 'Key figures'
            }
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Tabs component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = ['alignment', 'orientation', 'type', 'isDisabled', 'className'];

export const Variants: Story = {
    args: {
        onSelectionChange: emptyFn,
        panelItems: [
            {
                id: 'none',
                content: getContent('None')
            },
            {
                id: 'icon',
                content: getContent('Icon')
            },
            {
                id: 'badge',
                content: getContent('Badge')
            },
            {
                id: 'both',
                content: getContent('Both')
            }
        ],
        tabItems: [
            {
                id: 'none',
                name: 'None'
            },
            {
                id: 'icon',
                name: 'Icon',
                iconName: iconNames.Info
            },
            {
                id: 'badge',
                name: 'Badge',
                badgeText: '+4'
            },
            {
                id: 'both',
                name: 'Both',
                iconName: iconNames.Info,
                badgeText: '+4'
            }
        ]
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Tab items can include icon, badge or both.'
            }
        }
    }
};

export const Alignment: Story = {
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Tab items can be start or center aligned.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <div>
                <Tabs
                    {...args}
                    alignment={AlignmentType.start}
                    panelItems={[
                        {
                            id: 'start1',
                            content: getContent('Start 1')
                        },
                        {
                            id: 'start2',
                            content: getContent('Start 2')
                        },
                        {
                            id: 'start3',
                            content: getContent('Start 3')
                        },
                        {
                            id: 'start4',
                            content: getContent('Start 4')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'start1',
                            name: 'Start 1'
                        },
                        {
                            id: 'start2',
                            name: 'Start 2'
                        },
                        {
                            id: 'start3',
                            name: 'Start 3'
                        },
                        {
                            id: 'start4',
                            name: 'Start 4'
                        }
                    ]}
                />
            </div>
            <div>
                <Tabs
                    {...args}
                    panelItems={[
                        {
                            id: 'center1',
                            content: getContent('Center 1')
                        },
                        {
                            id: 'center2',
                            content: getContent('Center 2')
                        },
                        {
                            id: 'center3',
                            content: getContent('Center 3')
                        },
                        {
                            id: 'center4',
                            content: getContent('Center 4')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'center1',
                            name: 'Center 1'
                        },
                        {
                            id: 'center2',
                            name: 'Center 2'
                        },
                        {
                            id: 'center3',
                            name: 'Center 3'
                        },
                        {
                            id: 'center4',
                            name: 'Center 4'
                        }
                    ]}
                />
            </div>
        </div>
    )
};

export const Disabled: Story = {
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Tab items can be disabled with isDisabled prop or by disabling individual items with isDisabled property.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <div>
                <Tabs
                    {...args}
                    panelItems={[
                        {
                            id: 'underline-none',
                            content: getContent('Underline Disabled')
                        },
                        {
                            id: 'underline-icon',
                            content: getContent('Underline Disabled')
                        },
                        {
                            id: 'underline-badge',
                            content: getContent('Underline Disabled')
                        },
                        {
                            id: 'underline-both',
                            content: getContent('Underline Disabled')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'underline-none',
                            name: 'None',
                            isDisabled: true
                        },
                        {
                            id: 'underline-icon',
                            name: 'Icon',
                            iconName: iconNames.Info,
                            isDisabled: true
                        },
                        {
                            id: 'underline-badge',
                            name: 'Badge',
                            badgeText: '+4',
                            isDisabled: true
                        },
                        {
                            id: 'underline-both',
                            name: 'Both',
                            iconName: iconNames.Info,
                            badgeText: '+4',
                            isDisabled: true
                        }
                    ]}
                />
            </div>
            <div>
                <Tabs
                    {...args}
                    panelItems={[
                        {
                            id: 'card-none',
                            content: getContent('Card Disabled')
                        },
                        {
                            id: 'card-icon',
                            content: getContent('Card Disabled')
                        },
                        {
                            id: 'card-badge',
                            content: getContent('Card Disabled')
                        },
                        {
                            id: 'card-both',
                            content: getContent('Card Disabled')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'card-none',
                            name: 'None',
                            isDisabled: true
                        },
                        {
                            id: 'card-icon',
                            name: 'Icon',
                            iconName: iconNames.Info,
                            isDisabled: true
                        },
                        {
                            id: 'card-badge',
                            name: 'Badge',
                            badgeText: '+4',
                            isDisabled: true
                        },
                        {
                            id: 'card-both',
                            name: 'Both',
                            iconName: iconNames.Info,
                            badgeText: '+4',
                            isDisabled: true
                        }
                    ]}
                    type={TabsType.Card}
                />
            </div>
            <div>
                <Tabs
                    {...args}
                    orientation={Orientation.vertical}
                    panelItems={[
                        {
                            id: 'vertical-none',
                            content: getContent('Vertical Disabled')
                        },
                        {
                            id: 'vertical-icon',
                            content: getContent('Vertical Disabled')
                        },
                        {
                            id: 'vertical-badge',
                            content: getContent('Vertical Disabled')
                        },
                        {
                            id: 'vertical-both',
                            content: getContent('Vertical Disabled')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'vertical-none',
                            name: 'None',
                            isDisabled: true
                        },
                        {
                            id: 'vertical-icon',
                            name: 'Icon',
                            iconName: iconNames.Info,
                            isDisabled: true
                        },
                        {
                            id: 'vertical-badge',
                            name: 'Badge',
                            badgeText: '+4',
                            isDisabled: true
                        },
                        {
                            id: 'vertical-both',
                            name: 'Both',
                            iconName: iconNames.Info,
                            badgeText: '+4',
                            isDisabled: true
                        }
                    ]}
                />
            </div>
        </div>
    )
};

export const Vertical: Story = {
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Tabs can displayed vertically by setting orientation = Orientation.vertical.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <div>
                <Tabs
                    {...args}
                    orientation={Orientation.vertical}
                    panelItems={[
                        {
                            id: 'start1',
                            content: getContent('Start 1')
                        },
                        {
                            id: 'start2',
                            content: getContent('Start 2')
                        },
                        {
                            id: 'start3',
                            content: getContent('Start 3')
                        },
                        {
                            id: 'start4',
                            content: getContent('Start 4')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'start1',
                            name: 'Start 1'
                        },
                        {
                            id: 'start2',
                            name: 'Start 2'
                        },
                        {
                            id: 'start3',
                            name: 'Start 3'
                        },
                        {
                            id: 'start4',
                            name: 'Start 4'
                        }
                    ]}
                />
            </div>
            <div>
                <Tabs
                    {...args}
                    orientation={Orientation.vertical}
                    panelItems={[
                        {
                            id: 'center1',
                            content: getContent('None')
                        },
                        {
                            id: 'center2',
                            content: getContent('Icon')
                        },
                        {
                            id: 'center3',
                            content: getContent('Badge')
                        },
                        {
                            id: 'center4',
                            content: getContent('Both')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'center1',
                            name: 'None'
                        },
                        {
                            id: 'center2',
                            name: 'Icon',
                            iconName: iconNames.Info
                        },
                        {
                            id: 'center3',
                            name: 'Badge',
                            badgeText: '+4'
                        },
                        {
                            id: 'center4',
                            name: 'Both',
                            iconName: iconNames.Info,
                            badgeText: '+4'
                        }
                    ]}
                />
            </div>
        </div>
    )
};

export const Card: Story = {
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Tabs can displayed in Card style by setting type = TabsType.Card.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <div>
                <Tabs
                    {...args}
                    panelItems={[
                        {
                            id: 'start1',
                            content: getContent('Start 1')
                        },
                        {
                            id: 'start2',
                            content: getContent('Start 2')
                        },
                        {
                            id: 'start3',
                            content: getContent('Start 3')
                        },
                        {
                            id: 'start4',
                            content: getContent('Start 4')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'start1',
                            name: 'Start 1'
                        },
                        {
                            id: 'start2',
                            name: 'Start 2'
                        },
                        {
                            id: 'start3',
                            name: 'Start 3'
                        },
                        {
                            id: 'start4',
                            name: 'Start 4'
                        }
                    ]}
                    type={TabsType.Card}
                />
            </div>
            <div>
                <Tabs
                    {...args}
                    panelItems={[
                        {
                            id: 'center1',
                            content: getContent('None')
                        },
                        {
                            id: 'center2',
                            content: getContent('Icon')
                        },
                        {
                            id: 'center3',
                            content: getContent('Badge')
                        },
                        {
                            id: 'center4',
                            content: getContent('Both')
                        }
                    ]}
                    tabItems={[
                        {
                            id: 'center1',
                            name: 'None'
                        },
                        {
                            id: 'center2',
                            name: 'Icon',
                            iconName: iconNames.Info
                        },
                        {
                            id: 'center3',
                            name: 'Badge',
                            badgeText: '+4'
                        },
                        {
                            id: 'center4',
                            name: 'Both',
                            iconName: iconNames.Info,
                            badgeText: '+4'
                        }
                    ]}
                    type={TabsType.Card}
                />
            </div>
        </div>
    )
};

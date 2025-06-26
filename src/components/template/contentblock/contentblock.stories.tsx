import {Meta, StoryObj} from '@storybook/react-webpack5';
import {ContentBlock} from './contentblock.js';
import {BodyText, Heading, Title} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {Button, ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {iconNames} from '../../media/index.js';

const meta = {
    component: ContentBlock,
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
    title: 'Components/Template/ContentBlock'
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const Playground: Story = {
    args: {
        children: <BodyText size={Size.md}>Content</BodyText>,
        headerContent: <BodyText size={Size.md}>Header content</BodyText>,
        title: (
            <Heading level={2} size={Size.xxs}>
                Title of this block
            </Heading>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'ContentBlock component, be my guest and play with it!'
            }
        }
    }
};

export const TitleProp: Story = {
    args: {
        children: <BodyText size={Size.md}>Content</BodyText>
    },
    name: 'Title',
    parameters: {
        docs: {
            description: {
                story: 'Heading or Title component with level 2-6 should be used for the title.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ContentBlock
                {...args}
                title={
                    <Heading level={4} size={Size.xxs}>
                        Heading xss
                    </Heading>
                }
            />
            <ContentBlock
                {...args}
                title={
                    <Heading level={3} size={Size.xs}>
                        Heading xs
                    </Heading>
                }
            />
            <ContentBlock
                {...args}
                title={
                    <Title level={2} size={Size.xs}>
                        <strong>Title xs strong</strong>
                    </Title>
                }
            />
        </div>
    )
};

export const BodyStyle: Story = {
    args: {
        children: <BodyText size={Size.md}>Content</BodyText>,
        title: (
            <Heading level={2} size={Size.xxs}>
                Title of this block
            </Heading>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Body style (f.e. padding, gap, flex-direction) can be adjusted as needed. Design tokens should be used for spacing values.'
            }
        }
    },
    render: (args) => {
        function Card() {
            return (
                <div
                    style={{
                        flex: 1,
                        padding: '1rem',
                        border: '1px solid',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    Box
                </div>
            );
        }

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <ContentBlock
                    {...args}
                    bodyStyle={{padding: 'var(--space-sm'}}
                    title={
                        <Heading level={2} size={Size.xxs}>
                            Custom body padding
                        </Heading>
                    }>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContentBlock>
                <ContentBlock
                    {...args}
                    bodyStyle={{gap: 'var(--space-sm'}}
                    title={
                        <Heading level={2} size={Size.xxs}>
                            Custom body gap
                        </Heading>
                    }>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContentBlock>
                <ContentBlock
                    {...args}
                    bodyStyle={{flexDirection: 'column'}}
                    title={
                        <Heading level={2} size={Size.xxs}>
                            Custom body flex-direction
                        </Heading>
                    }>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContentBlock>
            </div>
        );
    }
};

export const HeaderContent: Story = {
    args: {
        children: <BodyText size={Size.md}>Content</BodyText>,
        headerContent: (
            <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-sm'}}>
                <Button style={ButtonStyle.Plain} variant={ButtonVariant.Neutral}>
                    Button
                </Button>
                <Button style={ButtonStyle.Outline} variant={ButtonVariant.Neutral}>
                    Button
                </Button>
                <IconButton
                    aria-label="Button"
                    iconName={iconNames.MoreVert}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </div>
        ),
        title: (
            <Heading level={2} size={Size.xxs}>
                Title of this block
            </Heading>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'With headerContent prop you can render whatever you want on the right side of the header.'
            }
        }
    }
};

export const Nested: Story = {
    args: {
        children: <BodyText size={Size.md}>Content</BodyText>,
        headerContent: <BodyText size={Size.md}>Header content</BodyText>,
        isNested: true
    },
    parameters: {
        docs: {
            description: {
                story: 'ContentBlock can be displayed with "nested" style using isNested prop. Header padding can be customized with headerStyle prop.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ContentBlock
                {...args}
                title={
                    <Heading level={2} size={Size.xxs}>
                        Nested content block with default padding
                    </Heading>
                }
            />
            <ContentBlock
                {...args}
                headerStyle={{padding: '0 var(--space-xl)'}}
                title={
                    <Heading level={2} size={Size.xxs}>
                        Nested content block with custom padding
                    </Heading>
                }
            />
        </div>
    )
};

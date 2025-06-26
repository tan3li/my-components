import {Meta, StoryObj} from '@storybook/react-webpack5';
import {PageLayout} from './pagelayout.js';
import {ContentBlock} from '../contentblock/contentblock.js';
import {Size} from '../../../constants/index.js';
import {BodyText, Heading} from '../../text/index.js';

const meta = {
    component: PageLayout,
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Template/PageLayout'
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Playground: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'PageLayout component, be my guest and play with it!'
            }
        }
    },
    render: (args) => {
        function ContentBox() {
            return (
                <ContentBlock
                    title={
                        <Heading level={2} size={Size.xxs}>
                            Title of this block
                        </Heading>
                    }>
                    <BodyText size={Size.md}>Content</BodyText>
                </ContentBlock>
            );
        }

        return (
            <PageLayout {...args}>
                <ContentBox />
                <ContentBox />
                <ContentBox />
            </PageLayout>
        );
    }
};

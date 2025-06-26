import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Icon, IconSize} from './icon.js';
import {iconNames} from './icons.js';
import {coreTokens} from '@visma-severa/severa-design-tokens';

const meta = {
    component: Icon,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Media/Icon'
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Filled: Story = {
    args: {
        color: coreTokens.color.gray700.value,
        name: iconNames.AddCircleFilled,
        size: IconSize.LG
    },
    parameters: {
        docs: {
            description: {
                story: 'Filled variant of an icon.'
            }
        }
    }
};

export const Outline: Story = {
    args: {
        color: coreTokens.color.gray700.value,
        name: iconNames.AddCircle,
        size: IconSize.LG
    },
    parameters: {
        docs: {
            description: {
                story: 'Outline variant of an icon.'
            }
        }
    }
};

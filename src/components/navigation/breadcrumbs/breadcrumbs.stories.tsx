import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Breadcrumbs} from './breadcrumbs.js';

const meta = {
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Breadcrumbs'
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Playground: Story = {
    args: {
        items: [
            {id: 'home', label: 'Home'},
            {id: 'page', label: 'Page'},
            {id: 'current', label: 'Current page'}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Breadcrumbs component, be my guest and play with it!'
            }
        }
    }
};

export const Disabled: Story = {
    args: {
        items: [
            {id: 'home', label: 'Home'},
            {id: 'page', label: 'Page', isDisabled: true},
            {id: 'current', label: 'Current page'}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'Breadcrumbs can be disabled fully or per item.'
            }
        }
    }
};

export const ItemCountOverflow: Story = {
    args: {
        items: [
            {id: 'home', label: 'Home'},
            {id: 'page1', label: 'Page 1'},
            {id: 'page2', label: 'Page 2'},
            {id: 'page3', label: 'Page 3'},
            {id: 'page4', label: 'Page 4'},
            {id: 'page5', label: 'Page 5'},
            {id: 'current', label: 'Current page'}
        ]
    },
    parameters: {
        docs: {
            description: {
                story: 'If there are 5 or more items, some of them will go behind dropdown menu.'
            }
        }
    }
};

export const SpaceOverflow: Story = {
    args: {
        items: [
            {id: 'home', label: 'Home'},
            {id: 'page1', label: 'Page 1'},
            {id: 'page2', label: 'Page 2'},
            {id: 'current', label: 'Current page'}
        ]
    },
    decorators: [
        (Story) => (
            <div style={{width: '250px', border: '1px solid', padding: '1rem'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'If component does not fit available space, some items will go behind dropdown menu.'
            }
        }
    }
};

export const SpaceOverflowEllipsis: Story = {
    args: {
        items: [
            {id: 'home', label: 'Home'},
            {id: 'page1', label: 'Page 1'},
            {id: 'page2', label: 'Page 2'},
            {id: 'current', label: 'Current page'}
        ]
    },
    decorators: [
        (Story) => (
            <div style={{width: '150px', border: '1px solid', padding: '1rem'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        docs: {
            description: {
                story: 'Last element will truncate with ellipsis if does not fit.'
            }
        }
    }
};

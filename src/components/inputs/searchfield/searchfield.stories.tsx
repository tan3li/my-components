import {Meta, StoryObj} from '@storybook/react-webpack5';
import {SearchField} from './searchfield.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {Size} from '../../../constants/size.js';

const meta = {
    args: {
        onKeyDown: emptyFn,
        onKeyUp: emptyFn,
        onCopy: emptyFn,
        onCut: emptyFn,
        onPaste: emptyFn,
        onCompositionStart: emptyFn,
        onCompositionEnd: emptyFn,
        onCompositionUpdate: emptyFn,
        onSelect: emptyFn,
        onBeforeInput: emptyFn,
        onInput: emptyFn
    },
    component: SearchField,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', width: '260px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.search-field__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/SearchField'
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Playground: Story = {
    args: {
        'aria-label': 'Search',
        isDisabled: false,
        placeholder: 'Search',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'SearchField component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = ['aria-label', 'isDisabled', 'placeholder', 'showHelpTextIcon', 'size'];

export const Sizes: Story = {
    args: {
        'aria-label': 'Search',
        isDisabled: false
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 2 sizes: sm and md.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <SearchField {...args} placeholder="Size xs" size={Size.xs} />
            <SearchField {...args} placeholder="Size sm" size={Size.sm} />
            <SearchField {...args} placeholder="Size md" size={Size.md} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        'aria-label': 'Search',
        isDisabled: true,
        placeholder: 'Search',
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'SearchField can be disabled with isDisabled prop.'
            }
        }
    }
};

export const HelpText: Story = {
    args: {
        'aria-label': 'Search',
        helpText: 'Find customers, contacts, projects, invoices & files. Type at least 3 characters.',
        isDisabled: false,
        placeholder: 'Search',
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Help text can given with helpText prop.'
            }
        }
    }
};

export const MinWidth: Story = {
    args: {
        'aria-label': 'Search',
        isDisabled: false
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Minimum width is 3× height of the field.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '90px'}}>
            <SearchField {...args} defaultValue="Size xs" size={Size.xs} />
            <SearchField {...args} defaultValue="Size sm" size={Size.sm} />
            <SearchField {...args} defaultValue="Size md" size={Size.md} />
        </div>
    )
};

export const Skeleton: Story = {
    args: {
        'aria-label': 'Search',
        isSkeleton: true,
        placeholder: 'Search',
        size: Size.md
    },
    parameters: {
        docs: {
            description: {
                story: 'SearchField can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

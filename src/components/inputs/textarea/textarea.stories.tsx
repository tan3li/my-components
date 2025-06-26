import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {TextArea} from './textarea';
import {DataState} from '../../../constants/datastate.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {useState} from 'react';

const meta = {
    args: {
        onKeyDown: emptyFn,
        onKeyUp: emptyFn,
        onBeforeInput: emptyFn,
        onCompositionEnd: emptyFn,
        onCompositionStart: emptyFn,
        onCompositionUpdate: emptyFn,
        onCopy: emptyFn,
        onCut: emptyFn,
        onInput: emptyFn,
        onPaste: emptyFn,
        onSelect: emptyFn
    },
    component: TextArea,
    parameters: {
        actions: {
            handles: ['onChange']
        },
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.textarea-field__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/TextArea'
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'TextArea component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'dataState',
    'helpText',
    'helpTextSuccess',
    'isDisabled',
    'isInvalid',
    'isReadOnly',
    'isRequired',
    'isSkeleton',
    'label',
    'minHeight',
    'placeholder',
    'value'
];

export const LongText: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: '5 rows of text are visible by default.'
            }
        }
    }
};

export const LetterCount: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        maxLength: 100,
        placeholder: 'Type something...',
        value: 'Value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Maximum letter count can be set by passing maxLength prop.'
            }
        }
    }
};

export const Disabled: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: true,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...',
        value: 'Value'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isDisabled']
        },
        docs: {
            description: {
                story: 'Disabled state can be set by passing isDisabled prop.'
            }
        }
    }
};

export const ReadOnly: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isReadOnly: true,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...',
        value: 'Value'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isReadOnly']
        },
        docs: {
            description: {
                story: 'Read-only state can be set by passing isReadOnly prop.'
            }
        }
    }
};

export const Invalid: Story = {
    args: {
        dataState: new Map([[DataState.ERROR, 'There is something wrong here.']]),
        isDisabled: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...',
        value: 'Something'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Error state can be set by passing isInvalid prop or dataState with ERROR.'
            }
        }
    }
};

export const Controlled: Story = {
    args: {
        helpText: 'Help text content',
        isControlled: true,
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'Textarea value can be fully controlled outside with isControlled prop.'
            }
        }
    },
    render: (args) => {
        const [value, setValue] = useState('Value');

        return <TextArea {...args} onChange={setValue} value={value} />;
    }
};

export const MinHeight: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        minHeight: '86px',
        placeholder: 'Type something...',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    parameters: {
        docs: {
            description: {
                story: 'Minimum height can be adjusted if needed.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        isSkeleton: true,
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'TextArea can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        dataTestId: 'textarea-field',
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Test changeCallback with changeParams.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const textAreaField = canvas.getByTestId('textarea-field');
        const textArea = textAreaField.querySelector('.textarea-field__textarea')!;

        await userEvent.type(textArea, 'entering this value');

        await userEvent.tab();

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: 'entering this value'
            })
        );
    }
};

import {Meta, StoryObj} from '@storybook/react-webpack5';
import {RichTextEditor} from './richtexteditor.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {expect, fn, userEvent, waitFor} from 'storybook/test';
import {useEffect, useState} from 'react';

const meta = {
    component: RichTextEditor,
    decorators: [
        (Story) => (
            <div style={{width: '24rem'}}>
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
    title: 'Components/Inputs/RichTextEditor'
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'RichTextEditor component, be my guest and play with it!'
            }
        }
    }
};

export const States: Story = {
    args: {
        helpText: 'Help text content',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'Editor can be in error, disabled or read-only state.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <RichTextEditor {...args} isInvalid={true} label="Error" />
            <RichTextEditor {...args} isDisabled={true} label="Disabled" />
            <RichTextEditor {...args} isReadOnly={true} label="Read-only" />
        </div>
    )
};

export const TextStyles: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        value: '<h1>Heading 1</h1><h2>Heading 2</h2><p>Normal text</p><h3>Small text</h3>'
    },
    parameters: {
        docs: {
            description: {
                story: 'Editor supports 4 text styles.'
            }
        }
    }
};

export const Emphasis: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        value: '<p><b>This is some bold text.</b></p><p><i>This is some italic text.</i></p><p><u>This is some underline text.</u></p>'
    },
    parameters: {
        docs: {
            description: {
                story: 'Text can be emphasized with bold, italic or underline.'
            }
        }
    }
};

export const OrderedList: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        value: '<ol><li>First</li><li>Second</li><li>Third</li></ol>'
    },
    parameters: {
        docs: {
            description: {
                story: 'Ordered list example.'
            }
        }
    }
};

export const BulletList: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        value: '<ul><li>First</li><li>Second</li><li>Third</li></ul>'
    },
    parameters: {
        docs: {
            description: {
                story: 'Bullet list example.'
            }
        }
    }
};

export const Link: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        value: '<p>Click or move cursor over this <a href="https://tan3li.fi">link</a> to edit it.</p>'
    },
    parameters: {
        docs: {
            description: {
                story: 'Link example.'
            }
        }
    }
};

const variables = [
    {id: 'UserName', label: 'User name'},
    {id: 'Address', label: 'Address'},
    {id: 'Email', label: 'Email'}
];

// eslint-disable-next-line
const variableRegExp = new RegExp('\\[(' + variables.map((v) => v.id).join('|') + ')\\]', 'igm');

export const Variable: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        placeholder: 'Type something...',
        toolbarConfig: {
            variables
        },
        value: '<p>Hello there [UserName]!</p>',
        variableToHtmlOptions: {
            regExp: variableRegExp,
            getItem: (match) => {
                const id = match.substring(1, match.length - 1);
                const label = variables[getIndexWithPropertyValue('id', id, variables)]?.label;

                return {id, label};
            }
        },
        variableToTextOptions: {
            getText: (variableItem) => `[${variableItem.id}]`
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Variable example.'
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
                story: 'RichTextEditor can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'Test changeCallback with changeParams.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const editor = canvasElement.querySelector('.text-editor')!;

        // Wait 1 second for editor to become editable
        await new Promise((resolve) => setTimeout(resolve, 1000));

        await userEvent.type(editor, 'entering this value');

        await userEvent.tab();

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '<p>entering this value</p>'
            })
        );
    },
    render: (args) => {
        const [isReadOnly, setIsReadOnly] = useState(true);

        useEffect(() => {
            // Make editable after 1 second
            setTimeout(() => {
                setIsReadOnly(false);
            }, 1000);
        }, []);

        return <RichTextEditor {...args} isReadOnly={isReadOnly} />;
    }
};

import {Meta, StoryObj} from '@storybook/react-webpack5';
import {Size} from '../../../constants/size.js';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {TextField} from './textfield.js';
import {iconNames} from '../../media/icon/icons.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {TextFieldCopy} from './textfieldcopy.js';
import {expect, fn, userEvent, waitFor, within} from 'storybook/test';
import {PasswordField} from './passwordfield.js';
import {CSSProperties, useId, useState} from 'react';
import {DataState} from '../../../constants/datastate.js';
import {TextFieldSelect} from './textfieldselect.js';
import {Alignment} from '../../../constants/alignment.js';
import {Heading} from '../../text/index.js';

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
    component: TextField,
    decorators: [
        (Story) => (
            <div style={{padding: '5px', minWidth: 240}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        actions: {
            handles: ['onChange']
        },
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.text-field__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/TextField'
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
    args: {
        helpText: 'Help text content',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: true,
        onChange: emptyFn,
        label: 'Field label',
        placeholder: 'Type something...',
        value: 'Value'
    },
    parameters: {
        docs: {
            description: {
                story: 'TextField component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'dataState',
    'endIconName',
    'helpText',
    'helpTextSuccess',
    'isDisabled',
    'isInvalid',
    'isPlain',
    'isReadOnly',
    'isRequired',
    'isSkeleton',
    'label',
    'placeholder',
    'size',
    'startIconName',
    'value'
];

const gridStyles: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '3rem',
    rowGap: '1rem'
};
const listStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
};

export const Variants: Story = {
    args: {
        isDisabled: false,
        isInvalid: false
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'TextField component with different variants.'
            }
        }
    },
    render: (args) => {
        const textFields = [
            <TextField {...args} label="Without icons" placeholder="Type something...." />,
            <TextField {...args} label="Without icons" value="Value" />,
            <TextField {...args} helpText="Some additional help text" label="Without icons" value="Value" />,
            <TextField
                {...args}
                label="With start icon"
                placeholder="Type something...."
                startIconName={iconNames.Mail}
            />,
            <TextField {...args} label="With start icon" startIconName={iconNames.Mail} value="Value" />,
            <TextField
                {...args}
                helpText="Some additional help text"
                label="With start icon"
                startIconName={iconNames.Mail}
                value="Value"
            />,
            <TextField
                {...args}
                endIconName={iconNames.Calendar}
                label="With end icon"
                placeholder="Type something...."
            />,
            <TextField {...args} endIconName={iconNames.Calendar} label="With end icon" value="Value" />,
            <TextField
                {...args}
                endIconName={iconNames.Calendar}
                helpText="Some additional help text"
                label="With end icon"
                value="Value"
            />,
            <TextField
                {...args}
                endIconName={iconNames.Calendar}
                label="With start and end icon"
                placeholder="Type something...."
                startIconName={iconNames.Mail}
            />,
            <TextField
                {...args}
                endIconName={iconNames.Calendar}
                label="With start and end icon"
                startIconName={iconNames.Mail}
                value="Value"
            />,
            <TextField
                {...args}
                endIconName={iconNames.Calendar}
                helpText="Some additional help text"
                label="With start and end icon"
                startIconName={iconNames.Mail}
                value="Value"
            />,
            <TextField {...args} isRequired={true} label="Required" placeholder="Type something...." />,
            <TextField {...args} isRequired={true} label="Required" value="Value" />,
            <TextField
                {...args}
                helpText="Some additional help text"
                isRequired={true}
                label="Required"
                value="Value"
            />,
            <TextField {...args} label="With prefix" placeholder="Type something...." prefix="km/h" />,
            <TextField {...args} label="With prefix" prefix="km/h" value="Value" />,
            <TextField
                {...args}
                helpText="Some additional help text"
                label="With prefix"
                prefix="km/h"
                value="Value"
            />,
            <TextField {...args} label="With suffix" placeholder="Type something...." suffix="€" />,
            <TextField {...args} label="With suffix" suffix="€" value="Value" />,
            <TextField {...args} helpText="Some additional help text" label="With suffix" suffix="€" value="Value" />,
            <TextField
                {...args}
                label="With prefix and suffix"
                placeholder="Type something...."
                prefix="km/h"
                suffix="€"
            />,
            <TextField {...args} label="With prefix and suffix" prefix="km/h" suffix="€" value="Value" />,
            <TextField
                {...args}
                helpText="Some additional help text"
                label="With prefix and suffix"
                prefix="km/h"
                suffix="€"
                value="Value"
            />
        ];

        return (
            <div>
                <Heading level={2} size={Size.sm}>
                    Different variants of TextField component
                </Heading>
                <div style={gridStyles}>
                    {textFields.map((textField, i) => (
                        <div key={i}>{textField}</div>
                    ))}
                </div>
            </div>
        );
    }
};

export const Sizes: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        label: 'Field label',
        value: 'Value'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There are 3 sizes of checkboxes: xs, sm and md.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TextField {...args} label="Size xs" size={Size.xs} />
            <TextField {...args} label="Size sm" size={Size.sm} />
            <TextField {...args} label="Size md" size={Size.md} />
        </div>
    )
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        isInvalid: false,
        isRequired: false,
        label: 'Field label',
        placeholder: 'Disabled...'
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
    },
    render: (args) => (
        <div style={listStyles}>
            <TextField {...args} />
            <TextField {...args} value="Value" />
            <TextField {...args} helpText="Some additional help text" isRequired={true} value="Value" />
        </div>
    )
};

export const ReadOnly: Story = {
    args: {
        isInvalid: false,
        isReadOnly: true,
        isRequired: false,
        label: 'Field label',
        value: 'Read-only value'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isDisabled']
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
        isRequired: true,
        label: 'Error',
        placeholder: 'Type something...',
        value: 'Something'
    },
    parameters: {
        controls: {
            include: argsForStories,
            exclude: ['isInvalid']
        },
        docs: {
            description: {
                story: 'Error state can be set by passing isInvalid prop or dataState with ERROR.'
            }
        }
    }
};

export const Actions: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'There is possibility to render actions in prefix or suffix.'
            }
        }
    },
    render: (args) => {
        const [areaCode, setAreaCode] = useState('+358');
        const areaCodeId = useId();

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <TextField
                    {...args}
                    label="Personal website"
                    placeholder="example.com"
                    prefix="https://"
                    suffix={({inputRef}) => <TextFieldCopy inputRef={inputRef} prefix="https://" />}
                    value="tan3li.fi"
                />
                <PasswordField
                    {...args}
                    helpText="Password must be at least 8 characters."
                    label="Password"
                    placeholder="Enter password"
                    showHelpTextIcon={false}
                    showVisibilityToggle={true}
                    value="myawesomepassword"
                />
                <TextField
                    {...args}
                    aria-labelledby={areaCodeId}
                    label="Phone number"
                    placeholder="Enter phone number"
                    prefix={({isDisabled, isReadOnly}) => (
                        <>
                            <TextFieldSelect
                                aria-label="Area code"
                                isDisabled={isDisabled}
                                isReadOnly={isReadOnly}
                                items={[
                                    {value: '+46', text: '+46'},
                                    {value: '+47', text: '+47'},
                                    {value: '+358', text: '+358'}
                                ]}
                                onSelectionChange={(value) => setAreaCode(value!)}
                                text={areaCode}
                                value={areaCode}
                            />
                            <span className="visually-hidden" id={areaCodeId}>
                                {areaCode}
                            </span>
                        </>
                    )}
                    value="441234567"
                />
            </div>
        );
    }
};

export const TextAlignment: Story = {
    args: {
        isDisabled: false,
        isInvalid: false,
        isRequired: false,
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Input text can be aligned left or right.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <TextField
                {...args}
                label="Left + Suffix"
                placeholder="Enter price"
                suffix="€"
                type="number"
                value="1400"
            />
            <TextField
                {...args}
                label="Prefix + Left"
                placeholder="Enter price"
                prefix="€"
                type="number"
                value="1400"
            />
            <TextField
                {...args}
                label="Right + Suffix"
                placeholder="Enter price"
                suffix="€"
                textAlign={Alignment.end}
                type="number"
                value="1400"
            />
            <TextField
                {...args}
                label="Prefix + Right"
                placeholder="Enter price"
                prefix="€"
                textAlign={Alignment.end}
                type="number"
                value="1400"
            />
            <TextField
                {...args}
                label="Center"
                placeholder="Enter price"
                textAlign={Alignment.center}
                type="number"
                value="1400"
            />
        </div>
    )
};

export const Controlled: Story = {
    args: {
        helpText: 'Help text content',
        isControlled: true,
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
        isRequired: true,
        label: 'Field label',
        placeholder: 'Type something...'
    },
    parameters: {
        docs: {
            description: {
                story: 'Input value can be fully controlled outside with isControlled prop.'
            }
        }
    },
    render: (args) => {
        const [value, setValue] = useState('Value');

        return <TextField {...args} onChange={setValue} value={value} />;
    }
};

export const Plain: Story = {
    args: {
        'aria-label': 'Plain',
        isDisabled: false,
        isInvalid: false,
        isPlain: true,
        isRequired: false,
        placeholder: 'Write something'
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'TextField can be displayed with borderless style with isPlain prop.'
            }
        }
    },
    render: (args) => (
        <div style={listStyles}>
            <TextField {...args} />
            <TextField {...args} isDisabled={true} />
            <TextField
                {...args}
                dataState={new Map([[DataState.ERROR, 'There is something wrong here.']])}
                value="Something"
            />
        </div>
    )
};

export const Skeleton: Story = {
    args: {
        helpText: 'Help text content',
        label: 'Field label',
        isSkeleton: true,
        placeholder: 'Write something',
        size: Size.md
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'TextField can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        dataTestId: 'text-field',
        label: 'Remember me',
        placeholder: 'Example'
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

        await userEvent.type(canvas.getByTestId('text-field'), 'entering this value');

        await userEvent.tab();

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: 'entering this value'
            })
        );
    }
};

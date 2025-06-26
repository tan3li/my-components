import {Meta, StoryObj} from '@storybook/react-webpack5';
import {iconNames} from '../../media/index.js';
import {UploadItem, UploadItemProps, UploadItemStyle} from './uploaditem.js';
import {DataState} from '../../../constants/datastate.js';
import {ButtonStyle, ButtonVariant, IconButton, Menu} from '../../action/index.js';
import {Size} from '../../../constants/index.js';
import {useDataState} from '../../../hooks/usedatastate.js';
import {useState} from 'react';
import {BodyText} from '../../text/index.js';

const meta = {
    component: UploadItem,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/UploadItem'
} satisfies Meta<typeof UploadItem>;

export default meta;
type Story = StoryObj<typeof UploadItem>;

function Actions({showEdit, dataState, isDisabled, isInvalid, ...props}: UploadItemProps & {showEdit?: boolean}) {
    const {hasError, isReadOnly} = useDataState(dataState, isInvalid, props.isReadOnly);

    if (hasError) {
        return (
            <IconButton
                aria-label="Delete"
                iconName={iconNames.Delete}
                isDisabled={isDisabled ?? isReadOnly}
                size={Size.sm}
                style={ButtonStyle.Plain}
                variant={ButtonVariant.Danger}
            />
        );
    }

    return (
        <>
            {showEdit && (
                <IconButton
                    aria-label="Edit"
                    iconName={iconNames.Edit}
                    isDisabled={isDisabled ?? isReadOnly}
                    size={Size.sm}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            )}
            <Menu
                items={[
                    {id: '0', name: 'Edit', props: {leftIconName: iconNames.Edit}},
                    {id: '1', name: 'Download', props: {leftIconName: iconNames.ArrowDownward}, hasSeparator: true},
                    {id: '2', name: 'Delete', props: {leftIconName: iconNames.Delete, isDestructive: true}}
                ]}
                placement="bottom right">
                <IconButton
                    aria-label="Actions"
                    iconName={iconNames.MoreVert}
                    isDisabled={isDisabled ?? isReadOnly}
                    size={Size.sm}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}
                />
            </Menu>
        </>
    );
}

export const Playground: Story = {
    args: {
        actions: Actions,
        description: 'John Doe ∙ 40,46kB ∙ 05.07.2024',
        iconName: iconNames.FilePresent,
        name: 'Filename.pdf',
        style: UploadItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'UploadItem component, be my guest and play with it!'
            }
        }
    }
};

export const States: Story = {
    args: {
        actions: Actions,
        description: 'John Doe ∙ 40,46kB ∙ 05.07.2024',
        iconName: iconNames.FilePresent,
        name: 'Filename.pdf',
        style: UploadItemStyle.Card
    },
    globals: {
        backgrounds: {value: 'blueGray'}
    },
    parameters: {
        docs: {
            description: {
                story: 'Different states of the component.'
            }
        }
    },
    render: (args) => (
        <div style={{alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <UploadItem {...args} style={UploadItemStyle.Card} />
            <UploadItem {...args} style={UploadItemStyle.Plain} />

            <UploadItem {...args} isDisabled={true} style={UploadItemStyle.Card} />
            <UploadItem {...args} isDisabled={true} style={UploadItemStyle.Plain} />

            <UploadItem
                {...args}
                dataState={new Map([[DataState.ERROR, 'File corrupted.']])}
                style={UploadItemStyle.Card}
            />
            <UploadItem
                {...args}
                dataState={new Map([[DataState.ERROR, 'File corrupted.']])}
                style={UploadItemStyle.Plain}
            />
        </div>
    )
};

export const Progress: Story = {
    args: {
        actions: Actions,
        description: 'John Doe ∙ 40,46kB ∙ 05.07.2024',
        iconName: iconNames.FilePresent,
        name: 'Filename.pdf',
        style: UploadItemStyle.Card,
        uploadProgress: 60
    },
    parameters: {
        docs: {
            description: {
                story: 'Upload progress can be displayed with uploadProgress prop.'
            }
        }
    }
};

export const Interactivity: Story = {
    args: {
        actions: (props) => <Actions {...props} showEdit={true} />,
        description: 'John Doe ∙ 40,46kB ∙ 05.07.2024',
        iconName: iconNames.FilePresent,
        name: 'File display name',
        style: UploadItemStyle.Card,
        tooltipText: 'the-actual-filename-which-would-look-crappy.pdf'
    },
    parameters: {
        docs: {
            description: {
                story: 'UploadItem can have tooltip, press handler and multiple actions.'
            }
        }
    },
    render: (args) => {
        const [count, setCount] = useState(0);

        return (
            <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <UploadItem {...args} onNamePress={() => setCount((prevCount) => prevCount + 1)} />
                <BodyText size={Size.xs}>{`Pressed download ${count} times.`}</BodyText>
            </div>
        );
    }
};

export const LongName: Story = {
    args: {
        actions: Actions,
        description: 'John Doe ∙ 40,46kB ∙ 05.07.2024',
        iconName: iconNames.FilePresent,
        style: UploadItemStyle.Card
    },
    parameters: {
        docs: {
            description: {
                story: 'Long names in limited space will wrap.'
            }
        }
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px'}}>
            <UploadItem {...args} name="this-is-very-long-file-name-with-hyphens.pdf" />
            <UploadItem {...args} name="thisisverylongfilenamewithoutanypunctuationmarks.pdf" />
            <UploadItem {...args} name="This is very long file name with spaces." />
        </div>
    )
};

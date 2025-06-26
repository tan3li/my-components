import {Meta, StoryObj} from '@storybook/react-webpack5';
import {FileUploadArea} from './fileuploadarea.js';
import {iconNames} from '../../media/index.js';
import {ReactNode, useState} from 'react';
import {UploadItem, UploadItemStyle} from '../uploaditem/uploaditem.js';
import {Size} from '../../../constants/index.js';
import {ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {HelpTextVariant} from '../../text/index.js';
import {Drawer, DrawerVariant, InlineAlert, InlineAlertVariant} from '../../feedback/index.js';
import {TextField} from '../textfield/index.js';
import {MultiSelect, SelectedItemStyle} from '../multiselect/index.js';
import {SelectItem} from '../select/index.js';
import {Divider} from '../../datadisplay/index.js';
import {isEmptyString} from '../../../utils/objecthelper.js';

const meta = {
    args: {
        onHoverChange: undefined,
        onHoverStart: undefined,
        onHoverEnd: undefined,
        onDrop: undefined,
        onSelect: undefined,
        onDropEnter: undefined,
        onDropExit: undefined,
        onDropMove: undefined
    },
    component: FileUploadArea,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/FileUploadArea'
} satisfies Meta<typeof FileUploadArea>;

export default meta;
type Story = StoryObj<typeof FileUploadArea>;

export const Playground: Story = {
    args: {
        acceptedFileTypes: ['image/png', 'application/pdf'],
        descriptionText: 'Supported formats: png, pdf',
        helpTextProps: {
            children: 'Disk space: 5GB available'
        },
        iconName: iconNames.FilePresent,
        isDisabled: false,
        mainText: 'Drag & drop file here or browse from your computer.'
    },
    parameters: {
        docs: {
            description: {
                story: 'FileUploadArea component, be my guest and play with it!'
            }
        }
    }
};

const argsForStories = [
    'acceptedFileTypes',
    'allowsMultiple',
    'descriptionText',
    'helpTextProps',
    'iconName',
    'isDisabled',
    'isSkeleton',
    'mainText',
    'onDrop',
    'onSelect'
];

export const Disabled: Story = {
    args: {
        acceptedFileTypes: ['image/png', 'application/pdf'],
        descriptionText: 'Supported formats: png, pdf',
        helpTextProps: {
            children: 'Disk space: 5GB available',
            variant: HelpTextVariant.Danger
        },
        iconName: iconNames.FilePresent,
        isDisabled: true,
        mainText: 'Drag & drop file here or browse from your computer.'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Element can be disable with isDisabled.'
            }
        }
    }
};

export const Skeleton: Story = {
    args: {
        acceptedFileTypes: ['image/png', 'application/pdf'],
        descriptionText: 'Supported formats: png, pdf',
        iconName: iconNames.FilePresent,
        isSkeleton: true,
        mainText: 'Drag & drop file here or browse from your computer.'
    },
    parameters: {
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'FileUploadArea can be displayed as skeleton with isSkeleton prop.'
            }
        }
    }
};

interface FileModel {
    id: number;
    displayName?: string;
    keywords?: Array<SelectItem<string>>;
    data: File;
    uploadProgress?: number;
}
let uploadId = 1;

export const Example: Story = {
    args: {
        acceptedFileTypes: ['image/png', 'application/pdf'],
        allowsMultiple: true,
        descriptionText: 'Supported formats: png, pdf',
        helpTextProps: {
            children: 'Disk space: 5GB available'
        },
        iconName: iconNames.FilePresent,
        isDisabled: false,
        mainText: 'Drag & drop file here or browse from your computer.'
    },
    parameters: {
        layout: 'padded',
        controls: {
            include: argsForStories
        },
        docs: {
            description: {
                story: 'Example flow with UploadItem.'
            }
        }
    },
    render: (args) => {
        const [uploadedFiles, setUploadedFiles] = useState<FileModel[]>([]);
        const [filesToUpload, setFilesToUpload] = useState<FileModel[]>([]);
        const [isUploadDrawerOpen, setIsUploadDrawerOpen] = useState(false);
        const [editId, setEditId] = useState<number | null>(null);
        const [fileModelInEdit, setFileModelInEdit] = useState<FileModel | null>(null);

        const onFilesAdded = (files: File[]) => {
            const newFilesToUpload: FileModel[] = [];

            files.forEach((f) => {
                const id = uploadId++;

                newFilesToUpload.push({id, data: f, keywords: []});
            });

            setFilesToUpload(newFilesToUpload);
            setIsUploadDrawerOpen(true);
        };

        const onFileToUploadFieldChange = (obj: {field: string; id: number; value: any}) => {
            const {field, id, value} = obj;

            setFilesToUpload(
                filesToUpload.map((file) => {
                    if (file.id === id) {
                        return {...file, [field]: value};
                    }

                    return file;
                })
            );
        };

        const onFileModelInEditFieldChange = (obj: {field: string; id: number; value: any}) => {
            if (fileModelInEdit) {
                const {field, value} = obj;

                setFileModelInEdit({...fileModelInEdit, [field]: value});
            }
        };

        const renderUploadItem = ({file, actions}: {file: FileModel; actions: ReactNode}) => {
            const {id, data, displayName, keywords} = file;

            return (
                <UploadItem
                    actions={actions}
                    description={`You ∙ ${data.size / 1000} KB ∙ Keywords: ${keywords && keywords.length > 0 ? keywords.map((kw) => kw.text).join(', ') : 'N/A'}`}
                    iconName={iconNames.FilePresent}
                    key={id}
                    name={isEmptyString(displayName) ? data.name : displayName}
                    style={UploadItemStyle.Card}
                    tooltipText={displayName ? data.name : undefined}
                />
            );
        };

        const renderFileEdit = ({
            file,
            actions,
            onFieldChange,
            autoFocus
        }: {
            file: FileModel;
            actions?: ReactNode;
            onFieldChange: (obj: {field: string; id: number; value: any}) => void;
            autoFocus?: boolean;
        }) => {
            const {id, displayName, keywords} = file;

            return (
                <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-md)'}}>
                    {renderUploadItem({file, actions})}
                    <TextField
                        autoFocus={autoFocus}
                        changeCallback={onFieldChange}
                        changeParams={{field: 'displayName', id}}
                        helpText="Help text content"
                        label="File display name"
                        placeholder="i.e. shorter name"
                        value={displayName}
                    />
                    <MultiSelect
                        changeCallback={onFieldChange}
                        changeParams={{field: 'keywords', id}}
                        helpText="Help text content"
                        items={[
                            {value: 'foo', text: 'foo'},
                            {value: 'bar', text: 'bar'},
                            {value: 'test', text: 'test'}
                        ]}
                        label="Keywords"
                        placeholder="Value"
                        selectedItemStyle={SelectedItemStyle.tag}
                        selectedItems={keywords}
                    />
                </div>
            );
        };

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    margin: 'auto',
                    width: '512px'
                }}>
                <FileUploadArea {...args} onDrop={onFilesAdded} onSelect={onFilesAdded} />
                {uploadedFiles.map((file) =>
                    renderUploadItem({
                        file,
                        actions: (
                            <>
                                <IconButton
                                    aria-label="Edit"
                                    iconName={iconNames.Edit}
                                    onPress={() => {
                                        setFileModelInEdit({...file});
                                        setEditId(file.id);
                                    }}
                                    size={Size.sm}
                                    style={ButtonStyle.Plain}
                                    variant={ButtonVariant.Neutral}
                                />
                                <IconButton
                                    aria-label="Delete"
                                    iconName={iconNames.Delete}
                                    onPress={() => {
                                        setUploadedFiles(uploadedFiles.filter((f) => f.id !== file.id));
                                    }}
                                    size={Size.sm}
                                    style={ButtonStyle.Plain}
                                    variant={ButtonVariant.Danger}
                                />
                            </>
                        )
                    })
                )}
                <Drawer
                    autoFocusClose={false}
                    isOpen={isUploadDrawerOpen}
                    onOpenChange={setIsUploadDrawerOpen}
                    primaryAction={{
                        label: 'Upload',
                        isDisabled: filesToUpload.length === 0,
                        onPress: (closeCallback) => {
                            setUploadedFiles([...uploadedFiles, ...filesToUpload.slice()]);
                            closeCallback();
                        }
                    }}
                    title={`Upload files (${filesToUpload.length})`}
                    variant={DrawerVariant.FullOverlay}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-md)'}}>
                        <InlineAlert
                            content="You can shorten the display name and tag your uploads."
                            isDismissible={false}
                            title="Improve search & discovery of your files"
                            variant={InlineAlertVariant.Informative}
                        />
                        {filesToUpload.map((file, index) => {
                            const {id} = file;

                            return (
                                <div
                                    key={id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--space-lg)',
                                        paddingBottom: 'var(--space-lg)'
                                    }}>
                                    {renderFileEdit({
                                        file,
                                        actions: (
                                            <IconButton
                                                aria-label="Delete"
                                                iconName={iconNames.Delete}
                                                onPress={() => {
                                                    setFilesToUpload(filesToUpload.filter((f) => f.id !== id));
                                                }}
                                                size={Size.sm}
                                                style={ButtonStyle.Plain}
                                                variant={ButtonVariant.Danger}
                                            />
                                        ),
                                        onFieldChange: onFileToUploadFieldChange,
                                        autoFocus: index === 0
                                    })}
                                    {index < filesToUpload.length - 1 && <Divider size={Size.md} />}
                                </div>
                            );
                        })}
                    </div>
                </Drawer>
                <Drawer
                    autoFocusClose={false}
                    destructiveAction={{
                        label: 'Delete',
                        iconName: iconNames.Delete,
                        onPress: (closeCallback) => {
                            setUploadedFiles(uploadedFiles.filter((f) => f.id !== editId));
                            closeCallback();
                        }
                    }}
                    isOpen={!!editId}
                    onOpenChange={() => setEditId(null)}
                    primaryAction={{
                        label: 'Save changes',
                        onPress: (closeCallback) => {
                            if (fileModelInEdit) {
                                setUploadedFiles(
                                    uploadedFiles.map((file) => {
                                        if (file.id === fileModelInEdit.id) {
                                            return {...fileModelInEdit};
                                        }

                                        return file;
                                    })
                                );
                            }
                            closeCallback();
                        }
                    }}
                    title="Edit file"
                    variant={DrawerVariant.FullOverlay}>
                    {fileModelInEdit &&
                        renderFileEdit({
                            file: fileModelInEdit,
                            onFieldChange: onFileModelInEditFieldChange,
                            autoFocus: true
                        })}
                </Drawer>
            </div>
        );
    }
};

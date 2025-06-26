import {Pagination} from './pagination.js';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {useState} from 'react';

const meta = {
    component: Pagination,
    parameters: {
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Navigation/Pagination'
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {
    args: {
        count: 10,
        isMinimized: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Pagination component, be my guest and play with it!'
            }
        }
    }
};

export const NoEllipsis: Story = {
    args: {
        count: 7
    },
    parameters: {
        docs: {
            description: {
                story: 'Ellipsis are not display if count <= 7.'
            }
        }
    }
};

export const Ellipsis: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Ellipsis are positioned based on current active page.'
            }
        }
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Pagination count={10} pageIndex={3} />
            <Pagination count={10} pageIndex={4} />
            <Pagination count={10} pageIndex={6} />
        </div>
    )
};

export const ItemsPerPage: Story = {
    args: {
        pageSize: 25,
        totalRowCount: 100
    },
    parameters: {
        docs: {
            description: {
                story: 'Table pagination should be configured with pageSize and totalRowCount.'
            }
        }
    },
    render: (args) => {
        const [pagination, setPagination] = useState({
            pageIndex: 0,
            pageSize: 25
        });

        return (
            <Pagination
                {...args}
                onPageIndexChange={(pageIndex) => setPagination({...pagination, pageIndex})}
                onPageSizeChange={(pageSize) => setPagination({pageIndex: 0, pageSize})}
                pageIndex={pagination.pageIndex}
                pageSize={pagination.pageSize}
            />
        );
    }
};

export const Minimized: Story = {
    args: {
        isMinimized: true,
        pageSize: 25,
        totalRowCount: 100
    },
    parameters: {
        docs: {
            description: {
                story: 'Minimized table pagination.'
            }
        }
    },
    render: (args) => {
        const [pagination1, setPagination1] = useState({
            pageIndex: 0,
            pageSize: 25
        });
        const [pagination2, setPagination2] = useState({
            pageIndex: 0,
            pageSize: 25
        });
        const [pagination3, setPagination3] = useState({
            pageIndex: 0,
            pageSize: 25
        });

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Pagination
                    {...args}
                    itemsPerPageOptions={{isVisible: false}}
                    onPageIndexChange={(pageIndex) => setPagination1({...pagination1, pageIndex})}
                    onPageSizeChange={(pageSize) => setPagination1({pageIndex: 0, pageSize})}
                    pageIndex={pagination1.pageIndex}
                    pageSize={pagination1.pageSize}
                />
                <Pagination
                    {...args}
                    onPageIndexChange={(pageIndex) => setPagination2({...pagination2, pageIndex})}
                    onPageSizeChange={(pageSize) => setPagination2({pageIndex: 0, pageSize})}
                    pageIndex={pagination2.pageIndex}
                    pageSize={pagination2.pageSize}
                />
                <Pagination
                    {...args}
                    itemsPerPageOptions={{showLabel: false}}
                    onPageIndexChange={(pageIndex) => setPagination3({...pagination3, pageIndex})}
                    onPageSizeChange={(pageSize) => setPagination3({pageIndex: 0, pageSize})}
                    pageIndex={pagination3.pageIndex}
                    pageSize={pagination3.pageSize}
                />
            </div>
        );
    }
};

export const Ordering: Story = {
    args: {
        pageSize: 25,
        totalRowCount: 100
    },
    parameters: {
        docs: {
            description: {
                story: 'Elements can be ordered with page items first or last.'
            }
        }
    },
    render: (args) => {
        const [pagination1, setPagination1] = useState({
            pageIndex: 0,
            pageSize: 25
        });
        const [pagination2, setPagination2] = useState({
            pageIndex: 0,
            pageSize: 25
        });

        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <Pagination
                    {...args}
                    onPageIndexChange={(pageIndex) => setPagination1({...pagination1, pageIndex})}
                    onPageSizeChange={(pageSize) => setPagination1({pageIndex: 0, pageSize})}
                    pageIndex={pagination1.pageIndex}
                    pageSize={pagination1.pageSize}
                    showPagesFirst={true}
                />
                <Pagination
                    {...args}
                    onPageIndexChange={(pageIndex) => setPagination2({...pagination2, pageIndex})}
                    onPageSizeChange={(pageSize) => setPagination2({pageIndex: 0, pageSize})}
                    pageIndex={pagination2.pageIndex}
                    pageSize={pagination2.pageSize}
                    showPagesFirst={false}
                />
            </div>
        );
    }
};

import {Meta, StoryObj} from '@storybook/react-webpack5';
import {LayoutGrid, LayoutGridColumnSpacing} from './layoutgrid.js';
import {LayoutGridItem, LayoutGridItemPresetSize} from './layoutgriditem.js';
import {ReactNode} from 'react';
import {coreTokens} from '@tan3li/d-tokens';

const meta = {
    component: LayoutGrid,
    parameters: {
        layout: 'padded',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Template/LayoutGrid'
} satisfies Meta<typeof LayoutGrid>;

export default meta;
type Story = StoryObj<typeof LayoutGrid>;

interface BoxProps {
    children: ReactNode;
}

function Box({children}: BoxProps) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--informative-100)',
                padding: '0.5rem'
            }}>
            {children}
        </div>
    );
}

export const BasicGrid: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Basic grid layout with equal item sizes.'
            }
        }
    }
};

export const MultipleBreakpoints: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={{xs: 4, sm: 8, lg: 12}}>
                    <Box>xs=4 sm=8 lg=12</Box>
                </LayoutGridItem>

                <LayoutGridItem size={{xs: 4, sm: 4, lg: 6}}>
                    <Box>xs=4 sm=4 lg=6</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 6}}>
                    <Box>xs=4 sm=4 lg=6</Box>
                </LayoutGridItem>

                <LayoutGridItem size={{xs: 4, sm: 4, lg: 4}}>
                    <Box>xs=4 sm=4 lg=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 4}}>
                    <Box>xs=4 sm=4 lg=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 4}}>
                    <Box>xs=4 sm=4 lg=4</Box>
                </LayoutGridItem>

                <LayoutGridItem size={{xs: 4, sm: 4, lg: 3}}>
                    <Box>xs=4 sm=4 lg=3</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 3}}>
                    <Box>xs=4 sm=4 lg=3</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 3}}>
                    <Box>xs=4 sm=4 lg=3</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 4, sm: 4, lg: 3}}>
                    <Box>xs=4 sm=4 lg=3</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Grid item sizes can be set by breakpoint.'
            }
        }
    }
};

export const ColumnSpacing: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: {
            xs: LayoutGridColumnSpacing.None,
            md: LayoutGridColumnSpacing.Compact,
            lg: LayoutGridColumnSpacing.Default,
            xl: LayoutGridColumnSpacing.Comfy
        },
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Column spacing can be set by breakpoint.'
            }
        }
    }
};

export const RowSpacing: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>size=4</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: {
            xs: coreTokens.dimension.spaceSm.value,
            md: coreTokens.dimension.spaceMd.value,
            lg: coreTokens.dimension.spaceLg.value,
            xl: coreTokens.dimension.spaceXl.value
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Row spacing can be set by breakpoint.'
            }
        }
    }
};

export const Offset: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={{xs: 1, sm: 2, lg: 4}}>
                    <Box>left</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 1, sm: 2, lg: 4}} start={{xs: 4, sm: 7, lg: 9}}>
                    <Box>right</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>auto</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4} start={1}>
                    <Box>start=1</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>auto</Box>
                </LayoutGridItem>
                <LayoutGridItem size={4}>
                    <Box>auto</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Items can be offset using start prop.'
            }
        }
    }
};

export const Sanitizing: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={15}>
                    <Box>{'size=15->12'}</Box>
                </LayoutGridItem>
                <LayoutGridItem size={{xs: 6, md: 9, xl: 14}}>
                    <Box>{'xs=6->4 md=9->8 xl=14->12'}</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Sizes are sanitized to fit column count in different breakpoints.'
            }
        }
    }
};

export const PresetSizes: Story = {
    args: {
        children: (
            <>
                <LayoutGridItem size={LayoutGridItemPresetSize.Full}>
                    <Box>Full</Box>
                </LayoutGridItem>
                <LayoutGridItem size={LayoutGridItemPresetSize.Half}>
                    <Box>Half</Box>
                </LayoutGridItem>
                <LayoutGridItem size={LayoutGridItemPresetSize.Half}>
                    <Box>Half</Box>
                </LayoutGridItem>
            </>
        ),
        columnSpacing: LayoutGridColumnSpacing.Default,
        rowSpacing: coreTokens.dimension.spaceMd.value
    },
    parameters: {
        docs: {
            description: {
                story: 'Preset sizes can be used for common use cases.'
            }
        }
    }
};

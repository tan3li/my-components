import {Kanban} from './kanban.js';
import {Meta, StoryObj} from '@storybook/react-webpack5';
import {useState} from 'react';
import {KanbanCardData, KanbanColumnData, KanbanColumnHeightMode} from './types.js';
import {arrayMove} from '@dnd-kit/sortable';
import {MenuItem} from '../../action/index.js';
import {getIndexWithPropertyValue} from '../../../utils/collectionhelper.js';
import {useKanbanDroppableColumnBody} from './usekanbandroppablecolumnbody.js';
import {Label} from '../../text/index.js';
import {Size} from '../../../constants/index.js';
import {KanbanCardRenderProps} from './kanbancolumn.js';
import {KanbanCard} from '../kanbancard/index.js';

const meta = {
    args: {
        'aria-label': 'Kanban',
        cardNameAccessor: 'name',
        columnHeightMode: KanbanColumnHeightMode.Full,
        height: 445
    },
    component: Kanban,
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Data Display/Kanban'
} satisfies Meta<typeof Kanban>;

export default meta;
type Story = StoryObj<typeof Kanban>;

const dummyMenuItems: MenuItem[] = [
    {id: 'a1', name: 'Action 1'},
    {id: 'a2', name: 'Action 2'},
    {id: 'a3', name: 'Action 3'}
];

function moveCard(
    kanbanData: Array<KanbanColumnData<any, any>>,
    cardId: string,
    oldColumnIndex: number,
    newColumnIndex: number
) {
    if (oldColumnIndex === newColumnIndex) {
        return kanbanData;
    }

    const newKanbanData = kanbanData.slice();
    const cardIdx = getIndexWithPropertyValue('id', cardId, newKanbanData[oldColumnIndex].cards);
    const card = newKanbanData[oldColumnIndex].cards.splice(cardIdx, 1)[0];

    if (newColumnIndex !== -1) {
        newKanbanData[newColumnIndex].cards.unshift(card);
    }

    return newKanbanData;
}

export interface CardItem extends KanbanCardData {
    id: string;
    name: string;
}

function renderCard(props: KanbanCardRenderProps<CardItem>) {
    const {id, name} = props.data;

    return <KanbanCard {...props} key={id} title={name} />;
}

export const Playground: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Kanban component, be my guest and play with it!'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Todo'
            },
            {
                cards: [{id: 'c3', name: 'Card 3'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In progress'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Done'
            }
        ]);

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ColumnDescription: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Data item description property can used to display additional information below the column title.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [{id: 'c1', name: 'Card 1'}],
                description: '65,01 €',
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Draft'
            },
            {
                cards: [],
                description: '0,00 €',
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Sent'
            },
            {
                cards: [
                    {id: 'c2', name: 'Card 2'},
                    {id: 'c3', name: 'Card 3'}
                ],
                description: '8009,65 €',
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Paid'
            }
        ]);

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ManyColumns: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'If there are more columns than can be displayed in the available space, horizontal scrollbar is shown.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>(
            [...new Array(8).keys()].map((i) => ({
                cards: [
                    {id: `col${i}-c1`, name: `Card ${i + 1}-1`},
                    {id: `col${i}-c2`, name: `Card ${i + 1}-2`}
                ],
                id: `col${i}`,
                menuProps: {
                    items: dummyMenuItems
                },
                title: `Column ${i + 1}`
            }))
        );

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ManyCards: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'If there are more cards than can be displayed in the available space, vertical scrollbar is shown.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>(
            [...new Array(4).keys()].map((i) => ({
                cards: [...new Array(10).keys()].map((j) => ({id: `col${i}-c${j}`, name: `Card ${i + 1}-${j + 1}`})),
                id: `col${i}`,
                menuProps: {
                    items: dummyMenuItems
                },
                title: `Column ${i + 1}`
            }))
        );

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const LongColumnTitles: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Long column titles will be truncated with tooltip.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>(
            [...new Array(4).keys()].map((i) => ({
                cards: [...new Array(3).keys()].map((j) => ({id: `col${i}-c${j}`, name: `Card ${i + 1}-${j + 1}`})),
                id: `col${i}`,
                menuProps: {
                    items: dummyMenuItems
                },
                title: `Long column title ${i + 1} which does not fit in one line because it is so long`
            }))
        );

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const CardAdding: Story = {
    args: {
        addCardOptions: {
            label: 'Add card'
        },
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Use addCardOptions prop to establish card adding functionality for columns.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Todo'
            },
            {
                cards: [{id: 'c3', name: 'Card 3'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In progress'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Done'
            }
        ]);
        const [cardIdx, setCardIdx] = useState(4);

        return (
            <Kanban
                {...args}
                addCardOptions={{
                    ...args.addCardOptions!,
                    onAdd: ({columnId}) => {
                        setKanbanData(
                            kanbanData.map((col) => {
                                if (col.id === columnId) {
                                    return {
                                        ...col,
                                        cards: [...col.cards, {id: `c${cardIdx}`, name: `Card ${cardIdx}`}]
                                    };
                                }

                                return col;
                            })
                        );
                        setCardIdx(cardIdx + 1);
                    }
                }}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ColumnAdding: Story = {
    args: {
        addColumnOptions: {
            label: 'Add column',
            showIconOnly: false
        },
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Use addColumnOptions prop to establish column adding functionality.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Column 1'
            },
            {
                cards: [{id: 'c3', name: 'Card 3'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Column 2'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Column 3'
            }
        ]);
        const [colIdx, setColIdx] = useState(4);

        return (
            <Kanban
                {...args}
                addColumnOptions={{
                    ...args.addColumnOptions!,
                    onAdd: () => {
                        setKanbanData([
                            ...kanbanData,
                            {
                                cards: [],
                                id: `col${colIdx}`,
                                menuProps: {
                                    items: dummyMenuItems
                                },
                                title: `Column ${colIdx}`
                            }
                        ]);
                        setColIdx(colIdx + 1);
                    }
                }}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ColumnActionsExample: Story = {
    args: {
        addColumnOptions: {
            label: 'Add column',
            showIconOnly: true
        },
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'TODO'
            }
        }
    },
    render: (args) => {
        const [colIdx, setColIdx] = useState(4);
        const menuItems: MenuItem[] = [
            {id: 'insertBefore', name: 'Insert column before'},
            {id: 'insertAfter', name: 'Insert column after', hasSeparator: true},
            {id: 'delete', name: 'Delete column', props: {isDestructive: true}}
        ];
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>(
            [...new Array(3).keys()].map((i) => ({
                cards: [
                    {id: `col${i}-c1`, name: `Card ${i + 1}-1`},
                    {id: `col${i}-c2`, name: `Card ${i + 1}-2`}
                ],
                id: `col${i}`,
                menuProps: {
                    items: menuItems
                },
                title: `Column ${i + 1}`
            }))
        );

        return (
            <Kanban
                {...args}
                addColumnOptions={{
                    ...args.addColumnOptions!,
                    onAdd: () => {
                        setKanbanData([
                            ...kanbanData,
                            {
                                cards: [],
                                id: `col${colIdx}`,
                                menuProps: {
                                    items: menuItems
                                },
                                title: `Column ${colIdx}`
                            }
                        ]);
                        setColIdx(colIdx + 1);
                    }
                }}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                onColumnMenuAction={({actionKey, columnId}) => {
                    const idx = getIndexWithPropertyValue('id', columnId, kanbanData);

                    if (idx === -1) {
                        return;
                    }

                    const newKanbanData = kanbanData.slice();

                    if (actionKey === 'insertBefore' || actionKey === 'insertAfter') {
                        const newColumn = {
                            cards: [],
                            id: `col${colIdx}`,
                            menuProps: {
                                items: menuItems
                            },
                            title: `Column ${colIdx}`
                        };
                        const pos = actionKey === 'insertBefore' ? idx : idx + 1;

                        newKanbanData.splice(pos, 0, newColumn);

                        setColIdx(colIdx + 1);
                    } else if (actionKey === 'delete') {
                        newKanbanData.splice(idx, 1);
                    } else {
                        return;
                    }

                    setKanbanData(newKanbanData);
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ColumnAutoHeight: Story = {
    args: {
        addCardOptions: {
            label: 'Add card'
        },
        columnHeightMode: KanbanColumnHeightMode.Auto,
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'When columnHeightMode = KanbanColumnHeightMode.Auto, column height depends on its content.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'},
                    {id: 'c3', name: 'Card 3'},
                    {id: 'c4', name: 'Card 4'},
                    {id: 'c5', name: 'Card 5'},
                    {id: 'c6', name: 'Card 6'},
                    {id: 'c7', name: 'Card 7'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Todo'
            },
            {
                cards: [{id: 'c8', name: 'Card 8'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In progress'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Done'
            }
        ]);

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

export const ControlledCollapsedColumns: Story = {
    args: {
        enableColumnReordering: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Column collapsed state can be controlled from outside using collapsedKeys and onColumnCollapsedChange props.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Todo'
            },
            {
                cards: [{id: 'c3', name: 'Card 3'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In progress'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Done'
            }
        ]);
        const [collapsedKeys, setCollapsedKeys] = useState<Set<string>>(new Set(['col1', 'col2', 'col3']));

        return (
            <Kanban
                {...args}
                collapsedColumnKeys={collapsedKeys}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnCollapsedChange={setCollapsedKeys}
                renderCard={renderCard}
            />
        );
    }
};

function CustomDropArea<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({
    column,
    isDisabled
}: {
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}) {
    const {bodyProps, isDroppableOver} = useKanbanDroppableColumnBody({column, isDisabled});

    return (
        <div
            style={{
                background:
                    isDroppableOver ?
                        'var(--data-background-cell-hover-strong)'
                    :   'var(--neutral-background-container-weak)',
                border: '1px dashed var(--data-border-enabled-strong)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    padding: 'var(--space-xs) var(--space-sm)'
                }}>
                <Label className="kanban-column__title" size={Size.md}>
                    <strong>{column.title}</strong>
                </Label>
                <Label className="kanban-column__total" size={Size.sm} style={{marginLeft: 'auto'}}>
                    {column.cards.length}
                </Label>
            </div>
            <div {...bodyProps} style={{height: '100%', width: '100%'}} />
        </div>
    );
}

export const CustomColumns: Story = {
    args: {
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Custom columns can rendered with renderAfterColumns.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [
                    {id: 'c1', name: 'Card 1'},
                    {id: 'c2', name: 'Card 2'}
                ],
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Todo'
            },
            {
                cards: [{id: 'c3', name: 'Card 3'}],
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In progress'
            },
            {
                cards: [],
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'In review'
            }
        ]);
        const [customColumns, setCustomColumns] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [],
                id: 'col4',
                title: 'Done'
            },
            {
                cards: [],
                id: 'col5',
                title: 'Works as expected'
            }
        ]);

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex, newColumnId}) => {
                    if (newColumnIndex === -1) {
                        const cardIdx = getIndexWithPropertyValue('id', cardId, kanbanData[oldColumnIndex].cards);
                        const card = kanbanData[oldColumnIndex].cards[cardIdx];
                        const newCustomColIdx = getIndexWithPropertyValue('id', newColumnId, customColumns);
                        const newCustomColumns = customColumns.slice();

                        newCustomColumns[newCustomColIdx].cards.push(card);
                        setCustomColumns(newCustomColumns);
                    }

                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderAfterColumns={({isDraggingColumn}) => (
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            gap: 'var(--space-md)',
                            maxWidth: 550,
                            minWidth: 240
                        }}>
                        {customColumns.map((col) => (
                            <CustomDropArea column={col} isDisabled={isDraggingColumn} key={col.id} />
                        ))}
                    </div>
                )}
                renderCard={renderCard}
            />
        );
    }
};

export const ShowMoreCards: Story = {
    args: {
        enableColumnReordering: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Show more cards functionality can be implemented using column hasMoreCards property and onShowMoreCards prop.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>(
            [...new Array(4).keys()].map((i) => ({
                cards: [...new Array(3).keys()].map((j) => ({id: `col${i}-c${j}`, name: `Card ${i + 1}-${j + 1}`})),
                hasMoreCards: true,
                id: `col${i}`,
                menuProps: {
                    items: dummyMenuItems
                },
                title: `Column ${i + 1}`,
                total: {
                    value: 9
                }
            }))
        );

        const onShowMoreCards = (column: KanbanColumnData<CardItem, MenuItem>) =>
            new Promise<void>((resolve) => {
                setTimeout(() => {
                    // eslint-disable-next-line sonarjs/no-nested-functions
                    setKanbanData((prevKanbanData) => {
                        const newKanbanData = prevKanbanData.slice();
                        const colIdx = getIndexWithPropertyValue('id', column.id, newKanbanData);
                        const col = newKanbanData[colIdx];
                        const cardsLen = col.cards.length;
                        const addCount = 3;

                        newKanbanData[colIdx] = {
                            ...col,
                            hasMoreCards: cardsLen + addCount < 9,
                            cards: [
                                ...col.cards,
                                ...[...new Array(addCount).keys()].map((j) => ({
                                    id: `col${colIdx}-c${cardsLen + j}`,
                                    name: `Card ${colIdx + 1}-${cardsLen + j + 1}`
                                }))
                            ]
                        };

                        return newKanbanData;
                    });
                    resolve();
                }, 600);
            });

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onShowMoreCards={onShowMoreCards}
                renderCard={renderCard}
            />
        );
    }
};

export const FixedColumnWidth: Story = {
    args: {
        columnWidth: 300,
        enableColumnReordering: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Fixed column width can be set with columnWidth prop.'
            }
        }
    },
    render: (args) => {
        const [kanbanData, setKanbanData] = useState<Array<KanbanColumnData<CardItem, MenuItem>>>([
            {
                cards: [{id: 'c1', name: 'Card 1'}],
                description: '65,01 €',
                id: 'col1',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Draft'
            },
            {
                cards: [],
                description: '0,00 €',
                id: 'col2',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Sent'
            },
            {
                cards: [
                    {id: 'c2', name: 'Card 2'},
                    {id: 'c3', name: 'Card 3'}
                ],
                description: '8009,65 €',
                id: 'col3',
                menuProps: {
                    items: dummyMenuItems
                },
                title: 'Paid'
            }
        ]);

        return (
            <Kanban
                {...args}
                data={kanbanData}
                onCardDragEnd={({cardId, oldColumnIndex, newColumnIndex}) => {
                    setKanbanData(moveCard(kanbanData, cardId, oldColumnIndex, newColumnIndex));
                }}
                onColumnDragEnd={({oldIndex, newIndex}) => {
                    setKanbanData(arrayMove(kanbanData, oldIndex, newIndex));
                }}
                renderCard={renderCard}
            />
        );
    }
};

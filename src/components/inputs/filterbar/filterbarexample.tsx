import {FilterBar, FilterBarProps, FilterBarStyle} from './filterbar.js';
import {useEffect, useRef, useState} from 'react';
import {Select, SelectItem} from '../select/index.js';
import {Size} from '../../../constants/index.js';
import {isEmptyArray} from '../../../utils/objecthelper.js';
import {SearchField} from '../searchfield/index.js';
import {FilterButton, FilterSelect} from '../filterselect/index.js';
import {FilterMultiSelect} from '../filtermultiselect/index.js';
import {MultiSelect} from '../multiselect/index.js';
import {DateValue, useFilter} from 'react-aria';
import {Drawer} from '../../feedback/index.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {Calendar} from '../calendar/index.js';
import {useCultureDay} from '../../../hooks/usecultureday.js';
import {DatePicker} from '../datepicker/index.js';
import {Popover} from '../../action/popover/index.js';
import {EmptyState} from '../../datadisplay/index.js';

interface FilterObj<TItem> {
    id: string;
    isAdditional?: boolean;
    type: string;
    label: string;
    items?: TItem[];
    value?: TItem[] | TItem | string;
}

function FilterDatePicker({
    changeCallback,
    changeParams,
    isSelectable,
    label,
    size,
    value
}: {
    changeCallback?: (obj: any) => void;
    changeParams?: any;
    isSelectable?: boolean;
    label: string;
    size: Size.sm | Size.xs;
    value?: string;
}) {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const cultureDay = useCultureDay();

    const onChange = (date: DateValue | null) => {
        safeCall(changeCallback, {...changeParams, value: date ? date.toString() : null});
        setIsOpen(false);
    };

    return (
        <>
            <FilterButton
                clearButtonProps={{onPress: () => onChange(null)}}
                isActive={!!value}
                isFocusable={isSelectable}
                isOpen={isOpen}
                label={label}
                onOpenChange={setIsOpen}
                showClearButton={true}
                size={size}
                toggleButtonProps={{
                    ref: triggerRef
                }}>
                {label}
                {value && `: ${cultureDay(value).format('l')}`}
            </FilterButton>
            <Popover
                aria-label={label}
                className="filter-select__popover"
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                placement="bottom start"
                shouldFlip={true}
                triggerRef={triggerRef}>
                <Calendar autoFocus={true} onChange={onChange} value={value} />
            </Popover>
        </>
    );
}

function Filters({
    filters,
    hideAdditional,
    isSelectable,
    onFilterValueChange,
    showOnlyActive,
    size
}: {
    filters: Array<FilterObj<SelectItem<string>>>;
    hideAdditional?: boolean;
    isSelectable?: boolean;
    onFilterValueChange?: (obj: any) => void;
    showOnlyActive?: boolean;
    size: Size.sm | Size.xs;
}) {
    return (
        <>
            {filters.map((filter) => {
                const {id, type, label, items, value, isAdditional} = filter;

                if ((showOnlyActive && isEmptyArray(value)) || (hideAdditional && isAdditional)) {
                    return null;
                }

                switch (type) {
                    case 'single-select': {
                        const selectedValue = value as SelectItem<string> | undefined;

                        return (
                            <FilterSelect
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                isSelectable={isSelectable}
                                items={items!}
                                key={id}
                                label={label}
                                size={size}
                                text={selectedValue?.text}
                                value={selectedValue?.value}
                            />
                        );
                    }
                    case 'multi-select': {
                        const selectedValue = value as Array<SelectItem<string>> | undefined;

                        return (
                            <FilterMultiSelect
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                isSelectable={isSelectable}
                                items={items!}
                                key={id}
                                label={label}
                                selectedItems={selectedValue}
                                size={size}
                            />
                        );
                    }
                    case 'date': {
                        const selectedValue = value as string | undefined;

                        return (
                            <FilterDatePicker
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                isSelectable={isSelectable}
                                key={id}
                                label={filter.label}
                                size={size}
                                value={selectedValue}
                            />
                        );
                    }
                    default:
                        return null;
                }
            })}
        </>
    );
}

function FilterFields({
    filters,
    onFilterValueChange
}: {
    filters: Array<FilterObj<SelectItem<string>>>;
    onFilterValueChange?: (obj: any) => void;
}) {
    return (
        <>
            {filters.map((filter) => {
                const {id, type, label, items, value} = filter;

                switch (type) {
                    case 'single-select': {
                        const selectedValue = value as SelectItem<string> | undefined;

                        return (
                            <Select
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                helpText="Help text content"
                                items={items!}
                                key={id}
                                label={label}
                                placeholder="Select a value"
                                size={Size.md}
                                text={selectedValue?.text}
                                value={selectedValue?.value}
                            />
                        );
                    }
                    case 'multi-select': {
                        const selectedValue = value as Array<SelectItem<string>> | undefined;

                        return (
                            <MultiSelect
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                helpText="Help text content"
                                items={items!}
                                key={id}
                                label={label}
                                placeholder="Select a value"
                                selectedItems={selectedValue}
                                size={Size.md}
                            />
                        );
                    }
                    case 'date': {
                        const selectedValue = value as string | undefined;

                        return (
                            <DatePicker
                                changeCallback={onFilterValueChange}
                                changeParams={{id}}
                                helpText="Help text content"
                                key={id}
                                label={label}
                                size={Size.md}
                                value={selectedValue}
                            />
                        );
                    }
                    default:
                        return null;
                }
            })}
        </>
    );
}

function FilterDrawer({
    filters,
    isOpen,
    onApply,
    onOpenChange,
    title
}: {
    filters: Array<FilterObj<SelectItem<string>>>;
    isOpen: boolean;
    onApply: (filters: Array<FilterObj<SelectItem<string>>>) => void;
    onOpenChange: (isOpen: boolean) => void;
    title: string;
}) {
    const [editableFilters, setEditableFilters] = useState<Array<FilterObj<SelectItem<string>>>>([]);
    const [searchText, setSearchText] = useState('');
    const filterSearchFilter = useFilter({sensitivity: 'base'});
    const visibleEditableFilters = editableFilters.filter((f) => filterSearchFilter.contains(f.label, searchText));

    const onFilterValueChange = ({id, text, value}: {id: string; text: string; value: any}) => {
        setEditableFilters(
            editableFilters.map((f) => {
                if (f.id === id) {
                    let val = value;

                    if (f.type === 'single-select') {
                        val = value ? {text, value} : value;
                    }

                    return {...f, value: val};
                }

                return f;
            })
        );
    };

    const onClearAll = () => {
        setEditableFilters(editableFilters.map((filter) => ({...filter, value: undefined})));
    };

    const onSearch = (text: string) => {
        setSearchText(text);
    };

    useEffect(() => {
        if (isOpen) {
            setEditableFilters(filters.slice());
        }
    }, [isOpen]);

    return (
        <Drawer
            destructiveAction={{
                label: 'Clear all',
                onPress: () => {
                    onClearAll();
                }
            }}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            primaryAction={{
                label: 'Apply',
                onPress: (closeCallback) => {
                    safeCall(onApply, editableFilters.slice());
                    closeCallback();
                }
            }}
            title={title}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-md)'}}>
                <SearchField
                    aria-label="Search a filter"
                    onChange={onSearch}
                    placeholder="Search a filter"
                    size={Size.sm}
                />
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs) var(--space-sm)'}}>
                    <Filters
                        filters={editableFilters}
                        isSelectable={false}
                        onFilterValueChange={onFilterValueChange}
                        showOnlyActive={true}
                        size={Size.xs}
                    />
                </div>
                {visibleEditableFilters.length > 0 ?
                    <FilterFields filters={visibleEditableFilters} onFilterValueChange={onFilterValueChange} />
                :   <EmptyState
                        bodyText="Try a different search term or clear your current search to see all filters."
                        title="No filters found"
                    />
                }
            </div>
        </Drawer>
    );
}

export function FilterBarExample(args: FilterBarProps) {
    const [filters, setFilters] = useState<Array<FilterObj<SelectItem<string>>>>([
        {
            id: 'pm',
            type: 'multi-select',
            label: 'Project manager',
            items: [
                {value: 'pm1', text: 'John Doe'},
                {value: 'pm2', text: 'Jane Doe'},
                {value: 'pm3', text: 'Kevin Young'}
            ]
        },
        {
            id: 'status',
            type: 'single-select',
            label: 'Status',
            items: [
                {value: 'true', text: 'Active'},
                {value: 'false', text: 'Inactive'}
            ]
        },
        {
            id: 'bu',
            type: 'multi-select',
            label: 'Business unit',
            items: [
                {value: 'bu1', text: 'Finance'},
                {value: 'bu2', text: 'Marketing'},
                {value: 'bu3', text: 'R&D'}
            ]
        },
        {
            id: 'kw',
            isAdditional: true,
            type: 'multi-select',
            label: 'Keywords',
            items: [
                {value: 'kw1', text: 'Foo'},
                {value: 'kw2', text: 'Bar'},
                {value: 'kw3', text: 'Test'}
            ]
        },
        {
            id: 'dl',
            type: 'date',
            label: 'Deadline'
        }
    ]);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const filterSize = args.style === FilterBarStyle.Card ? Size.sm : Size.xs;
    const activeFiltersCount = filters.reduce((sum, filter) => sum + (isEmptyArray(filter.value) ? 0 : 1), 0);
    const nonVisibleActiveFiltersCount = filters.reduce(
        (sum, filter) => sum + (filter.isAdditional && !isEmptyArray(filter.value) ? 1 : 0),
        0
    );

    const onFilterValueChange = ({id, text, value}: {id: string; text: string; value: any}) => {
        setFilters(
            filters.map((f) => {
                if (f.id === id) {
                    let val = value;

                    if (f.type === 'single-select') {
                        val = value ? {text, value} : value;
                    }

                    return {...f, value: val};
                }

                return f;
            })
        );
    };

    const onClearAll = () => {
        setFilters(filters.map((filter) => ({...filter, value: undefined})));
    };

    const onPressFilters = () => {
        setIsFilterPanelOpen(true);
    };

    return (
        <FilterBar
            {...args}
            activeFiltersCount={activeFiltersCount}
            nonVisibleActiveFiltersCount={nonVisibleActiveFiltersCount}
            onClearAll={onClearAll}
            onPressFilters={onPressFilters}>
            <SearchField aria-label="Search" placeholder="Search" size={filterSize} />
            <Filters
                filters={filters}
                hideAdditional={true}
                onFilterValueChange={onFilterValueChange}
                size={filterSize}
            />
            <FilterDrawer
                filters={filters}
                isOpen={isFilterPanelOpen}
                onApply={(newFilters) => {
                    setFilters(newFilters);
                }}
                onOpenChange={setIsFilterPanelOpen}
                title={activeFiltersCount ? `Filters (${activeFiltersCount})` : 'Filters'}
            />
        </FilterBar>
    );
}

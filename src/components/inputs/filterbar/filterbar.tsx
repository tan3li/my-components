import {ReactNode, RefAttributes, useCallback, useRef, useState} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {Button, ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {useResizeObserver} from '@react-aria/utils';

export const enum FilterBarStyle {
    Card = 'card',
    Plain = 'plain'
}

export interface FilterBarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Number of active, visible and non-visible, filters.
     */
    activeFiltersCount?: number;
    /**
     * Visible filters to render.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of active non-visible filters.
     */
    nonVisibleActiveFiltersCount?: number;
    /**
     * Callback for the "Clear all" action.
     */
    onClearAll?: () => void;
    /**
     * Callback for the "Filters" action.
     */
    onPressFilters?: () => void;
    /**
     * Display style for the element.
     */
    style?: FilterBarStyle;
}

export function FilterBar({
    activeFiltersCount,
    className,
    children,
    nonVisibleActiveFiltersCount,
    onClearAll,
    onPressFilters,
    ref,
    style = FilterBarStyle.Card
}: FilterBarProps) {
    const translateCommon = useTranslateCommon();
    const filterAreaRef = useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [scrollParams, setScrollParams] = useState({scrollLeft: 0, scrollWidth: 0, offsetWidth: 0});
    const actionSize = style === FilterBarStyle.Card ? Size.md : Size.sm;

    const scrollFilterArea = (direction: number) => {
        const filterAreaEl = filterAreaRef.current;

        if (filterAreaEl) {
            const scrollableWidth = scrollParams.scrollWidth - scrollParams.offsetWidth;
            const newScrollLeft = Math.min(
                filterAreaEl.scrollLeft + direction * scrollParams.offsetWidth,
                scrollableWidth
            );

            filterAreaEl.scrollLeft = newScrollLeft;
            setScrollParams({...scrollParams, scrollLeft: newScrollLeft});
        }
    };

    const onResize = useCallback(() => {
        const filterAreaEl = filterAreaRef.current;

        if (filterAreaEl) {
            const currScrollWidth = filterAreaEl.scrollWidth;
            const currScrollLeft = filterAreaEl.scrollLeft;
            const currOffsetWidth = filterAreaEl.offsetWidth;

            setIsScrollable(currOffsetWidth < currScrollWidth);
            setScrollParams({scrollWidth: currScrollWidth, scrollLeft: currScrollLeft, offsetWidth: currOffsetWidth});
        }
    }, [filterAreaRef]);

    useResizeObserver({ref: filterAreaRef, onResize});

    return (
        <div className={classNames(`filter-bar filter-bar--${style}`, className)} ref={ref}>
            <div className="filter-bar__filters-wrapper">
                {isScrollable && scrollParams.scrollLeft > 0 && (
                    <IconButton
                        aria-label={translateCommon('scrollLeft')}
                        className="filter-bar__scroll-btn filter-bar__scroll-btn--left"
                        iconName={iconNames.ChevronLeft}
                        onPress={() => {
                            scrollFilterArea(-1);
                        }}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}
                    />
                )}
                <div className="filter-bar__filters" ref={filterAreaRef}>
                    {children}
                </div>
                {isScrollable && scrollParams.scrollLeft < scrollParams.scrollWidth - scrollParams.offsetWidth && (
                    <IconButton
                        aria-label={translateCommon('scrollRight')}
                        className="filter-bar__scroll-btn filter-bar__scroll-btn--right"
                        iconName={iconNames.ChevronRight}
                        onPress={() => {
                            scrollFilterArea(1);
                        }}
                        style={ButtonStyle.Fill}
                        variant={ButtonVariant.Neutral}
                    />
                )}
            </div>
            <div className="filter-bar__actions">
                <Button
                    className="filters-button"
                    onPress={onPressFilters}
                    size={actionSize}
                    startIconName={iconNames.Tune}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Neutral}>
                    {!!nonVisibleActiveFiltersCount && (
                        <Icon
                            ariaLabel={translateCommon('additionalFilters', {count: nonVisibleActiveFiltersCount})}
                            className="filters-button__icon"
                            name={iconNames.StatusLightFilled}
                            size={IconSize.SM}
                        />
                    )}
                    <strong>
                        {translateCommon('filters')}
                        {!!activeFiltersCount && ` (${activeFiltersCount})`}
                    </strong>
                </Button>
                <Button
                    isDisabled={!activeFiltersCount}
                    onPress={onClearAll}
                    size={actionSize}
                    style={ButtonStyle.Plain}
                    variant={ButtonVariant.Danger}>
                    {translateCommon('clearAll')}
                </Button>
            </div>
        </div>
    );
}

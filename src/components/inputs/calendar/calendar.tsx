import {CalendarGrid, CalendarGridProps} from './calendargrid.js';
import {AriaCalendarProps, DateValue, useCalendar} from 'react-aria';
import {useLocales} from '../../../contexts/index.js';
import {classNames} from '../../../utils/classnames.js';
import {Button, ButtonStyle, ButtonVariant, IconButton} from '../../action/index.js';
import {useTranslateDatePeriod} from '../../../hooks/translations/usetranslatedateperiod.js';
import {iconNames} from '../../media/index.js';
import {Size} from '../../../constants/index.js';
import {useCalendarState} from 'react-stately';
import {CalendarDate, createCalendar, today} from '@internationalized/date';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {ReactNode, RefAttributes, useEffect, useMemo, useState} from 'react';
import {Select, SelectItem} from '../select/index.js';
import {Divider} from '../../datadisplay/index.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {useLanguageDay} from '../../../hooks/uselanguageday.js';
import {CalendarContext, useContextProps} from 'react-aria-components';
import {getDateValue} from './getdatevalue.js';
import {SkeletonCalendar} from '../../feedback/skeleton/skeletoncalendar.js';

export interface CalendarProps
    extends Omit<
            AriaCalendarProps<DateValue>,
            'onChange' | 'value' | 'defaultValue' | 'focusedValue' | 'defaultFocusedValue' | 'minValue' | 'maxValue'
        >,
        RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Provide footer to render custom content below the calendar grid.
     */
    footer?: ReactNode;
    /**
     * Whether week of selected date should be highlighted.
     */
    highlightSelectedWeek?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Maximum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    maxValue?: DateValue | string;
    /**
     * Minimum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    minValue?: DateValue | string;
    /**
     * Selected date change callback.
     */
    onChange?: (date: DateValue) => void;
    /**
     * Date related to selected value which will create a range between them.
     */
    relatedValue?: DateValue | string | null;
    /**
     * Custom cell content renderer.
     */
    renderCellContent?: CalendarGridProps['renderCellContent'];
    /**
     * Whether to show week numbers.
     */
    showWeekNumbers?: boolean;
    /**
     * Selected date for the calendar. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    value?: DateValue | string | null;
    /**
     * Range for year select items. By default, year select shows current year +/- 5 years.
     */
    yearSelectionRange?: {
        start: number;
        end: number;
    };
}

const PAST_YEAR_ITEM_COUNT = 5;
const FUTURE_YEAR_ITEM_COUNT = 5;

function isInvalidDate(date: DateValue, minValue?: DateValue | null, maxValue?: DateValue | null) {
    return !!(minValue && date.compare(minValue) < 0) || !!(maxValue && date.compare(maxValue) > 0);
}

export function Calendar({
    className,
    footer,
    highlightSelectedWeek,
    isSkeleton,
    maxValue: propsMaxValue,
    minValue: propsMinValue,
    onFocusChange: propsOnFocusChange,
    ref,
    relatedValue,
    renderCellContent,
    showWeekNumbers = true,
    yearSelectionRange,
    ...props
}: CalendarProps) {
    const {isDisabled, isReadOnly} = props;
    const {cultureLocale, languageLocale, timeZone} = useLocales();
    const languageDay = useLanguageDay();
    const translateDatePeriod = useTranslateDatePeriod();
    const translateCommon = useTranslateCommon();
    const [contextProps, refObj] = useContextProps(
        {
            ...props,
            maxValue: getDateValue(propsMaxValue) ?? undefined,
            minValue: getDateValue(propsMinValue) ?? undefined
        },
        ref ?? null,
        CalendarContext
    );
    const {onChange, minValue, maxValue, value} = contextProps;
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(getDateValue(value));
    const [focusedDate, setFocusedDate] = useState(selectedDate ?? today(timeZone));

    const onFocusChange = (date: CalendarDate) => {
        if (date.compare(focusedDate) !== 0) {
            setFocusedDate(date);
            propsOnFocusChange?.(date);
        }
    };

    const derivedProps: AriaCalendarProps<DateValue> = {
        ...contextProps,
        focusedValue: focusedDate,
        isDateUnavailable: (date) =>
            isInvalidDate(date, minValue, maxValue) || !!contextProps.isDateUnavailable?.(date),
        maxValue: undefined,
        minValue: undefined,
        onChange: (date) => {
            setSelectedDate(date);
            safeCall(onChange, date);
        },
        onFocusChange,
        value: selectedDate
    };

    const state = useCalendarState({
        ...derivedProps,
        locale: cultureLocale,
        createCalendar
    });
    const {calendarProps, prevButtonProps, nextButtonProps} = useCalendar(derivedProps, state);

    const monthItems: Array<SelectItem<number>> = useMemo(
        () =>
            languageDay()
                .localeData()
                .months()
                .map((month, i) => ({value: i + 1, text: month})),
        [languageLocale]
    );
    const yearItems: Array<SelectItem<number>> = useMemo(() => {
        let startYear: number, endYear: number;

        if (yearSelectionRange) {
            startYear = yearSelectionRange.start;
            endYear = yearSelectionRange.end;
        } else {
            const currentYear = today(timeZone).year;

            startYear = currentYear - PAST_YEAR_ITEM_COUNT;
            endYear = currentYear + FUTURE_YEAR_ITEM_COUNT;
        }

        const arr: Array<SelectItem<number>> = [];

        for (let year = startYear; year <= endYear; year++) {
            arr.push({value: year, text: year.toString()});
        }

        return arr;
    }, [timeZone, yearSelectionRange?.start, yearSelectionRange?.end]);

    useEffect(() => {
        setSelectedDate(getDateValue(value));
    }, [value]);

    if (isSkeleton) {
        return <SkeletonCalendar />;
    }

    return (
        <div {...calendarProps} className={classNames('calendar', className)} ref={refObj}>
            <div className="calendar-header">
                <div className="calendar-header__start">
                    <IconButton
                        {...prevButtonProps}
                        aria-label={translateDatePeriod('previousMonth')}
                        iconName={iconNames.ChevronLeft}
                        size={Size.md}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}
                    />
                    <IconButton
                        {...nextButtonProps}
                        aria-label={translateDatePeriod('nextMonth')}
                        iconName={iconNames.ChevronRight}
                        size={Size.md}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}
                    />
                    <Select
                        aria-label={translateDatePeriod('month')}
                        isDisabled={isDisabled}
                        isPlain={true}
                        isReadOnly={isReadOnly}
                        isSearchable={false}
                        items={monthItems}
                        menuWidth="150px"
                        onSelectionChange={(month) => {
                            onFocusChange(new CalendarDate(focusedDate.year, month!, focusedDate.day));
                        }}
                        size={Size.xs}
                        text={monthItems[focusedDate.month - 1].text}
                        value={focusedDate.month}
                    />
                    <Select
                        aria-label={translateDatePeriod('year')}
                        isDisabled={isDisabled}
                        isPlain={true}
                        isReadOnly={isReadOnly}
                        isSearchable={false}
                        items={yearItems}
                        menuWidth="100px"
                        onSelectionChange={(year) => {
                            onFocusChange(new CalendarDate(year!, focusedDate.month, focusedDate.day));
                        }}
                        size={Size.xs}
                        text={focusedDate.year.toString()}
                        value={focusedDate.year}
                    />
                </div>
                <div className="calendar-header__end">
                    <Button
                        isDisabled={!!isDisabled || !!isReadOnly}
                        onPress={() => {
                            onFocusChange(today(timeZone));
                        }}
                        size={Size.md}
                        style={ButtonStyle.Plain}
                        variant={ButtonVariant.Neutral}>
                        {translateCommon('today')}
                    </Button>
                </div>
            </div>
            <Divider size={Size.sm} />
            <CalendarGrid
                highlightSelectedWeek={highlightSelectedWeek}
                relatedValue={relatedValue}
                renderCellContent={renderCellContent}
                showWeekNumbers={showWeekNumbers}
                state={state}
            />
            {footer && (
                <>
                    <Divider size={Size.sm} />
                    <div className="calendar-footer">{footer}</div>
                </>
            )}
        </div>
    );
}

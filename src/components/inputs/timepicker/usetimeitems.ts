import {useMemo} from 'react';
import {useCultureDay} from '../../../hooks/usecultureday';
import {SelectItem} from '../select';
import {CalendarDateTime} from '@internationalized/date';
import {day} from '../../../utils/day';

export const TIME_ITEM_INTERVAL_MINUTES = 15;

export function useTimeItems(selectedValue?: CalendarDateTime | null, relatedValue?: CalendarDateTime | string | null) {
    const cultureDay = useCultureDay();

    return useMemo(() => {
        const items: Array<SelectItem<string>> = [];
        const startTime =
            relatedValue ? cultureDay(relatedValue.toString()) : cultureDay(selectedValue?.toString()).startOf('day');
        let time = startTime.clone();

        while (time.diff(startTime, 'days') <= 0) {
            let textSuffix = '';

            if (relatedValue) {
                const duration = day.duration(time.diff(startTime));
                const durationAsHours = duration.asHours();
                const durationAsMinutes = duration.asMinutes();

                if (durationAsHours >= 1) {
                    textSuffix = `${durationAsHours} h`;
                } else {
                    textSuffix = `${durationAsMinutes} min`;
                }

                textSuffix = ` (${textSuffix})`;
            }

            items.push({
                value: time.format('YYYY-MM-DDTHH:mm:ss'),
                text: time.format('LT') + textSuffix
            });
            time = time.add(TIME_ITEM_INTERVAL_MINUTES, 'minutes');
        }

        return items;
    }, [cultureDay, relatedValue, selectedValue]);
}

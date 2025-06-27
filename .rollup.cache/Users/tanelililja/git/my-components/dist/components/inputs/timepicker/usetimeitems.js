import { useMemo } from 'react';
import { useCultureDay } from '../../../hooks/usecultureday';
import { day } from '../../../utils/day';
export var TIME_ITEM_INTERVAL_MINUTES = 15;
export function useTimeItems(selectedValue, relatedValue) {
    var cultureDay = useCultureDay();
    return useMemo(function () {
        var items = [];
        var startTime = relatedValue ? cultureDay(relatedValue.toString()) : cultureDay(selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.toString()).startOf('day');
        var time = startTime.clone();
        while (time.diff(startTime, 'days') <= 0) {
            var textSuffix = '';
            if (relatedValue) {
                var duration = day.duration(time.diff(startTime));
                var durationAsHours = duration.asHours();
                var durationAsMinutes = duration.asMinutes();
                if (durationAsHours >= 1) {
                    textSuffix = "".concat(durationAsHours, " h");
                }
                else {
                    textSuffix = "".concat(durationAsMinutes, " min");
                }
                textSuffix = " (".concat(textSuffix, ")");
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
//# sourceMappingURL=usetimeitems.js.map
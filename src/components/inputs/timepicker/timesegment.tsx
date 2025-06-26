import {RefAttributes, useImperativeHandle, useRef} from 'react';
import {useDateSegment} from 'react-aria';
import {DateSegment} from '@react-stately/datepicker';
import {DateFieldState} from 'react-stately';
import {getPlaceholder} from '../datepicker/getplaceholder';
import {useLocales} from '../../../contexts';
import {classNames} from '../../../utils/classnames';

interface TimeSegmentProps extends RefAttributes<HTMLDivElement> {
    className?: string;
    segment: DateSegment;
    state: DateFieldState;
}

export function TimeSegment({className, ref: outerRef, segment, state}: TimeSegmentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {segmentProps} = useDateSegment(segment, state, ref);
    const {languageLocale} = useLocales();
    const {isPlaceholder, text, type} = segment;

    useImperativeHandle(outerRef, () => ref.current!, []);

    // Need to wrap with div: https://github.com/adobe/react-spectrum/issues/3164
    return (
        <div>
            <div {...segmentProps} className={classNames('timepicker__segment', className)} ref={ref}>
                {isPlaceholder ? getPlaceholder(type, text, languageLocale) : text}
            </div>
        </div>
    );
}

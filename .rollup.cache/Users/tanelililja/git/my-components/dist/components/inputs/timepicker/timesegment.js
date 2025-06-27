import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useImperativeHandle, useRef } from 'react';
import { useDateSegment } from 'react-aria';
import { getPlaceholder } from '../datepicker/getplaceholder';
import { useLocales } from '../../../contexts';
import { classNames } from '../../../utils/classnames';
export function TimeSegment(_a) {
    var className = _a.className, outerRef = _a.ref, segment = _a.segment, state = _a.state;
    var ref = useRef(null);
    var segmentProps = useDateSegment(segment, state, ref).segmentProps;
    var languageLocale = useLocales().languageLocale;
    var isPlaceholder = segment.isPlaceholder, text = segment.text, type = segment.type;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    // Need to wrap with div: https://github.com/adobe/react-spectrum/issues/3164
    return (_jsx("div", { children: _jsx("div", __assign({}, segmentProps, { className: classNames('timepicker__segment', className), ref: ref }, { children: isPlaceholder ? getPlaceholder(type, text, languageLocale) : text })) }));
}
//# sourceMappingURL=timesegment.js.map
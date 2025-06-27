import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { ColorSwatchPicker as ReactAriaColorSwatchPicker, parseColor } from 'react-aria-components';
import { ColorSwatchPickerItem } from './colorswatchpickeritem.js';
import { classNames } from '../../../utils/classnames.js';
import { useEffect, useState } from 'react';
import { isString } from '../../../utils/stringhelper.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { SkeletonColorSwatchPicker } from '../../feedback/skeleton/skeletoncolorswatchpicker.js';
export function ColorSwatchPicker(_a) {
    var className = _a.className, isSkeleton = _a.isSkeleton, items = _a.items, size = _a.size, props = __rest(_a, ["className", "isSkeleton", "items", "size"]);
    var initialValue = props.value;
    var _b = useState(isString(initialValue) ? parseColor(initialValue) : initialValue), value = _b[0], setValue = _b[1];
    var onChange = function (newValue) {
        setValue(newValue);
        safeCall(props.onChange, newValue);
    };
    useEffect(function () {
        setValue(isString(initialValue) ? parseColor(initialValue) : initialValue);
    }, [initialValue]);
    if (isSkeleton) {
        return _jsx(SkeletonColorSwatchPicker, { itemCount: items.length, layout: props.layout, size: size });
    }
    return (_jsx(ReactAriaColorSwatchPicker, __assign({}, props, { className: classNames('color-swatch-picker', className), onChange: onChange, value: value }, { children: items.map(function (_a) {
            var color = _a.color, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid;
            return (_jsx(ColorSwatchPickerItem, { color: color, isDisabled: isDisabled, isInvalid: isInvalid, size: size }, color));
        }) })));
}
//# sourceMappingURL=colorswatchpicker.js.map
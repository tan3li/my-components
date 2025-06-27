import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo } from 'react';
import { Size } from '../../../constants/size.js';
import { Select } from '../select/select.js';
import { TextField } from '../textfield/textfield.js';
import codes from 'country-calling-code';
function getCountryCallingCodeItems(favoriteItems) {
    var items = [];
    var _loop_1 = function (code) {
        var country = code.country, countryCodes = code.countryCodes, isoCode2 = code.isoCode2;
        var _loop_2 = function (countryCode) {
            if (items.findIndex(function (item) { return item.value === "".concat(isoCode2, "|+").concat(countryCode); }) === -1) {
                items.push({
                    text: "".concat(country, " +").concat(countryCode),
                    value: "".concat(isoCode2, "|+").concat(countryCode)
                });
            }
        };
        for (var _b = 0, countryCodes_1 = countryCodes; _b < countryCodes_1.length; _b++) {
            var countryCode = countryCodes_1[_b];
            _loop_2(countryCode);
        }
    };
    for (var _i = 0, codes_1 = codes; _i < codes_1.length; _i++) {
        var code = codes_1[_i];
        _loop_1(code);
    }
    if (!favoriteItems) {
        return items;
    }
    var favoriteItemsArr = [];
    for (var _a = 0, favoriteItems_1 = favoriteItems; _a < favoriteItems_1.length; _a++) {
        var favoriteItem = favoriteItems_1[_a];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemValue = item.value;
            if (itemValue.split('|')[0].startsWith(favoriteItem)) {
                favoriteItemsArr.push(item);
                items.splice(i, 1);
                break;
            }
        }
    }
    return favoriteItemsArr.concat(items);
}
export function PhoneNumberField(_a) {
    var changeCallback = _a.changeCallback, _b = _a.changeParams, changeParams = _b === void 0 ? {} : _b, dataState = _a.dataState, favoriteCountryCodes = _a.favoriteCountryCodes, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, prefixLabel = _a.prefixLabel, ref = _a.ref, _c = _a.value, value = _c === void 0 ? '' : _c;
    var items = useMemo(function () { return getCountryCallingCodeItems(favoriteCountryCodes); }, [favoriteCountryCodes]);
    var _d = useMemo(function () {
        var pref = '', selectText = '', selectValue = '', phoneNumberVal = value;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var itemValue = item.value;
            var countryCallingCode = itemValue.split('|')[1];
            if (value.startsWith(countryCallingCode)) {
                selectValue = itemValue;
                pref = countryCallingCode;
                selectText = item.text;
                phoneNumberVal = value.slice(countryCallingCode.length);
                break;
            }
        }
        return { prefix: pref, text: selectText, phoneNumberValue: phoneNumberVal, val: selectValue };
    }, [items, value]), prefix = _d.prefix, text = _d.text, phoneNumberValue = _d.phoneNumberValue, val = _d.val;
    var onPrefixChange = useCallback(function (changedValue) {
        changeCallback(__assign(__assign({}, changeParams), { value: "".concat(changedValue.split('|')[1]).concat(phoneNumberValue) }));
    }, [changeParams, phoneNumberValue]);
    var onPhoneNumberChange = useCallback(function (args) {
        changeCallback(__assign(__assign({}, args), { value: prefix + args.value }));
    }, [prefix]);
    return (_jsxs("div", __assign({ className: "phone-number-field", ref: ref }, { children: [_jsx(Select, { dataState: dataState, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isSkeleton: isSkeleton, items: items, label: prefixLabel, onSelectionChange: onPrefixChange, text: text, value: val }), _jsx(TextField, { changeCallback: onPhoneNumberChange, changeParams: changeParams, dataState: dataState, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isSkeleton: isSkeleton, label: label, size: Size.md, type: "tel", value: phoneNumberValue })] })));
}
//# sourceMappingURL=phonenumberfield.js.map
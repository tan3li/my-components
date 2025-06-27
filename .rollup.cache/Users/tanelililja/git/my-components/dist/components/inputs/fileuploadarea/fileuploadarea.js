import { __assign, __awaiter, __generator, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropZone, Text } from 'react-aria-components';
import { FileTrigger } from './filetrigger.js';
import { classNames } from '../../../utils/classnames.js';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { useTranslateCommon } from '../../../hooks/translations/usetranslatecommon.js';
import { HTMLElementType, Size } from '../../../constants/index.js';
import { Icon, iconNames, IconSize } from '../../media/index.js';
import { BodyText, HelpText, LABEL_SIZE_LG_CSS_CLASS } from '../../text/index.js';
import { safeCall } from '../../../utils/functionhelper.js';
import { SkeletonFileUploadArea } from '../../feedback/skeleton/skeletonfileuploadarea.js';
export function FileUploadArea(_a) {
    var _this = this;
    var acceptedFileTypes = _a.acceptedFileTypes, allowsMultiple = _a.allowsMultiple, className = _a.className, descriptionText = _a.descriptionText, helpTextProps = _a.helpTextProps, iconName = _a.iconName, isSkeleton = _a.isSkeleton, mainText = _a.mainText, onSelect = _a.onSelect, ref = _a.ref, props = __rest(_a, ["acceptedFileTypes", "allowsMultiple", "className", "descriptionText", "helpTextProps", "iconName", "isSkeleton", "mainText", "onSelect", "ref"]);
    var isDisabled = props.isDisabled;
    var translateCommon = useTranslateCommon();
    var onDrop = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var items, files, i, len, item, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    items = e.items;
                    files = [];
                    i = 0, len = items.length;
                    _c.label = 1;
                case 1:
                    if (!(i < len)) return [3 /*break*/, 4];
                    item = items[i];
                    if (!(item.kind === 'file' && (!acceptedFileTypes || acceptedFileTypes.includes(item.type)))) return [3 /*break*/, 3];
                    _b = (_a = files).push;
                    return [4 /*yield*/, item.getFile()];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    safeCall(props.onDrop, files);
                    return [2 /*return*/];
            }
        });
    }); };
    if (isSkeleton) {
        return _jsx(SkeletonFileUploadArea, {});
    }
    return (_jsxs("div", __assign({ className: "file-upload-area-wrapper", ref: ref }, { children: [_jsx(DropZone, __assign({}, props, { className: classNames('file-upload-area', className), getDropOperation: function (types) {
                    var op = 'copy';
                    if (acceptedFileTypes) {
                        for (var _i = 0, acceptedFileTypes_1 = acceptedFileTypes; _i < acceptedFileTypes_1.length; _i++) {
                            var fileType = acceptedFileTypes_1[_i];
                            if (types.has(fileType)) {
                                return op;
                            }
                        }
                        op = 'cancel';
                    }
                    return op;
                }, onDrop: function (e) {
                    onDrop(e);
                } }, { children: _jsxs("div", __assign({ className: "file-upload-area__inner" }, { children: [_jsx(Icon, { className: "file-upload-area__icon", name: iconName, size: IconSize.XXL }), _jsxs("div", __assign({ className: "file-upload-area__content" }, { children: [_jsxs("div", __assign({ className: "file-upload-area__texts" }, { children: [_jsx(Text, __assign({ className: "".concat(LABEL_SIZE_LG_CSS_CLASS, " file-upload-area__main-text"), elementType: HTMLElementType.Div, slot: "label" }, { children: _jsx("strong", { children: mainText }) })), _jsx(BodyText, __assign({ className: "file-upload-area__description-text", elementType: HTMLElementType.Div, size: Size.sm }, { children: descriptionText }))] })), _jsx(FileTrigger, __assign({ acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, onSelect: function (files) {
                                        safeCall(onSelect, files ? Array.from(files) : []);
                                    } }, { children: _jsx(Button, __assign({ isDisabled: isDisabled, size: Size.md, startIconName: iconNames.Upload, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('upload') })) }))] }))] })) })), helpTextProps && (_jsx(HelpText, __assign({}, helpTextProps, { className: classNames('file-upload-area__help-text', helpTextProps.className) })))] })));
}
//# sourceMappingURL=fileuploadarea.js.map
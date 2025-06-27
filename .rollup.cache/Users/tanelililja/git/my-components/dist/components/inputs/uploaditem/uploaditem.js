import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon, IconSize } from '../../media/index.js';
import { classNames } from '../../../utils/classnames.js';
import { BodyText, HelpText, HelpTextVariant } from '../../text/index.js';
import { HTMLElementType, Position, Size } from '../../../constants/index.js';
import { useDataState } from '../../../hooks/usedatastate.js';
import { Divider } from '../../datadisplay/index.js';
import { isFunction } from '../../../utils/functionhelper.js';
import { isNullOrUndefined } from '../../../utils/objecthelper.js';
import { useTranslateProject } from '../../../hooks/translations/usetranslateproject.js';
import { Button, ButtonStyle, ButtonVariant } from '../../action/index.js';
import { ProgressBar, Tooltip, TooltipTrigger, TooltipType } from '../../feedback/index.js';
export var UploadItemStyle;
(function (UploadItemStyle) {
    UploadItemStyle["Card"] = "card";
    UploadItemStyle["Plain"] = "plain";
})(UploadItemStyle || (UploadItemStyle = {}));
export function UploadItem(props) {
    var actions = props.actions, className = props.className, dataState = props.dataState, description = props.description, iconName = props.iconName, isDisabled = props.isDisabled, isInvalid = props.isInvalid, onNamePress = props.onNamePress, name = props.name, ref = props.ref, style = props.style, tooltipText = props.tooltipText, uploadProgress = props.uploadProgress;
    var _a = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _a.hasError, errorMessage = _a.errorMessage;
    var errorMsg = errorMessage || props.errorMessage;
    var showErrorMessage = hasError && !!errorMsg;
    var translateProject = useTranslateProject();
    return (_jsxs("div", __assign({ className: classNames("upload-item upload-item--".concat(style), className, {
            'upload-item--invalid': hasError,
            'upload-item--disabled': isDisabled
        }), ref: ref }, { children: [_jsxs("div", __assign({ className: "upload-item__top" }, { children: [_jsx(Icon, { className: "upload-item__icon", name: iconName, size: IconSize.LG }), _jsxs("div", __assign({ className: "upload-item__content" }, { children: [_jsxs("div", __assign({ className: "upload-item__heading" }, { children: [_jsxs("div", __assign({ className: "upload-item__texts" }, { children: [_jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipText }, { children: [_jsx(Button, __assign({ className: "upload-item__name", isDisabled: isDisabled, onPress: onNamePress, size: Size.md, style: ButtonStyle.Link, variant: hasError ? ButtonVariant.Danger : ButtonVariant.Neutral }, { children: name })), _jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipText }))] })), _jsx(BodyText, __assign({ className: "upload-item__description", elementType: HTMLElementType.Div, size: Size.xs }, { children: description }))] })), isFunction(actions) ? actions(props) : actions] })), !isNullOrUndefined(uploadProgress) && (_jsx(ProgressBar, { "aria-label": translateProject('progress'), value: uploadProgress, valueLabelPosition: Position.Right }))] }))] })), showErrorMessage && (_jsxs(_Fragment, { children: [_jsx(Divider, { size: Size.sm }), _jsx(HelpText, __assign({ variant: HelpTextVariant.Danger }, { children: errorMsg }))] }))] })));
}
//# sourceMappingURL=uploaditem.js.map
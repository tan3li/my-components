import { __assign } from "tslib";
import { toast as rhtToast } from 'react-hot-toast/headless';
var rhtToastDismiss = rhtToast.dismiss;
// This is layer on top of React Hot Toast which adds queueing feature for toasts.
var ToastHandler = /** @class */ (function () {
    function ToastHandler() {
        this._maxVisibleCount = 7;
        this._toastQueue = [];
        this._visibleToastIds = new Set();
        this._lastId = 0;
        this.add = this.add.bind(this);
        this.dismiss = this.dismiss.bind(this);
    }
    ToastHandler.prototype.add = function (message, opts) {
        var id = (++this._lastId).toString();
        if (this._visibleToastIds.size >= this._maxVisibleCount) {
            this._toastQueue.push({
                message: message,
                options: __assign(__assign({}, opts), { id: id })
            });
        }
        else {
            rhtToast(message, __assign(__assign({}, opts), { id: id }));
            this._visibleToastIds.add(id);
        }
        return id;
    };
    ToastHandler.prototype.dismiss = function (toastId) {
        rhtToastDismiss(toastId);
        this._visibleToastIds.delete(toastId);
        if (this._toastQueue.length > 0 && this._visibleToastIds.size < this._maxVisibleCount) {
            var _a = this._toastQueue.shift(), message = _a.message, options = _a.options;
            this.add(message, options);
        }
    };
    return ToastHandler;
}());
export var toastHandler = new ToastHandler();
rhtToast.dismiss = toastHandler.dismiss;
//# sourceMappingURL=toasthandler.js.map
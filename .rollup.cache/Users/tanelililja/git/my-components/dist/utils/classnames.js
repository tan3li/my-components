import { isEmptyString } from './objecthelper.js';
export function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var argsLen = args.length;
    var classes = [];
    var argType, arg, key;
    for (var i = 0; i < argsLen; i++) {
        arg = args[i];
        if (!isEmptyString(arg)) {
            argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (argType === 'object') {
                for (key in arg) {
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
//# sourceMappingURL=classnames.js.map
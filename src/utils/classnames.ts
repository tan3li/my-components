import {isEmptyString} from './objecthelper.js';

export function classNames(...args) {
    const argsLen = args.length;
    const classes: string[] = [];
    let argType, arg, key;

    for (let i = 0; i < argsLen; i++) {
        arg = args[i];

        if (!isEmptyString(arg)) {
            argType = typeof arg;

            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            } else if (argType === 'object') {
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

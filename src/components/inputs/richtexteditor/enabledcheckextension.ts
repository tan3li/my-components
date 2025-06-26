export const EnabledCheckExtension = {
    addOptions() {
        return {
            ...this.parent?.(),
            isEnabled: true
        };
    },
    addKeyboardShortcuts() {
        let out;

        if (this.options.isEnabled) {
            out = this.parent?.();
        }

        return out ?? {};
    },
    addInputRules() {
        let out;

        if (this.options.isEnabled) {
            out = this.parent?.();
        }

        return out ?? [];
    }
};

export declare const enum DataCardStyle {
    Card = "card",
    Plain = "plain"
}
export declare const enum DataCardActionElement {
    Button = 0,
    Self = 1
}
export declare const enum DataCardAlertLevel {
    Warning = "warning",
    Danger = "danger"
}
export interface DataCardAction {
    element: DataCardActionElement;
    onPress: () => void;
    text?: string;
}
export interface DataCardAlert {
    ariaLabel?: string;
    level: DataCardAlertLevel;
}
//# sourceMappingURL=types.d.ts.map
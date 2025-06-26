export const enum DataCardStyle {
    Card = 'card',
    Plain = 'plain'
}

export const enum DataCardActionElement {
    Button,
    Self
}

export const enum DataCardAlertLevel {
    Warning = 'warning',
    Danger = 'danger'
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

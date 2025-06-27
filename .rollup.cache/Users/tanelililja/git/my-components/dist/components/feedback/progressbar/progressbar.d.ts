import { ProgressBarProps as ReactAriaProgressBarProps } from 'react-aria-components';
import { Position } from '../../../constants/position.js';
import { RefAttributes } from 'react';
export interface ProgressBarProps extends ReactAriaProgressBarProps, RefAttributes<HTMLDivElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Position of the label. If not given, label will not be shown.
     */
    labelPosition?: Position.Bottom | Position.Top;
    /**
     * Whether to show the help text icon.
     */
    showHelpTextIcon?: boolean;
    /**
     * Position of the tooltip.
     */
    tooltipPosition?: Position.Bottom | Position.Top;
    /**
     * Position of the value label. If not given, value label will not be shown.
     */
    valueLabelPosition?: Position.Bottom | Position.Right;
}
export declare function ProgressBar(props: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=progressbar.d.ts.map
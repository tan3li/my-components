import { LabelProps as ReactAriaLabelProps } from 'react-aria-components';
import { Size } from '../../../constants/size.js';
import { ReactNode } from 'react';
import { TooltipProps } from '../../feedback/tooltip/tooltip.js';
export interface TooltipContent {
    headerIconName?: TooltipProps['headerIconName'];
    headerText?: TooltipProps['headerText'];
    content: TooltipProps['children'];
}
export interface FieldLabelProps extends ReactAriaLabelProps {
    isDisabled?: boolean;
    isRequired?: boolean;
    size?: Size.sm | Size.md | Size.lg;
    suffix?: ReactNode;
    tooltipContent?: TooltipContent;
}
export declare function FieldLabel({ children, className, isDisabled, isRequired, size, suffix, tooltipContent, ...props }: FieldLabelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=fieldlabel.d.ts.map
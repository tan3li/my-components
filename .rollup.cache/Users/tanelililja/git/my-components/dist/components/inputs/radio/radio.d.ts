import { RadioProps as ReactAriaRadioProps } from 'react-aria-components';
import { ReactNode, RefAttributes } from 'react';
import { Size } from '../../../constants/size.js';
import { LabelPlacement } from '../../../constants/labelplacement.js';
export interface RadioCommonProps extends ReactAriaRadioProps, RefAttributes<HTMLLabelElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}
export interface RadioPropsAriaLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}
export interface RadioPropsLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
export type RadioProps = RadioPropsAriaLabelRequired | RadioPropsLabelRequired;
export declare function Radio({ className, helpText, isSkeleton, label, labelPlacement, size, ...props }: RadioProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=radio.d.ts.map
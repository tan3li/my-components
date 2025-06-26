import {TooltipTrigger as ReactAriaTooltipTrigger, TooltipTriggerComponentProps} from 'react-aria-components';

const DEFAULT_DELAY = 750;

export type {TooltipTriggerComponentProps};

export function TooltipTrigger({children, delay = DEFAULT_DELAY, ...props}: TooltipTriggerComponentProps) {
    return (
        <ReactAriaTooltipTrigger {...props} delay={delay}>
            {children}
        </ReactAriaTooltipTrigger>
    );
}

import {useDisclosureState} from 'react-stately';
import {ReactNode, RefAttributes, useRef} from 'react';
import {mergeProps, useButton, useDisclosure, useFocusRing} from 'react-aria';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {classNames} from '../../../utils/classnames.js';
import {useAutoHeightAnimation} from '../../../hooks/useautoheightanimation.js';
import {BodyText, Label} from '../../text/index.js';
import {HTMLElementType, Size} from '../../../constants/index.js';

export interface CalloutProps extends RefAttributes<HTMLDivElement> {
    /**
     * Callout content.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether elements is expanded by default.
     */
    defaultExpanded?: boolean;
    /**
     * Name of decorative icon displayed in the header.
     */
    iconName: IconName;
    /**
     * Whether element is expanded (controlled).
     */
    isExpanded?: boolean;
    /**
     * Handler called when expanded state changes. Use together with isExpanded to control state from outside.
     */
    onExpandedChange?: (isExpanded: boolean) => void;
    /**
     * Title displayed in the header.
     */
    title: ReactNode;
}

export function Callout({children, className, iconName, ref, title, ...props}: CalloutProps) {
    const state = useDisclosureState(props);
    const panelRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const {buttonProps: triggerProps, panelProps} = useDisclosure(props, state, panelRef);
    const {buttonProps} = useButton(triggerProps, triggerRef);
    const {isFocusVisible, focusProps} = useFocusRing();
    const isExpanded = state.isExpanded;
    const {isLoaded, props: animationProps} = useAutoHeightAnimation({isExpanded, ref: panelRef});

    return (
        <div className={classNames('callout', className)} ref={ref}>
            <button
                {...mergeProps(buttonProps, focusProps)}
                className="callout__header"
                data-focus-visible={isFocusVisible || undefined}
                ref={triggerRef}>
                <div className="callout__header-left">
                    <Icon ariaHidden={true} className="callout__icon" name={iconName} size={IconSize.MD} />
                    <Label className="callout__title" size={Size.md}>
                        <strong>{title}</strong>
                    </Label>
                </div>
                <Icon
                    ariaHidden={true}
                    className="callout__expander-icon"
                    name={isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight}
                    size={IconSize.MD}
                />
            </button>
            <div {...mergeProps(panelProps, animationProps)} className="callout__panel" ref={panelRef}>
                {(isExpanded || isLoaded) && (
                    <div className="callout__panel-content">
                        <BodyText elementType={HTMLElementType.Div} size={Size.sm}>
                            {children}
                        </BodyText>
                    </div>
                )}
            </div>
        </div>
    );
}

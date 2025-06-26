import {SelectOptionContentProps} from './selectoptioncontentprops.js';
import {classNames} from '../../../utils/classnames.js';
import {Size} from '../../../constants/index.js';
import {SelectItemBase} from './selectitem.js';
import {Icon, iconNames, IconSize} from '../../media/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Spinner, SpinnerVariant} from '../../feedback/index.js';
import {Label} from '../../text/index.js';

const INDENT_SIZE_PX = 28;

export function SelectOptionContent<TItem extends SelectItemBase<TItem>>({
    bodyPrefix,
    bodySuffix,
    className,
    description,
    descriptionRef,
    isExpanded,
    isLoading,
    item,
    label,
    labelRef,
    labelSuffix,
    level,
    onToggleItem,
    ref,
    size,
    suffix
}: SelectOptionContentProps<TItem>) {
    const {action, children, text} = item;
    const translateCommon = useTranslateCommon();

    return (
        <div
            className={classNames('select-option-content', className, {
                'select-option-content--expandable': !!children
            })}
            ref={ref}
            style={level > 0 ? {paddingLeft: `${INDENT_SIZE_PX * level}px`} : undefined}>
            {action?.iconName && (
                <Icon className="select-option-content__action-icon" name={action.iconName} size={IconSize.MD} />
            )}
            {isLoading && (
                <Spinner className="select-option-content__spinner" size={Size.sm} variant={SpinnerVariant.Neutral} />
            )}
            {!action && onToggleItem && !isLoading && (
                // Expanding is controlled with left and right arrow keys on higher level.
                // Select option content should not be keyboard-focusable.
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                <div
                    aria-expanded={isExpanded}
                    aria-label={translateCommon(isExpanded ? 'collapse' : 'expand')}
                    className="select-option-content__expander"
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleItem(item);
                    }}
                    role="button">
                    <Icon
                        name={isExpanded ? iconNames.ExpandMoreFilled : iconNames.ChevronRightFilled}
                        size={IconSize.MD}
                    />
                </div>
            )}
            <div className="select-option-content__body">
                {bodyPrefix && <div className="select-option-content__body-prefix">{bodyPrefix}</div>}
                <div className="select-option-content__body-content">
                    {label ?? (
                        <div className="select-option-content__label-wrapper">
                            <Label
                                className="select-option-content__label"
                                ref={labelRef}
                                size={size === Size.xs ? Size.md : Size.lg}>
                                {text}
                            </Label>
                            {labelSuffix && <div className="select-option-content__label-suffix">{labelSuffix}</div>}
                        </div>
                    )}
                    {description && (
                        <Label className="select-option-content__description" ref={descriptionRef} size={Size.md}>
                            {description}
                        </Label>
                    )}
                </div>
                {bodySuffix && <div className="select-option-content__body-suffix">{bodySuffix}</div>}
            </div>
            <Icon
                aria-hidden={true}
                className="select-option-content__check"
                name={iconNames.InputCheck}
                size={IconSize.MD}
            />
            {suffix && <div className="select-option-content__suffix">{suffix}</div>}
        </div>
    );
}

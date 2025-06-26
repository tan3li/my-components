import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {Size} from '../../../constants/index.js';
import {Icon, IconName, iconNames, IconSize} from '../../media/index.js';
import {CSSProperties, ReactNode, RefAttributes} from 'react';
import {Heading} from '../../text/index.js';
import {BreadcrumbItem, Breadcrumbs} from '../../navigation/index.js';
import {classNames} from '../../../utils/classnames.js';
import {SkeletonPageHeader} from '../../feedback/skeleton/skeletonpageheader.js';

export interface PageHeaderProps extends RefAttributes<HTMLDivElement> {
    /**
     * Badge element to display next to the title.
     */
    badge?: ReactNode;
    /**
     * Array of button elements to display next to the title.
     */
    buttons?: ReactNode[];
    /**
     * Breadcrumb items to show above title.
     * Last/current item will be hidden as title prop is interpreted as a replacement for it.
     */
    breadcrumbItems?: BreadcrumbItem[];
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Array of detail elements to display below title.
     */
    details?: ReactNode[];
    /**
     * Icon name for the title.
     */
    iconName?: IconName;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Level of the header. Affects the size of the icon and title text.
     */
    level: number;
    /**
     * Handler that is called when Back-button is pressed.
     */
    onBackPress?: () => void;
    /**
     * Whether Back-button should be visible.
     */
    showBackButton?: boolean;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Title text.
     */
    title: string;
}

export function PageHeader({
    badge,
    buttons,
    breadcrumbItems,
    className,
    details,
    iconName,
    isSkeleton,
    level,
    onBackPress,
    ref,
    showBackButton,
    style,
    title
}: PageHeaderProps) {
    const translateCommon = useTranslateCommon();
    const hasBreadcrumbs = breadcrumbItems && breadcrumbItems.length > 0;
    const hasDetails = details && details.length > 0;

    if (isSkeleton) {
        return (
            <SkeletonPageHeader
                hasBreadcrumbs={hasBreadcrumbs}
                hasDetails={hasDetails}
                hasIcon={!!iconName}
                level={level}
            />
        );
    }

    return (
        <div className={classNames('page-header', className)} ref={ref} style={style}>
            {showBackButton && (
                <Button
                    onPress={onBackPress}
                    size={Size.sm}
                    startIconName={iconNames.ArrowBack}
                    style={ButtonStyle.Outline}
                    variant={ButtonVariant.Neutral}>
                    {translateCommon('back')}
                </Button>
            )}
            <div className="page-header__content">
                {hasBreadcrumbs && <Breadcrumbs className="page-header__breadcrumbs" items={breadcrumbItems} />}
                <div className="page-header__head">
                    <div className="page-header__title">
                        {iconName && (
                            <Icon
                                className="page-header__icon"
                                name={iconName}
                                size={level > 1 ? IconSize.LG : IconSize.XL}
                            />
                        )}
                        <Heading className="page-header__title-text" level={1} size={level > 1 ? Size.sm : Size.md}>
                            {title}
                        </Heading>
                        {badge}
                    </div>
                    {buttons && buttons.length > 0 && <div className="page-header__button-group">{buttons}</div>}
                </div>
                {hasDetails && <div className="page-header__details">{details}</div>}
            </div>
        </div>
    );
}

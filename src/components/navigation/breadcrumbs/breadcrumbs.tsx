import {
    Breadcrumb,
    Breadcrumbs as ReactAriaBreadcrumbs,
    BreadcrumbsProps as ReactAriaBreadcrumbsProps,
    Key,
    Link
} from 'react-aria-components';
import {classNames} from '../../../utils/classnames.js';
import {LABEL_SIZE_MD_CSS_CLASS} from '../../text/index.js';
import {RefAttributes, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {Menu} from '../../action/index.js';
import {safeCall} from '../../../utils/functionhelper.js';
import {useResizeObserver} from '@react-aria/utils';
import {Tooltip, TooltipTrigger, TooltipType} from '../../feedback/index.js';

export interface BreadcrumbItem {
    id: string;
    label: string;
    isDisabled?: boolean;
}

export interface BreadcrumbsProps<T extends BreadcrumbItem>
    extends Omit<ReactAriaBreadcrumbsProps<T>, 'onAction'>,
        RefAttributes<HTMLOListElement> {
    items: T[];
    /**
     * Handler that is called when a breadcrumb is clicked.
     */
    onAction?: (id: string) => void;
}

const MAX_VISIBLE_ELEMENTS_COUNT = 5;
const MORE_ELEMENT_ID = 'more';
const HIDDEN_ELEMENT_CSS_CLASS = 'breadcrumb--hidden';
const TRUNCATED_ELEMENT_CSS_CLASS = 'breadcrumb--truncated';

function adaptElements<T extends BreadcrumbItem>(wrapperElement: HTMLElement, itemsWithMore: T[]) {
    const allElements = wrapperElement.children;
    const allElementsLen = allElements.length;
    const hiddenItems: T[] = [];
    // Static elements which should be always visible.
    let firstElement: HTMLElement | undefined,
        moreElement: HTMLElement | undefined,
        currentElement: HTMLElement | undefined;

    // Reveal all elements and find static elements.
    for (let i = 0; i < allElementsLen; i++) {
        const el = allElements[i] as HTMLElement;

        el.classList.remove(HIDDEN_ELEMENT_CSS_CLASS, TRUNCATED_ELEMENT_CSS_CLASS);

        if (i === 0) {
            firstElement = el;
        }
        if (el.dataset.id === MORE_ELEMENT_ID) {
            moreElement = el;
        }
        if (el.dataset.current) {
            currentElement = el;
        }
    }

    const wrapperWidth = wrapperElement.offsetWidth;
    let stopWidth =
            (firstElement?.offsetWidth ?? 0) + (moreElement?.offsetWidth ?? 0) + (currentElement?.offsetWidth ?? 0),
        hasVisibleNonStaticElements = false;

    // Hide elements which don't fit the wrapper or exceed max visible elements count.
    for (let i = 0; i < allElementsLen; i++) {
        const el = allElements[i] as HTMLElement;

        // Skip static elements
        if (el === moreElement || el === firstElement || el === currentElement) {
            continue;
        }

        const elementWidth = el.offsetWidth;
        const isWithinMaxVisibleCount =
            allElementsLen - 1 >= MAX_VISIBLE_ELEMENTS_COUNT ? i < MAX_VISIBLE_ELEMENTS_COUNT - 2 : true;

        if (isWithinMaxVisibleCount && wrapperWidth >= stopWidth + elementWidth) {
            stopWidth += elementWidth;
            hasVisibleNonStaticElements = true;
        } else {
            el.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
            hiddenItems.push(itemsWithMore[i]);
        }
    }

    if (hiddenItems.length === 0) {
        // No hidden items --> hide more-element.
        moreElement?.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
    }

    if (!hasVisibleNonStaticElements) {
        // No visible non-static elements --> allow current element to truncate with ellipsis.
        currentElement?.classList.add(TRUNCATED_ELEMENT_CSS_CLASS);
    }

    return {
        hiddenItems,
        currentElement
    };
}

export function Breadcrumbs<T extends BreadcrumbItem>({className, items, ref, ...props}: BreadcrumbsProps<T>) {
    const wrapperRef = useRef<HTMLOListElement>(null);
    const itemsWithMore = useMemo(() => {
        const arr = items.slice();

        arr.splice(items.length - 1, 0, {id: MORE_ELEMENT_ID, label: '...'} as T);

        return arr;
    }, [items]);
    const [hiddenItems, setHiddenItems] = useState<T[]>([]);
    const [currentHasTooltip, setCurrentHasTooltip] = useState(false);

    useImperativeHandle(ref, () => wrapperRef.current!, []);

    const onAction = (key: Key) => {
        if (key !== MORE_ELEMENT_ID) {
            safeCall(props.onAction, key as string);
        }
    };

    const onResize = useCallback(() => {
        const wrapperElement = wrapperRef.current;

        if (wrapperElement) {
            const {hiddenItems: hiddenItemsArr, currentElement} = adaptElements(wrapperElement, itemsWithMore);

            setHiddenItems(hiddenItemsArr);

            if (currentElement) {
                const linkElement = currentElement.firstChild as HTMLElement;

                setCurrentHasTooltip(linkElement.offsetWidth < linkElement.scrollWidth);
            }
        }
    }, [wrapperRef, itemsWithMore]);

    useResizeObserver({ref: wrapperRef, onResize});

    return (
        <ReactAriaBreadcrumbs
            {...props}
            className={classNames('breadcrumbs', className)}
            onAction={onAction}
            ref={wrapperRef}>
            {itemsWithMore.map(({id, label, isDisabled}: T, i) => {
                const hasTooltip = i === itemsWithMore.length - 1 && currentHasTooltip;
                let link = (
                    <Link
                        className={`breadcrumb-link ${LABEL_SIZE_MD_CSS_CLASS}`}
                        // Link with tooltip should be focusable so cannot disable.
                        isDisabled={hasTooltip ? false : isDisabled}>
                        {label}
                    </Link>
                );

                if (hasTooltip) {
                    link = (
                        <TooltipTrigger>
                            {link}
                            <Tooltip type={TooltipType.Plain}>{label}</Tooltip>
                        </TooltipTrigger>
                    );
                }

                if (id === MORE_ELEMENT_ID) {
                    link = (
                        <Menu items={hiddenItems.map((item) => ({id: item.id, name: item.label}))} onAction={onAction}>
                            {link}
                        </Menu>
                    );
                }

                return (
                    <Breadcrumb className="breadcrumb" data-id={id} id={id} key={id}>
                        {link}
                    </Breadcrumb>
                );
            })}
        </ReactAriaBreadcrumbs>
    );
}

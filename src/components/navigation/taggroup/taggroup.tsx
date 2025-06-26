import {
    Children,
    cloneElement,
    ReactElement,
    ReactNode,
    RefAttributes,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState
} from 'react';
import {classNames} from '../../../utils/classnames.js';
import {useResizeObserver} from '@react-aria/utils';
import {Button, ButtonStyle, ButtonVariant} from '../../action/index.js';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';
import {TagProps, TagStyle} from '../tag/index.js';
import {Size} from '../../../constants/index.js';

export interface TagGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Tag element or list of Tag elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Maximum number of visible tag rows when in collapsed state.
     */
    maxVisibleRows?: number;
    /**
     * Size of the tags.
     */
    size?: TagProps['size'];
    /**
     * Style of the tags.
     */
    style?: TagProps['style'];
}

const HIDDEN_TAG_CSS_CLASS = 'tag--hidden';
const DEFAULT_MAX_VISIBLE_ROWS = 4;

function revealChildren(element: HTMLElement) {
    const children = Array.from(element.children) as HTMLElement[];

    children.forEach((child) => {
        child.classList.remove(HIDDEN_TAG_CSS_CLASS);
    });
}

function adaptChildren({
    element,
    isExpanded,
    maxVisibleRows
}: {
    element: HTMLElement;
    isExpanded: boolean;
    maxVisibleRows: number;
}) {
    const children = element.children as HTMLCollectionOf<HTMLElement>;
    const len = children.length;

    if (len === 0) {
        return 0;
    }

    revealChildren(element);

    let currentOffsetTop = children[0].offsetTop,
        currentRow = 1,
        hiddenCount = 0;

    for (let i = 0; i < len; i++) {
        const child = children[i];
        const offsetTop = currentRow > maxVisibleRows ? currentOffsetTop : child.offsetTop;

        if (offsetTop > currentOffsetTop) {
            currentOffsetTop = offsetTop;
            currentRow++;
        }

        if (currentRow > maxVisibleRows) {
            if (!isExpanded) {
                child.classList.add(HIDDEN_TAG_CSS_CLASS);
            }
            hiddenCount++;
        }
    }

    return hiddenCount;
}

export function TagGroup({
    children: propsChildren,
    className,
    maxVisibleRows = DEFAULT_MAX_VISIBLE_ROWS,
    ref,
    size = Size.md,
    style = TagStyle.Outline
}: TagGroupProps) {
    const children = Children.toArray(propsChildren);
    const content: ReactNode[] = children.map((child) =>
        cloneElement(child as ReactElement<TagProps>, {
            role: 'listitem',
            size,
            style
        })
    );
    const tagListRef = useRef<HTMLDivElement>(null);
    const [hiddenCount, setHiddenCount] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const translateCommon = useTranslateCommon();
    const tagListId = useId();

    const onResize = useCallback(() => {
        const tagList = tagListRef.current;

        if (tagList) {
            const newHiddenCount = adaptChildren({
                element: tagList,
                isExpanded,
                maxVisibleRows
            });

            setHiddenCount(newHiddenCount);

            if (newHiddenCount === 0) {
                setIsExpanded(false);
            }
        }
    }, [tagListRef, maxVisibleRows, isExpanded, children.length]);

    useResizeObserver({ref: tagListRef, onResize});

    useEffect(() => {
        document.fonts.ready.then(onResize);
    }, []);

    return (
        <div className={classNames(`tag-group tag-group--${size}`, className)} ref={ref}>
            <div className="tag-group__tags" id={tagListId} ref={tagListRef} role="list">
                {content}
            </div>
            {hiddenCount > 0 && (
                <Button
                    aria-controls={tagListId}
                    aria-expanded={isExpanded}
                    onPress={() => setIsExpanded(!isExpanded)}
                    size={size === Size.xs ? Size.sm : size}
                    style={style === TagStyle.Outline ? ButtonStyle.Fill : ButtonStyle.Outline}
                    variant={ButtonVariant.Neutral}>
                    {isExpanded ? translateCommon('showLess') : `${translateCommon('show')} +${hiddenCount}`}
                </Button>
            )}
        </div>
    );
}

export function scrollRight(element?: HTMLElement | null) {
    if (element) {
        element.scrollLeft = element.scrollWidth;
    }
}

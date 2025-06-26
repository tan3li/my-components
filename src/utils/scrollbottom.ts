export function scrollBottom(element?: HTMLElement | null) {
    if (element) {
        element.scrollTop = element.scrollHeight;
    }
}

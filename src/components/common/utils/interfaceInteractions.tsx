export function textAreaDynamicHeigth(element: HTMLTextAreaElement) {
    element.style.height = "16px";
    element.style.height = element.scrollHeight + "px";
}
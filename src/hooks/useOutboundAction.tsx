import { onCleanup, onMount } from "solid-js";

const useOutboundAction = (ref: HTMLDivElement, action: Function) => {
    function handleClickOutside(event: MouseEvent) {
        if (ref && !ref.contains(event.target as Node)) {
            action();
        }
    }

    onMount(() => {
        document.addEventListener("mousedown", handleClickOutside);
    });
    onCleanup(() => {
        document.removeEventListener("mousedown", handleClickOutside);
    });
};

export default useOutboundAction;

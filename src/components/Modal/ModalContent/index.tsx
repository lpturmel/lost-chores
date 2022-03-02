import { Component, onMount } from "solid-js";
import useOutboundAction from "../../../hooks/useOutboundAction";

export interface ModalContentProps {
    onClose: Function;
}

const ModalContent: Component<ModalContentProps> = (props) => {
    let ref: HTMLDivElement | null = null;

    onMount(() => {
        useOutboundAction(ref!, props.onClose);
    });
    return (
        <div
            ref={ref!}
            className="relative rounded-md max-w-md m-auto w-full flex flex-col p-2 mt-16 mb-16 z-50 text-white light-accent"
        >
            {props.children}
        </div>
    );
};

export default ModalContent;

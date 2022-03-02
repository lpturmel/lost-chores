import { Component, onMount } from "solid-js";
import { IoClose } from "solid-icons/io";

export interface ModalHeaderProps {
    onClose: Function;
}

const ModalHeader: Component<ModalHeaderProps> = (props) => {
    let closeEl: HTMLButtonElement;

    onMount(() => closeEl.focus());
    return (
        <div className="flex flex-row justify-between px-4 py-4 text-xl font-semibold">
            {props.children}
            <button
                ref={(el) => (closeEl = el)}
                onClick={() => props.onClose()}
                className="focus-style p-2 rounded-lg hover:bg-gray-700/20 transition-colors duration-200 cursor-pointer"
            >
                <IoClose />
            </button>
        </div>
    );
};

export default ModalHeader;

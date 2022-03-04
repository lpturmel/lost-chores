import { Component, createSignal, For, JSX, onMount } from "solid-js";
import { HiOutlineSelector } from "solid-icons/hi";
import useOutboundAction from "../hooks/useOutboundAction";

interface GameClassItem {
    game_class: number;
    icon: JSX.Element;
    name: string;
}
interface DropdownProps {
    items: GameClassItem[];
    onChange: (item: GameClassItem) => void;
    value: GameClassItem;
}
const Dropdown: Component<DropdownProps> = (props) => {
    let ref: HTMLDivElement | null = null;
    const [open, setOpen] = createSignal(false);
    const closeDropdown = () => setOpen(false);

    onMount(() => {
        useOutboundAction(ref!, closeDropdown);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    });
    const toggleMenu = () => {
        setOpen(!open());
    };
    const handleItemClick = (newItem: GameClassItem) => {
        if (props.value.game_class !== newItem.game_class) {
            props.onChange(newItem);
            setOpen(false);
        }
    };
    return (
        <div ref={ref} className="relative w-fit w-[185px]">
            <button
                onClick={toggleMenu}
                className="relative shadow-sm w-full rounded-md pl-3 pr-10 py-1 border divider-color focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
                <span className="flex flex-row items-center">
                    <span className="w-6 h-6 fill-white">
                        {props.value.icon}
                    </span>
                    <span className="ml-2 block truncate text-sm">
                        {props.value.name}
                    </span>
                    <span className="absolute right-1 flex items-center pointer-events-none">
                        <HiOutlineSelector className="w-4 h-4 " />
                    </span>
                </span>
            </button>
            <div>
                {open() && (
                    <div className="absolute z-10 mt-1 max-w-56 w-full dark-accent border divider-color shadow-lg max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none scrollbar-thin scrollbar-thumb-gray-[#757675]">
                        <For each={props.items}>
                            {(item) => (
                                <span
                                    onClick={() => handleItemClick(item)}
                                    className="flex flex-row p-2 hover:bg-white/10 items-center cursor-default"
                                >
                                    <span className="w-6 h-6 fill-white">
                                        {item.icon}
                                    </span>
                                    <span className="ml-2 block truncate text-sm">
                                        {item.name}
                                    </span>
                                </span>
                            )}
                        </For>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;

import { Link, useLocation } from "solid-app-router";
import { Component, createEffect, createMemo, createSignal } from "solid-js";
import ClassIcon from "./ClassIcon";

interface SidebarItemProps {
    name: string;
    path: string;
    gameClass?: number;
}
const SidebarItem: Component<SidebarItemProps> = (props) => {
    const [selected, setSelected] = createSignal(false);
    const location = useLocation();
    createEffect(() => {
        setSelected(location.pathname === props.path);
    });
    const selectedStyles = createMemo(() =>
        selected() ? `bg-[#2C2C2C] ` : "bg-transparent "
    );

    const selectedText = createMemo(() =>
        selected() ? "text-[#FFFFFF] " : "text-[#979696] "
    );
    return (
        <Link href={props.path} className="no-underline">
            <div
                className={
                    "p-2 flex flex-row justify-start gap-2 items-center rounded-md " +
                    selectedStyles()
                }
            >
                {props.gameClass && (
                    <ClassIcon
                        selected={selected()}
                        gameClass={props.gameClass}
                    />
                )}
                <p className={"font-semibold text-sm " + selectedText()}>
                    {props.name}
                </p>
            </div>
        </Link>
    );
};

export default SidebarItem;

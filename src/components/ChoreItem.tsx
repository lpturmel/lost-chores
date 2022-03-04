import { invoke } from "@tauri-apps/api";
import { Component } from "solid-js";
import { config } from "../state/config";

interface ChoreItemProps {
    name: string;
    checked: boolean;
    onCheck: (checked: boolean) => void;
}
const ChoreItem: Component<ChoreItemProps> = (props) => {
    const handleChange = (e: { currentTarget: HTMLInputElement }) => {
        props.onCheck(e.currentTarget.checked);
        invoke("write_config", { config: config() });
    };
    return (
        <div className="flex flex-row justify-between items-center text-white text-sm dark-accent p-2 border-[1px] divider-color rounded-md">
            <p>{props.name}</p>
            <input
                checked={props.checked}
                onChange={handleChange}
                type="checkbox"
            />
        </div>
    );
};

export default ChoreItem;

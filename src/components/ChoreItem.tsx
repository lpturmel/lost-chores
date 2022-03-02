import { invoke } from "@tauri-apps/api";
import { Component } from "solid-js";
import { config, setConfig } from "../state/config";

interface ChoreItemProps {
    name: string;
    unit: "roster" | "characters";
    type: "dailies" | "weeklies";
    key: string;
}
const ChoreItem: Component<ChoreItemProps> = (props) => {
    const handleChange = (e: { currentTarget: HTMLInputElement }) => {
        setConfig({
            ...config(),
            [props.unit]: {
                ...config()[props.unit],
                [props.type]: {
                    ...config()[props.unit][props.type],
                    [props.key]: e.currentTarget.checked,
                },
            },
        });
        invoke("write_config", { config: config() });
    };
    return (
        <div className="flex flex-row justify-between items-center text-white text-sm dark-accent p-2 border-[1px] divider-color rounded-md">
            <p>{props.name}</p>
            <input
                checked={config()[props.unit][props.type][props.key]}
                onChange={handleChange}
                type="checkbox"
            />
        </div>
    );
};

export default ChoreItem;

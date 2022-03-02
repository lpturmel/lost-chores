import { Component, createEffect, createSignal } from "solid-js";
import { classMap } from "../types/config";

interface ClassIconProps {
    gameClass: number;
    selected: boolean;
}
const ClassIcon: Component<ClassIconProps> = (props) => {
    const [fillColor, setFillColor] = createSignal("#979696");
    const icon = classMap[props.gameClass].icon;
    createEffect(() => {
        setFillColor(props.selected ? "fill-white" : "fill-[#979696]");
    });
    return <div className={`text-white w-6 h-6 ` + fillColor()}>{icon}</div>;
};

export default ClassIcon;

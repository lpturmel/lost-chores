import { Component } from "solid-js";
import NewCharacter from "./modals/NewCharacter";

const Actionbar: Component = () => {
    return (
        <div className="flex flex-row border-b-[1px] divider-color justify-start item-center w-full h-[50px] px-2 py-1">
            <NewCharacter />
        </div>
    );
};

export default Actionbar;

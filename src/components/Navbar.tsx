import { Component } from "solid-js";
import { getDailyReset, getWeeklyReset } from "../utils/date";
import Timer from "./Timer";

const Navbar: Component = () => {
    return (
        <div className="flex flex-row text-white justify-end items-center gap-4 w-full h-[30px] p-1 text-xs border-b-[1px] divider-color">
            <div className="flex flex-row gap-2">
                <p> Daily Reset: </p>
                <Timer cb={getDailyReset} />
            </div>
            <div className="flex flex-row gap-2">
                <p> Weekly Reset: </p>
                <Timer cb={getWeeklyReset} />
            </div>
        </div>
    );
};

export default Navbar;

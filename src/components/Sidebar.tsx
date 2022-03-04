import { Component, For } from "solid-js";
import { config } from "../state/config";
import Actionbar from "./Actionbar";
import SidebarItem from "./SidebarItem";

const Sidebar: Component = () => {
    return (
        <div className="w-full h-full w-[250px] border-r-[1px] divider-color">
            <Actionbar />
            <div className="w-full h-full flex flex-col p-2">
                <SidebarItem name="Roster" path="/" />
                <For each={config().characters}>
                    {(character) => (
                        <SidebarItem
                            name={character.name}
                            game_class={character.game_class}
                            path={"/character/" + character.id}
                        />
                    )}
                </For>
            </div>
        </div>
    );
};

export default Sidebar;

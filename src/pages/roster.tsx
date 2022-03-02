import { Component } from "solid-js";
import ChoreItem from "../components/ChoreItem";
import Section from "../components/Section";
import { config } from "../state/config";

const RosterPage: Component = () => {
    return (
        <div className="w-full h-0 min-h-full flex flex-col light-accent overflow-y-auto scrollbar-thin">
            <Section title="Dailies">
                <ChoreItem
                    name="World Boss"
                    unit="roster"
                    type="dailies"
                    key="world_boss"
                />
                <ChoreItem
                    name="Chaos Gate"
                    unit="roster"
                    type="dailies"
                    key="chaos_gate"
                />
                <ChoreItem
                    name="Trade Skill"
                    unit="roster"
                    type="dailies"
                    key="trade_skill"
                />
                <ChoreItem
                    name="Adventure Island"
                    unit="roster"
                    type="dailies"
                    key="adventure_island"
                />
                <ChoreItem
                    name="Sailing Mission"
                    unit="roster"
                    type="dailies"
                    key="sailing_mission"
                />
            </Section>
            <Section title="Weeklies">
                <ChoreItem
                    name="Ghost Ship"
                    unit="roster"
                    type="weeklies"
                    key="ghost_ship"
                />
                <ChoreItem
                    name="Challenge Abyss Dungeon"
                    unit="roster"
                    type="weeklies"
                    key="challenge_abyss_dungeon"
                />
                <ChoreItem
                    name="PVP Token"
                    unit="roster"
                    type="weeklies"
                    key="pvp_token"
                />
                <ChoreItem
                    name="PVP Island"
                    unit="roster"
                    type="weeklies"
                    key="pvp_island"
                />
            </Section>
        </div>
    );
};

export default RosterPage;

import { Component } from "solid-js";
import ChoreItem from "../components/ChoreItem";
import Section from "../components/Section";
import { config, setConfig } from "../state/config";

const RosterPage: Component = () => {
    const updateChore = (newRoster: any) => {
        setConfig({ ...config(), roster: newRoster });
    };
    return (
        <div className="w-full h-0 min-h-full flex flex-col light-accent overflow-y-auto scrollbar-thin">
            <Section title="Dailies">
                <ChoreItem
                    name="World Boss"
                    checked={config().roster.dailies.world_boss}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.dailies.world_boss = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="Chaos Gate"
                    checked={config().roster.dailies.chaos_gate}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.dailies.chaos_gate = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="Trade Skill"
                    checked={config().roster.dailies.trade_skill}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.dailies.trade_skill = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="Adventure Island"
                    checked={config().roster.dailies.adventure_island}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.dailies.adventure_island = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="Sailing Mission"
                    checked={config().roster.dailies.sailing_mission}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.dailies.sailing_mission = checked;
                        updateChore(roster);
                    }}
                />
            </Section>
            <Section title="Weeklies">
                <ChoreItem
                    name="Ghost Ship"
                    checked={config().roster.weeklies.ghost_ship}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.weeklies.ghost_ship = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="Challenge Abyss Dungeon"
                    checked={config().roster.weeklies.challenge_abyss_dungeon}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.weeklies.challenge_abyss_dungeon = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="PVP Token"
                    checked={config().roster.weeklies.pvp_token}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.weeklies.pvp_token = checked;
                        updateChore(roster);
                    }}
                />
                <ChoreItem
                    name="PVP Island"
                    checked={config().roster.weeklies.pvp_island}
                    onCheck={(checked) => {
                        const roster = config().roster;
                        roster.weeklies.pvp_island = checked;
                        updateChore(roster);
                    }}
                />
            </Section>
        </div>
    );
};

export default RosterPage;

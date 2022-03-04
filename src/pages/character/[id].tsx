import { useParams } from "solid-app-router";
import { Component, createMemo } from "solid-js";
import CharacterHeader from "../../components/CharacterHeader";
import ChoreItem from "../../components/ChoreItem";
import Section from "../../components/Section";
import { config, setConfig } from "../../state/config";

const CharacterPage: Component = () => {
    const params = useParams();
    const characterIndex = createMemo(() =>
        config().characters.findIndex((c) => c.id === params.id)
    );
    const character = createMemo(() => config().characters[characterIndex()]);
    const updateChore = (newChar: any) => {
        const newCharacters = [...config().characters];
        newCharacters[characterIndex()] = newChar;
        console.log(newCharacters);
        setConfig({ ...config(), characters: newCharacters });
    };

    return (
        <div className="w-full h-full light-accent">
            <CharacterHeader character={character()} />
            <div className="w-full h-0 min-h-full flex flex-col overflow-y-auto scrollbar-thin">
                <Section title="Dailies">
                    <ChoreItem
                        name="Chaos Dungeon"
                        checked={character().dailies.chaos_dungeon}
                        onCheck={(checked) => {
                            const char = character();
                            char.dailies.chaos_dungeon = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Guardian Raid"
                        checked={character().dailies.guardian_raid}
                        onCheck={(checked) => {
                            const char = character();
                            char.dailies.guardian_raid = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 1"
                        checked={character().dailies.una.first}
                        onCheck={(checked) => {
                            const char = character();
                            char.dailies.una.first = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 2"
                        checked={character().dailies.una.second}
                        onCheck={(checked) => {
                            const char = character();
                            char.dailies.una.second = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 3"
                        checked={character().dailies.una.third}
                        onCheck={(checked) => {
                            const char = character();
                            char.dailies.una.third = checked;
                            updateChore(char);
                        }}
                    />
                </Section>
                <Section title="Weeklies">
                    <ChoreItem
                        name="Abyss Dungeon"
                        checked={character().weeklies.abyss_dungeon}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.abyss_dungeon = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Ship Exchange"
                        checked={character().weeklies.ship_exchange}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.ship_exchange = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 1"
                        checked={character().weeklies.una.first}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.una.first = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 2"
                        checked={character().weeklies.una.second}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.una.second = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Una 3"
                        checked={character().weeklies.una.third}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.una.third = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Sylmael Bloodstone Exchange"
                        checked={character().weeklies.sylmael}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.sylmael = checked;
                            updateChore(char);
                        }}
                    />
                    <ChoreItem
                        name="Chaos Dungeon Exchange"
                        checked={character().weeklies.chaos_dungeon_exchange}
                        onCheck={(checked) => {
                            const char = character();
                            char.weeklies.chaos_dungeon_exchange = checked;
                            updateChore(char);
                        }}
                    />
                </Section>
            </div>
        </div>
    );
};

export default CharacterPage;

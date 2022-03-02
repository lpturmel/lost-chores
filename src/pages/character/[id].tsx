import { Component } from "solid-js";
import ChoreItem from "../../components/ChoreItem";
import Section from "../../components/Section";

const CharacterPage: Component = () => {
    return (
        <div className="w-full h-0 min-h-full flex flex-col light-accent overflow-y-auto scrollbar-thin">
            <Section title="Dailies">
                <ChoreItem name="Chaos Dungeon 1" done={false} />
                <ChoreItem name="Chaos Dungeon 2" done={false} />
                <ChoreItem name="Guardian Raid 1" done={false} />
                <ChoreItem name="Guardian Raid 2" done={false} />
                <ChoreItem name="Una 1" done={false} />
                <ChoreItem name="Una 2" done={false} />
                <ChoreItem name="Una 3" done={false} />
                <ChoreItem name="Guild Donation" done={false} />
            </Section>
            <Section title="Weeklies">
                <ChoreItem name="Abyss Dungeon" done={false} />
                <ChoreItem name="Ship Exchange" done={false} />
                <ChoreItem name="Una 1" done={false} />
                <ChoreItem name="Una 2" done={false} />
                <ChoreItem name="Una 3" done={false} />
                <ChoreItem name="Sylmael Bloostone Exchange" done={false} />
                <ChoreItem name="Chaos Dungeon Exchange" done={false} />
            </Section>
        </div>
    );
};

export default CharacterPage;

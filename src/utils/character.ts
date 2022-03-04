import { Character } from "../types/config";
import { config, setConfig } from "../state/config";
import { invoke } from "@tauri-apps/api";
import { v4 as uuid } from "uuid";

interface ICreateCharacter {
    name: string;
    game_class: number;
}
export const createCharacter = (character: ICreateCharacter) => {
    const newCharacter: Character = {
        id: uuid(),
        name: character.name,
        game_class: character.game_class,
        dailies: {
            una: {
                first: false,

                second: false,
                third: false,
            },
            chaos_dungeon: false,
            guardian_raid: false,
            guild_donation: false,
        },
        weeklies: {
            una: {
                first: false,
                second: false,
                third: false,
            },
            sylmael: false,
            abyss_dungeon: false,
            ship_exchange: false,
            chaos_dungeon_exchange: false,
        },
    };
    setConfig({
        ...config(),
        characters: [...config().characters, newCharacter],
    });
    invoke("write_config", { config: config() });
};

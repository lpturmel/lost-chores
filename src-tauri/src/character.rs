use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Character {
    pub id: String,
    pub name: String,
    pub game_class: u8,
    pub dailies: CharacterDailies,
    pub weeklies: CharacterWeeklies,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct CharacterDailies {
    pub guild_donation: bool,
    pub chaos_dungeon: bool,
    pub guardian_raid: bool,
    pub una: UnaEntries,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct CharacterWeeklies {
    pub abyss_dungeon: bool,
    pub ship_exchange: bool,
    pub una: UnaEntries,
    pub sylmael: bool,
    pub chaos_dungeon_exchange: bool,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct UnaEntries {
    pub first: bool,
    pub second: bool,
    pub third: bool,
}

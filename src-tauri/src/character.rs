use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Character {
    pub id: String,
    pub name: String,
    pub class: u8,
    pub dailies: Dailies,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct Dailies {
    guild_donations: bool,
}

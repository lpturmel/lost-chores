use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Roster {
    pub dailies: RosterDailies,
    pub weeklies: RosterWeeklies,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct RosterDailies {
    pub world_boss: bool,
    pub chaos_gate: bool,
    pub trade_skill: bool,
    pub adventure_island: bool,
    pub sailing_mission: bool,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct RosterWeeklies {
    pub ghost_ship: bool,
    pub challenge_abyss_dungeon: bool,
    pub pvp_token: bool,
    pub pvp_island: bool,
}

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
pub mod character;
pub mod roster;
use roster::Roster;
use serde::{Deserialize, Serialize};
use std::error::Error;
use std::fs::{write, File};
use std::io::BufReader;
use std::path::{Path, PathBuf};
use std::time::Instant;
use tauri::AppHandle;

use crate::roster::{RosterDailies, RosterWeeklies};
use character::Character;

#[derive(Deserialize, Serialize, Debug)]
struct Config {
    characters: Vec<Character>,
    roster: Roster,
}
static CONFIG_NAME: &str = "config.json";

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let config_dir = app.path_resolver().resource_dir().unwrap();
            let config_path = config_dir.join(CONFIG_NAME);
            println!("App data directory: {:?}", config_path);
            if !config_path.exists() {
                println!("No config found, creating default at: {:?}", config_path);
                let default_config = Config {
                    characters: vec![],
                    roster: Roster {
                        dailies: RosterDailies {
                            world_boss: false,
                            chaos_gate: false,
                            trade_skill: false,
                            adventure_island: false,
                            sailing_mission: false,
                        },
                        weeklies: RosterWeeklies {
                            ghost_ship: false,
                            challenge_abyss_dungeon: false,
                            pvp_token: false,
                            pvp_island: false,
                        },
                    },
                };
                let config_str = serde_json::to_string(&default_config).unwrap();
                // TODO investigate buffered writes to prevent multiple small writes
                // let config_file = File::create(config_path).unwrap();
                // let mut writer = BufWriter::new(config_file);
                // serde_json::to_writer(&mut default_config, &config_path);
                write(config_path, config_str).unwrap();
            }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_config, write_config])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
fn read_config<P: AsRef<Path>>(path: P) -> Result<Config, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);

    let c = serde_json::from_reader(reader)?;

    Ok(c)
}
fn get_config_path(app: &AppHandle) -> PathBuf {
    let config_dir = app.path_resolver().resource_dir().unwrap();
    config_dir.join(CONFIG_NAME)
}
#[tauri::command]
fn write_config(app: AppHandle, config: Config) {
    let now = Instant::now();
    let config_path = get_config_path(&app);

    let config_str = serde_json::to_string(&config).unwrap();
    write(config_path, config_str).unwrap();
    println!("Writing config took: {}ms", now.elapsed().as_millis());
}
#[tauri::command]
fn get_config(app: AppHandle) -> Config {
    let now = Instant::now();
    let config_path = get_config_path(&app);
    let config = read_config(config_path).unwrap();
    println!("Reading config took: {}ms", now.elapsed().as_millis());
    config
}

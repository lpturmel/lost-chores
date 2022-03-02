import { lazy } from "solid-js";
export interface Config {
    roster: {
        dailies: {
            world_boss: boolean;
            chaos_gate: boolean;
            trade_skill: boolean;
            adventure_island: boolean;
            sailing_mission: boolean;
        };
        weeklies: {
            ghost_ship: boolean;
            challenge_abyss_dungeon: boolean;
            pvp_token: boolean;
            pvp_island: boolean;
        };
    };
    characters: Character[];
}

export interface Character {
    id: string;
    name: string;
    class: number;
    dailies: {
        chaos_dungeon: {
            first: boolean;
            second: boolean;
        };
        guardian_raid: {
            first: boolean;
            second: boolean;
        };
        una: {
            first: boolean;
            second: boolean;
            third: boolean;
        };
        guild_donation: boolean;
    };
    weeklies: {
        abyss_dungeon: boolean;
        ship_exchange: boolean;
        una: {
            first: boolean;
            second: boolean;
            third: boolean;
        };
        sylmael: boolean;
        chaos_dungeon_exchange: boolean;
    };
}

export const classMap = {
    0: {
        name: "Artillerist",
        icon: lazy(() => import("../components/classes/artillerist/icon")),
    },
    1: {
        name: "Bard",
        icon: lazy(() => import("../components/classes/bard/icon")),
    },
    2: {
        name: "Berserker",
        icon: lazy(() => import("../components/classes/berserker/icon")),
    },
    3: {
        name: "Deadeye",
        icon: lazy(() => import("../components/classes/deadeye/icon")),
    },
    4: {
        name: "Death Blade",
        icon: lazy(() => import("../components/classes/deathblade/icon")),
    },
    5: {
        name: "Gunlancer",
        icon: lazy(() => import("../components/classes/gunlancer/icon")),
    },
    6: {
        name: "Gunslinger",
        icon: lazy(() => import("../components/classes/gunslinger/icon")),
    },
    7: {
        name: "Paladin",
        icon: lazy(() => import("../components/classes/paladin/icon")),
    },
    8: {
        name: "Scrapper",
        icon: lazy(() => import("../components/classes/scrapper/icon")),
    },
    9: {
        name: "Shadow Hunter",
        icon: lazy(() => import("../components/classes/shadowhunter/icon")),
    },
    10: {
        name: "Sharpshooter",
        icon: lazy(() => import("../components/classes/sharpshooter/icon")),
    },
    11: {
        name: "Sorceress",
        icon: lazy(() => import("../components/classes/sorceress/icon")),
    },
    12: {
        name: "Soul Fist",
        icon: lazy(() => import("../components/classes/soulfist/icon")),
    },
    13: {
        name: "Striker",
        icon: lazy(() => import("../components/classes/striker/icon")),
    },
    14: {
        name: "Wardancer",
        icon: lazy(() => import("../components/classes/wardancer/icon")),
    },
};

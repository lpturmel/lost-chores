import { Component, Show } from "solid-js";
import { useRoutes } from "solid-app-router";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import Sidebar from "./components/Sidebar";
import { invoke } from "@tauri-apps/api";
import { Config } from "./types/config";
import { config, setConfig } from "./state/config";

const App: Component = () => {
    const Route = useRoutes(routes);

    // populate app with json state
    invoke<Config>("get_config").then((config) => {
        setConfig(config);
    });

    return (
        <Show when={config()}>
            <div className="w-full flex flex-col h-full overflow-hidden dark-accent">
                <Navbar />
                <div className="w-full h-full flex flex-row">
                    <Sidebar />
                    <Route />
                </div>
            </div>
        </Show>
    );
};

export default App;

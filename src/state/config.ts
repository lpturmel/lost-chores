import { createSignal } from "solid-js";
import { Config } from "../types/config";

export const [config, setConfig] = createSignal<Config | null>(null);

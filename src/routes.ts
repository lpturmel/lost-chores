import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import AboutData from "./pages/about.data";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/roster")),
    },
    {
        path: "/character/:id",
        component: lazy(() => import("./pages/character/[id]")),
        data: AboutData,
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
];

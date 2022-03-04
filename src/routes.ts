import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("./pages/roster")),
    },
    {
        path: "/character/:id",
        component: lazy(() => import("./pages/character/[id]")),
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
];

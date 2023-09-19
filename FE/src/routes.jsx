import React, { lazy } from "react";

const Dashboard = lazy(() => import("./pages/dashboard"));

export const routes = [
    {
        path: "/",
        element: () => <Dashboard />,
    },
];

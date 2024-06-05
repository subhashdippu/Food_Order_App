import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main.js";
import Home from "../pages/Home.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;
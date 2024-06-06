import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main.js";
import Home from "../pages/Home.js";
import Menu from "../pages/shop/Menu.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            }
        ]
    },
]);

export default router;
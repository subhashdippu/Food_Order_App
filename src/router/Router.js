import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main.js";
import Home from "../pages/Home.js";
import Menu from "../pages/shop/Menu.js";
import Signup from "../Components/Signup.js";
import PrivateRouter from "../privateRouter/PrivateRouter.js";

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
                element: <PrivateRouter><Menu /></PrivateRouter>
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main.js";
import Home from "../pages/Home.js";
import Menu from "../pages/shop/Menu.js";
import Signup from "../Components/Signup.js";
import PrivateRouter from "../privateRouter/PrivateRouter.js";
import UpdateProfile from "../pages/dashboard/UpdateProfile.js";
import CartPage from "../pages/shop/CartPage.js";

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
                path: "/update-profile",
                element: <UpdateProfile />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "cart-page",
                element: <CartPage />
            }
        ]
    },
]);

export default router;
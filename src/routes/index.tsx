import { createBrowserRouter } from "react-router-dom";
import { contactUrl, homeUrl, layoutUrl } from "./urls";
import { Layout } from "../pages/app/Layout";
import { Contact, Home } from "../pages";
import { AnimatePresence } from "framer-motion";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        children: [
            {
                path: homeUrl,
                element: <Home />,
            },
            {
                path: contactUrl,
                element: <Contact />,
            },
        ],
    },
]);

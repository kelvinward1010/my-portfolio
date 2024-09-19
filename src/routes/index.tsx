import { createBrowserRouter } from "react-router-dom";
import { layoutUrl } from "./urls";
import { Layout } from "../pages/app/Layout";
import { Home } from "../pages";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
        ],
    },
]);

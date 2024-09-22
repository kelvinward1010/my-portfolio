import { createBrowserRouter } from "react-router-dom";
import {
    aboutUrl,
    contactUrl,
    imagesUrl,
    layoutUrl,
    projectUrl,
    travelUrl,
} from "./urls";
import { Layout } from "../pages/app/Layout";
import { About, Contact, Home, ImagesPage, Project, Travel } from "../pages";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
            {
                path: contactUrl,
                element: <Contact />,
            },
            {
                path: projectUrl,
                element: <Project />,
            },
            {
                path: aboutUrl,
                element: <About />,
            },
            {
                path: imagesUrl,
                element: <ImagesPage />,
            },
            {
                path: travelUrl,
                element: <Travel />,
            },
        ],
    },
]);

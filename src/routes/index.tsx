import { createBrowserRouter } from "react-router-dom";
import {
    aboutUrl,
    contactUrl,
    imagesIDUrl,
    imagesUrl,
    layoutUrl,
    projectIDUrl,
    projectUrl,
    socialUrl,
    travelIDUrl,
    travelUrl,
} from "./urls";
import { Layout } from "../pages/app/Layout";
import {
    About,
    Contact,
    Home,
    ImagesPage,
    ImagesPageID,
    Project,
    ProjectPageID,
    Social,
    Travel,
    TravelID,
} from "../pages";

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
                path: projectIDUrl,
                element: <ProjectPageID />,
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
                path: imagesIDUrl,
                element: <ImagesPageID />,
            },
            {
                path: travelUrl,
                element: <Travel />,
            },
            {
                path: travelIDUrl,
                element: <TravelID />,
            },
            {
                path: socialUrl,
                element: <Social />,
            },
        ],
    },
]);

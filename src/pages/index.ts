import { lazyLoad } from "../utils/loadable";

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const Contact = lazyLoad(
    () => import("./contact/views/Contact"),
    (module) => module.Contact,
);

export const About = lazyLoad(
    () => import("./about/views/About"),
    (module) => module.About,
);

export const Project = lazyLoad(
    () => import("./project/views/Project"),
    (module) => module.Project,
);

export const ImagesPage = lazyLoad(
    () => import("./images/views/ImagesPage"),
    (module) => module.ImagesPage,
);

export const ImagesPageID = lazyLoad(
    () => import("./images/views/ImagesPageID"),
    (module) => module.ImagesPageID,
);

export const Travel = lazyLoad(
    () => import("./travel/views/Travel"),
    (module) => module.Travel,
);

export const TravelID = lazyLoad(
    () => import("./travel/views/TravelID"),
    (module) => module.TravelID,
);

export const Social = lazyLoad(
    () => import("./social/views/Social"),
    (module) => module.Social,
);

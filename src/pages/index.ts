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

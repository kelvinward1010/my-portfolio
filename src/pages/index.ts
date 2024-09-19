import { lazyLoad } from "../utils/loadable";

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const Contact = lazyLoad(
    () => import("./contact/views/Contact"),
    (module) => module.Contact,
);

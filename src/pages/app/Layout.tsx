import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/navbar/Navbar";
import useThemeMode from "@/hooks/useThemeMode";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useThemeMode();

    return (
        <div
            className={`${styles.container} ${isDarkMode ? "dark-theme" : "light-theme"}`}
        >
            <div className={styles.center}>
                <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        // initial={{ y: '100%', opacity: 0 }}
                        // animate={{ y: 0, opacity: 1 }}
                        // exit={{ y: '-100%', opacity: 0 }}
                        initial={{ scale: 0.9, rotate: 180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        key={location.pathname}
                    >
                        <Outlet />
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

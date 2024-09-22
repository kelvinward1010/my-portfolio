import { create } from "zustand";

type ThemeModeState = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const useThemeMode = create<ThemeModeState>((set) => ({
    isDarkMode: localStorage.getItem("themeMode") === "dark",
    toggleTheme: () => {
        set((state) => {
            const newMode = !state.isDarkMode;
            localStorage.setItem("themeMode", newMode ? "dark" : "light");
            return { isDarkMode: newMode };
        });
    },
}));

export default useThemeMode;

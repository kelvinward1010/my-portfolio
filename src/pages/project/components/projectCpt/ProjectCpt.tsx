import useThemeMode from "@/hooks/useThemeMode";
import styles from "./ProjectCpt.module.scss";
import BoxLanguages from "../BoxLanguages";

function ProjectCpt() {
    const { isDarkMode } = useThemeMode();
    return (
        <div
            className={`${styles.container} ${isDarkMode ? styles.themeDark : styles.themeLight}`}
        >
            <h1 className={`${styles.title} text-normal`}>Project Title</h1>
            <p className="text-normal">This is a description project</p>
            <div className={styles.languages}>
                <BoxLanguages title="JavaScript" />
                <BoxLanguages title="TypeScript" />
                <BoxLanguages title="Python" />
            </div>
        </div>
    );
}

export default ProjectCpt;

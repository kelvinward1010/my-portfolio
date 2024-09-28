import useThemeMode from "@/hooks/useThemeMode";
import styles from "./ProjectCpt.module.scss";
import BoxLanguages from "../BoxLanguages";

function ProjectCpt() {
    const { isDarkMode } = useThemeMode();
    return (
        <div
            className={`${styles.container} ${isDarkMode ? styles.themeDark : styles.themeLight}`}
        >
            <div className={styles.titlebox}>
                <h1 className={`${styles.title} text-normal`}>Project Title</h1>
                <span className="text-normal">stars: 5</span>
            </div>
            <p className={`${styles.des} text-normal`}>
                This is a description project
            </p>
            <p className="text-normal">Update at 7:00 - 10/10/2024</p>
            <div className={styles.languages}>
                <BoxLanguages title="JavaScript" />
                <BoxLanguages title="TypeScript" />
                <BoxLanguages title="Python" />
            </div>
        </div>
    );
}

export default ProjectCpt;

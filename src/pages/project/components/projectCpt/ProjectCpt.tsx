import useThemeMode from "@/hooks/useThemeMode";
import styles from "./ProjectCpt.module.scss";
import BoxLanguages from "../BoxLanguages";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { projectUrl } from "@/routes/urls";

function ProjectCpt() {
    const { isDarkMode } = useThemeMode();
    const navigate = useNavigate();

    const goDetail = () => navigate(`${projectUrl}/abc`);

    const handleButtonClick = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <div
            className={`${styles.container} ${isDarkMode ? styles.themeDark : styles.themeLight}`}
        >
            <div className={styles.titlebox}>
                <h1 className={`${styles.title} text-normal`}>Project Title</h1>
            </div>
            <p className={`${styles.des} text-normal`}>
                This is a description project
            </p>
            <div className={styles.languages}>
                <BoxLanguages title="JavaScript" />
                <BoxLanguages title="TypeScript" />
                <BoxLanguages title="Python" />
            </div>
            <div className={styles.boxbutton}>
                <button
                    onClick={() =>
                        handleButtonClick("https://github.com/kelvinward1010")
                    }
                >
                    <div>
                        On github <IconArrowUpRight size={15} />
                    </div>
                </button>
                <button onClick={goDetail}>See more</button>
            </div>
        </div>
    );
}

export default ProjectCpt;

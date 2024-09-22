import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Project.module.scss";

export function Project() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Project"
                description="Projects that I research and complete independently"
            />
        </div>
    );
}

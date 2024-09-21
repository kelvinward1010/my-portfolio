import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./About.module.scss";

export function About() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="About"
                description="Youtuber / Sofware Engineer"
            />
        </div>
    );
}

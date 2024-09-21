import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Home.module.scss";

export function Home() {
    return (
        <div className={styles.container}>
            <TitlePage title="Home" description="Youtuber / Sofware Engineer" />
        </div>
    );
}

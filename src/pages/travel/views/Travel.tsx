import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Travel.module.scss";

export function Travel() {
    return (
        <div className={styles.container}>
            <TitlePage title="Travel" description="My travels" />
        </div>
    );
}

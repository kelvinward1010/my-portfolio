import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Social.module.scss";

export function Social() {
    return (
        <div className={styles.container}>
            <TitlePage title="Social Media" description="Social Media" />
        </div>
    );
}

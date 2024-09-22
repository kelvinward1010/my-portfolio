import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./ImagesPage.module.scss";

export function ImagesPage() {
    return (
        <div className={styles.container}>
            <TitlePage title="Images" description="My photos" />
        </div>
    );
}

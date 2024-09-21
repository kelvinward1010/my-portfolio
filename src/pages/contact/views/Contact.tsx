import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Contact.module.scss";

export function Contact() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Contact"
                description="Youtuber / Sofware Engineer"
            />
        </div>
    );
}

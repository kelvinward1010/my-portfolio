import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./ProjectPageID.module.scss";

export function ProjectPageID() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Project title page"
                description="This is a page detail for project"
            />
        </div>
    );
}

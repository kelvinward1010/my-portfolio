import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./ImagesPageID.module.scss";

export function ImagesPageID() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Image vuon hoa"
                description="This is a page detail for image"
            />
        </div>
    );
}

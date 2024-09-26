import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./ImagesPage.module.scss";
import ImageCpt from "../components/imageCpt/ImageCpt";

export function ImagesPage() {
    return (
        <div className={styles.container}>
            <TitlePage title="Images" description="My photos" />
            <div className={styles.content}>
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
                <ImageCpt />
            </div>
        </div>
    );
}

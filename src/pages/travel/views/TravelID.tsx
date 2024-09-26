import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./TravelID.module.scss";

export function TravelID() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Vinh Ha Long - Quang Ninh"
                description="This is a page detail for travel"
            />
        </div>
    );
}

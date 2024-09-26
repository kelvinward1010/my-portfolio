import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Travel.module.scss";
import TravelCpt from "../components/travelCpt/TravelCpt";

export function Travel() {
    return (
        <div className={styles.container}>
            <TitlePage title="Travel" description="My travels" />
            <div>
                <TravelCpt />
                <TravelCpt />
                <TravelCpt />
                <TravelCpt />
            </div>
        </div>
    );
}

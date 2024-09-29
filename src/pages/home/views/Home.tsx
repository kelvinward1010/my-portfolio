import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Home.module.scss";
import SolarSystem from "../components/SolarSystem";

export function Home() {
    return (
        <div className={styles.container}>
            <TitlePage title="Home" description="Youtuber / Sofware Engineer" />
            <div>
                <SolarSystem />
            </div>
            <p className="text-normal">
                Hello, my name is Tyler Locke. I am a student at Vietnam
                National University of Agriculture, Faculty of Information
                Technology. I aim to become a FullStack programmer in the
                future.
            </p>
        </div>
    );
}

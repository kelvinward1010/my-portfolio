import { ImgAVT } from "@/assets/imgs";
import styles from "./Travel.module.scss";

function TravelCpt() {
    return (
        <div className={styles.container}>
            <img src={ImgAVT} alt="" />
            <div>
                <h1 className={`${styles.title} text-normal`}>
                    Yen Tu - Quang Ninh
                </h1>
                <p className="text-normal">This is my travel in the Tet days</p>
            </div>
        </div>
    );
}

export default TravelCpt;

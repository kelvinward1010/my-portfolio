import { ImgAVT } from "@/assets/imgs";
import styles from "./Travel.module.scss";
import { useNavigate } from "react-router-dom";
import { travelUrl } from "@/routes/urls";

function TravelCpt() {
    const navigate = useNavigate();
    const goDetail = () => navigate(`${travelUrl}/abd`);
    return (
        <div className={styles.container}>
            <img src={ImgAVT} alt="" />
            <div>
                <div className={styles.toptitle}>
                    <h1
                        onClick={goDetail}
                        className={`${styles.title} text-normal`}
                    >
                        Yen Tu - Quang Ninh
                    </h1>
                    <span className="text-normal">Time: 10/10/2024</span>
                </div>
                <p className="text-normal">This is my travel in the Tet days</p>
            </div>
        </div>
    );
}

export default TravelCpt;

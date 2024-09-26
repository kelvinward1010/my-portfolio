import { ImgAVT } from "@/assets/imgs";
import styles from "./ImageCpt.module.scss";
import { useNavigate } from "react-router-dom";
import { imagesUrl } from "@/routes/urls";

function ImageCpt() {
    const navigate = useNavigate();
    const goDetail = () => navigate(`${imagesUrl}/abc`);
    return (
        <img onClick={goDetail} className={styles.img} src={ImgAVT} alt="" />
    );
}

export default ImageCpt;

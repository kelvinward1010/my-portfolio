import { ImgAVT } from "@/assets/imgs";
import styles from "./ImageCpt.module.scss";

function ImageCpt() {
    return <img className={styles.img} src={ImgAVT} alt="" />;
}

export default ImageCpt;

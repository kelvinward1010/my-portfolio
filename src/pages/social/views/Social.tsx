import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Social.module.scss";
import SocialChildren from "../components/SocialChildren";
import { ImgAVT } from "@/assets/imgs";

export function Social() {
    function FormFaceBook() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={ImgAVT} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button>See more</button>
                </div>
            </div>
        );
    }

    function FormInstagram() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={ImgAVT} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button>See more</button>
                </div>
            </div>
        );
    }

    function FormLinkedIn() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={ImgAVT} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button>See more</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <TitlePage title="Social Media" description="Social Media" />
            <div>
                <SocialChildren lable="Facebook" content={<FormFaceBook />} />
                <SocialChildren lable="Instagram" content={<FormInstagram />} />
                <SocialChildren lable="LinkedIn" content={<FormLinkedIn />} />
            </div>
        </div>
    );
}

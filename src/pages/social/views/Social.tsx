import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Social.module.scss";
import SocialChildren from "../components/SocialChildren";
import { ImgAVT } from "@/assets/imgs";

export function Social() {
    const handleButtonClick = (url: string) => {
        window.open(url, "_blank");
    };

    function FormFaceBook() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={ImgAVT} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.facebook.com/duy.kelvinward",
                            )
                        }
                    >
                        See more
                    </button>
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
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.instagram.com/kelvinward101/",
                            )
                        }
                    >
                        See more
                    </button>
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
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.linkedin.com/in/dao-van-duy-29a10928b/",
                            )
                        }
                    >
                        See more
                    </button>
                </div>
            </div>
        );
    }

    function FormTikTok() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={ImgAVT} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.tiktok.com/@kelvin.ward",
                            )
                        }
                    >
                        See more
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <TitlePage title="Social Media" description="My social media" />
            <div>
                <SocialChildren lable="Facebook" content={<FormFaceBook />} />
                <SocialChildren lable="Instagram" content={<FormInstagram />} />
                <SocialChildren lable="TikTok" content={<FormTikTok />} />
                <SocialChildren lable="LinkedIn" content={<FormLinkedIn />} />
            </div>
        </div>
    );
}

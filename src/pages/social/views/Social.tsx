import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Social.module.scss";
import SocialChildren from "../components/SocialChildren";
import {
    imgLinkedIn,
    imgMyFacebook,
    imgMyInstagram,
    imgMyTiktok,
} from "@/assets/imgs/socials";
import CopyLinkButton from "@/components/copylinkbutton/CopyLinkButton";

export function Social() {
    const handleButtonClick = (url: string) => {
        window.open(url, "_blank");
    };

    function FormFaceBook() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={imgMyFacebook} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.facebook.com/duy.kelvinward",
                            )
                        }
                    >
                        Open in a new tab
                    </button>
                    <CopyLinkButton link="https://www.facebook.com/duy.kelvinward" />
                </div>
            </div>
        );
    }

    function FormInstagram() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={imgMyInstagram} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.instagram.com/kelvinward101/",
                            )
                        }
                    >
                        Open in a new tab
                    </button>
                    <CopyLinkButton link="https://www.instagram.com/kelvinward101/" />
                </div>
            </div>
        );
    }

    function FormLinkedIn() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={imgLinkedIn} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.linkedin.com/in/dao-van-duy-29a10928b/",
                            )
                        }
                    >
                        Open in a new tab
                    </button>
                    <CopyLinkButton link="https://www.linkedin.com/in/dao-van-duy-29a10928b/" />
                </div>
            </div>
        );
    }

    function FormTikTok() {
        return (
            <div className={styles.socialContainer}>
                <div className={styles.imgSocial}>
                    <img src={imgMyTiktok} alt="img-logo" />
                </div>
                <div className={styles.moreSocial}>
                    <button
                        onClick={() =>
                            handleButtonClick(
                                "https://www.tiktok.com/@kelvin.ward",
                            )
                        }
                    >
                        Open in a new tab
                    </button>
                    <CopyLinkButton link="https://www.tiktok.com/@kelvin.ward" />
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

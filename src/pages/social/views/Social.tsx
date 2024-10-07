import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Social.module.scss";
import SocialChildren from "../components/SocialChildren";

export function Social() {
    return (
        <div className={styles.container}>
            <TitlePage title="Social Media" description="Social Media" />
            <div>
                <SocialChildren lable="Facebook" content="okkk" />
                <SocialChildren lable="Instagram" content="okkk" />
                <SocialChildren lable="LinkedIn" content="okkk" />
            </div>
        </div>
    );
}

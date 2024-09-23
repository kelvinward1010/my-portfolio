import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./About.module.scss";
import { ImgAVT } from "@/assets/imgs";

export function About() {
    return (
        <div className={styles.container}>
            <TitlePage title="About" description="Introduce myself" />
            <div className={styles.top}>
                <img className={styles.imgavt} src={ImgAVT} alt="avt" />
                <p className="text-normal">I'm a web developer</p>
            </div>
        </div>
    );
}

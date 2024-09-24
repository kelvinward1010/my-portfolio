import { IconCopyright } from "@tabler/icons-react";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <p className={`${styles.text} text-normal`}>
                <IconCopyright /> All right reserved by Tyler Locke
            </p>
        </div>
    );
}

export default Footer;

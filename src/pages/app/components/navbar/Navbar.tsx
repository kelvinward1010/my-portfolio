import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { contactUrl, homeUrl } from "@/routes/urls";

export function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <p onClick={() => navigate(homeUrl)}>Home</p>
                <p onClick={() => navigate(contactUrl)}>Contact</p>
            </div>
        </div>
    );
}

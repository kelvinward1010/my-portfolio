import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Outlet />
                {children}
            </div>
        </div>
    );
}

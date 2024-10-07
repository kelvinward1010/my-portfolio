import { useState } from "react";
import styles from "./SocialChildren.module.scss";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";

interface SocialChildrenProps {
    lable?: string;
    content?: string | React.ReactNode;
}

function SocialChildren({ lable, content }: SocialChildrenProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container}>
            {lable && (
                <div onClick={toggle} className={`${styles.lablemain}`}>
                    <h1>{lable}</h1>
                    {isOpen ? <IconCaretDownFilled /> : <IconCaretUpFilled />}
                </div>
            )}
            {isOpen ? (
                <div
                    className={`${styles.contentmain} ${isOpen ? styles.open : ""}`}
                >
                    {content}
                </div>
            ) : null}
        </div>
    );
}

export default SocialChildren;

import { useState } from "react";
import styles from "./SocialChildren.module.scss";
import { motion } from "framer-motion";
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
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ height: { duration: 1 } }}
                    className={styles.contentmain}
                >
                    {content}
                </motion.div>
            ) : null}
        </div>
    );
}

export default SocialChildren;

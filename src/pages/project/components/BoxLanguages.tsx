import { getColorByLanguage } from "@/utils/color";
import styles from "./BoxLanguages.module.scss";

interface BoxLanguagesProps {
    title: string;
}

function BoxLanguages({ title }: BoxLanguagesProps) {
    const tranfer = getColorByLanguage(title);

    return (
        <div className={`${styles.container} ${tranfer?.color}`}>
            {tranfer?.icon}
            <p className="text-normal">{title}</p>
        </div>
    );
}

export default BoxLanguages;

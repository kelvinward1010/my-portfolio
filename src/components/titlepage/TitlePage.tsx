import styles from "./TitlePage.module.scss";

interface TitlePageProps {
    title: string;
    description?: string;
}

function TitlePage({ title, description }: TitlePageProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.titlemain}>{title}</h1>
            <p className={styles.descriptionmain}>{description}</p>
        </div>
    );
}

export default TitlePage;

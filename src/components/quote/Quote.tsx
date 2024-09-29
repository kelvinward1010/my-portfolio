import styles from "./Quote.module.scss";

interface QuoteProps {
    label?: string;
    author?: string;
    chiildren?: React.ReactNode;
}

function Quote({ label, author, chiildren }: QuoteProps) {
    return (
        <div className={styles.container}>
            {label && author && (
                <div className={styles.boxquotenormal}>
                    <p className="text-normal">{label}</p>
                    <span>--- {author} ---</span>
                </div>
            )}
            {chiildren}
        </div>
    );
}

export default Quote;

import styles from "./Quote.module.scss";

interface QuoteProps {
    label?: string[];
    author?: string;
    chiildren?: React.ReactNode;
}

function Quote({ label, author, chiildren }: QuoteProps) {
    return (
        <div className={styles.container}>
            {label && author && (
                <div className={styles.boxquotenormal}>
                    {label?.map((i, idx) => (
                        <p key={idx} className="text-normal">
                            {i}
                        </p>
                    ))}
                    <span>--- {author} ---</span>
                </div>
            )}
            {chiildren}
        </div>
    );
}

export default Quote;

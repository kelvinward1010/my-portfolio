import React from "react";
import styles from "./TimelineItem.module.scss";

interface TimelineItemProps {
    title: string;
    description?: string;
    descriptionComponent?: React.ReactNode;
    time: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    descriptionComponent,
    time,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.time}>
                <strong className="text-normal">{time}</strong>
            </div>
            <div className={styles.content}>
                <h3 className="text-normal">{title}</h3>
                {description && <p className="text-normal">{description}</p>}
                {descriptionComponent}
            </div>
        </div>
    );
};

export default TimelineItem;

import React from "react";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.scss";

interface TimelineProps {
    items: {
        title: string;
        description?: string;
        descriptionComponent?: React.ReactNode;
        time: string;
    }[];
    lable?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, lable }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.lablemain}>{lable}</h1>
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    descriptionComponent={item.descriptionComponent}
                    time={item.time}
                />
            ))}
        </div>
    );
};

export default Timeline;

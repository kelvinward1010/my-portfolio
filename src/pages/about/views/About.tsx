import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./About.module.scss";
import { ImgAVT } from "@/assets/imgs";
import Quote from "@/components/quote/Quote";
import { splitSentences } from "@/utils/string";
import Timeline from "@/components/timeline/Timeline";

export function About() {
    const timelineItems = [
        {
            title: "AI Academy company",
            description: "Internship React",
            time: "07/2022-07/2023",
        },
        {
            title: "Powergate Australia Company",
            description: "Internship React",
            time: "02/2024-06/2024",
        },
    ];

    return (
        <div className={styles.container}>
            <TitlePage title="About" description="Introduce myself" />
            <div className={styles.top}>
                <img className={styles.imgavt} src={ImgAVT} alt="avt" />
                <p className="text-normal">Tyler Locke</p>
                <p className="text-normal">I'm a web developer</p>
            </div>
            <br />
            <p className="text-normal">
                Hello, my name is Tyler Locke. I am a student at Vietnam
                National University of Agriculture, Faculty of Information
                Technology. I aim to become a FullStack programmer in the
                future.
            </p>
            <Quote
                author="Ho Chi Minh"
                label={splitSentences(
                    "Không có việc gì khó/ Chỉ sợ lòng không bền/ Đào núi và lấp biển/ Quyết chí ắt làm nên",
                )}
            />
            <br />
            <p className="text-normal">
                I was born and raised in my beloved hometown of Hai Duong until
                I was 17 years old when I moved to Hanoi to study at university.
                I am currently living in Hanoi to work and study. My hobbies are
                watching movies, playing games, coding, traveling, and cooking.
                I like to spend time learning English, and coding is the main
                thing. I like to talk and share different stories with others. I
                don't like to drink a lot of alcohol because it is harmful to
                the body; especially don't use stimulants.
            </p>
            <div className={styles.exps}>
                <Timeline lable="My experience" items={timelineItems} />
            </div>
        </div>
    );
}

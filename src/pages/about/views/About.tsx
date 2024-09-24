import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./About.module.scss";
import { ImgAVT } from "@/assets/imgs";

export function About() {
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
        </div>
    );
}

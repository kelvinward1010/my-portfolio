import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Contact.module.scss";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        content: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeTextArea = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.container}>
            <TitlePage title="Contact" description="Please send contact me" />
            <div className={styles.center}>
                <div className={styles.forminput}>
                    <h2 className="text-normal">Name</h2>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </div>
                <div className={styles.forminput}>
                    <h2 className="text-normal">Email</h2>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className={styles.forminput}>
                    <h2 className="text-normal">Content</h2>
                    <textarea
                        name="content"
                        rows={5}
                        value={formData.content}
                        onChange={handleChangeTextArea}
                        placeholder="Content"
                    />
                </div>
                <button>Submit</button>
            </div>
        </div>
    );
}

import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Project.module.scss";
import ProjectCpt from "../components/projectCpt/ProjectCpt";
import { useState } from "react";

export function Project() {
    const [formData, setFormData] = useState({
        search: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.container}>
            <TitlePage
                title="Project"
                description="Projects that I research and complete independently"
            />
            <div className={styles.forminput}>
                <h2 className="text-normal">Search repositoties Github</h2>
                <p className="text-normal">
                    All public projects you can refer to
                </p>
                <input
                    type="text"
                    name="search"
                    value={formData.search}
                    onChange={handleChange}
                    placeholder="Search repositoties..."
                />
            </div>
            <div>
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
            </div>
        </div>
    );
}

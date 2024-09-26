import TitlePage from "@/components/titlepage/TitlePage";
import styles from "./Project.module.scss";
import ProjectCpt from "../components/projectCpt/ProjectCpt";

export function Project() {
    return (
        <div className={styles.container}>
            <TitlePage
                title="Project"
                description="Projects that I research and complete independently"
            />
            <div>
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
                <ProjectCpt />
            </div>
        </div>
    );
}

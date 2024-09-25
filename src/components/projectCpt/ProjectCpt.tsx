import styles from "./ProjectCpt.module.scss";

function ProjectCpt() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} text-normal`}>Project Title</h1>
            <p className="text-normal">This is a description project</p>
            <div className={styles.technical}>
                <h5 className={"text-normal"}>Technical </h5>
                <div className={styles.containtechnical}>
                    <p className={"text-normal"}>Languages:</p>
                    <p className={"text-normal"}>Libraries:</p>
                    <p className={"text-normal"}>Framework:</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCpt;

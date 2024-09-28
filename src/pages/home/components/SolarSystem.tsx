import { SunPlanet } from "@/assets/imgs/solarsystem";
import styles from "./SolarSystem.module.scss";
import useThemeMode from "@/hooks/useThemeMode";

function SolarSystem() {
    const { isDarkMode } = useThemeMode();
    const classDarkthemePlanet = isDarkMode ? "" : `${styles.darkPlanet}`;
    return (
        <div className={styles.container}>
            <div className={styles.sun}>
                <img src={SunPlanet} alt="sun" />
            </div>
            <div className={`${styles.mercury} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.venus} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.earth} ${classDarkthemePlanet}`}>
                <div className={`${styles.moon} ${classDarkthemePlanet}`}></div>
            </div>
            <div className={`${styles.mars} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.jupiter} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.saturn} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.uranus} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.neptune} ${classDarkthemePlanet}`}></div>
            <div className={`${styles.pluto} ${classDarkthemePlanet}`}></div>
        </div>
    );
}

export default SolarSystem;

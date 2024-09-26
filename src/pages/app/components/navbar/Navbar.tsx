import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import {
    aboutUrl,
    contactUrl,
    imagesUrl,
    layoutUrl,
    projectUrl,
    travelUrl,
} from "@/routes/urls";
import {
    IconBrandDeviantart,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconContract,
    IconHome,
    IconMoonFilled,
    IconPhoto,
    IconPlaneTilt,
    IconSun,
    IconUserCircle,
} from "@tabler/icons-react";
import Tooltip from "@/components/tooltip/Tooltip";

const MENUS = [
    {
        key: 1,
        icon: <IconHome />,
        url: layoutUrl,
        text: "Home",
    },
    {
        key: 2,
        icon: <IconUserCircle />,
        url: aboutUrl,
        label: "About",
        text: "About",
    },
    {
        key: 3,
        icon: <IconBrandDeviantart />,
        url: projectUrl,
        label: "Project",
        text: "Project",
    },
    {
        key: 4,
        icon: <IconPhoto />,
        url: imagesUrl,
        label: "Images",
        text: "Images",
    },
    {
        key: 5,
        icon: <IconPlaneTilt />,
        url: travelUrl,
        label: "Travel",
        text: "Travel",
    },
    {
        key: 6,
        icon: <IconBrandFacebook />,
        url: "https://www.facebook.com/duy.kelvinward",
        text: "Facebook",
    },
    {
        key: 7,
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/kelvinward101/",
        text: "Instagram",
    },
    {
        key: 8,
        icon: <IconBrandGithub />,
        url: "https://github.com/kelvinward1010",
        text: "Github",
    },
    {
        key: 9,
        icon: <IconBrandYoutube />,
        url: "https://www.youtube.com/@wardkelvin",
        text: "YouTube",
    },
    {
        key: 10,
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/dao-van-duy-29a10928b/",
        text: "LinkedIn",
    },
    {
        key: 11,
        icon: <IconContract />,
        url: contactUrl,
        label: "Contact",
        text: "Contact",
    },
];

interface NavbarProps {
    isDarkMode?: boolean;
    toggleTheme?: () => void;
}

export function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
    return (
        <div className={styles.container}>
            {MENUS.map((menu) => {
                return (
                    <FormButtonMenu
                        label={menu.label}
                        key={menu.key}
                        url={menu.url}
                        icon={menu.icon}
                        text={menu.text}
                    />
                );
            })}
            <button className={styles.formbuttonmenu} onClick={toggleTheme}>
                {isDarkMode ? <IconMoonFilled /> : <IconSun />}
            </button>
        </div>
    );
}

interface FormButtonMenuProps {
    label?: string;
    icon?: any;
    url: string;
    text?: string;
}

function FormButtonMenu({ label, icon, url, text }: FormButtonMenuProps) {
    const navigate = useNavigate();
    const isExternalLink =
        url.startsWith("http://") || url.startsWith("https://");

    const handleButtonClick = () => {
        if (isExternalLink) {
            window.open(url, "_blank");
        } else if (!isExternalLink && label) {
            navigate(url);
            document.title = `${label} | Tyler Locke`;
        } else if (url === layoutUrl) {
            navigate(url);
            document.title = `My Portfolio`;
        }
    };

    return (
        <Tooltip text={text}>
            <button
                onClick={handleButtonClick}
                className={styles.formbuttonmenu}
            >
                {icon}
            </button>
        </Tooltip>
    );
}

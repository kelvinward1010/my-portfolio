import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { aboutUrl, contactUrl, layoutUrl, projectUrl } from "@/routes/urls";
import {
    IconBrandDeviantart,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconContract,
    IconHome,
    IconUserCircle,
} from "@tabler/icons-react";
import Tooltip from "@/components/tooltip/ToolTip";

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
        icon: <IconBrandFacebook />,
        url: "https://www.facebook.com/duy.kelvinward",
        text: "Facebook",
    },
    {
        key: 5,
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/kelvinward101/",
        text: "Instagram",
    },
    {
        key: 6,
        icon: <IconBrandGithub />,
        url: "https://github.com/kelvinward1010",
        text: "Github",
    },
    {
        key: 7,
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/dao-van-duy-29a10928b/",
        text: "Linkedin",
    },
    {
        key: 8,
        icon: <IconContract />,
        url: contactUrl,
        label: "Contact",
        text: "Contact",
    },
];

export function Navbar() {
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

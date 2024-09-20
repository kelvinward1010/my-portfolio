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

const MENUS = [
    {
        key: 1,
        icon: <IconHome />,
        url: layoutUrl,
    },
    {
        key: 2,
        icon: <IconUserCircle />,
        url: aboutUrl,
        label: "About",
    },
    {
        key: 3,
        icon: <IconBrandDeviantart />,
        url: projectUrl,
        label: "Project",
    },
    {
        key: 4,
        icon: <IconBrandFacebook />,
        url: "https://www.facebook.com/duy.kelvinward",
    },
    {
        key: 5,
        icon: <IconBrandInstagram />,
        url: "https://www.facebook.com/duy.kelvinward",
    },
    {
        key: 6,
        icon: <IconBrandGithub />,
        url: "https://github.com/kelvinward1010",
    },
    {
        key: 7,
        icon: <IconBrandLinkedin />,
        url: "www.linkedin.com/in/dao-van-duy-29a10928b",
    },
    {
        key: 8,
        icon: <IconContract />,
        url: contactUrl,
        label: "Contact",
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
}

function FormButtonMenu({ label, icon, url }: FormButtonMenuProps) {
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
        <button onClick={handleButtonClick} className={styles.formbuttonmenu}>
            {icon}
        </button>
    );
}

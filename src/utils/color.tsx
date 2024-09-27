import {
    IconBrandJavascript,
    IconBrandPython,
    IconBrandTypescript,
} from "@tabler/icons-react";

export function getColorByLanguage(language: string) {
    if (language === "JavaScript") {
        return {
            color: "boxlanguages-yellow",
            icon: <IconBrandJavascript />,
        };
    } else if (language === "TypeScript") {
        return {
            color: "boxlanguages-blue",
            icon: <IconBrandTypescript />,
        };
    } else if (language === "Python") {
        return {
            color: "boxlanguages-teal",
            icon: <IconBrandPython />,
        };
    }
}

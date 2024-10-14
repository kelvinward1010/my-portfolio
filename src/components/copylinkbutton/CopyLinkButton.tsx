import React, { useState } from "react";
import styles from "./CopyLinkButton.module.scss";
import { IconLink } from "@tabler/icons-react";

interface CopyLinkButtonProps {
    link: string;
    classNameConfig?: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({
    link,
    classNameConfig,
}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <button
            className={`${styles.buttoncopylink} ${classNameConfig}`}
            onClick={copyToClipboard}
        >
            <IconLink size={15} />
            <p>{isCopied ? "Link Copied!" : "Copy Link"}</p>
        </button>
    );
};

export default CopyLinkButton;

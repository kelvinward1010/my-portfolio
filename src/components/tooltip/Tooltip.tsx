import React, { useState } from "react";
import "./Tooltip.css";

interface ToolTipProps {
    children: React.ReactNode;
    text?: string;
}
function Tooltip({ children, text }: ToolTipProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {isHovered && <div className="tooltip">{text}</div>}
        </div>
    );
}

export default Tooltip;

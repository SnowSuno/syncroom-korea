import React, {ReactNode} from "react";
import "./style.scss";

interface TabCardProps {
    title?: string;
    tag?: string
    children?: ReactNode;
}

function TabCard({title, tag, children}: TabCardProps) {

    return (
        <div className="TabCard">
            <div className="tag">{tag}</div>
            <div className="title">{title}</div>
            {children}
        </div>
    )
}

export default TabCard;

import React, {ReactNode} from "react";
import "./style.scss";

interface TabCardProps {
    children?: ReactNode;
}

function TabCard({children}: TabCardProps) {

    return (
        <div className="TabCard">
            {children}
        </div>
    )
}

export default TabCard;

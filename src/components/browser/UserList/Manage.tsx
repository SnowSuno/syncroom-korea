import React, {useState} from "react";



function Manage() {
    const [isManageMode, setManageMode] = useState<boolean>(false);

    return (
        <div className="Manage">
            관리
        </div>
    );
}

export default Manage;

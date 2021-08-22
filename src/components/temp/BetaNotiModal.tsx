// entry point : src\
//

import React, {useState} from "react";


function BetaNotiModal() {
    const [open, setOpen] = useState<boolean>(true);

    return (
        open
            ? <div id="beta-noti-modal">
                <div className="overlay" onClick={() => setOpen(false)}/>
                <div className="temp-modal">

                </div>
            </div>
            : <></>
    );
}

export default BetaNotiModal;

import React from "react";
import "./style.css";

function RoomHeader({ room_name, need_passwd, num_members, country, color }) {


    return (
        <div className="room-header" style={{background: color}}>
            <span className="country">{country}</span>
            <span className="room-name">{room_name}</span>
        </div>
    )
}

export default RoomHeader;

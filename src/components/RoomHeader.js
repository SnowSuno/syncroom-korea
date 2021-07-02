import React from "react";
import "./RoomHeader.css";

function RoomHeader({ room_name, need_passwd, num_members, country }) {
    const color = need_passwd
        ? (num_members === 5) ? '#4B4B4B' : '#000000'
        : (num_members === 5) ? '#7680A2' : '#132F92';

    return (
        <div className="room-header" style={{background: color}}>
            <span className="country">{country}</span>
            <span className="room-name">{room_name}</span>
        </div>
    )
}

export default RoomHeader;

import React from "react";
import PropTypes from "prop-types";
import makeJoinURI from "../util/makeURI"

function Room(room) {
    const joinURI = makeJoinURI(room.room_name, "", 4, 2);
    if (room.room_name === '1324') {
        console.log(joinURI);
    }


    return (
        <div style={{borderColor: 'red', borderStyle: 'solid', borderWidth: '1px'}}>
            <h1>{room.room_name}</h1>
            <h3>{room.room_desc}</h3>
            <ul>
                {room.members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <a href={joinURI}>입장</a>
        </div>

    )
}


Room.propTypes = {
    create_time: PropTypes.string.isRequired,
    creator_icon: PropTypes.shape({
        icon: PropTypes.string,
        iconurl: PropTypes.string
    }).isRequired,
    creator_mid: PropTypes.string.isRequired,
    creator_nick: PropTypes.string.isRequired,
    iconlist: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        iconurl: PropTypes.string.isRequired
    })).isRequired,
    index: PropTypes.number.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
    need_passwd: PropTypes.bool.isRequired,
    num_members: PropTypes.number.isRequired,
    room_desc: PropTypes.string,
    room_name: PropTypes.string.isRequired,
}

export default Room;

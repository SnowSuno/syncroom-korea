import React from "react";
import PropTypes from "prop-types";


class Room extends React.Component {

}


Room.propTypes = {
    name: PropTypes.string.isRequired,
    creator_mid: PropTypes.number.isRequired,
    creator_nick: PropTypes.number.isRequired,
    num_members: PropTypes.number.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
    create_time: PropTypes.string.isRequired,
    need_passwd: PropTypes.bool.isRequired,

    index: PropTypes.number.isRequired,

}


export default Room;

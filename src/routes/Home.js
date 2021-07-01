import React from "react";
import "./Home.css";

import useRooms from "../api/useRooms";
import Room from "../components/Room";

function Home() {
    const { rooms, loading, error, fetchRooms } = useRooms();

    if (!loading) {
        if (!error) {
            console.log(rooms)
        } else {
            // console.error(error);
        }
    }

    // const { rooms } = data;
    // console.log(rooms)

    return (
        <div>
            <div className='header'>
                This is a 야무진 header
            </div>
            <button onClick={fetchRooms}>reload</button>
            {loading ? ' Loading...' : ''}
            <div className='room-container'>
                {rooms.map((room, index) => <Room key={index} {...room}/>)}
            </div>
        </div>
    )
}


export default Home;

import React from "react";
import './App.css';

import useRooms from "./api/useRooms";
import Room from "./components/Room";

function App() {
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
            <button onClick={fetchRooms}>reload</button>
            <div>
                {rooms.map(room => <Room {...room}/>)}
            </div>
        </div>
    )
}


export default App;

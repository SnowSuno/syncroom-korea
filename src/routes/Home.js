import React, {useEffect, useRef} from "react";
import "./Home.css";

import useRooms from "../api/useRooms";
import Room from "../components/Room";


function useResize() {
    const element = useRef();

    const resetColumns = () => {
        console.log(element.current);
    }

    useEffect(() => {
        resetColumns();
    }, []);

    return {ref: element, onresize: resetColumns}
}

function Home() {
    const { rooms, loading, error, fetchRooms } = useRooms();

    if (!loading) {
        if (!error) {
            // console.log(rooms)
        } else {
            // console.error(error);
        }
    }

    // const { rooms } = data;
    // console.log(rooms)


    // const body = useRef();
    // setTimeout(() => console.log(body.current), 300);


    const body = useResize();

    return (
        <div>
            <div className='header'>
                This is a 야무진 header
            </div>
            <button onClick={fetchRooms}>reload</button>
            {loading ? ' Loading...' : ''}
            <br/>
            {/*<div className='body' {...body}>*/}
            {/*</div>*/}
            <div className='room-container'>
                {rooms.map((room, index) => <Room key={index} {...room}/>)}
            </div>
        </div>
    )
}


export default Home;

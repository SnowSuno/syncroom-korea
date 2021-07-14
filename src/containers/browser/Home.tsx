import React from 'react';
import './Home.css';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";
import {getRoomsThunk} from "../../modules/syncroom";



function Home() {
    const {data, loading, error} = useSelector((state: RootState) => state.syncroom.rooms);
    const dispatch = useDispatch();

    const getRooms = () => {
        dispatch(getRoomsThunk());
        console.log(data);
    }

    return (
        <>
            <button onClick={getRooms}>load</button>
        </>
    );
}

export default Home;

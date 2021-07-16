import React from 'react';
import './Home.css';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";
import {getRoomsThunk} from "../../modules/syncroom";

import Header from "../../components/browser/Header/";
import RoomGrid from "../../components/browser/RoomGrid";


function Home() {
    const {data, loading, error} = useSelector((state: RootState) => state.syncroom.rooms);
    const dispatch = useDispatch();

    const getRooms = () => {
        dispatch(getRoomsThunk());
        console.log(data);
    }

    return (
        <>
            <Header />
            <button onClick={getRooms}>load</button>
            <RoomGrid rooms={data}/>
        </>
    );
}

export default Home;

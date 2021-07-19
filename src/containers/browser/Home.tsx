import React, {useEffect} from 'react';
import './Home.css';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";

import Header from "../../components/browser/Header/";
import RoomGrid from "../../components/browser/RoomGrid";
import Footer from "../../components/browser/Footer";

import {getRoomsThunk} from "../../modules/syncroom";

function Home() {
    const {data, error} = useSelector((state: RootState) => state.syncroom.rooms);

    const dispatch = useDispatch();
    useEffect(() => {
        const getRooms = () => {
            dispatch(getRoomsThunk());
            setTimeout(getRooms, 5000);
        };
        getRooms();
    }, [dispatch]);

    if (error) {console.log(error);}

    return (
        <>
            <Header />
            <RoomGrid rooms={data}/>
            <Footer />
        </>
    );
}

export default Home;

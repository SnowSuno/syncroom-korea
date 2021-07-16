import React from 'react';
import './Home.css';

import {useSelector} from "react-redux";
import {RootState} from "../../modules";

import Header from "../../components/browser/Header/";
import RoomGrid from "../../components/browser/RoomGrid";
import Footer from "../../components/browser/Footer";


function Home() {
    const {data, loading, error} = useSelector((state: RootState) => state.syncroom.rooms);

    return (
        <>
            <Header />
            {/*<button onClick={getRooms}>load</button>*/}
            <RoomGrid rooms={data}/>
            <Footer />
        </>
    );
}

export default Home;

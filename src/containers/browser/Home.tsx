import React, {useEffect} from 'react';
import './Home.css';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";

import Header from "../../components/browser/Header/";
import RoomGrid from "../../components/browser/RoomGrid";
import Footer from "../../components/browser/Footer";

import {getRoomsThunk} from "../../modules/syncroom";

import {roomFilter} from "../../common/util/roomFilter";

// temp
import BetaNotiModal from "../../components/temp/BetaNotiModal";

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

    const {search, country, inst, status} = useSelector(
        (state: RootState) => state.filter);

    const visibleData = data.filter(
        roomFilter(search, country, inst, status)
    );

    return (
        <>
            <Header />
            <RoomGrid rooms={visibleData}/>
            <Footer />

            {/*temp*/}
            <BetaNotiModal />
        </>
    );
}

export default Home;

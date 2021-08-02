import React, {useEffect} from 'react';
import './Home.css';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";

import Header from "../../components/browser/Header/";
import RoomGrid from "../../components/browser/RoomGrid";
import Footer from "../../components/browser/Footer";

import {getRoomsThunk} from "../../modules/syncroom";

import Room from "../../common/classes/Room";
import {Member} from "../../common/classes/Member";

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

    const roomFilter = (room: Room) => {
        if (!room.name.includes(search)
            && room.members.filter(
                (member: Member) => member.nickname.includes(search)
            ).length === 0) return false;
        if (country && room.country !== country) return false;
        if (inst && room.members.filter(
            (member: Member) => member.inst === inst
        ).length !== 0) return false;
        return !(status && room.status !== status);
    };

    const visibleData = data.filter(roomFilter);

    return (
        <>
            <Header />
            <RoomGrid rooms={visibleData}/>
            <Footer />
        </>
    );
}

export default Home;

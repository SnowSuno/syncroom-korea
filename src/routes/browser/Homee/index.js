import React, {useEffect} from "react";
import "./style.css";

import {useDispatch, useSelector} from "react-redux";
import {getRooms} from "../../../modules/rooms";

import useRoomData from "../../../common/hooks/useRoomData";

import Header from "../../../components/Header";
import Room from "../../../components/Room";
import Footer from "../../../components/Footer";

import useModal from "../../../components/modals/useModal";
import Modal from "../../../components/modals/Modal";



function Home() {
    // redux testing
    const {data} = useSelector(state => ({
        data: state.rooms.data
    }));

    const dispatch = useDispatch();
    const reload = () => dispatch(getRooms());

    useEffect(() => {
        reload();
        console.log(data);
    }, []);

    // const { roomData, loading, error, fetchRooms } = useRoomData();

    const [open, openModal, closeModal] = useModal();

    // if (!loading) {
    //     if (!error) {
    //         // console.log(rooms)
    //     } else {
    //         // console.error(error);
    //     }
    // }


    return (
        <div>
            <Header />
            {/*<Title />*/}
            {/*<Toolbar {...{fetchRooms, loading}}/>*/}
            <button onClick={reload}>reload</button>
            <div className='room-container'>
                {data.map((room, index) => <Room key={index} {...room}/>)}
                {/*{Array(2).fill(<div style={{width: '388px'}}/>)}*/}
            </div>

            <Modal open={open} closeModal={closeModal} header="qwerqwer">
                this is a modal
            </Modal>
            <button onClick={openModal}>open</button>

            <Footer />

        </div>
    )
}


export default Home;

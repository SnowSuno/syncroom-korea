import React from "react";
import "./Home.css";

import useRoomData from "../hooks/useRoomData";

import Header from "../components/Header";
import Room from "../components/Room/";

import useModal from "../components/modals/useModal";
import Modal from "../components/modals/Modal";



function Home() {
    const { roomData, loading, error, fetchRooms } = useRoomData();

    const [open, openModal, closeModal] = useModal();

    if (!loading) {
        if (!error) {
            // console.log(rooms)
        } else {
            // console.error(error);
        }
    }


    return (
        <div>
            <Header />
            {/*<Title />*/}
            {/*<Toolbar {...{fetchRooms, loading}}/>*/}
            <div className='room-container'>
                {roomData.map((room, index) => <Room key={index} {...room}/>)}
                {/*{Array(2).fill(<div style={{width: '388px'}}/>)}*/}
            </div>

            <Modal open={open} closeModal={closeModal} header="qwerqwer">
                this is a modal
            </Modal>
            <button onClick={openModal}>open</button>

        </div>
    )
}


export default Home;

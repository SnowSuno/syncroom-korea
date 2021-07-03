import React, {useEffect, useRef} from "react";
import "./Home.css";

import useRoomData from "../hooks/useRoomData";
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
            <div className='header'>
                이 부분은 야무진 헤더가 될 예정입니다 ㅎㅎ
            </div>
            <button onClick={fetchRooms}>reload</button>
            {loading ? ' Loading...' : ''}
            <br/>
            <div style={{height: '80px'}}>
                검색기능이랑 필터기능 들어갈 자리입니다
            </div>
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

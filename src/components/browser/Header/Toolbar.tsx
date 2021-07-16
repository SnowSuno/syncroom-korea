import React from "react";
import "./style.css"

import {getRoomsThunk} from "../../../modules/syncroom";
import {useDispatch} from "react-redux";


function Toolbar() {
    const dispatch = useDispatch();

    const getRooms = () => {
        dispatch(getRoomsThunk());
    }
    return (
        <div className="toolbar">
            <div className='search tool' />
            <div className='country-filter tool' />
            <div className='session-filter tool' />
            <div className='public-filter tool' />
            <button className='refresh tool' onClick={getRooms}/>
        </div>
    )
}

export default Toolbar;
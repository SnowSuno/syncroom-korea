import React from "react";
import "./style.css"

import {getRoomsThunk} from "../../../modules/syncroom";
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as Refresh} from "../../../resource/img/graphics/reload.svg";
import {RootState} from "../../../modules";

function Toolbar() {
    const {loading} = useSelector((state: RootState) => state.syncroom.rooms);
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
            <button className='refresh tool' onClick={getRooms}>
                <Refresh height={20} width={20} className={loading ? 'rotate' : ''}/>
            </button>
        </div>
    )
}

export default Toolbar;
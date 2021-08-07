import React, {useEffect, useState} from "react";
import "./style.css"

import {getRoomsThunk} from "../../../modules/syncroom";
import {useDispatch, useSelector} from "react-redux";

import {ReactComponent as Refresh} from "../../../resource/img/graphics/reload.svg";
import {RootState} from "../../../modules";

import Filter from "../Filter";

function Toolbar() {
    const {loading} = useSelector((state: RootState) => state.syncroom.rooms);
    const dispatch = useDispatch();

    const [rotate, setRotate] = useState('');
    useEffect(() => {
        if (loading) setRotate('rotate');
    }, [loading]);
    const stopRotate = () => {
        if (!loading) setRotate('');
    };

    const getRooms = () => {
        dispatch(getRoomsThunk());
    };
    return (
        <div className="toolbar">
            {/*<div className='search tool' />*/}
            {/*<div className='country-filter tool' />*/}
            {/*<div className='session-filter tool' />*/}
            {/*<div className='public-filter tool' />*/}
            <Filter />
            <button className='refresh tool' onClick={getRooms}>
                <Refresh
                    height={20} width={20}
                    className={rotate}
                    onAnimationIteration={stopRotate}
                />
            </button>
        </div>
    )
}

export default Toolbar;
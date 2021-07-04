import React from "react";
import "./style.css"


import useScroll from "../../hooks/useScroll";
import scrollTransition from "../../hooks/scrollTransition";

function Toolbar({fetchRooms, loading}) {
    const scroll = 5.8;

    const y = useScroll();
    const paddingLeft = scrollTransition(0, scroll, 20, 30, y);
    const paddingRight = scrollTransition(0, scroll, 20, 10, y);

    return (
        <div className="toolbar" style={{paddingLeft: `${paddingLeft}%`, paddingRight: `${paddingRight}%`}}>
            {/*<button onClick={fetchRooms}>reload</button>*/}
            {/*{loading ? ' Loading...' : ''}*/}
            {/*<br/>*/}
            {/*검색기능이랑 필터기능 들어갈 자리입니다*/}

            <div className='search tool' />
            <div className='country-filter tool' />
            <div className='public-filter tool' />
            <div className='session-filter tool' />
            <div className='refresh tool' />

        </div>
    )
}

export default Toolbar;
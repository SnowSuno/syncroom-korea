import React from "react";
import "./style.css"


function Toolbar({fetchRooms, loading}) {
    return (
        <div className="toolbar">
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
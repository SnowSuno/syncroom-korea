import React from "react";
import "./style.css"

function Toolbar({fetchRooms, loading}) {
    return (
        <div style={{height: '80px'}}>
            <button onClick={fetchRooms}>reload</button>
            {loading ? ' Loading...' : ''}
            <br/>
            검색기능이랑 필터기능 들어갈 자리입니다
        </div>
    )
}

export default Toolbar;
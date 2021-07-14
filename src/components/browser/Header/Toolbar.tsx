import React from "react";
import "./style.css"


function Toolbar() {
    return (
        <div className="toolbar">
            <div className='search tool' />
            <div className='country-filter tool' />
            <div className='session-filter tool' />
            <div className='public-filter tool' />
            <div className='refresh tool' />
        </div>
    )
}

export default Toolbar;
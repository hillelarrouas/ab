import React from 'react'
import './dom.css';

function dom({ sert }) {


    return (
        <div className='cardmove'>
            {sert.map((elm, index) => {
                return <div key={index} className="move">
                    <img src={elm.Poster} />
                    <div className="Title">{elm.Title}</div>
                    <div className="Year">{elm.Year}</div>
                </div>
            })}
        </div>
    )
}

export default dom

import React from 'react'
import './404.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  

function Error() {
    return (
        <>
            <h1 className='h1404'>404</h1>
            <div className="cardlink404"><Link className='link404' to="/"><div className="divink404">חזרה לדף הבית</div></Link></div>
        </>
    );

}
export default Error

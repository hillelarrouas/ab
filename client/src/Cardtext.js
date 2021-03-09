import React, { useState, useEffect } from 'react'
import './Cardtext.css';

let day

function Cardtext() {
    const [dayState, setday] = useState({})

    useEffect(() => {

        const Datetime = new Date().getHours()

        if (Datetime >= 6 && Datetime < 12) {
            day = 'בוקר'
        }
        else if (Datetime >= 12 && Datetime < 18) {
            day = 'צהריים'
        }
        else if (Datetime >= 18 && Datetime < 23) {
            day = 'ערב'
        }
        else if (Datetime >= 23 || Datetime >= 0 && Datetime < 6) {
            day = 'לילה'
        }

        fetch('/getdata', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day
            })
        }).then(r => r.json())
            .then(d => {
                setday(d.deta[0])
            })
    }, [])

    return (
        <div className='cardtext'>
            <div className="text">
                <div className="titeltext">אפיה</div>
                <div className="textbox">{dayState.baking}</div>
            </div>
            <div className="text">
                <div className="titeltext">כשרות</div>
                <div className="textbox">{dayState.cosher}</div>
            </div>
            <div className="text">
                <div className="titeltext">משמרת {day}</div>
                <div className="textbox">{dayState.Tables} שולחנות</div>
            </div>
            <div className="text">
                <div className="titeltext">סה"כ שולחנות</div>
                <div className="textbox">{dayState.Roundsonthetable}</div>
            </div>
        </div>
    )
}

export default Cardtext

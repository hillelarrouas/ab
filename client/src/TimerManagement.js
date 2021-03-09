import React, { useState } from 'react'
import './TimerManagement.css';

function TimerManagement() {
    let [error, setError] = useState('')
    let [height, setheight] = useState(0)
    let [radio, setradio] = useState('')

    function settimer(e) {
        e.preventDefault();

        const timeLength = document.querySelector("#timeLength").value
        const cosher = document.querySelector("#cosher").value
        const Tables = document.querySelector("#Tables").value
        const baking = document.querySelector("#baking").value


        if (radio === '') {
            setError('הזן סוג משמרת לשינויים')
        } else if (timeLength < 1 || timeLength > 18) {
            setError('הזן באורך הטיימר לפחות בין 1 ל 18')
        } else if (cosher.length === 0) {
            setError('הזן כשרות למשמרת')
        } else if (Tables.length === 0) {
            setError('הזן כמות סיבובים למשמרת')
        } else if (baking.length === 0) {
            setError('הזן סוג אפיה למשמרת')
        } else {
            fetch('/savetime', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    timeLength, cosher, Tables, baking, radio
                })
            }).then(res => res.json())
                .then(deta => {
                    console.log(deta)
                    setError(`השינויים למשמרת ${radio} נשמרו בהצלחה`)
                    setTimeout(function () { setError('') }, 3000);
                })
        }
    }

    function Typeradio(e) {
        setheight('auto')
        const Type = e.target.value;
        setradio(Type)
        fetch('/gettyperadio', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Type
            })
        }).then(res => res.json())
            .then(deta => {
                document.querySelector("#timeLength").value = deta.deta[0].timeLength
                document.querySelector("#cosher").value = deta.deta[0].cosher
                document.querySelector("#Tables").value = deta.deta[0].Tables
                document.querySelector("#baking").value = deta.deta[0].baking
            })
    }


    return (
        <div>
            <div className="cardinput">
                <div className="titelcardinput">ניהול טיימר</div>
                <form onSubmit={settimer}>
                    <div className="cardinputradio">
                        <label htmlFor="Morning" className='lebelinputRadio'>בוקר
                <input type="radio" id="Morning" name="Type" value="בוקר" onChange={Typeradio} />
                        </label>
                        <label className='lebelinputRadio' htmlFor="noon">צהריים
                <input type="radio" id="noon" name="Type" value="צהריים" onChange={Typeradio} />
                        </label>
                        <label className='lebelinputRadio' htmlFor="evening">ערב
                <input type="radio" id="evening" name="Type" value="ערב" onChange={Typeradio} />
                        </label>
                        <label className='lebelinputRadio' htmlFor="night">לילה
                <input type="radio" id="night" name="Type" value="לילה" onChange={Typeradio} />
                        </label><br />
                    </div>
                    <div className="hoverflwh" style={{ height: height }}>
                        <div className="rtl">
                            <label className='lebelinputText' htmlFor="timeLength">אורך הטיימר  </label>
                            <input type="number" name='timeLength' id='timeLength' placeholder="הזן בין 1 - 18" min="1" max="18" /><br />

                            <label className='lebelinputText' htmlFor="cosher">כשרות</label>
                            <input type="text" name='cosher' id='cosher' /><br />

                            <label className='lebelinputText' htmlFor="Tables">מס שולחנות  </label>
                            <input type="number" name='Tables' id='Tables' /><br />

                            <label className='lebelinputText' htmlFor="baking">סוג אפיה</label>
                            <input type="text" name='baking' id='baking' /><br />
                        </div>
                        <div className="error">{error}</div>
                        <button className='butoonsubmit' type='submit'>שמור שינויים</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TimerManagement

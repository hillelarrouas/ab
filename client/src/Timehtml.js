import React, { useEffect, useState } from 'react'
import './Timehtml.css';


let timerInterval
let day

function Timehtml({ text }) {

    // let [currentCount, setCount] = useState(1079);
    let [timee, setTimer] = useState()
    let [start, setstart] = useState('התחל')
    let [timetimer, settimetimer] = useState(17.99166666666667)
    let [Rounds, setRounds] = useState({})


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
                setRounds(d.deta[0])
                settimetimer(Number(d.deta[0].timeLength) - 1 + .99166666666667)
                console.log(timetimer)
                setTimer(d.deta[0].timeLength + ':00')
            })
    }, [])



    useEffect(() => {
        let twoMinutes = 60 * timetimer
        if (start == 'הפסק') {

            let timer = twoMinutes, minutes, seconds;
            timerInterval = setInterval(() => {

                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                setTimer(minutes + ":" + seconds)

                if (--timer < 0) {
                    clearInterval(timerInterval);
                }
                console.log('gg')
            }, 1000);

        } else {
            clearInterval(timerInterval);
            // clearInterval(timerInterval);
        }
    }, [start])



    const change = () => {
        if (start == 'התחל') {
            let r = (Number(Rounds.Tables) + 1)
            console.log(r)
            setstart('הפסק')

            fetch('/oupdetRounds', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    r, day
                })
            }).then(r => r.json())
                .then(d => {
                    setRounds(d.deta[0])
                })
        }
        else {
            setTimer(Rounds.timeLength + ':00')
            setstart('התחל')
        }
    }


    return (
        <div className="card">
            <button onClick={change} className='retern'>{start}</button>
            <div className='texttable'>{text}</div>
            <div className='texttime'>{timee}</div>
        </div>)
}

export default Timehtml

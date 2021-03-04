import React, { useState } from 'react'
import Dom from './dom'


function Login() {
    const [movie, Setmovie] = useState([])
    const [mes, Setmes] = useState('')

    function Submitlogin(e) {
        e.preventDefault()
        const namevalue = e.target.children.name.value

        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${namevalue}&page=1&r=json`, {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "d27ad88beamsh2505efd620ca6edp10ba77jsnf02f7cbe9f7a",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.Response == "False") {
                    Setmes('סרט לא נמצא')
                    Setmovie([])
                }
                else {
                    Setmovie(data.Search)
                    Setmes('')
                }
            })

    }


    return (
        <>
            <div className='login'>
                <form onSubmit={Submitlogin}>
                    <input type="text" name='name' placeholder='הזן שם של סרט' />
                    <input type="submit" value="חיפוש" />
                </form>
                <div className='mes'>{mes}</div>
            </div>
            <Dom sert={movie} />
        </>
    )
}

export default Login

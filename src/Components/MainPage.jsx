import React from 'react'
import "../globalStyle.css"
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const MainPage = () => {
    const [searchInp, setSearchInp] = useState('');
    const [googleInfo, setGoogleInfo] = useState([])

    const [user] = useAuthState(auth)

    let result
    let resultImg
    let resultVideo

    const options = {
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': 'ee403269f7msh1741c09d48e70b4p1f049djsn6242a1f53b88',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
    };


    const search = async () => {
        const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchInp}`, options)
        const data = await response.json()

        result = data.results
        console.log(result)

        const responseImg = await fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${searchInp}`, options);
        const dataImg = await responseImg.json()


        resultImg = dataImg.image_results
        console.log(resultImg)

        const responseVideo = await fetch(`https://google-search3.p.rapidapi.com/api/v1/video/q=${searchInp}`, options);
        const dataVideo = await responseVideo.json()

        resultVideo = dataVideo.results
        console.log(resultVideo)
    }

    const searchAll = () => {
        let idx = 0

        setGoogleInfo(result.map(info => (
            <a key={idx++} href={info.link} className='googleSearchBlock'>
                <h3>{info.title}</h3 >
            </a>
        )))
    }

    const searchImg = async () => {
        let idx = 0

        setGoogleInfo(resultImg.map(info => (
            <div className='googleSearchBlockImg'>
                <img key={idx++} style={{ width: '100px', height: '100px' }} src={info.image.src} />
            </div>
        )))
    }

    const searchVideo = async () => {
        let idx = 0

        setGoogleInfo(resultVideo.map(info => (
            <div className='googleSearchBlockVideo'>
                < ReactPlayer
                    key={idx++}
                    className='react_player'
                    url={info.link}
                />
            </div>
        )))
    }

    return (
        <div className='mainBlock'>
            <div className='orange_line'></div>
            {user ? <div>
                <div className='header'>
                    
                    <div className='InputBlock'>
                        <input className='mainInput' type="text" value={searchInp} onChange={e => setSearchInp(e.target.value)} />
                        <button className='search_buttons' onClick={search}>Search</button>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <button className='search_buttons' onClick={searchAll} style={{ marginLeft: '10px' }}>
                        ALL
                    </button>
                    <button className='search_buttons' onClick={searchImg}>
                        IMAGE
                    </button>
                    <button className='search_buttons' onClick={searchVideo}>
                        VIDEO
                    </button>
                </div>
                <div className='resultBlock'>
                    {googleInfo}
                </div>
            </div> : <h1 className='logInText'>Пожалуйста войдите!</h1>}

        </div>
    )
}

export default MainPage
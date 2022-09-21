import React from 'react'
import "../globalStyle.css"
import { useState } from 'react';

const MainPage = () => {
    const [searchInp, setSearchInp] = useState('');
    const [googleInfo, setGoogleInfo] = useState([])

    let result
    let resultImg

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

        console.log(data)
        result = data.results
        console.log(result)

        const responseImg = await fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${searchInp}`, options);
        const dataImg = await responseImg.json()


        resultImg = dataImg.image_results
        console.log(resultImg)


    }

    const searchAll = () => {
        let idx = 0

        setGoogleInfo(result.map(info => (
            <div key={idx++} className='googleSearchBlock'>
                <h3>{info.title}</h3 >
            </div>
        )))
    }

    const searchImg = async () => {
        let idx = 0

        setGoogleInfo(resultImg.map(info => (
            <div  className='googleSearchBlockImg'>
                <img key={idx++} style={{width: '300px', height: '300px'}} src={info.image.src}/>
            </div>
        )))
    }


    return (
        <div className='mainBlock'>
            <div className='InputBlock'>
                <input className='mainInput' type="text" value={searchInp} onChange={e => setSearchInp(e.target.value)} />
                <button className='search_buttons' onClick={search}>Search</button>
            </div>
            <div>
                <button className='search_buttons' onClick={searchAll} style={{ marginLeft: '10px' }}>
                    ALL
                </button>
                <button className='search_buttons' onClick={searchImg}>
                    IMAGE
                </button>
                <button className='search_buttons'>
                    VIDEO
                </button>
            </div>
            <div className='resultBlock'>
                {googleInfo}
            </div>
        </div>
    )
}

export default MainPage
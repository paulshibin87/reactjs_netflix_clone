import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request'
import '../css/banner.css'

export default function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        return () => {
            async function fetchData(){
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length-1)  // >> math.floor(math.random() * request,data,results.length-1)
                    ]
                )
                return request
                
            }
            fetchData()
        }
    }, [])
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1)+ "..." : str
    }
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/yxMpoHO0CXP5o9gB7IfsciilQS4.jpg"  
                )`,
                backgroundPosition:"center center",

            }}
        > 
            <div className="banner__contents">
            {/* <<< Backgrounf Image */}
            {/* Title*/}
            {/* <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1> */}
            <h1 className="banner__title">Chilling Adventures of Sabrina</h1>
            {/* div > 2 buttons */}
            <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
            </div>
            {/* description */}
            {/* <h1 className="banner__description">{truncate(movie?.overview,150)}</h1> */}
            <h1 className="banner__description">As her 16th birthday nears, Sabrina must choose between the witch world of her family and the human world of her friends. Based on the Archie comic.</h1>
            </div>

            <div className="banner__fadeBottom" />

        </header>
    )
}

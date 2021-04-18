import axios from 'axios'
import '../css/row.css'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"
export default function Row({title,fetchURL,isLargeRow }) {
    const [movies, setMovies] = useState([]) 
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
        }
        fetchData()
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick = (movie)=>{
          console.log(movie)
          if (trailerUrl){
              setTrailerUrl("");
          } else{
            movieTrailer(movie?.name || movie?.name || movie?.original_name || "")     // it will find the you trailer with the help of the given name // from the movie-trailer package
            .then(url=>{
                // https://www.youtube.com/watch?v=xtMthYQkl
                const urlParams = new URLSearchParams(new URL(url).search)  // it will give the search url value after the ? => v=xtMthYQkl
                console.log(urlParams)
                setTrailerUrl(urlParams.get('v')) 
            }).catch(error=>console.log(error))
          }
      }
    
    return (
        <div className="row">
            {/* title */}
            <h1>{title}</h1>
            <div className="row__posters">
                {/* several row_poster */}
                {movies.map(movie => (
                <img 
                    onClick ={()=>handleClick(movie)}
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

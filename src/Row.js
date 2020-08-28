import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchURL}) {

    const [movies,setMovies] = useState([]);
    const [trailerURL,setTrailerURL] = useState('');

    const base_url = "https://image.tmdb.org/t/p/original/";
    
    //console.table(movies);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchURL]);

    const playTrailer = (movie) => {
        if(trailerURL){
            setTrailerURL('');
        } else {
            movieTrailer(movie?.name || "")
            .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            })
            .catch(err=> console.log(err));
        }
    }

    return (
        <div className="row__poster">
            <div className="row__poster__title">{title}</div>
            <div className="row__poster__img">
            {
                movies.map(movie=>(
                    movie?.poster_path && <img key={movie.id} src={base_url+movie.poster_path} alt={movie.name} onClick={()=> playTrailer(movie)}/>
                ))
            }
             </div>
             {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    )
}

export default Row;
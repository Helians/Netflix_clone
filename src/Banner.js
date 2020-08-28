import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState('');

    const trimOverview = (str,n) => {
        return str?.length > n ? str.substr(0,n-1)+"...":str;
    }

    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }
        fetchMovie();
    }, []);

    return (
        <header className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner__details">
                <div className="banner__poster__name">{movie.name}</div>
                <div className="banner__description">{trimOverview(movie.overview,150)}</div>
                <div className="banner__button__block">
                    <button className="banner__button banner__button--primary">Play</button>
                    <button className="banner__button banner__button--secondary">More Info</button>
                </div>
            </div>
            <div className="banner__overlay"></div>
            <div className="banner__backdrop"></div>
        </header>
    );
}

export default Banner;
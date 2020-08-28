import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';


function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentry Movies" fetchURL={requests.fetchDocumentaryMovies} />
      <footer className="footer">&copy; Copyright Himanshu 2020</footer>
    </div>
  );
}

export default App;

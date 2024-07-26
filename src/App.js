import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

function App() {
  const recentMovies = [
    {
      title: "Deadpool and Wolverine",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
      id: 1,
    },
    {
      title: "Twister",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jpg",
      id: 2,
    },
    {
      title: "Dune: Part 2",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
      id: 3,
    },
    {
      title: "Despicable Me 4",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg",
      id: 4,
    },
    {
      title: "Kung Fu Panda 4",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Kung_Fu_Panda_4_poster.jpg",
      id: 5,
    },
  ];

  const classicMovies = [
    {
      title: "Titanic",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      id: 1,
    },
    {
      title: "Home Alone",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
      id: 2,
    },
    {
      title: "The Matrix",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      id: 3,
    },
    {
      title: "Toy Story",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      id: 4,
    },
    {
      title: "Apollo 13",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/9/9e/Apollo_thirteen_movie.jpg",
      id: 5,
    },
  ];

  /*Comment */

  const listRecentMovies = recentMovies.map((movie) => (
    <li>
      <MovieCard movie={movie} />
    </li>
  ));

  const listClassicMovies = classicMovies.map((movie) => (
    <li>
      <MovieCard movie={movie} />
    </li>
  ));

  return (
    <div>
      <div className="header">
        <h1 className="title">Popcorn Picks</h1>
        <h2>A movie review site</h2>
      </div>
      <div className="recentMovieListContainer">
        <b className="recentMovieTitle">Recently released movies</b>
        <ul className="movieList">{listRecentMovies}</ul>
      </div>
      <div className="classicMovieListContainer">
        <b className="classicMovieTitle">Classic movies</b>
        <ul className="movieList">{listClassicMovies}</ul>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

function App() {
  const movies = [
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
  ];

  const listMovies = movies.map((movie) => (
    <li>
      <MovieCard movie={movie} />
    </li>
  ));

  return (
    <div>
      <h1>Welcome to the movie review site</h1>
      <div className="movieListContainer">
        <ul className="movieList">{listMovies}</ul>
      </div>
    </div>
  );
}

export default App;

import Buttons from "./MyButton";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="cardContainer">
      <h2>{movie.title}</h2>
      <div className="cardImageContainer">
        <img src={movie.imgSrc} className="cardImage" />
      </div>
      <Buttons />
    </div>
  );
}

export default MovieCard;

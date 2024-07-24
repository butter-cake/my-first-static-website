import Buttons from "./MyButton";

function MovieCard({ movie }) {
  return (
    <>
      <h2>{movie.title}</h2>
      <img src={movie.imgSrc} />
      <Buttons />
    </>
  );
}

export default MovieCard;

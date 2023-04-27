import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <div>{movie.Year}</div>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;

import React from "react";
import MovieCard from "./MovieCard"

function MovieCollection({ movies, updateMovie, removeForever, fetchMovies }) {
    
  const movieInfo = movies.map((movie) => (
    <MovieCard
        key={movie.id}
        movie={movie}
        updateMovie={updateMovie}
        onMovieDelete={removeForever}
        fetchMovies={fetchMovies}
        />
  ))
  return (
    <div className="ui four column grid">
        <div id="movieCard">
            {movieInfo}
        </div>
    </div>
  );
}
export default MovieCollection;
import React, { useState, useEffect } from "react";
import MovieCollection from "./MovieCollection";
import MovieForm from "./MovieForm";
import NavBar from "./NavBar";
import HeaderMain from "./Header";
import { Navigate } from "react-router-dom";


function MoviePage({ isLoggedIn, setIsLoggedIn }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data))
    }, []);

    if (!isLoggedIn) return <Navigate to="/.Login" />;

    function fetchAllMovies() {
        fetch("http://localhost:9292/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data))
        setMovies(movies)
    };

    function removeForever(e, id) {
        e.stopPropagation();
        fetch(`http://localhost:9292/movies/${id}`,{
            method: 'DELETE'
        })
        setMovies((currentMovies) =>
            currentMovies.filter((movie) => movie.id !== id)
        );
    }

    function handleUpdateMovie(updatedMovie, id) {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: 'PATCH',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(updatedMovie),
        })
    }

    function handleAddMovie(newMovie) {
        fetch('http://localhost:9292/movies', {
            method: 'POST',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(newMovie),
        })
        setMovies([...movies, newMovie]);
    }
      
    return (
        <div id="moviePage">
            <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn} />
            <HeaderMain />
            <MovieForm onAddMovie={handleAddMovie} fetchMovies={fetchAllMovies} />
            <MovieCollection
                movies={movies}
                addMovie={handleAddMovie}
                updateMovie={handleUpdateMovie}
                removeForever={removeForever}
                fetchMovies={fetchAllMovies}
            />
        </div>
    )
}

export default MoviePage
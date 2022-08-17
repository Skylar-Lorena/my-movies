import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MovieCard({ movie, updateMovie, onMovieDelete, fetchMovies }) {
    const { id, title, release_date, watched, genre_id, imageUrl } = movie;
    const [show, setShow] = useState(false);
    const [enteredTitle, setTitle] = useState(title);
    const [enteredYear, setYear] = useState(release_date);
    const [enteredImageUrl, setImageUrl] = useState(imageUrl);
    const [enteredGenreId, setGenreId] = useState(genre_id);
    const [enteredWatched, setWatched] = useState(watched);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setTitle(title)
        setYear(release_date)
        setGenreId(genre_id)
        setImageUrl(imageUrl)
        setWatched(watched)
        setShow(true)
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const yearChangeHandler = (event) => {
        setYear(event.target.value);
    }

    const imageUrlChangeHandler = (event) => {
        setImageUrl(event.target.value);
    }

    const genreIdChangeHandler = (event) => {
        console.log(event);
        setGenreId(event.target.value);
    }

    const watchedChangeHandler = (event) => {
        console.log(event);
        setWatched(event.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMovie = {
            "title": enteredTitle,
            "release_date": enteredYear,
            "watched": enteredWatched,
            "genre_id": enteredGenreId,
            "imageUrl": enteredImageUrl
        }
        updateMovie(updatedMovie, id);
        fetchMovies();
        handleClose();
    }

    return (
        <>
            <div id="movieCard">
                <div className="ui card" key={id} onClick={handleShow}>
                    <div className="logo">
                        <img className="logo" alt="movies" src={imageUrl} />
                    </div>
                    <div>
                        <span className="movieTitle">
                            {title}
                        </span>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Movie Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={enteredTitle} onChange={titleChangeHandler} placeholder={title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicYear">
                            <Form.Label>Release Year</Form.Label>
                            <Form.Control value={enteredYear} onChange={yearChangeHandler} placeholder={release_date} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control value={enteredGenreId} hidden />
                            <Form.Select value={enteredGenreId} onChange={genreIdChangeHandler}>
                                <option value="1">Comedy</option>
                                <option value="2">Action/Adventure</option>
                                <option value="3">sci-fi</option>
                                <option value="4">horror/thriller</option>
                                <option value="5">drama</option>
                                <option value="6">documentory</option>
                                <option value="7">sports</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicImageUrl">
                            <Form.Label>Movie Poster Url</Form.Label>
                            <Form.Control value={enteredImageUrl} onChange={imageUrlChangeHandler} placeholder={imageUrl} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Watched" checked={enteredWatched} onChange={watchedChangeHandler}/>
                        </Form.Group>

                        <ButtonGroup className="me-2" aria-label="Submit Button">
                            <Button variant="outline-primary" type="submit">
                                Submit
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup className="me-2" aria-label="Delete Button">
                            <Button variant="outline-danger" onClick={(e) => onMovieDelete(e, id)}>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MovieCard;
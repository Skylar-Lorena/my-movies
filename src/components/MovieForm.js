import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MovieForm({onAddMovie}) {
    const [show, setShow] = useState(false);
    const [enteredTitle, setTitle] = useState('');
    const [enteredYear, setYear] = useState('');
    const [enteredImageUrl, setImageUrl] = useState('');
    const [enteredGenreId, setGenreId] = useState(0);
    const [enteredWatched, setWatched] = useState(false);

    const handleClose = () => {
        setTitle('')
        setGenreId(0)
        setYear('')
        setImageUrl('')
        setWatched(false);
        setShow(false)
    };
    const handleShow = () => setShow(true);

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
        const newMovie = {
            "title": enteredTitle,
            "release_date": enteredYear,
            "watched": enteredWatched,
            "genre_id": enteredGenreId,
            "imageUrl": enteredImageUrl
        }
        onAddMovie(newMovie);
        handleClose();
    }

    return (
        <>
        <Button id="newmovie" variant="dark" onClick={handleShow}>
            Add Movie
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={enteredTitle} onChange={titleChangeHandler} placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicYear">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control value={enteredYear} onChange={yearChangeHandler} placeholder="Year" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control value={enteredGenreId} hidden />
                        <Form.Select value={enteredGenreId} onChange={genreIdChangeHandler}>
                            <option value="0">Select a genre</option>
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
                        <Form.Control value={enteredImageUrl} onChange={imageUrlChangeHandler} placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Watched" checked={enteredWatched} onChange={watchedChangeHandler}/>
                    </Form.Group>

                    <ButtonGroup className="me-2" aria-label="Submit Button">
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </ButtonGroup>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default MovieForm
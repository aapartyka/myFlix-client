import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss"

import { CardGroup, Container, Button, Card } from "react-bootstrap";

import { Link } from 'react-router-dom'

export class MovieCard extends React.Component {
    render () {
        const { movie } = this.props;

        //Getting the movie description.
        let movieDescription = movie.Description;
        //Shortening the movie description for better styling and only showing the full description in the movie-view.
        let shortMovieDescription = movieDescription.substring(0,250);
        
        return (
            <Container>
                <CardGroup>
                    <Card id="movie-card">
                        <Card.Img variant="top" src={movie.ImagePath} />
                        <Card.Body>
                            <Card.Title id="card-title">{movie.Title}</Card.Title>
                            <Card.Text id="card-text">{shortMovieDescription}</Card.Text>
                            <Link to={`/movies/${movie._id}`}>
                                <Button id="card-button" variant="link">Read more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        )
    };
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
    }).isRequired
};
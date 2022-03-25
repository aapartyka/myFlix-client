import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './movie-card.scss';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render(){
    const { movie } = this.props;

    return(
      <Card id="movie-card">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title id="card-title">{movie.Title}</Card.Title>
          <Card.Text id="card-text">{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant='link'>Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
          Name: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired,
      }).isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
          Bio: PropTypes.string.isRequired,
          Birth: PropTypes.string.isRequired,
      }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
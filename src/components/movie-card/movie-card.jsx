import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
  render(){
    const { movie, onMovieClick } = this.props;

    return(
      <Card id="movie-card">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title id="card-title">{movie.Title}</Card.Title>
          <Card.Text id="card-text">{movie.Description}</Card.Text>
          <Button id="card-button" onClick={() => onMovieClick(movie)} variant="link">Show more</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
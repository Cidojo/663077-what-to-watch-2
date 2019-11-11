import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from '../movie-card-thumbnail/movie-card-thumbnail.jsx';

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
  }

  handleCardMouseOver(activeCard) {
    this.setState({
      activeCard
    });
  }

  render() {
    const {movieCards, onCurrentVideoIDChange} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movieCards.map((card) => {
            return (
              <MovieCardThumbnail
                key={`${card.id}`}
                card={card}
                onThumbnailMouseOver={this.handleCardMouseOver}
                onThumbnailClick={onCurrentVideoIDChange}
              />
            );
          })
        }
      </div>
    );
  }
}

Catalog.propTypes = {
  movieCards: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    imgSrc: PropTypes.string,
    posterSrc: PropTypes.string,
    imgDescription: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.shape({
      score: PropTypes.string,
      level: PropTypes.string,
      count: PropTypes.number
    })
  })),
  onCurrentVideoIDChange: PropTypes.func.isRequired
};

export {Catalog};

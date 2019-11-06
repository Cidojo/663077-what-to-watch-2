import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from '../movie-card-thumbnail/movie-card-thumbnail.jsx';

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onCardMouseOver = this.onCardMouseOver.bind(this);
  }

  onCardMouseOver(activeCard) {
    this.setState(() => {
      return ({
        activeCard
      });
    });
  }

  render() {
    const {movieCards, cardsPerPage, onCurrentVideoIDChange} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movieCards.slice(0, cardsPerPage).map((card, i) => {
            return (
              <MovieCardThumbnail
                key={`${card.id}_${i}`}
                card={card}
                onThumbnailMouseOver={this.onCardMouseOver}
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
    ])
  })),
  cardsPerPage: PropTypes.number,
  onCurrentVideoIDChange: PropTypes.func.isRequired
};

export {Catalog};

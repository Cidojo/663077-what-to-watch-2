import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from './../movie-card-thumbnail/movie-card-thumbnail.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
  }

  handleCardMouseEnter(activeCard) {
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
                onThumbnailMouseEnter={this.handleCardMouseEnter}
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
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  onCurrentVideoIDChange: PropTypes.func
};

export {Catalog};

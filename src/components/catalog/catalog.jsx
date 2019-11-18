import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from './../movie-card-thumbnail/movie-card-thumbnail.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const ON_THUMBNAIL_MOUSE_ENTER_DELAY = 1000;

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.timerId = null;

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  _handleCardMouseEnter(activeCard) {
    this.timerId = setTimeout(() => this.setState({
      activeCard
    }), ON_THUMBNAIL_MOUSE_ENTER_DELAY);
  }

  _handleCardMouseLeave() {
    clearTimeout(this.timerId);

    this.setState({
      activeCard: null
    });
  }

  render() {
    const {
      movieCards,
      onCurrentVideoIDChange,
      maxCatalogCards
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movieCards
            .slice(0, maxCatalogCards).map((card) => {
              return (
                <MovieCardThumbnail
                  key={`${card.id}`}
                  card={card}
                  isPlaying={this.state.activeCard === card}
                  onThumbnailMouseEnter={this._handleCardMouseEnter}
                  onThumbnailMouseLeave={this._handleCardMouseLeave}
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
  maxCatalogCards: PropTypes.number.isRequired,
  onCurrentVideoIDChange: PropTypes.func
};

export {Catalog};

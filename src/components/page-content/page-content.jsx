import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreList} from './../genre-list/genre-list.jsx';
import {Footer} from './../footer/footer.jsx';
import {Catalog} from './../catalog/catalog.jsx';
import {ShowMoreButton} from './../show-more-button/show-more-button.jsx';
import {movieCardPropTypes} from './../../global-custom-types.js';

const SHOW_MORE_CARDS_STEP = 20;

class PageContent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      maxCatalogCards: props.maxCatalogCards
    };

    this.onGenreTabClick = this.props.onGenreTabClick;
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleGenreTabChange = this._handleGenreTabChange.bind(this);
  }

  _handleShowMoreButtonClick() {
    this.setState((prevState) => ({
      maxCatalogCards: prevState.maxCatalogCards + SHOW_MORE_CARDS_STEP
    }));
  }

  _handleGenreTabChange(genre) {
    this.setState({
      maxCatalogCards: this.props.maxCatalogCards
    });

    this.onGenreTabClick(genre);
  }

  render() {
    const {
      genres,
      genre,
      movieCards,
      onCurrentVideoIDChange,
      maxGenresToDisplay
    } = this.props;

    const filteredCards = movieCards
      .filter((card) => {
        return card.genre === genre || genre === `All genres`;
      });

    return (
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList
            currentGenre={genre}
            genres={genres}
            maxGenresToDisplay={maxGenresToDisplay}
            onGenreTabClick={this._handleGenreTabChange}
          />
          <Catalog
            genre={genre}
            maxCatalogCards={this.state.maxCatalogCards}
            movieCards={filteredCards}
            onCurrentVideoIDChange={onCurrentVideoIDChange}
          />
          {filteredCards.length > this.state.maxCatalogCards ?
            <ShowMoreButton
              onButtonClick={this._handleShowMoreButtonClick}
            />
            : undefined
          }
        </section>
        <Footer/>
      </div>
    );
  }
}

PageContent.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  onGenreTabClick: PropTypes.func.isRequired,
  maxGenresToDisplay: PropTypes.number,
  maxCatalogCards: PropTypes.number,
  onCurrentVideoIDChange: PropTypes.func.isRequired,
};

export {PageContent};

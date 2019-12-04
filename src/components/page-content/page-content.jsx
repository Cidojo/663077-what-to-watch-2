import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreList} from './../genre-list/genre-list.jsx';
import {Footer} from './../footer/footer.jsx';
import {Catalog} from './../catalog/catalog.jsx';
import {ShowMoreButton} from './../show-more-button/show-more-button.jsx';
import {movieCardPropTypes} from './../../global-custom-types.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const SHOW_MORE_CARDS_STEP = 20;
const GenreListWrapped = withActiveItem(GenreList);

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
      maxGenresToDisplay
    } = this.props;

    const filteredCards = movieCards
      .filter((card) => {
        return card.genre === genre || genre === null || genre === genres.all;
      });

    return (
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreListWrapped
            genres={genres}
            maxGenresToDisplay={maxGenresToDisplay}
            onActiveChange={this._handleGenreTabChange}
          />
          <Catalog
            maxCatalogCards={this.state.maxCatalogCards}
            movieCards={filteredCards}
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
  genres: PropTypes.shape({
    all: PropTypes.string,
    rest: PropTypes.arrayOf(PropTypes.string)
  }),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  onGenreTabClick: PropTypes.func.isRequired,
  maxGenresToDisplay: PropTypes.number,
  maxCatalogCards: PropTypes.number,
};

export {PageContent};

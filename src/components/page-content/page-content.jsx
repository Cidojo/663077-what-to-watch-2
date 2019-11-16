import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreList} from '../genre-list/genre-list.jsx';
import {Footer} from '../footer/footer.jsx';
import {Catalog} from './../catalog/catalog.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MAX_CATALOG_CARDS = 20;

const PageContent = (props) => {
  const {genres, movieCards, onCurrentVideoIDChange} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList genresDictionary={genres} />
        <Catalog
          max={MAX_CATALOG_CARDS}
          movieCards={movieCards}
          onCurrentVideoIDChange={onCurrentVideoIDChange}
        />
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  }),
  onCurrentVideoIDChange: PropTypes.func
};

export {PageContent};

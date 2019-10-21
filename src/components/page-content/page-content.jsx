import * as React from 'react';
import * as PropTypes from 'prop-types';
import {genresPropTypes, movieCardsPropTypes} from './../../global-custom-types.js';
import {GenreList} from '../genre-list/genre-list.jsx';
import {Footer} from '../footer/footer.jsx';
import {Catalog} from './../catalog/catalog.jsx';

const PageContent = (props) => {
  const {genres, movieCards, cardsPerPage, handleCurrentVideoIDChange} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList genresDictionary={genres} />
        <Catalog
          movieCards={movieCards}
          cardsPerPage={cardsPerPage}
          handleCurrentVideoIDChange={handleCurrentVideoIDChange}
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
  movieCards: movieCardsPropTypes,
  genres: genresPropTypes,
  cardsPerPage: PropTypes.number,
  handleCurrentVideoIDChange: PropTypes.func
};

export {PageContent};

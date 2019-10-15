import * as React from 'react';
import {genresPropTypes, movieCardsPropTypes, cardsPerPagePropTypes} from "./../../global-custom-types.jsx";
import {GenreList} from "../genre-list/genre-list.jsx";
import {Footer} from "../footer/footer.jsx";
import {Catalog} from './../catalog/catalog.jsx';

const PageContent = (props) => {
  const {genres, movieCards, cardsPerPage} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList genresDictionary={genres} />
        <Catalog movieCards={movieCards} cardsPerPage={cardsPerPage} />
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
  cardsPerPage: cardsPerPagePropTypes
};

export {PageContent};

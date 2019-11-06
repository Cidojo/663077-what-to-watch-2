import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreList} from '../genre-list/genre-list.jsx';
import {Footer} from '../footer/footer.jsx';
import {Catalog} from './../catalog/catalog.jsx';

const PageContent = (props) => {
  const {genres, movieCards, cardsPerPage, onCurrentVideoIDChange} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList genresDictionary={genres} />
        <Catalog
          movieCards={movieCards}
          cardsPerPage={cardsPerPage}
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
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  }),
  cardsPerPage: PropTypes.number,
  onCurrentVideoIDChange: PropTypes.func.isRequired
};

export {PageContent};

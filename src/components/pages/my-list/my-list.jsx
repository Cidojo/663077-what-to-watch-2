import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Header} from './../../parts/header/header.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import {Catalog} from './../../parts/catalog/catalog.jsx';
import withAuthAccess from './../../../hocs/with-auth-access/with-auth-access.jsx';
import Selectors from './../../../selectors/selectors.js';
import withActiveItem from './../../../hocs/with-active-item/with-active-item.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const CatalogWrapped = withActiveItem(Catalog);

const MyList = (props) => {
  const {favoriteCards} = props;

  return (
    <div className="user-page">
      <Header
        extraClassName="user-page__head"
        title="My list"
        isWithUserBlock={true}
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogWrapped
          movieCards={favoriteCards}
        />
      </section>
      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  favoriteCards: PropTypes.arrayOf(movieCardPropTypes).isRequired,
};

MyList.defaultProps = {
  favoriteCards: [],
};

const mapStateToProps = (state) => ({
  favoriteCards: Selectors.getFavoriteCards(state),
});

export {MyList};

export default connect(mapStateToProps)(withAuthAccess(MyList));

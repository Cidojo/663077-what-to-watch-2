import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store.js';
import App from './components/app/app.jsx';
import {MovieOperation} from './reducers/movies-reducer/movies-reducer.js';
import {ActiveCardOperation} from './reducers/active-card-reducer/active-card-reducer.js';

const init = () => {
  store.dispatch(MovieOperation.loadMovies());
  store.dispatch(ActiveCardOperation.loadPromoMovie());

  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();

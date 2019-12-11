import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store.js';
import {App} from './components/app/app.jsx';
import {MoviesOperation} from './reducers/movies-reducer/movies-reducer.js';
import {AuthActionCreator} from './reducers/auth-reducer/auth-reducer.js';
import {cacheUserDataState, restoreUserDataState} from './store/session-storage.js';

const init = () => {
  store.dispatch(MoviesOperation.loadMovies());
  store.dispatch(MoviesOperation.loadPromoMovie());

  const cachedUserData = restoreUserDataState();
  if (cachedUserData) {
    store.dispatch(AuthActionCreator.assignUser(cachedUserData));
  }

  store.subscribe(() => {
    cacheUserDataState(store);
  });

  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();

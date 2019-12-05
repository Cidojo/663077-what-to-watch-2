import * as React from 'react';
import * as ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer, Operation} from './reducer';
import {compose} from 'recompose';
import App from './components/app/app.jsx';
import createAPI from './api.js';

const init = () => {
  const composeEnhancers = (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          composeEnhancers && composeEnhancers()
      )
  );

  store.dispatch(Operation.loadMovies());
  store.dispatch(Operation.loadPromoMovie());

  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();

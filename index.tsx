import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSagas } from './stores';
import App from './layouts/App';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSagas);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root'),
);

import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers';
import { getProducts } from './actions/product.action';



export const store = configureStore ({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(getProducts());

const root = document.getElementById('root');
const appRoot = createRoot(root);
appRoot.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


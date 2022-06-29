import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IconContext } from "react-icons";


import './index.css';
import { ModalProvider } from './context/Modal';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "react-icons" }}>
      <ModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ModalProvider>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

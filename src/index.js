import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
// import settings from '../mocks/game-settings';
import questions from './mocks/questions';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

const gameSettings = {
  gameTime: 5,
  errorCount: 3,
}

const init = (gameQuestions) => {
  // const {
  //   gameTime,
  //   errorCount
  // } = gameSettings

  ReactDOM.render(<Provider store={store}>
    <App settings={gameSettings}
      questions={gameQuestions}
    />
  </Provider>,
    document.querySelector(`.main`)
  );
};

init(questions);
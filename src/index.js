import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/app/app.jsx";
import questions from "./mocks/questions";
import { reducer } from "./reducer";

const gameSettings = {
    gameTime: 5,
    // errorCount: 3,
    // currentLevel: -1,  
};


console.log('Страница Index');


const store = createStore(reducer);

console.log(store);

const init = (gameQuestions) => {
    // const { errorCount, gameTime } = gameSettings;

    ReactDOM.render(< Provider store={store} >

        < App settings={gameSettings}
            questions={gameQuestions}
        />
    </Provider>,
        document.querySelector(`.main`)
    );
};

init(questions);
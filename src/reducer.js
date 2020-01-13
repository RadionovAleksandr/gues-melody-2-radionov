const initialState = {
    step: -1,
    mistakes: 0
};

const ActionCreators = {

    "increment_step": (question, userAnswer) => {
        let isAnswerCorrect = false;
        console.log(`question`)
        console.log(question)
        if (!!question) {
            switch (question.type) {
                case `genre`:
                    isAnswerCorrect = false; // дописать логку проверки ответа
                    break;
                case `artist`:
                    isAnswerCorrect = userAnswer.artist === question.song.artist;
                    break;
            };
        } else {
            isAnswerCorrect = true;
        }

        return {
            type: `increment_step`,
            payload: 1, // isAnswerCorrect ? 1 : 0
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `increment_step`:
            return Object.assign({}, state, {
                step: state.step + action.payload
            })
            break;
    }
    return state;
};

export { ActionCreators, reducer };
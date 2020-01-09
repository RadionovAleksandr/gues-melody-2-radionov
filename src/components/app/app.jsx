import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Welcome from '../welcome-screen/welcome-screen.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';
import { ActionCreators } from '../../reducer';

import withActivePlayer  from '../../hocs/with-active-player/with-active-player';
import  withUserAnswer  from '../../hocs/with-user-answer/with-user-answer';
import { withTransformProps } from '../../hocs/with-transform-props/with-transform-props';

// const transformPlayerToAnswer = (props) => {
//     const newProps = object.assign({}, props, {
//         renderAnswer: props.renderPlayer
//     });
//     delete newProps.renderPlayer;
//     return newProps;
// };

// const GameGenreWrapped = withUserAnswer(withActivePlayer(withTransformProps((props) => {
//     return Object.assign({}, props, {
//         renderAnswer: props.renderPlayer
//     })
// })(GameGenre)))

const GameGenreWrapped = withUserAnswer(withActivePlayer((GameGenre)))

class App extends PureComponent {
    constructor(props) {
        super(props);
    };

    _getScreen(question, onUserAnswer) {
        console.log(`question`);
        console.log(question);

        const {
            gameTime,
            errorCount
        } = this.props.settings;


        if (!question) {
            return <Welcome
                gameTime={gameTime}
                errorCount={errorCount}
                onStartButtonClick={onUserAnswer}
            />;

        }
        //  const currentQuestion = questions[question];

        switch (question.type) {
            case `genre`: return <GameGenreWrapped
                gameTime={gameTime}
                question={question}
                onAnswer={onUserAnswer}
            />;

            case `artist`:
                return <GameArtist
                    gameTime={gameTime}
                    question={question}
                    onAnswer={onUserAnswer}
                />;
        }

        return null;
    }

    render() {
        // console.log('Страница App');
        // console.log(`this.props.settings`)
        // console.log(this.props.settings.gameTime)


        const {
            gameTime,
            errorCount,
        } = this.props.settings;

        // const gameTime = this.props.settings.gameTime;
        // const errorCount = this.props.settings.errorCount;

        const { question } = this.state //.props.settings.questions //.questions[this.state.currentLevel];
        const questions = this.props.questions
        // console.log(`this.props`)
        // console.log(this.props)

        // console.log(`this.props.questions`)
        // console.log(this.props.questions)

        // console.log(`this.state`);
        // console.log(this.state);

        return <section className="game game--genre">
            <header className="game__header">
                <a className="game__back" href="#">
                    <span className="visually-hidden">Сыграть ещё раз</span>
                    <img className="game__logo" src="img/melody-logo-ginger.png"
                        alt="Угадай мелодию" />
                </a>

                <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
                    <span className="timer__mins">0{gameTime}</span>
                    <span className="timer__dots">:</span>
                    <span className="timer__secs">00</span>
                </div>

                <div className="game__mistakes">
                    {new Array(this.state.mistakes).map((it, i) => {
                        <div className="wrong" />
                    })}
                </div>
            </header>

            {this._getScreen(questions[step], (userAnswer) => {
                this.props.onUserAnswer(questions[step].type, userAnswer);
            }
            )}

        </section>
    }
}

App.propTypes = {
    //   settings: PropTypes.exact({
    //     gameTime: PropTypes.number.isRequired,
    //     errorCount: PropTypes.number.isRequired,
    //     currentLevel: PropTypes.number.isRequired,
    //   }).isRequired,
    // step: PropTypes.number.isRequired,
    // mistakes: PropTypes.number.isRequired,
    //   questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

console.log(' ownProps ')
console.log( ownProps )

const mapStateToProps = (state, ownProps) => object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
    onUserAnswer: (question, userAnswer, mistakes, maxMistakes) => {
        dispatch(ActionCreators.incrementStep());
        dispatch(ActionCreators.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
    }
});

export { App };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
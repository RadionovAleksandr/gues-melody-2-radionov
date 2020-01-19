import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome-screen/welcome-screen.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';
import initialState from '../../reducer.js';
import {ActionCreators} from '../../reducer.js';
import { connect } from "react-redux";


class App extends PureComponent {

    constructor(props) {
        super(props);

        // const { gameTime, errorCount } = this.props.settings;

        // this.state = {
        //     question: -1,
        //     mistakes: 0
        //     // gameTime,
        //     // errorCount,
        //     // props
        // };
        // this.state = initialState
    }

    getScreen(question, onClick, onStartGame) {
        console.log(`question getScreen`)
        console.log(question)
        // const { questions } = state.questions;
        const { gameTime, errorCount } = this.props;
        // const { currentLevel } = state.settings


        if (!question) {
            return <Welcome
                gameTime={gameTime}
                errorCount={errorCount}
                onClick={onClick}
            />;
        }

        switch (question.type) {
            case `genre`:
                return <GameGenre
                    question={question}
                    errorCount={errorCount}
                    onAnswer={onClick}
                />;

            case `artist`:
                return <GameArtist
                    question={question}
                    errorCount={errorCount}
                    onAnswer={onClick}
                />;
        }
    }

    render() {
        // const {
        //     miastakes,
        //     gameTime
        // } = this.state

        const {questions, step} = this.props;

        // const { question } = this.state;
        console.log(`ActionCreators`)
        console.log(ActionCreators)
        console.log(this.state);
        console.log(`this.props.`);
        console.log(this.props);

        return <section>
            <header className="game__header">
                <a className="game__back" href="#">
                    <span className="visually-hidden">Сыграть ещё раз</span>
                    <img className="game__logo" src="img/melody-logo-ginger.png"
                        alt="Угадай мелодию" />
                </a>

                <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
                    <span className="timer__mins">05</span>
                    <span className="timer__dots">:</span>
                    <span className="timer__secs">00</span>
                </div>

                <div className="game__mistakes">
                    {new Array(3).fill(<div className="wrong" />)}
                </div>
            </header>

            {this.getScreen(questions[step], (userAnswer) => {

                // let isAnswerCorrect = false;

                // switch (questions[question]) {
                //     case `genre`:
                //         isAnswerCorrect = false;
                //         break
                //     case `artist`:
                //         isAnswerCorrect = userAnswer.artist === questions[step].song.artist;
                //         break;
                // }

                // if (isAnswerCorrect) {
                // this.setState({
                //     question: question + 1 >= questions.length
                //         ? 0
                //         : question + 1
                // })
                console.log(`questions[step]`)
                console.log(questions)
                console.log(step)
                console.log(questions[step])

                this.props.onUserAnswer(questions[step], userAnswer);
                // } else {
                // this.setState({
                //     mistakes: this.state.mistakes + 1
                // })
            }
                // }
            )};
        </section>
    }


}

// App.propTypes = {
//   settings: PropTypes.exact({
//     gameTime: PropTypes.number.isRequired,
//     errorCount: PropTypes.number.isRequired,
//     currentLevel: PropTypes.number.isRequired,
//   }).isRequired,
//   questions: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
        step: state.step,
        miastakes: state.mistakes,
    });


const mapDispatchToProps = (dispatch) => ({
    
    onUserAnswer: (question, userAnswer) => dispatch(ActionCreators["increment_step"](question, userAnswer)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
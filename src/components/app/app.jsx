import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome-screen/welcome-screen.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';


class App extends PureComponent {

   
    constructor(props) {
        super(props);

        const { gameTime, errorCount } = this.props.settings;

        this.state = {
            question: -1,
            gameTime,
            errorCount,
            // props
        };
    }

    getScreen(question, onClick) {
        // const { questions } = state.questions;
        const { gameTime, errorCount} = this.props;
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
        const {
            errorCount,
            gameTime
        } = this.state

        const questions = this.props.questions;

        const {question} = this.state;
        console.log(this.state);
        console.log(`errorCount`);
        console.log(errorCount);

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
                    {new Array(errorCount).fill( <div className="wrong" />)}
                </div>
            </header>

            {this.getScreen(questions[question], () => {
                this.setState({
                    question: question + 1 >= questions.length
                    ? 0
                    : question + 1
                })
            }
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

export default App;
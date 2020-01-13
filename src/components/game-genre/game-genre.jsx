import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GameGenre extends React.PureComponent {

    constructor(props) {
        super(props);


        this.state = {
            activePlayer: -1,
            userAnswer: new Array(this.props.question.answers.length).fill(false),
        };
    }

    render() {
 
        const { question, onAnswer } = this.props;
        const { answers, genre } = question;

        console.log('onAnswer');
        console.log(onAnswer);

        return <section className="game game--genre">

            <section className="game__screen">
                <h2 className="game__title">Выберите {question.answers.genre} треки</h2>
                <form className="game__tracks" onSubmit={(evt) => {
                    evt.preventDefault();
                    onAnswer(this.state.userAnswer);
                }}>

                    {answers.map((it, i) => (
                        <div key={`answer-${i}`} className="track">
                            <AudioPlayer
                                sec={it.src}
                                isPlaing={i === this.state.activePlayer}
                                onPlayButtonClick={() => {
                                    this.setState({
                                        activePlayer: this.state.activePlayer === i ? -1 : i
                                    })
                                }}
                            />
                            <div className="game__answer">
                                <input
                                    className="game__input visually-hidden"
                                    type="checkbox"
                                    name="answer"
                                    value={`answer-${i}`}
                                    id={`answer-${i}`}
                                    onChange={() => {
                                        const userAnswer = this.state.userAnswer.slice(0);
                                        userAnswer[i] = !userAnswer[i];
                                        
                                        this.setState({
                                            userAnswer,
                                        })
                                    }}
                                />
                                <label className="game__check" htmlFor={`answer-${i}`}>
                                    Отметить
                                </label>
                            </div>
                        </div>

                    ))}

                    <button className="game__submit button" type="submit">Ответить
            </button>
                </form>
            </section>
        </section>
    }
}

GameGenre.propTypes = {
    question: PropTypes.exact({
        type: PropTypes.oneOf([`genre`, `artist`]),
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.exact({
                src: PropTypes.string,
                genre: PropTypes.string,
            })
        ),
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default GameGenre;
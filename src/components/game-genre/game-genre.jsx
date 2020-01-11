import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GameGenre extends React.PureComponent {

    constructor(props) {
        super(props);


        this.state = {
            activePlayer: -1
        };
    }

    render() {
        const { question, onAnswer } = this.props;
        const { answers, genre } = question;

        return <section className="game game--genre">

            <section className="game__screen">
                <h2 className="game__title">Выберите {question.answers.genre} треки</h2>
                <form className="game__tracks" onSubmit={(evt) => {
                    evt.preventDefault();
                    onAnswer();
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
                        </div>
                    ))}

                    <button className="game__submit button" type="submit">Ответить
            </button>
                </form>
            </section>
        </section>
    }

} ({ question, onAnswer }) => {
    const answers = question.answers;
};

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
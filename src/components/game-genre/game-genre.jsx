import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

console.log(`Screen GameGenre`)

class GameGenre extends React.PureComponent {

    render() {
        console.log(`props GameGenre`);
        console.log(this.props);

        // console.log(`answers`);
        // console.log(answers);

        const { genre, answers } = this.props.question;
        const { question, onAnswer, onChange, renderAnswer, userAnswer } = this.props;

        return <section className="game__screen">

            <h2 className="game__title">Выберите {genre} треки</h2>
            <form className="game__tracks" onSubmit={(evt) => {
                evt.preventDefault();
                onAnswer();
            }}>
                {answers.map((it, i) => <div key={`answer-${i}`} className="track">
                    {renderAnswer(it, i)}
                    <div className="game__answer">
                        <input
                            checked={userAnswer[i]}
                            className="game__input visually-hidden"
                            type="checkbox"
                            name="answer"
                            value={`answer-${i}`}
                            id={`answer-${i}`}
                            onChange={() => { onChange(i) }}
                        />
                        <label className="game__check"
                            htmlFor={`answer-${i}`}>Отметить</label>
                    </div>
                </div>)}
                <button className="game__submit button" type="submit">Ответить</button>
            </form>
        </section>

    };
};

// GameGenre.propTypes = {
//     question: PropTypes.exact({
//         type: PropTypes.oneOf([`genre`, `artist`]),
//         genre: PropTypes.string,
//         answers: PropTypes.arrayOf(
//             PropTypes.exact({
//                 src: PropTypes.string,
//                 genre: PropTypes.string,
//             })
//         ),
//     }).isRequired,
//     onAnswer: PropTypes.func.isRequired,
// };

export default GameGenre;


const onClick = (action) => {
    action.preventDefault;
    action.preventDefault;

}

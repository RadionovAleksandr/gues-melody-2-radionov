import React, { PureComponent, Component } from 'react';

const withUserAnswer = (Component) => {
    console.log(`START withUserAnswer`)
    class WithUserAnswer extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                activePlayer: -1,
            }
        };

        render() {
            console.log(`FINISH withUserAnswer`)
            const { onAnswer } = this.props;
            return <Component {...this.props }
            renderPlayer = {

                (it, i) => {
                    return <AudioPlayer
                    src = { it.src }
                    isPlaying = { i === this.state.activePlayer }
                    onPlayButtonClick = {
                        () => {
                            this.setState({
                                activePlayer: activePlayer === i ? -1 : i
                            })
                        }
                    }
                    />
                }
            }
            userAnswer = { this.state.userAnswer }

            onChange = {
                () => {
                    const userAnswer = this.state.userAnswer.slice(0);
                    userAnswer[i] = !userAnswer[i];
                    this.setState({ userAnswer });
                }
            }
            onAnswer = {
                () => onAnswer(this.state.userAnswer)
            }
            />
        }
    }
}

export default withUserAnswer;
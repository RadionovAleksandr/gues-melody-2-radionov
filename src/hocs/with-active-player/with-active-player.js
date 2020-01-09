import React, { PureComponent } from 'react';
import audioPlayer from '../../components/audio-player/audio-player.jsx';


const AudioPlayerWrapped = audioPlayer

const withActivePlayer = (Component) => {
    console.log(`START withActivePlayer`)
    class WithActivePlayer extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                activePlayer: -1,
            }
        };

        render() {
            const { activePlayer } = this.state;
            return <Component {...this.props }
            renderPlayer = {
                (it, i) => {
                    return <AudioPlayerWrapped
                    activePlayer = { activePlayer }
                    onPlayButtonClick = {
                        () => this.setState({
                            activePlayer: activePlayer === i ? -1 : i
                        })
                    }
                    />;
                }
            }
            />;
        };
    }
    console.log(`FINISH withActivePlayer`)
    return WithActivePlayer;
}

export default withActivePlayer; // проверить
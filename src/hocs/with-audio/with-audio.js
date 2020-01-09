import React, { PureComponent, createRef, Component } from 'react';
import { render } from 'react-dom';

const withAudio = (Component) => {
    class withAudio extends PureComponent {
        constructor(props) {
            super(props);

            this._audioRef = createRef();

            this.state = {
                progress: 0,
                isLoading: true,
                isPlaing: props.isPlayng,
            };

            this._onPlayButtonClick = this.__onPlayButtonClick.bind(this);
        };

        render() {
            const { isLoading, isPlaying } = this.state;

            return (
                <Component
                    {...this.props}
                    isLoading={isLoading}
                    isPlaying={isPlaying}
                    renderAudio={() => <audio
                        ref={this._audioRef}
                    />}
                    onPlayButtonClick={this._onPlayButtonClick()}
                />
            );
        };

        componentDidMount() {
            const { src } = this.props;
            const audio = this._audioRef.current;

            //     this._audio = new Audio(this.props.src);

            //     this._audio.onCanPlayThrough = () => this.setState({
            //         isLoading: false,
            //     });


            //     this._audio.onPlay = () => this.setState({
            //         isPlaying: true,
            //     });

            //     this._audio.onPause = () => this.setState({
            //         isPlaying: false,
            //     });

            //     this._audio.onTimeUpdate = () => this.setState({
            //         progress: this._audio.currentTime
            //     });
            // }
            // componentWillMount() {
            //     this._audio.onCanPlayThrough = null;
            //     this._audio.onPlay = null;
            //     this._audio.onPause = null;
            //     this._audio.onTimeUpdate = null;
            //     this._audio.src = ``;
            //     this._audio = null;
            // }

            // componentDidUpdate() {
            //     if (this.state.isPlaying) {
            //         this.audio.onPlay();
            //     } else {
            //         this.audio.onPause();
            //     }
            // };

        }
    }
}
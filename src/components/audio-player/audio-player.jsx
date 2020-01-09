import React from 'react';

class AudioPlayer extends React.PureComponent {
    constructor(props) {
        super(props);

        this._audio = new Audio(this.props.src);
        const { isPlaying, src } = props;
        
        this.state = {
            progress: 0,
            isLoading: true,
            isPlaying: false,
        };

        this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    }


    render() {
        console.log(` AudioPlayer state`)
        console.log(this.state)
        // const { isloading } = this.state.isloading;
        const { isPlaying } = this.state.isPlaying;

        return (
            <React.Fragment>
                <button
                    className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
                    type="button"
                    disabled={isloading}
                    onClick={this._onplayButtonClick}
                />
                <div className="track__status">
                    <audio />
                </div>
            </React.Fragment>
        );
    };
}

export default AudioPlayer;



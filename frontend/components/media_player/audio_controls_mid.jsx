import React from 'react';
import * as PlayerComponentUtil from '../../util/player_component_util'

export default class AudioControlsMid extends React.Component {
    constructor(props) {
        super(props);

        const player = document.getElementById('audio-player');
        
        if (!player) {
            this.state = {
                duration: 0,
                currentTime: 0,
                paused: true
            }
        } else {
            this.player = player;
            let { duration, currentTime, paused } = this.player;
            this.state = {
                duration,
                currentTime,
                paused
            }
        }

        this.active = true;
    } 


    
    renderTime(seconds) {
        return PlayerComponentUtil.formatTime(seconds);
    }

    getProgress() {
        let { duration, currentTime } = this.state;
        if (duration === 0) return 0;
        if (currentTime > duration) return 100;
        return 100 * (currentTime / duration);
    }

    render() {
        let { duration, currentTime, paused } = this.state;
        let progress = this.getProgress().toString();
        let playPauseIcon = paused ? 'play_circle_outline' : 'pause_circle_outline'

        return (
            <div className='ac-mid'>
                <div className='audio-controls'>
                    <button>
                        <i className="material-icons">
                            shuffle
                        </i>
                    </button>
                    <button>
                        <i className="material-icons">
                            skip_previous
                        </i>
                    </button>
                    <button className='play-pause'>
                        <i className="material-icons">
                            {playPauseIcon}
                        </i>
                    </button>
                    <button>
                        <i className="material-icons">
                            skip_next
                        </i>
                    </button>
                    <button>
                        <i className="material-icons">
                            loop
                        </i>
                    </button>
                </div>
                <div className='progress-container'>
                    <span>{PlayerComponentUtil.formatTime(currentTime)}</span>
                    <div className='progress-bar'>
                        <span className='player-position'></span>
                        <progress max='100' value='30'></progress>
                    </div>
                    <span>{PlayerComponentUtil.formatTime(duration)}</span>

                </div>
            </div>
        )
    }
}